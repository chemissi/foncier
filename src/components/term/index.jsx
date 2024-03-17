import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Term() {
  return (
    <section className="term-section">
      <div className="tf-container">
        <Tabs className="row tf-tab">
          <div className="col-lg-4">
            <TabList className="menu-tab tab-term po-sticky">
              <Tab className="ct-tab"> Charte de protection des données </Tab>
              <Tab className="ct-tab">1. Définition et nature des données à caractère personnel </Tab>
              <Tab className="ct-tab">2. Formulaire de demande de recrutement</Tab>
              <Tab className="ct-tab">3. Formulaire de demande de stage</Tab>
              <Tab className="ct-tab">4. Inscription à notre newsletter</Tab>
              <Tab className="ct-tab">5. Droits d'accès, de rectification, de suppression et d'opposition au traitement</Tab>
              <Tab className="ct-tab">6. Gestion des données personnelles par Capitalym</Tab>
              <Tab className="ct-tab">7. Conservation des données</Tab>
              <Tab className="ct-tab">8. Destinataire des données</Tab>
            </TabList>
          </div>
          <div className="col-lg-8">
            <div className="content-tab">
              <TabPanel className="term-content animation-tab">
                <h4>PROTECTION DES DONNÉES</h4>
                <h6>1. Définition et nature des données à caractère personnel </h6>
                <p>
                  Lors de votre utilisation de notre Site Internet, et par l'intermédiaire de celui-ci, nous pouvons être amenés à collecter des données à caractère personnel,
                  lesquels nous sont communiquées dans le cadre suivant :
                </p>
                <ul className="list-dot">
                  <li>
                    {" "}
                    Demande de contact : IP, Nom, prénom : pour établir votre identité, Adresse email, téléphone : pour vous contacter dans le cadre de votre demande de contact
                  </li>
                  <li>
                    {" "}
                    Demande d'étude projet : IP, Nom, prénom : pour établir votre identité, Adresse email, téléphone : pour vous contacter dans le cadre de votre demande d'étude de projet Entreprise, poste (facultatif) : pour répondre à votre demande en fonction de l'activité de votre entreprise ou de votre service
                  </li>
                </ul>

                
                <h6>2. Formulaire de demande de recrutement </h6>
                <p>IP, Nom, prénom : pour établir votre identité, Adresse email, téléphone : pour vous contacter dans le cadre de votre demande de recrutement CV, motivation : pour étudier la correspondance entre votre profil et le poste, Portfolio, Linkedin (facultatif) : pour compléter vos arguments concernant votre correspondance avec le profil du poste
                </p>

                <h6>3. Formulaire de demande de stage</h6>
                <p>
                IP, Nom, prénom : pour établir votre identité, Adresse email, téléphone : pour vous contacter dans le cadre de votre demande de stage CV, motivation : pour étudier la correspondance entre votre profil et le stage Portfolio, Linkedin (facultatif) : pour compléter vos arguments concernant votre correspondance avec le profil du stage.
                </p>
                
                <h6>4. Inscription à notre newsletter</h6>
                <p>
                IP : pour établir votre identité, Adresse email : pour vous envoyer la newsletter Par « données à caractère personnel », il y a lieu d'entendre toutes les données qui permettent de vous identifier directement ou indirectement (par regroupement d'informations) telles que noms, prénoms, pseudonyme, date de naissance, photographie, adresses postales et de courrier électronique, numéros de téléphone, profession, cursus de formation, diplômes, déroulé de carrière et expérience professionnelle, données relatives à vos transactions sur le site, détails de vos achats et abonnements, relevé d'identité bancaire…
                </p>
                
                <h6>5. Droits d'accès, de rectification, de suppression et d'opposition au traitement</h6>
                <p>
                Conformément à la loi n°78-17 du 6 janvier 1978 « informatique et libertés » ainsi qu'aux dispositions du Règlement Général sur la Protection des Données, adopté le 27 avril 2016 par le Parlement européen, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement des informations personnelles vous concernant. Vous avez également la possibilité de vous opposer au traitement à des fins de prospection, notamment commerciale. Vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : Capitalym 9 rue Anatole de la forge 75017 Paris ou contact(@)foncieronline.fr Pour ce faire, nous vous remercions d'adresser un courrier postal ou un courrier électronique, signé de l'auteur de la demande et être accompagné d'un justificatif d'identité (carte nationale d'identité ou passeport) portant signature de la personne qui exerce son droit.
                </p>

                <h6>6. Gestion des données personnelles par Capitalym</h6>
                <p>
                Moyens de collecte des données Lors de votre navigation sur le site Internet https://www.foncieronline.fr, et afin de pouvoir vous offrir les services proposés sur celui-ci, nous pouvons être amenés à collecter des données personnelles vous concernant. Avant chaque collecte de données à caractère personnel, nous recueillons votre consentement par le biais d'un formulaire à compléter et d'une case à cocher après avoir pris connaissance de la présente Charte de protection des données. Finalité de la collecte des données Vos données à caractère personnel sont collectées pour répondre à une ou plusieurs finalités suivantes : Vous envoyer les newsletters ; Gérer vos abonnements et vos désabonnements à la newsletter ; Élaborer des statistiques dans le but notamment d'améliorer notre site , Assurer le suivi de la relation client notamment dans la gestion de vos réclamations et vos demandes de projet , Gérer vos demandes de droit d'accès, de rectification, d'opposition de vos données , Conserver vos données dans des documents légaux en conformité avec les normes comptables, pour la durée légale nécessaire, en vue de répondre aux sollicitations des administrations fiscales et organismes sociaux si besoin Pour les candidatures déposées en ligne, afin d'étudier votre demande et pouvoir vous contacter si un poste se libère ou est créé dans notre entreprise. Nous nous engageons à collecter vos données en nous limitant aux données strictement nécessaires à la finalité du traitement envisagé, afin de pouvoir traiter vos demandes et vous offrir les services proposés sur notre site Internet.
                </p>

                <h6>7. Conservation des données</h6>
                <p>
                Les données à caractère personnel que nous sommes amenés à collecter sont conservées pendant une durée qui n'excède pas la durée nécessaire aux finalités pour lesquelles elles ont été collectées et au maximum pour une durée de : 3 ans à compter de la fin de la relation commerciale pour des partenaires ou clients, et 3 ans à compter de la collecte de données ou du dernier contact pour les prospects, et ce, dans l'un et l'autre cas, uniquement à des fins de prospection commerciale 3 ans à compter de la collecte de données ou du dernier contact pour les demandes de candidatures ou de stage, A l'issue, dès lors que les données collectées ne sont plus nécessaires à la finalité pour laquelle elles avaient été collectées : nous nous engageons à reprendre contact avec vous afin de savoir si oui ou non vous souhaitez continuer à recevoir des sollicitations commerciales , à défaut, les données seront archivées et anonymisées ou détruites. À tout moment, vous pouvez vous opposer au traitement des informations personnelles vous concernant puisque vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition ainsi qu'il a été exposé ci-avant.
                </p>

                <h6>8. Destinataire des données</h6>
                <p>
                  Les données à caractère personnelle collectées, vous concernant, sont destinées à la société Capitalym. Afin de pouvoir réaliser les traitements ci-dessus énumérés, nous sommes amenés à partager vos données, en donnant accès aux personnels autorisés et dûment habilités à cet effet, à savoir nos services internes. Les données que nous sommes amenés à collecter vous concernant n'ont pas vocation à être transférées hors de l'Union Européenne. Toutefois, si tel devait être le cas, nous vous garantissons, en cas de transfert de vos données à l'étranger et particulièrement hors de l'Union européenne, mettre en œuvre toutes les mesures appropriées pour garantir un niveau de protection suffisant de vos données, telles que : s'orienter vers des pays dits « sûrs », c'est-à-dire offrant une protection importante de vos données. Demander les autorisations nécessaires auprès de l'Autorité de contrôle avant toute collecte de données si celle-ci l'exige selon les pays. Obtenir des garanties de sécurisation et de confidentialité de la part des sous-traitants, par exemple, en imposant des clauses contractuelles strictes, en se réservant la possibilité de les contrôler régulièrement et en menant des audits. Sécurité et confidentialité des données à caractère personnel collectées La sécurité et la confidentialité des données personnelles que vous nous confiez, est une priorité pour nous. En effet, nous veillons à prendre toutes les mesures techniques et organisationnelles utiles au regard de la nature des données personnelles que vous nous communiquez et des risques présentés par leur traitement. Ceci afin de préserver la sécurité de vos données personnelles et, notamment, empêcher qu'elles soient déformées, détruites, endommagées, ou que des tiers non autorisés y aient accès. À cette fin, nous avons mis en place des mesures techniques telles que : La sécurisation des accès aux données du site. Nous nous assurons que le site et les technologies qui le compose soient toujours à jour des dernières mises à jour de sécurité. Nous contrôlons de manière rigoureuse l'accès aux données. L'utilisation de modules et de différentes techniques afin de sécuriser le site en lui-même et des mesures organisationnelles telles : Qu'un accès restreint au serveur, limité aux équipes compétentes. Une gestion rigoureuse des accès au code source du site, ainsi qu'à la base de données. Un contrôle régulier que les points ci-dessous sont correctement appliqués. La sécurité et la confidentialité des données personnelles reposent également sur les bonnes pratiques de chacun. Ainsi, nous vous invitons à ne pas communiquer vos identifiant et mot de passe à des tiers, à vous déconnecter systématiquement de votre profil et de votre compte client (notamment en cas de comptes liés), à fermer la fenêtre de votre navigateur à l'issue de votre session, particulièrement si vous accédez à Internet depuis un poste informatique partagé avec d'autres personnes, et à ne pas enregistrer vos identifiant et mot de passe dans votre navigateur. Vous éviterez ainsi que d'autres utilisateurs accèdent à vos informations personnelles.
                </p>

                
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>1. Définition et nature des données à caractère personnel </h6>
                <p>
                  Lors de votre utilisation de notre Site Internet, et par l'intermédiaire de celui-ci, nous pouvons être amenés à collecter des données à caractère personnel,
                  lesquels nous sont communiquées dans le cadre suivant :
                </p>
                <ul className="list-dot">
                  <li>
                    {" "}
                    Demande de contact : IP, Nom, prénom : pour établir votre identité, Adresse email, téléphone : pour vous contacter dans le cadre de votre demande de contact
                  </li>
                  <li>
                    {" "}
                    Demande d'étude projet : IP, Nom, prénom : pour établir votre identité, Adresse email, téléphone : pour vous contacter dans le cadre de votre demande d'étude de projet Entreprise, poste (facultatif) : pour répondre à votre demande en fonction de l'activité de votre entreprise ou de votre service
                  </li>
                </ul>
                <ul className="list-dot">
                  <li>
                    {" "}
                    Aliquam elementum, est sed interdum cursus, felis ex
                    pharetra nisi, ut elementum tortor urna eu nulla. Donec
                    rhoncus in purus quis blandit.
                  </li>
                  <li> Etiam eleifend metus at nunc ultricies facilisis.</li>
                  <li>
                    {" "}
                    Nullam vel eleifend est, eu posuere risus. Vestibulum ligula
                    ex, ullamcorper sit amet molestie a, finibus nec ex.
                  </li>
                </ul>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>2. Formulaire de demande de recrutement </h6>
                <p>IP, Nom, prénom : pour établir votre identité, Adresse email, téléphone : pour vous contacter dans le cadre de votre demande de recrutement CV, motivation : pour étudier la correspondance entre votre profil et le poste, Portfolio, Linkedin (facultatif) : pour compléter vos arguments concernant votre correspondance avec le profil du poste
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>3. Formulaire de demande de stage</h6>
                <p>
                IP, Nom, prénom : pour établir votre identité, Adresse email, téléphone : pour vous contacter dans le cadre de votre demande de stage CV, motivation : pour étudier la correspondance entre votre profil et le stage Portfolio, Linkedin (facultatif) : pour compléter vos arguments concernant votre correspondance avec le profil du stage.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>4. Inscription à notre newsletter</h6>
                <p>
                IP : pour établir votre identité, Adresse email : pour vous envoyer la newsletter Par « données à caractère personnel », il y a lieu d'entendre toutes les données qui permettent de vous identifier directement ou indirectement (par regroupement d'informations) telles que noms, prénoms, pseudonyme, date de naissance, photographie, adresses postales et de courrier électronique, numéros de téléphone, profession, cursus de formation, diplômes, déroulé de carrière et expérience professionnelle, données relatives à vos transactions sur le site, détails de vos achats et abonnements, relevé d'identité bancaire…
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>5. Droits d'accès, de rectification, de suppression et d'opposition au traitement</h6>
                <p>
                Conformément à la loi n°78-17 du 6 janvier 1978 « informatique et libertés » ainsi qu'aux dispositions du Règlement Général sur la Protection des Données, adopté le 27 avril 2016 par le Parlement européen, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement des informations personnelles vous concernant. Vous avez également la possibilité de vous opposer au traitement à des fins de prospection, notamment commerciale. Vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : Capitalym 9 rue Anatole de la forge 75017 Paris ou contact(@)foncieronline.fr Pour ce faire, nous vous remercions d'adresser un courrier postal ou un courrier électronique, signé de l'auteur de la demande et être accompagné d'un justificatif d'identité (carte nationale d'identité ou passeport) portant signature de la personne qui exerce son droit.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>6. Gestion des données personnelles par Capitalym</h6>
                <p>
                Moyens de collecte des données Lors de votre navigation sur le site Internet https://www.foncieronline.fr, et afin de pouvoir vous offrir les services proposés sur celui-ci, nous pouvons être amenés à collecter des données personnelles vous concernant. Avant chaque collecte de données à caractère personnel, nous recueillons votre consentement par le biais d'un formulaire à compléter et d'une case à cocher après avoir pris connaissance de la présente Charte de protection des données. Finalité de la collecte des données Vos données à caractère personnel sont collectées pour répondre à une ou plusieurs finalités suivantes : Vous envoyer les newsletters ; Gérer vos abonnements et vos désabonnements à la newsletter ; Élaborer des statistiques dans le but notamment d'améliorer notre site , Assurer le suivi de la relation client notamment dans la gestion de vos réclamations et vos demandes de projet , Gérer vos demandes de droit d'accès, de rectification, d'opposition de vos données , Conserver vos données dans des documents légaux en conformité avec les normes comptables, pour la durée légale nécessaire, en vue de répondre aux sollicitations des administrations fiscales et organismes sociaux si besoin Pour les candidatures déposées en ligne, afin d'étudier votre demande et pouvoir vous contacter si un poste se libère ou est créé dans notre entreprise. Nous nous engageons à collecter vos données en nous limitant aux données strictement nécessaires à la finalité du traitement envisagé, afin de pouvoir traiter vos demandes et vous offrir les services proposés sur notre site Internet.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>7. Conservation des données</h6>
                <p>
                Les données à caractère personnel que nous sommes amenés à collecter sont conservées pendant une durée qui n'excède pas la durée nécessaire aux finalités pour lesquelles elles ont été collectées et au maximum pour une durée de : 3 ans à compter de la fin de la relation commerciale pour des partenaires ou clients, et 3 ans à compter de la collecte de données ou du dernier contact pour les prospects, et ce, dans l'un et l'autre cas, uniquement à des fins de prospection commerciale 3 ans à compter de la collecte de données ou du dernier contact pour les demandes de candidatures ou de stage, A l'issue, dès lors que les données collectées ne sont plus nécessaires à la finalité pour laquelle elles avaient été collectées : nous nous engageons à reprendre contact avec vous afin de savoir si oui ou non vous souhaitez continuer à recevoir des sollicitations commerciales , à défaut, les données seront archivées et anonymisées ou détruites. À tout moment, vous pouvez vous opposer au traitement des informations personnelles vous concernant puisque vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition ainsi qu'il a été exposé ci-avant.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>8. Destinataire des données</h6>
                <p>
                  Les données à caractère personnelle collectées, vous concernant, sont destinées à la société Capitalym. Afin de pouvoir réaliser les traitements ci-dessus énumérés, nous sommes amenés à partager vos données, en donnant accès aux personnels autorisés et dûment habilités à cet effet, à savoir nos services internes. Les données que nous sommes amenés à collecter vous concernant n'ont pas vocation à être transférées hors de l'Union Européenne. Toutefois, si tel devait être le cas, nous vous garantissons, en cas de transfert de vos données à l'étranger et particulièrement hors de l'Union européenne, mettre en œuvre toutes les mesures appropriées pour garantir un niveau de protection suffisant de vos données, telles que : s'orienter vers des pays dits « sûrs », c'est-à-dire offrant une protection importante de vos données. Demander les autorisations nécessaires auprès de l'Autorité de contrôle avant toute collecte de données si celle-ci l'exige selon les pays. Obtenir des garanties de sécurisation et de confidentialité de la part des sous-traitants, par exemple, en imposant des clauses contractuelles strictes, en se réservant la possibilité de les contrôler régulièrement et en menant des audits. Sécurité et confidentialité des données à caractère personnel collectées La sécurité et la confidentialité des données personnelles que vous nous confiez, est une priorité pour nous. En effet, nous veillons à prendre toutes les mesures techniques et organisationnelles utiles au regard de la nature des données personnelles que vous nous communiquez et des risques présentés par leur traitement. Ceci afin de préserver la sécurité de vos données personnelles et, notamment, empêcher qu'elles soient déformées, détruites, endommagées, ou que des tiers non autorisés y aient accès. À cette fin, nous avons mis en place des mesures techniques telles que : La sécurisation des accès aux données du site. Nous nous assurons que le site et les technologies qui le compose soient toujours à jour des dernières mises à jour de sécurité. Nous contrôlons de manière rigoureuse l'accès aux données. L'utilisation de modules et de différentes techniques afin de sécuriser le site en lui-même et des mesures organisationnelles telles : Qu'un accès restreint au serveur, limité aux équipes compétentes. Une gestion rigoureuse des accès au code source du site, ainsi qu'à la base de données. Un contrôle régulier que les points ci-dessous sont correctement appliqués. La sécurité et la confidentialité des données personnelles reposent également sur les bonnes pratiques de chacun. Ainsi, nous vous invitons à ne pas communiquer vos identifiant et mot de passe à des tiers, à vous déconnecter systématiquement de votre profil et de votre compte client (notamment en cas de comptes liés), à fermer la fenêtre de votre navigateur à l'issue de votre session, particulièrement si vous accédez à Internet depuis un poste informatique partagé avec d'autres personnes, et à ne pas enregistrer vos identifiant et mot de passe dans votre navigateur. Vous éviterez ainsi que d'autres utilisateurs accèdent à vos informations personnelles.
                </p>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Term;
