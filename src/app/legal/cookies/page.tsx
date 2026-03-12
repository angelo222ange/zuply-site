import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies - Zuply",
  description:
    "Politique de cookies de Zuply. Decouvrez les cookies que nous utilisons et comment gerer vos preferences.",
};

export default function CookiesPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Politique de cookies</h1>
        <p className="text-sm text-gray-400">Derniere mise a jour : Mars 2026</p>
      </header>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          La presente Politique de cookies explique ce que sont les cookies,
          comment Zuply les utilise sur son site web et sa plateforme, et
          quelles options s&apos;offrent a vous pour gerer vos preferences en
          matiere de cookies. En continuant a utiliser notre site web, vous
          consentez a notre utilisation des cookies conformement a la presente
          politique.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            1. Qu&apos;est-ce qu&apos;un cookie
          </h2>
          <p>
            Les cookies sont de petits fichiers texte stockes sur votre appareil
            (ordinateur, tablette ou telephone mobile) lorsque vous visitez un
            site web. Ils sont largement utilises pour assurer le bon
            fonctionnement des sites web, ameliorer l&apos;experience utilisateur et
            fournir des informations aux operateurs des sites. Les cookies
            peuvent etre deposes par le site que vous visitez
            (&quot;cookies internes&quot;) ou par des services tiers presents
            sur la page (&quot;cookies tiers&quot;).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            2. Types de cookies utilises
          </h2>

          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 space-y-2">
              <h3 className="font-semibold text-gray-900">
                Cookies essentiels
              </h3>
              <p>
                Ces cookies sont strictement necessaires au fonctionnement de
                notre site web et de notre plateforme. Ils permettent les
                fonctionnalites de base telles que l&apos;authentification du
                compte, la gestion des sessions et les fonctions de securite.
                Sans ces cookies, le Service ne peut pas fonctionner
                correctement. Ces cookies ne necessitent pas votre consentement.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 space-y-2">
              <h3 className="font-semibold text-gray-900">
                Cookies analytiques
              </h3>
              <p>
                Les cookies analytiques nous aident a comprendre comment les
                visiteurs interagissent avec notre site web en collectant et en
                rapportant des informations de maniere anonyme. Ils nous
                permettent de mesurer le trafic, d&apos;identifier les pages
                populaires et d&apos;analyser le comportement des utilisateurs afin
                d&apos;ameliorer notre Service. Ces cookies collectent des donnees
                statistiques agregees et n&apos;identifient pas personnellement les
                visiteurs individuels.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 space-y-2">
              <h3 className="font-semibold text-gray-900">
                Cookies de preferences
              </h3>
              <p>
                Les cookies de preferences permettent a notre site web de
                memoriser les choix que vous avez effectues, tels que votre
                preference linguistique, vos parametres d&apos;affichage ou votre
                region. Ils offrent une experience plus personnalisee et vous
                evitent de devoir saisir a nouveau certaines informations a
                chaque visite.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            3. Gestion des cookies
          </h2>
          <p>
            Vous avez le droit de controler et de gerer les cookies de
            plusieurs manieres. Veuillez noter que la desactivation de certains
            cookies peut affecter le fonctionnement de notre site web et votre
            experience utilisateur.
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Parametres du navigateur :</strong> La plupart des
              navigateurs web vous permettent de controler les cookies via
              leurs parametres. Vous pouvez generalement configurer votre
              navigateur pour bloquer ou supprimer les cookies, ou pour vous
              alerter lorsqu&apos;un cookie est depose. Consultez la documentation
              d&apos;aide de votre navigateur pour les instructions specifiques.
            </li>
            <li>
              <strong>Bandeau de cookies :</strong> Lors de votre premiere
              visite sur notre site web, un bandeau de consentement aux cookies
              vous sera presente, vous permettant d&apos;accepter ou de refuser les
              cookies non essentiels.
            </li>
            <li>
              <strong>Liens de desinscription :</strong> Pour les cookies
              analytiques fournis par des services tiers, vous pouvez vous
              desinscrire via le mecanisme de desinscription du service
              concerne.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            4. Cookies tiers
          </h2>
          <p>
            Certains cookies presents sur notre site web sont deposes par des
            services tiers qui apparaissent sur nos pages. Nous ne controlons
            pas ces cookies et leur utilisation est regie par la politique de
            confidentialite du tiers concerne. Les tiers susceptibles de deposer
            des cookies sur notre site web incluent :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Les fournisseurs d&apos;analyse pour la mesure du trafic et le suivi
              des performances du site web.
            </li>
            <li>
              Les prestataires de paiement pour le traitement securise des
              transactions.
            </li>
            <li>
              Les services d&apos;authentification pour les fonctionnalites de
              connexion securisee.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            5. Duree de conservation des cookies
          </h2>
          <p>
            Les cookies ont des durees de vie variables selon leur finalite.
            Les cookies de session sont automatiquement supprimes lorsque vous
            fermez votre navigateur. Les cookies persistants restent sur votre
            appareil jusqu&apos;a leur expiration ou jusqu&apos;a ce que vous les
            supprimiez manuellement. Les cookies essentiels ont generalement
            une duree de vie pouvant aller jusqu&apos;a 12 mois, tandis que les
            cookies analytiques et de preferences peuvent persister jusqu&apos;a
            24 mois.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            6. Mises a jour de la presente politique
          </h2>
          <p>
            Nous pouvons mettre a jour la presente Politique de cookies de
            temps a autre pour refleter les evolutions des cookies que nous
            utilisons ou pour des raisons operationnelles, legales ou
            reglementaires. Nous vous encourageons a consulter regulierement
            cette politique. La date de &quot;Derniere mise a jour&quot; en
            haut de cette page indique la date de la derniere revision.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            7. Contact
          </h2>
          <p>
            Si vous avez des questions concernant notre utilisation des cookies,
            veuillez nous contacter :
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 space-y-1">
            <p className="font-semibold text-gray-900">Zuply</p>
            <p>Email : contact@app.zuply.fr</p>
          </div>
        </section>
      </div>
    </article>
  );
}
