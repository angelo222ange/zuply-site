import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite - Zuply",
  description:
    "Politique de confidentialite de Zuply. Decouvrez comment nous collectons, utilisons et protegeons vos donnees personnelles.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Politique de confidentialite</h1>
        <p className="text-sm text-gray-400">Derniere mise a jour : Mars 2026</p>
      </header>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Chez Zuply, nous nous engageons a proteger votre vie privee et a
          garantir que vos informations personnelles sont traitees de maniere
          securisee et responsable. La presente Politique de confidentialite
          decrit comment nous collectons, utilisons, stockons et protegeons vos
          donnees lorsque vous utilisez notre plateforme et nos services.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            1. Informations collectees
          </h2>
          <p>
            Nous collectons les informations que vous nous fournissez
            directement lorsque vous creez un compte, utilisez nos services ou
            nous contactez pour obtenir de l&apos;assistance. Ces informations
            peuvent inclure :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Informations de compte :</strong> Votre nom, adresse
              e-mail, mot de passe et informations de facturation lorsque vous
              vous inscrivez ou souscrivez a une offre.
            </li>
            <li>
              <strong>Donnees de contenu :</strong> Articles, medias,
              configurations de sites et autres contenus que vous creez ou
              telechargez via la plateforme.
            </li>
            <li>
              <strong>Donnees d&apos;utilisation :</strong> Informations sur la
              maniere dont vous interagissez avec nos services, notamment les
              pages visitees, les fonctionnalites utilisees, la duree des
              sessions et les actions effectuees au sein de la plateforme.
            </li>
            <li>
              <strong>Donnees techniques et relatives a l&apos;appareil :</strong>{" "}
              Adresse IP, type de navigateur, systeme d&apos;exploitation,
              identifiants d&apos;appareil et autres informations techniques
              collectees automatiquement lorsque vous accedez a nos services.
            </li>
            <li>
              <strong>Donnees de communication :</strong> Archives de
              correspondance lorsque vous contactez notre equipe d&apos;assistance
              ou participez a des enquetes.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            2. Utilisation des donnees
          </h2>
          <p>Nous utilisons les informations collectees aux fins suivantes :</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Fournir, maintenir et ameliorer nos services de generation de
              contenu propulses par l&apos;intelligence artificielle.
            </li>
            <li>
              Traiter les transactions et gerer votre compte et votre
              abonnement.
            </li>
            <li>
              Vous envoyer des notifications techniques, des alertes de
              securite et des messages d&apos;assistance.
            </li>
            <li>
              Analyser les tendances d&apos;utilisation et optimiser les performances
              et l&apos;experience utilisateur de notre plateforme.
            </li>
            <li>
              Detecter, enqueter et prevenir toute activite frauduleuse ou non
              autorisee.
            </li>
            <li>
              Respecter nos obligations legales et faire appliquer nos
              conditions d&apos;utilisation.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            3. Stockage et securite des donnees
          </h2>
          <p>
            Vos donnees sont stockees sur des serveurs securises geres par nos
            prestataires d&apos;hebergement. Nous mettons en oeuvre des mesures de
            securite conformes aux standards de l&apos;industrie, incluant le
            chiffrement en transit (TLS/SSL) et au repos, des controles
            d&apos;acces et des audits de securite reguliers afin de proteger vos
            informations contre tout acces, modification, divulgation ou
            destruction non autorises.
          </p>
          <p>
            Bien que nous nous efforcions de proteger vos donnees personnelles,
            aucune methode de stockage electronique ou de transmission via
            Internet n&apos;est totalement securisee. Nous ne pouvons garantir une
            securite absolue mais nous nous engageons a maintenir les standards
            les plus eleves raisonnablement atteignables.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            4. Services tiers
          </h2>
          <p>
            Zuply s&apos;integre a des services tiers pour assurer ses
            fonctionnalites principales. Ces services peuvent traiter certaines
            donnees en notre nom :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>OpenAI :</strong> Nous utilisons l&apos;API d&apos;OpenAI pour la
              generation de contenu par intelligence artificielle. Les prompts
              et les contenus generes peuvent etre traites par OpenAI
              conformement a leurs politiques d&apos;utilisation des donnees. Nous
              ne transmettons pas vos informations personnelles de compte a
              OpenAI.
            </li>
            <li>
              <strong>Unsplash :</strong> Nous pouvons utiliser des images
              libres de droits provenant d&apos;Unsplash pour les contenus generes.
              Aucune donnee personnelle n&apos;est partagee avec Unsplash
              au-dela des requetes API standard.
            </li>
            <li>
              <strong>Hebergeurs :</strong> Notre infrastructure est hebergee
              par des prestataires cloud reputes, conformes aux reglementations
              applicables en matiere de protection des donnees. Les donnees
              peuvent etre stockees dans des centres de donnees situes au sein
              de l&apos;Espace Economique Europeen (EEE) ou dans des juridictions
              offrant des garanties adequates de protection des donnees.
            </li>
            <li>
              <strong>Prestataires de paiement :</strong> Les informations de
              paiement sont traitees par des prestataires de paiement tiers
              conformes a la norme PCI. Nous ne stockons pas les details
              complets de votre carte bancaire sur nos serveurs.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">5. Cookies</h2>
          <p>
            Nous utilisons des cookies et des technologies de suivi similaires
            pour ameliorer votre experience sur notre plateforme. Les cookies
            nous aident a memoriser vos preferences, a comprendre comment vous
            utilisez nos services et a ameliorer nos offres. Pour des
            informations detaillees sur les cookies que nous utilisons et la
            maniere de les gerer, veuillez consulter notre{" "}
            <a
              href="/legal/cookies"
              className="text-blue-500 underline hover:text-blue-600"
            >
              Politique de cookies
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            6. Vos droits
          </h2>
          <p>
            Conformement au Reglement General sur la Protection des Donnees
            (RGPD) et aux autres lois applicables en matiere de protection des
            donnees, vous disposez des droits suivants concernant vos donnees
            personnelles :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Droit d&apos;acces :</strong> Vous pouvez demander une copie
              des donnees personnelles que nous detenons a votre sujet.
            </li>
            <li>
              <strong>Droit de rectification :</strong> Vous pouvez demander la
              correction de toute donnee personnelle inexacte ou incomplete.
            </li>
            <li>
              <strong>Droit a l&apos;effacement :</strong> Vous pouvez demander la
              suppression de vos donnees personnelles, sous reserve de
              certaines exceptions legales.
            </li>
            <li>
              <strong>Droit a la limitation du traitement :</strong> Vous pouvez
              demander la restriction du traitement de vos donnees dans
              certaines circonstances.
            </li>
            <li>
              <strong>Droit a la portabilite des donnees :</strong> Vous pouvez
              demander a recevoir vos donnees personnelles dans un format
              structure, couramment utilise et lisible par machine.
            </li>
            <li>
              <strong>Droit d&apos;opposition :</strong> Vous pouvez vous opposer au
              traitement de vos donnees personnelles a des fins de prospection
              commerciale ou pour d&apos;autres finalites fondees sur des interets
              legitimes.
            </li>
            <li>
              <strong>Droit de retrait du consentement :</strong> Lorsque le
              traitement est fonde sur votre consentement, vous pouvez retirer
              ce consentement a tout moment sans que cela n&apos;affecte la liceite
              du traitement anterieur.
            </li>
          </ul>
          <p>
            Pour exercer l&apos;un de ces droits, veuillez nous contacter a
            l&apos;adresse{" "}
            <a
              href="mailto:contact@zuply.fr"
              className="text-blue-500 underline hover:text-blue-600"
            >
              contact@zuply.fr
            </a>
            . Nous repondrons a votre demande dans un delai de 30 jours.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            7. Conservation des donnees
          </h2>
          <p>
            Nous conservons vos donnees personnelles aussi longtemps que votre
            compte est actif ou que cela est necessaire pour vous fournir nos
            services. Si vous cloturez votre compte, nous supprimerons ou
            anonymiserons vos donnees personnelles dans un delai de 90 jours,
            sauf si leur conservation est requise par la loi ou pour des fins
            commerciales legitimes telles que la resolution de litiges ou
            l&apos;execution de nos accords.
          </p>
          <p>
            Les donnees d&apos;utilisation et d&apos;analyse peuvent etre conservees sous
            forme agregee et anonymisee pour une duree plus longue a des fins
            statistiques et d&apos;amelioration du produit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            8. Modifications de la presente politique
          </h2>
          <p>
            Nous pouvons mettre a jour la presente Politique de confidentialite
            de temps a autre pour refleter les evolutions de nos pratiques ou
            des lois applicables. Nous vous informerons de tout changement
            significatif en publiant la politique mise a jour sur cette page et
            en actualisant la date de &quot;Derniere mise a jour&quot;. Nous vous
            encourageons a consulter regulierement cette politique.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">9. Contact</h2>
          <p>
            Si vous avez des questions ou des preoccupations concernant la
            presente Politique de confidentialite ou nos pratiques en matiere de
            donnees, veuillez nous contacter :
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 space-y-1">
            <p className="font-semibold text-gray-900">Zuply</p>
            <p>Email : contact@zuply.fr</p>
            <p>Delegue a la protection des donnees : contact@zuply.fr</p>
          </div>
        </section>
      </div>
    </article>
  );
}
