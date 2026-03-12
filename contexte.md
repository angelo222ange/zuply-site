# Contexte - Zuply Site Marketing

## Projet
Zuply est une plateforme SaaS de generation de contenu SEO automatisee. Elle permet de generer des articles optimises par IA, de les publier sur des sites web via Git, et de gerer les reseaux sociaux depuis une interface unique.

## Architecture globale
- **App (app.zuply.fr)** : Application principale (Fastify API + Next.js frontend), repo `blog`
- **Site marketing (zuply.fr)** : Landing page + pages legales, repo `zuply-site` (ce repo)
- **VPS** : Serveur OVH, Nginx, PM2, SSL via Certbot

## Ce repo (zuply-site)
Site statique HTML/CSS servant de vitrine publique pour Zuply. Il contient :
- Landing page avec presentation des fonctionnalites
- Politique de confidentialite (requis RGPD + OAuth Meta/Instagram)
- Conditions d'utilisation
- Politique de suppression des donnees (requis Meta/Facebook)

## Direction Artistique (DA)
La DA est identique a celle de l'application app.zuply.fr :

### Typographie
- **Police principale** : Quicksand (400, 500, 600, 700)
- **Police display** : DM Serif Display (titres decoratifs)
- Pas de polices custom locales sur le site marketing

### Couleurs
- **Fond** : blanc (#ffffff)
- **Texte principal** : gray-900 (#111827)
- **Texte secondaire** : gray-500 (#6b7280)
- **Texte tertiaire** : gray-400 (#9ca3af)
- **Accent primaire** : #3b5bfe (bleu Zuply)
- **Accent hover** : #2d4bef
- **Gradient texte** : linear-gradient(135deg, #3b5bfe, #6366f1, #f97316)
- Couleurs Tailwind natives uniquement, pas de tokens custom

### Composants visuels
- **Liquid Glass Cards** : fond semi-transparent avec gradient bleute, backdrop-blur, bordure blanche translucide, ombre subtile bleue
- **Navbar flottante** : glass morphism, arrondie (rounded-2xl), avec marge top
- **Boutons primaires** : bg #3b5bfe, rounded-12px, ombre bleue, hover lift -1px
- **Hover lift** : translateY(-3px) + ombre amplifiee sur les cartes

### Effets
- Background orbs : radial gradients fixes (bleu top-left, orange bottom-right) pour donner un effet de refraction au glass
- Animations fade-in-up avec delays escalades (100ms, 200ms, 300ms...)
- Pas d'emoji nulle part

### Logo
- Favicon : `/favicon.png` (logo Z bleu)
- Texte "zuply" en font-bold, couleur #2563eb

## Domaines
- **zuply.fr** : site marketing (ce repo)
- **app.zuply.fr** : application SaaS

## Contact
- Email : contact@zuply.fr

## Stack technique
- HTML statique + Tailwind CSS (via CDN)
- Google Fonts (Quicksand, DM Serif Display)
- Deploiement : Nginx sur VPS (fichier statique)
- SSL : Certbot / Let's Encrypt

## Repo application
- GitHub : https://github.com/angelo222ange/blog
- Monorepo Turborepo : apps/api (Fastify), apps/web (Next.js), packages/*
- DB : SQLite (dev) -> PostgreSQL (production)
- Auth : JWT httpOnly cookies
- OAuth : Meta, Instagram, LinkedIn, Twitter, Pinterest, TikTok
