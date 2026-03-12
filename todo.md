# TODO - Zuply Site Marketing (zuply.fr)

## Phase 1 : Structure de base (FAIT)
- [x] Landing page (index.html)
- [x] Politique de confidentialite (privacy.html)
- [x] Conditions d'utilisation (terms.html)
- [x] Politique de suppression des donnees (data-deletion.html)
- [x] contexte.md avec DA complete
- [x] todo.md

## Phase 2 : Assets et finitions
- [ ] Ajouter le favicon.png (copier depuis blogengine/apps/web/public/favicon.png)
- [ ] Ajouter des screenshots/mockups de l'app dans la section hero
- [ ] Ajouter une section "Tarifs" avec les plans (si applicable)
- [ ] Ajouter une section FAQ
- [ ] Optimiser les meta tags Open Graph (og:image, og:title, og:description)
- [ ] Ajouter un sitemap.xml
- [ ] Ajouter un robots.txt

## Phase 3 : Deploiement
- [ ] Configurer DNS : zuply.fr -> IP du VPS
- [ ] Creer la config Nginx pour zuply.fr (site statique)
- [ ] Deployer les fichiers dans /var/www/zuply-site/ (ou /home/deploy/zuply-site/)
- [ ] Configurer SSL avec Certbot pour zuply.fr
- [ ] Tester toutes les pages en production

## Phase 4 : Configuration OAuth avec les URLs legales
- [ ] Meta Developer Console : ajouter zuply.fr/privacy comme Privacy Policy URL
- [ ] Meta Developer Console : ajouter zuply.fr/data-deletion comme Data Deletion URL
- [ ] Meta Developer Console : ajouter zuply.fr/terms comme Terms of Service URL
- [ ] Instagram : memes URLs dans la config de l'app Instagram
- [ ] Twitter Developer Portal : ajouter les URLs legales
- [ ] LinkedIn Developer : ajouter les URLs legales
- [ ] Pinterest Developer : ajouter les URLs legales
- [ ] TikTok Developer : ajouter les URLs legales
- [ ] Configurer les redirect URIs OAuth : https://app.zuply.fr/api/social/callback/{platform}

## Phase 5 : Ameliorations futures
- [ ] Version responsive mobile plus poussee
- [ ] Animations scroll (Intersection Observer)
- [ ] Temoignages / social proof
- [ ] Blog integre au site marketing
- [ ] Page "A propos"
- [ ] Formulaire de contact
- [ ] Integration analytics (Plausible ou Umami, pas Google Analytics pour le RGPD)
- [ ] Banniere cookie si ajout d'analytics
- [ ] Version anglaise (i18n)

## Notes importantes
- **DA** : Respecter strictement la DA decrite dans contexte.md (Quicksand, liquid glass, couleurs Tailwind natives, pas d'emoji)
- **RGPD** : Les pages legales sont obligatoires pour la validation des apps OAuth Meta/Instagram
- **Meta specifique** : La page data-deletion est obligatoire pour passer la review de l'app Facebook/Instagram
- **Email** : contact@zuply.fr doit etre fonctionnel avant de soumettre les apps OAuth
