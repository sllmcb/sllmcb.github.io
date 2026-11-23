/* =====================================================================
   MÉTHODE · REPÈRES · AUTEURS · PROGRAMME
   ===================================================================== */

window.PHILO = window.PHILO || {};

/* ───────────── MÉTHODE (même format qu'un chapitre) ───────────── */
PHILO.methode = {
  id: `methode`,
  label: `Méthode`,
  num: `✦`,
  titre: `La <em>méthode</em> du bac`,
  court: `Méthode`,
  sousTitre: `Les outils du classeur pour réussir la dissertation et l’explication de texte.`,
  couleur: [`#141310`, `#EEEAE0`],
  essentiel: [
    `Chaque paragraphe suit <b>ADREC</b> : Argument, Développement, Référence, Exemple, Conclusion.`,
    `Au brouillon, un <b>tableau argumentatif</b> confronte thèses, objections et auteurs.`,
    `Problématiser : <b>Si… alors… Or… Donc…</b>`,
    `Explication de texte : thème, thèse, plan, problème, puis explication <b>linéaire</b> sans paraphrase.`
  ],
  sections: [
    {
      id: `adrec`,
      titre: `La méthode ADREC`,
      resume: `Chaque sous-partie se rédige en 5 temps : Argument, Développement, Référence, Exemple, Conclusion.`,
      blocs: [
        { steps: [
          [`A`, `Argument`, `Annoncez l’argument qui guide la sous-partie.`, `Pourquoi ?`],
          [`D`, `Développement`, `Développez le raisonnement pour le rendre clair, explicite et rigoureux.`, `C’est-à-dire ?`],
          [`R`, `Référence`, `Convoquez un philosophe nommé, son œuvre précise et son raisonnement.`, `Qui nous aide à penser cela ?`],
          [`E`, `Exemple`, `Illustrez par une situation concrète, littéraire, historique ou scientifique.`, `Comment ?`],
          [`C`, `Conclusion`, `Énoncez la conséquence directe pour le sujet.`, `En quoi cela répond-il au sujet ?`]
        ]},
        { key: `L’argument répond à « <b>Pourquoi ?</b> », la conclusion à « <b>En quoi cela répond au sujet ?</b> ». Sans ces deux phrases, le paragraphe n’avance pas.` }
      ]
    },
    {
      id: `tableau`,
      titre: `Le tableau argumentatif au brouillon`,
      resume: `Avant de rédiger, on organise la confrontation des thèses. Exemple : « Peut-on se connaître soi-même ? »`,
      blocs: [
        { table: {
          head: [`Thèse (oui)`, `Antithèse (non)`, `Auteurs`, `Analyse`],
          rows: [
            [`Accès intérieur immédiat et privilégié, inaccessible aux témoins extérieurs.`, `Connaître suppose une distance sujet / objet : on ne peut être juge et partie.`, `Descartes / Comte`, `Le cogito pose la certitude de la pensée ; Comte montre l’impossibilité de l’introspection.`],
            [`Réflexivité : l’esprit peut penser ses propres représentations.`, `Opacité psychique : passions incontrôlées, troubles, rêves énigmatiques.`, `Leibniz`, `Les petites perceptions : des perceptions sans conscience.`],
            [`« Connais-toi toi-même » : un impératif de sagesse.`, `La médiation d’autrui est indispensable : le regard de l’autre révèle ce qui m’échappe.`, `Hegel`, `La conscience de soi passe par l’extériorisation et la reconnaissance.`],
            [`La mémoire assure la permanence de l’identité.`, `Pas de noyau fixe : le moi n’est qu’un flux d’impressions.`, `Hume`, `Réfutation du moi substantiel.`],
            [`Synthèse : une conquête progressive de lucidité.`, `« Le moi n’est pas maître dans sa propre maison. »`, `Freud`, `La vie psychique excède la conscience.`]
          ]
        }}
      ]
    },
    {
      id: `problematiser`,
      titre: `La formule magique de problématisation`,
      resume: `Si [thèse évidente], alors [conséquence]. Or [limite]. Donc [problème].`,
      blocs: [
        { formula: [
          [`Si`, `[thèse évidente, première]`],
          [`alors`, `[conséquence logique]`],
          [`Or`, `[limite, contradiction, aporie]`],
          [`Donc`, `[le problème central à résoudre]`]
        ]},
        { h: `Exemple : « Peut-on se connaître soi-même ? »` },
        { formula: [
          [`Si`, `la conscience semble nous accorder une proximité immédiate avec nous-mêmes,`],
          [`alors`, `notre intériorité devrait être parfaitement transparente et accessible.`],
          [`Or`, `nous sommes sans cesse confrontés à nos aveuglements, nos contradictions et à la méconnaissance de nos mobiles réels.`],
          [`Donc`, `la connaissance de soi est-elle une évidence accessible, ou une conquête problématique qui passe par autrui et par le monde ?`]
        ]}
      ]
    },
    {
      id: `flash`,
      titre: `Entraînement flash : « Avons-nous le devoir d’être heureux ? »`,
      resume: `Repérer les présupposés et les enjeux avant de problématiser.`,
      blocs: [
        { cards: [
          { k: `Présupposés`, v: `Le bonheur relèverait d’une <b>obligation morale</b> (et pas d’un simple désir naturel), et il serait accessible par un effort de la volonté.` },
          { k: `Enjeux`, v: `La frontière entre le <b>devoir</b> (désintéressé, universel) et le <b>désir</b> de bonheur (particulier). Risque d’une injonction sociale culpabilisante dans une culture de la performance.` }
        ]},
        { key: `<b>Problématique :</b> si le bonheur est la fin que tout homme poursuit naturellement (Aristote), comment pourrait-il être prescrit comme une dette morale (Kant), sans devenir un fardeau tyrannique face aux contingences tragiques de l’existence ?` }
      ]
    },
    {
      id: `explication`,
      titre: `L’explication de texte`,
      resume: `Introduction en 4 éléments, puis explication linéaire : suivre le texte sans le paraphraser.`,
      blocs: [
        { h: `1 · Dégager les quatre éléments de l’introduction` },
        { cards: [
          { k: `Le thème`, v: `L’objet général de la réflexion (la liberté, l’inconscient, la vérité…).` },
          { k: `La thèse`, v: `La réponse précise et argumentée de l’auteur au problème.` },
          { k: `Le plan`, v: `Les étapes, les articulations logiques par lesquelles l’auteur démontre.` },
          { k: `Le problème`, v: `La question disputée à laquelle le texte répond (ex. : rationalisme cartésien contre scepticisme).` }
        ]},
        { h: `2 · L’explication linéaire` },
        { ol: [
          `Suivre scrupuleusement le mouvement du texte, <b>sans paraphraser</b>.`,
          `Définir précisément chaque <b>concept</b> technique.`,
          `Expliciter les <b>connecteurs logiques</b> : car, or, mais, d’où, donc.`,
          `Ne jamais séparer le <b>fond</b> de l’analyse de la <b>forme</b> argumentative.`
        ]}
      ]
    }
  ]
};

/* ───────────── REPÈRES ───────────── */
PHILO.reperes = [
  { t: `Absolu / Relatif`, d: `<b>Absolu</b> : ne dépend d’aucune condition extérieure pour exister ou être vrai. <b>Relatif</b> : dépend d’un terme de référence, d’un contexte ou d’une relation.` },
  { t: `Abstrait / Concret`, d: `<b>Abstrait</b> : isolé par la pensée (une idée, un concept universel). <b>Concret</b> : appartient au monde sensible, observable.` },
  { t: `En acte / En puissance`, d: `<b>En puissance</b> : une potentialité non encore réalisée (la graine par rapport à l’arbre). <b>En acte</b> : pleinement accompli, effectif.` },
  { t: `Analyse / Synthèse`, d: `<b>Analyse</b> : décomposer un tout complexe en éléments simples. <b>Synthèse</b> : recomposer un tout cohérent à partir d’éléments séparés.` },
  { t: `Concept / Image / Métaphore`, d: `<b>Concept</b> : représentation intellectuelle abstraite et générale. <b>Image</b> : représentation sensible concrète. <b>Métaphore</b> : transfert analogique de sens d’un domaine à un autre.` },
  { t: `Contingent / Nécessaire`, d: `<b>Contingent</b> : pourrait ne pas être ou être autrement. <b>Nécessaire</b> : ne peut pas ne pas être, ni être autrement.` },
  { t: `Croire / Savoir`, d: `<b>Croire</b> : tenir pour vrai sans preuve objective. <b>Savoir</b> : certitude fondée rationnellement et vérifiée.` },
  { t: `Essentiel / Accidentel`, d: `<b>Essentiel</b> : appartient à la nature d’une chose ; si on le retire, elle cesse d’être ce qu’elle est. <b>Accidentel</b> : peut changer sans altérer son identité.` },
  { t: `Exemple / Preuve`, d: `<b>Exemple</b> : illustre par un cas particulier, sans démontrer. <b>Preuve</b> : valide logiquement ou empiriquement la vérité d’une thèse.` },
  { t: `Expliquer / Comprendre`, d: `<b>Expliquer</b> : rattacher un phénomène à ses causes (sciences de la nature). <b>Comprendre</b> : saisir le sens, les intentions, les fins d’une action (sciences humaines).` },
  { t: `En fait / En droit`, d: `<b>En fait</b> : ce qui est constaté dans la réalité. <b>En droit</b> : ce qui est légitime, juste ou prescrit par une norme.` },
  { t: `Formel / Matériel`, d: `<b>Formel</b> : la structure logique, les règles, sans égard au contenu. <b>Matériel</b> : le contenu concret, les données sensibles ou factuelles.` },
  { t: `Genre / Espèce / Individu`, d: `<b>Genre</b> : classe générale regroupant des espèces. <b>Espèce</b> : sous-classe aux caractères communs. <b>Individu</b> : l’être singulier, indivisible.` },
  { t: `Hypothèse / Conséquence / Conclusion`, d: `<b>Hypothèse</b> : posée provisoirement pour en tirer les effets. <b>Conséquence</b> : ce qui découle des prémisses. <b>Conclusion</b> : le résultat final d’une démonstration.` },
  { t: `Idéal / Réel`, d: `<b>Idéal</b> : n’existe que dans la pensée, comme perfection ou norme visée. <b>Réel</b> : existe effectivement dans le monde.` },
  { t: `Identité / Égalité / Différence`, d: `<b>Identité</b> : rapport d’une chose à elle-même (A = A). <b>Égalité</b> : équivalence de deux grandeurs ou droits distincts selon une mesure commune. <b>Différence</b> : divergence de nature ou de qualité.` },
  { t: `Impossible / Possible`, d: `<b>Impossible</b> : implique une contradiction logique ou une incompatibilité matérielle. <b>Possible</b> : ne contredit aucune loi logique ou naturelle.` },
  { t: `Intuitif / Discursif`, d: `<b>Intuitif</b> : connaissance immédiate, saisie d’un seul regard de l’esprit. <b>Discursif</b> : procède par étapes et raisonnements successifs, par le langage.` },
  { t: `Légal / Légitime`, d: `<b>Légal</b> : conforme aux lois en vigueur dans un État. <b>Légitime</b> : conforme à la justice morale, à l’équité, au droit naturel.` },
  { t: `Médiat / Immédiat`, d: `<b>Immédiat</b> : se donne sans intermédiaire. <b>Médiat</b> : passe par un moyen, une médiation (ex. : le travail entre l’homme et la nature).` },
  { t: `Objectif / Subjectif / Intersubjectif`, d: `<b>Objectif</b> : vaut universellement, indépendamment du point de vue. <b>Subjectif</b> : dépend des états de conscience d’un individu. <b>Intersubjectif</b> : fait l’objet d’un accord entre plusieurs consciences.` },
  { t: `Obligation / Contrainte`, d: `<b>Contrainte</b> : force extérieure qui prive du libre arbitre. <b>Obligation</b> : devoir moral ou juridique reconnu par la raison, qui laisse la liberté de désobéir.` },
  { t: `Origine / Fondement`, d: `<b>Origine</b> : commencement dans le temps, historique ou empirique. <b>Fondement</b> : justification rationnelle, principe de validité en droit.` },
  { t: `Persuader / Convaincre`, d: `<b>Persuader</b> : s’adresser aux émotions et à l’imagination. <b>Convaincre</b> : utiliser des raisonnements et des arguments universels.` },
  { t: `Principe / Cause / Fin`, d: `<b>Principe</b> : point de départ théorique, loi première. <b>Cause</b> : ce qui produit un effet. <b>Fin</b> : le but visé, la raison d’être.` },
  { t: `Public / Privé`, d: `<b>Public</b> : la communauté des citoyens, l’État, le bien commun. <b>Privé</b> : l’intimité, la vie personnelle et familiale, les intérêts particuliers.` },
  { t: `Ressemblance / Analogie`, d: `<b>Ressemblance</b> : traits sensibles communs entre deux objets. <b>Analogie</b> : égalité de rapports entre quatre termes (A/B = C/D).` },
  { t: `Théorie / Pratique`, d: `<b>Théorie</b> : spéculation visant la connaissance désintéressée. <b>Pratique</b> : action visant à transformer le réel ou à se conduire moralement.` },
  { t: `Transcendant / Immanent`, d: `<b>Transcendant</b> : dépasse le monde, se situe au-delà (le Dieu créateur de Descartes). <b>Immanent</b> : réside à l’intérieur du monde (le Dieu-Nature de Spinoza : <i>Deus sive Natura</i>).` },
  { t: `Universel / Général / Particulier / Singulier`, d: `<b>Universel</b> : vaut pour tous, sans exception. <b>Général</b> : vaut dans la majorité des cas, avec des exceptions. <b>Particulier</b> : vaut pour quelques cas. <b>Singulier</b> : vaut pour un seul cas.` },
  { t: `Vrai / Probable / Certain`, d: `<b>Vrai</b> : conformité d’un jugement avec le réel ou la logique. <b>Probable</b> : assez d’apparence de vérité pour une adhésion raisonnable, sans certitude. <b>Certain</b> : assurance inébranlable devant une vérité démontrée.` }
];

/* ───────────── AUTEURS ÉTUDIÉS ───────────── */
/* ch : identifiants des chapitres où l'auteur apparaît
   match : nom tel qu'il apparaît dans la liste officielle du programme */
PHILO.auteurs = [
  { nom: `Socrate`, dates: `-470 / -399`, ch: [`philosophie`], match: `Socrate`,
    oeuvres: `N’a rien écrit — connu par Platon`,
    these: `La sagesse commence par la reconnaissance de son ignorance ; la maïeutique fait « accoucher » les esprits.`,
    cite: `Je sais que je ne sais rien.` },
  { nom: `Platon`, dates: `-428 / -348`, ch: [`philosophie`, `liberte`], match: `Platon`,
    oeuvres: `<i>Apologie de Socrate</i>, <i>Gorgias</i>`,
    these: `Rapporte et défend le procès de Socrate. Contre Calliclès : la licence rend esclave de ses désirs.`,
    cite: `Celui qui multiplie ses désirs est un tonneau percé.` },
  { nom: `René Descartes`, dates: `1596 – 1650`, ch: [`conscience`, `liberte`], match: `Descartes`,
    oeuvres: `<i>Discours de la méthode</i> (1637), <i>Méditations métaphysiques</i> (1641)`,
    these: `Le doute mène au cogito : le sujet est une chose qui pense, transparente à elle-même, dotée d’une volonté infinie.`,
    cite: `Je pense, donc je suis.` },
  { nom: `Auguste Comte`, dates: `1798 – 1857`, ch: [`conscience`], match: `Comte`,
    oeuvres: `<i>Cours de philosophie positive</i> (1830-1842)`,
    these: `L’introspection est une illusion : l’esprit ne peut pas s’observer lui-même.`,
    cite: `L’individu pensant ne saurait se partager en deux.` },
  { nom: `David Hume`, dates: `1711 – 1776`, ch: [`conscience`], match: `Hume`,
    oeuvres: `<i>Traité de la nature humaine</i> (1739-1740)`,
    these: `Le moi substantiel est une fiction : il n’y a qu’un flux de perceptions.`,
    cite: `L’esprit est une sorte de théâtre.` },
  { nom: `G.W.F. Hegel`, dates: `1770 – 1831`, ch: [`conscience`], match: `Hegel`,
    oeuvres: `<i>Phénoménologie de l’esprit</i> (1807), <i>Cours d’esthétique</i>`,
    these: `On prend conscience de soi en transformant le monde et par la reconnaissance d’autrui (maître et esclave).`,
    cite: `La conscience de soi n’atteint sa vérité que par la reconnaissance d’une autre conscience de soi.` },
  { nom: `Sigmund Freud`, dates: `1856 – 1939`, ch: [`conscience`], match: `Freud`,
    oeuvres: `<i>L’Interprétation du rêve</i> (1900), <i>Le Moi et le Ça</i> (1923)`,
    these: `L’essentiel de la vie psychique est inconscient ; le sujet n’est pas transparent à lui-même.`,
    cite: `Le moi n’est pas maître dans sa propre maison.` },
  { nom: `G.W. Leibniz`, dates: `1646 – 1716`, ch: [`conscience`], match: `Leibniz`,
    oeuvres: `<i>Nouveaux Essais sur l’entendement humain</i> (1704)`,
    these: `Les petites perceptions : une infinité d’impressions inconscientes sous la conscience.`,
    cite: `Le bruit des vagues est fait de mille petits bruits imperceptibles.` },
  { nom: `Karl Popper`, dates: `1902 – 1994`, ch: [`conscience`], match: `Popper`,
    oeuvres: `<i>La Logique de la découverte scientifique</i> (1934), <i>Conjectures et réfutations</i> (1963)`,
    these: `Une théorie n’est scientifique que si elle est réfutable : la psychanalyse ne l’est pas.`,
    cite: `Le critère de scientificité, c’est la falsifiabilité.` },
  { nom: `Baruch Spinoza`, dates: `1632 – 1677`, ch: [`liberte`], match: `Spinoza`,
    oeuvres: `<i>Éthique</i> (1677), <i>Lettre à Schuller</i> (1674)`,
    these: `Le libre arbitre est une illusion ; être libre, c’est comprendre la nécessité.`,
    cite: `Les hommes se croient libres parce qu’ils ignorent les causes qui les déterminent.` },
  { nom: `Jean-Paul Sartre`, dates: `1905 – 1980`, ch: [`liberte`], match: `Sartre`,
    oeuvres: `<i>L’existentialisme est un humanisme</i> (1946), <i>Cahiers pour une morale</i> (1948)`,
    these: `L’existence précède l’essence : l’homme est condamné à être libre, sans excuse.`,
    cite: `L’homme est condamné à être libre.` },
  { nom: `Épicure`, dates: `-341 / -270`, ch: [`liberte`], match: `Épicure`,
    oeuvres: `<i>Lettre à Ménécée</i>`,
    these: `La liberté passe par la modération des désirs : viser l’aponie et l’ataraxie.`,
    cite: `Distinguer les désirs naturels et nécessaires des autres.` },
  { nom: `Emmanuel Kant`, dates: `1724 – 1804`, ch: [`liberte`], match: `Kant`,
    oeuvres: `<i>Critique de la raison pure</i>, <i>Critique de la raison pratique</i>`,
    these: `Indémontrable dans la nature, la liberté est un postulat nécessaire de la morale.`,
    cite: `Tu dois, donc tu peux.` }
];

/* ───────────── PROGRAMME OFFICIEL ───────────── */
PHILO.programme = {
  perspectives: [
    { nom: `L’existence humaine et la culture`, notions: [`La conscience`, `L’inconscient`, `Le temps`, `Le langage`, `L’art`, `Le travail`, `La technique`, `La religion`] },
    { nom: `La morale et la politique`, notions: [`La liberté`, `Le devoir`, `Le bonheur`, `La justice`, `L’État`] },
    { nom: `La connaissance`, notions: [`La vérité`, `La raison`, `La science`, `La nature`] }
  ],
  auteurs: [
    { periode: `Antiquité et Moyen Âge`, noms: [`Les présocratiques`, `Platon`, `Aristote`, `Zhuangzi`, `Épicure`, `Cicéron`, `Lucrèce`, `Sénèque`, `Épictète`, `Marc Aurèle`, `Nāgārjuna`, `Sextus Empiricus`, `Plotin`, `Augustin`, `Avicenne`, `Anselme`, `Averroès`, `Maïmonide`, `Thomas d’Aquin`, `Guillaume d’Ockham`] },
    { periode: `Époque moderne`, noms: [`N. Machiavel`, `M. de Montaigne`, `F. Bacon`, `T. Hobbes`, `R. Descartes`, `B. Pascal`, `J. Locke`, `B. Spinoza`, `N. Malebranche`, `G. W. Leibniz`, `G. Vico`, `G. Berkeley`, `Montesquieu`, `D. Hume`, `J.-J. Rousseau`, `D. Diderot`, `É. de Condillac`, `A. Smith`, `E. Kant`, `J. Bentham`] },
    { periode: `Époque contemporaine`, noms: [`G.W.F. Hegel`, `A. Schopenhauer`, `A. Comte`, `A.-A. Cournot`, `L. Feuerbach`, `A. de Tocqueville`, `J.-S. Mill`, `S. Kierkegaard`, `K. Marx`, `F. Engels`, `W. James`, `F. Nietzsche`, `S. Freud`, `É. Durkheim`, `H. Bergson`, `E. Husserl`, `M. Weber`, `Alain`, `M. Mauss`, `B. Russell`, `K. Jaspers`, `G. Bachelard`, `M. Heidegger`, `L. Wittgenstein`, `W. Benjamin`, `K. Popper`, `V. Jankélévitch`, `H. Jonas`, `R. Aron`, `J.-P. Sartre`, `H. Arendt`, `E. Levinas`, `S. de Beauvoir`, `C. Lévi-Strauss`, `M. Merleau-Ponty`, `S. Weil`, `J. Hersch`, `P. Ricœur`, `E. Anscombe`, `I. Murdoch`, `J. Rawls`, `G. Simondon`, `M. Foucault`, `H. Putnam`] }
  ]
};
