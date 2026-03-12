#!/bin/bash
# ==============================================================
# Deploy script for zuply.fr — static Next.js site
# This script ONLY touches /var/www/zuply-fr and its own nginx config.
# It does NOT modify any other site, app, .env, or VPS config.
# ==============================================================

set -e

DOMAIN="zuply.fr"
SITE_DIR="/var/www/zuply-fr"
NGINX_CONF="/etc/nginx/sites-available/zuply-fr"
NGINX_ENABLED="/etc/nginx/sites-enabled/zuply-fr"

echo "============================================"
echo "  Deploying $DOMAIN"
echo "============================================"
echo ""

# ----------------------------------------------------------
# Step 1: Check that the build output exists
# ----------------------------------------------------------
if [ ! -d "$SITE_DIR/out" ]; then
    echo "[ERROR] $SITE_DIR/out not found."
    echo "Run this first:"
    echo "  cd $SITE_DIR && npm install && npm run build"
    exit 1
fi

echo "[OK] Build output found at $SITE_DIR/out"

# ----------------------------------------------------------
# Step 2: Create Nginx config (only if it doesn't exist)
# ----------------------------------------------------------
if [ -f "$NGINX_CONF" ]; then
    echo "[SKIP] Nginx config already exists at $NGINX_CONF"
else
    echo "[INFO] Creating Nginx config..."
    sudo tee "$NGINX_CONF" > /dev/null <<'NGINX'
server {
    listen 80;
    server_name zuply.fr www.zuply.fr;

    root /var/www/zuply-fr/out;
    index index.html;

    # SPA-style routing for Next.js static export
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Legal pages
    location /legal/ {
        try_files $uri $uri.html $uri/ =404;
    }

    # Cache static assets
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache images
    location ~* \.(webp|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
NGINX
    echo "[OK] Nginx config created"
fi

# ----------------------------------------------------------
# Step 3: Enable the site (symlink)
# ----------------------------------------------------------
if [ -L "$NGINX_ENABLED" ]; then
    echo "[SKIP] Symlink already exists"
else
    echo "[INFO] Enabling site..."
    sudo ln -s "$NGINX_CONF" "$NGINX_ENABLED"
    echo "[OK] Site enabled"
fi

# ----------------------------------------------------------
# Step 4: Test Nginx config before reloading
# ----------------------------------------------------------
echo "[INFO] Testing Nginx config..."
if sudo nginx -t 2>&1; then
    echo "[OK] Nginx config valid"
else
    echo "[ERROR] Nginx config test failed. Not reloading."
    echo "Fix the config at $NGINX_CONF and re-run."
    exit 1
fi

# ----------------------------------------------------------
# Step 5: Reload Nginx (not restart — no downtime for other sites)
# ----------------------------------------------------------
echo "[INFO] Reloading Nginx..."
sudo systemctl reload nginx
echo "[OK] Nginx reloaded"

# ----------------------------------------------------------
# Step 6: SSL with Certbot (only if not already configured)
# ----------------------------------------------------------
if grep -q "ssl_certificate" "$NGINX_CONF" 2>/dev/null; then
    echo "[SKIP] SSL already configured"
else
    echo ""
    echo "[INFO] Setting up SSL with Certbot..."
    if command -v certbot &> /dev/null; then
        sudo certbot --nginx -d zuply.fr -d www.zuply.fr --non-interactive --agree-tos --redirect
        echo "[OK] SSL configured"
    else
        echo "[WARN] Certbot not installed. Install it with:"
        echo "  sudo apt install certbot python3-certbot-nginx"
        echo "Then run: sudo certbot --nginx -d zuply.fr -d www.zuply.fr"
    fi
fi

echo ""
echo "============================================"
echo "  Done! $DOMAIN is live."
echo "============================================"
echo ""
echo "  http://$DOMAIN  (or https:// if SSL was set up)"
echo ""
