import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Legales - Zuply",
  description:
    "Mentions legales de Zuply. Informations sur l'editeur, l'hebergeur et les conditions d'utilisation du site.",
};

export default function MentionsLegalesPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Mentions Legales</h1>
        <p className="text-sm text-gray-400">
          Derniere mise a jour : Mars 2026
        </p>
      </header>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Conformement aux dispositions des articles 6-III et 19 de la Loi n
          2004-575 du 21 juin 2004 pour la Confiance dans l&apos;economie
          numerique, dite L.C.E.N., les presentes mentions legales sont portees
          a la connaissance des utilisateurs et visiteurs du site zuply.io.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            1. Editeur du Site
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 space-y-1">
            <p>
              <strong>Raison sociale :</strong> Zuply SAS
            </p>
            <p>
              <strong>Forme juridique :</strong> Societe par Actions Simplifiee
              (SAS)
            </p>
            <p>
              <strong>Siege social :</strong> Paris, France
            </p>
            <p>
              <strong>Email :</strong> contact@zuply.io
            </p>
            <p>
              <strong>Site web :</strong> https://zuply.io
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            2. Directeur de la Publication
          </h2>
          <p>
            Le directeur de la publication du site zuply.io est le representant
            legal de la societe Zuply SAS. Pour toute question relative au
            contenu publie sur ce site, vous pouvez nous contacter a l&apos;adresse
            suivante : contact@zuply.io.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            3. Hebergeur
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 space-y-1">
            <p>
              Le site zuply.io est heberge par un prestataire d&apos;hebergement
              professionnel situe au sein de l&apos;Union Europeenne, garantissant la
              conformite avec le Reglement General sur la Protection des Donnees
              (RGPD).
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            4. Protection des Donnees Personnelles (CNIL / RGPD)
          </h2>
          <p>
            Conformement au Reglement (UE) 2016/679 du Parlement europeen et du
            Conseil du 27 avril 2016 (Reglement General sur la Protection des
            Donnees - RGPD) et a la loi n 78-17 du 6 janvier 1978 relative a
            l&apos;informatique, aux fichiers et aux libertes, modifiee par la loi n
            2018-493 du 20 juin 2018, les utilisateurs du site zuply.io
            disposent des droits suivants concernant leurs donnees personnelles :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Droit d&apos;acces aux donnees personnelles</li>
            <li>Droit de rectification des donnees inexactes</li>
            <li>Droit a l&apos;effacement des donnees (droit a l&apos;oubli)</li>
            <li>Droit a la limitation du traitement</li>
            <li>Droit a la portabilite des donnees</li>
            <li>Droit d&apos;opposition au traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez adresser votre demande par
            email a : privacy@zuply.io. Nous nous engageons a y repondre dans
            un delai de 30 jours.
          </p>
          <p>
            En cas de litige, vous pouvez introduire une reclamation aupres de
            la Commission Nationale de l&apos;Informatique et des Libertes (CNIL) :
            www.cnil.fr.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            5. Propriete Intellectuelle
          </h2>
          <p>
            L&apos;ensemble des elements composant le site zuply.io (textes,
            graphismes, logiciels, photographies, images, videos, sons, plans,
            logos, marques, creations et oeuvres protegees diverses, bases de
            donnees, etc.) ainsi que le site lui-meme, sont la propriete
            exclusive de Zuply SAS ou font l&apos;objet d&apos;une autorisation
            d&apos;utilisation.
          </p>
          <p>
            Toute reproduction, representation, modification, publication,
            adaptation, totale ou partielle, de ces elements, quel que soit le
            moyen ou le procede utilise, est interdite sans l&apos;autorisation
            ecrite prealable de Zuply SAS. Toute exploitation non autorisee du
            site ou de l&apos;un quelconque de ses elements sera consideree comme
            constitutive d&apos;une contrefacon et poursuivie conformement aux
            dispositions des articles L.335-2 et suivants du Code de la
            Propriete Intellectuelle.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            6. Limitation de Responsabilite
          </h2>
          <p>
            Zuply SAS s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise a
            jour des informations diffusees sur le site. Toutefois, Zuply SAS ne
            peut garantir l&apos;exactitude, la precision ou l&apos;exhaustivite des
            informations mises a disposition sur ce site.
          </p>
          <p>
            Zuply SAS decline toute responsabilite pour toute imprecision,
            inexactitude ou omission portant sur des informations disponibles sur
            le site, ainsi que pour tout dommage resultant d&apos;une intrusion
            frauduleuse d&apos;un tiers ayant entraine une modification des
            informations mises a disposition sur le site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            7. Cookies
          </h2>
          <p>
            Le site zuply.io utilise des cookies pour ameliorer l&apos;experience
            utilisateur. Pour plus d&apos;informations sur les cookies utilises et la
            maniere de les gerer, veuillez consulter notre{" "}
            <a
              href="/legal/cookies"
              className="text-blue-500 underline hover:text-blue-600"
            >
              Politique de Cookies
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            8. Droit Applicable et Juridiction Competente
          </h2>
          <p>
            Les presentes mentions legales sont regies par le droit francais.
            Tout litige relatif a l&apos;utilisation du site zuply.io sera soumis a
            la competence exclusive des tribunaux de Paris, France, sauf
            disposition legale imperative contraire.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">9. Contact</h2>
          <p>
            Pour toute question relative aux presentes mentions legales, vous
            pouvez nous contacter :
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 space-y-1">
            <p className="font-semibold text-gray-900">Zuply SAS</p>
            <p>Email : contact@zuply.io</p>
            <p>Site : https://zuply.io</p>
          </div>
        </section>
      </div>
    </article>
  );
}
