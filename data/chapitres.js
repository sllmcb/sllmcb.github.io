/* =====================================================================
   CHAPITRES DU COURS
   ---------------------------------------------------------------------
   Pour ajouter un chapitre : copie un bloc { ... } ci-dessous, colle-le
   à la fin du tableau PHILO.chapitres et remplis-le. Tout le reste du
   site (accueil, sommaire, flashcards, quiz, citations, recherche)
   se met à jour tout seul. Mode d'emploi détaillé : README.md
   ===================================================================== */

window.PHILO = window.PHILO || {};

PHILO.config = {
  annee: `2026–2027`,
  classe: `Terminale`,
  bacBlanc: `2026-12-02`          // date du bac blanc (AAAA-MM-JJ)
};

PHILO.chapitres = [

/* ───────────────────────── INTRODUCTION ───────────────────────── */
{
  id: `philosophie`,
  label: `Introduction`,
  num: `00`,
  titre: `Qu’est-ce que <em>philosopher</em> ?`,
  court: `Introduction · Socrate`,
  sousTitre: `La démarche philosophique, Socrate et l’Apologie de Platon.`,
  couleur: [`#B8741A`, `#E3A447`],
  notions: [],
  essentiel: [
    `Philosophie = <b>philein</b> (aimer) + <b>sophia</b> (sagesse) : une quête de vérité jamais achevée.`,
    `Socrate détourne la réflexion de la nature vers <b>l’homme</b> et invente la <b>maïeutique</b>.`,
    `« Je sais que je ne sais rien » : reconnaître son ignorance, c’est la vraie sagesse.`,
    `Condamné à mort en -399, Socrate reste fidèle à sa mission : <b>le soin de l’âme</b>.`
  ],
  sections: [
    {
      id: `naissance`,
      titre: `La naissance de la philosophie`,
      resume: `Philosopher, c’est aimer la sagesse sans prétendre la posséder : une rupture avec le mythe.`,
      blocs: [
        { def: `Philosophie`, d: `Du grec <b>philein</b> (aimer, désirer) et <b>sophia</b> (sagesse, savoir). Une quête <b>inachevée</b> de sagesse et de vérité.` },
        { p: `Le philosophe n’est ni sage ni savant : il sait qu’il ne sait pas tout. Il utilise sa <b>raison</b> pour examiner ses opinions, éliminer les erreurs et s’avancer vers la vérité.` },
        { cards: [
          { k: `Dimension théorique`, v: `Aimer le savoir, avoir soif d’apprendre, comprendre les principes du réel.` },
          { k: `Dimension pratique`, v: `Conformer son existence à ses principes rationnels : être en accord avec sa propre pensée.` }
        ]},
        { h: `Des présocratiques à Socrate` },
        { p: `Les <b>présocratiques</b> (Thalès, Héraclite, Parménide, Démocrite) sont appelés « physiciens » (<i>phusis</i> = la nature). Ils remplacent les récits mythologiques par des cosmologies rationnelles : le monde s’explique par des principes naturels, pas par le caprice des divinités.` },
        { key: `Socrate opère un <b>recentrement anthropologique</b> : il détourne la réflexion de la nature physique vers l’homme, les valeurs morales, la justice et la vérité intérieure.` }
      ]
    },
    {
      id: `socrate`,
      titre: `Socrate et la maïeutique`,
      resume: `Socrate n’enseigne aucune doctrine : il fait « accoucher » les esprits par le dialogue.`,
      blocs: [
        { p: `Socrate (-470 / -399) incarne une philosophie <b>en acte</b>. Il n’a rien écrit : sa pensée nous est transmise par ses disciples, d’abord <b>Platon</b>. Vivant simplement, nu-pieds, vêtu d’un manteau usé, il parcourt l’agora d’Athènes pour interroger ses concitoyens.` },
        { def: `Maïeutique`, d: `L’« art d’accoucher les esprits », sur le modèle de sa mère <b>Phénarète, sage-femme</b>. Par le dialogue et l’interrogation, Socrate aide ses interlocuteurs à enfanter la vérité qu’ils portent en eux, ou à reconnaître leur propre ignorance.` },
        { q: `Je sais que je ne sais rien.`, src: `Socrate` },
        { p: `Ce paradoxe s’oppose à la <b>doxa</b> (l’opinion commune, non examinée). En reconnaissant son ignorance, Socrate se protège de l’illusion du faux savoir.` },
        { q: `Nul n’est méchant volontairement.`, src: `Socrate` },
        { key: `<b>Intellectualisme moral</b> : le mal vient de l’ignorance du véritable bien. Celui qui commet l’injustice croit, à tort, agir dans son intérêt.` }
      ]
    },
    {
      id: `proces`,
      titre: `L’Apologie : le procès de Socrate`,
      resume: `Deux groupes d’accusateurs : les officiels (impiété, corruption de la jeunesse) et, plus redoutables, les anciens (les rumeurs).`,
      blocs: [
        { p: `L’<i>Apologie de Socrate</i> de Platon rapporte le discours de Socrate devant le tribunal des héliastes, à Athènes, en -399.` },
        { key: `Le titre a un <b>double sens</b> : une <i>apologia</i> est un discours de défense judiciaire, mais le texte est aussi un <b>éloge</b> de Socrate par Platon, pour lui rendre justice et immortaliser son enseignement.` },
        { h: `1 · Les accusateurs récents (officiels)` },
        { cards: [
          { k: `Mélétos`, v: `Représente les poètes.` },
          { k: `Anytos`, v: `Homme politique influent, artisan tanneur, adversaire fanatique des sophistes.` },
          { k: `Lycon`, v: `Représente les rhéteurs (les orateurs).` }
        ]},
        { ul: [
          `<b>Accusations officielles :</b> impiété (ne pas reconnaître les dieux de la Cité et introduire de nouvelles divinités, le <i>daimonion</i>) et <b>corruption de la jeunesse</b>.`,
          `<b>Sous-texte politique :</b> on lui reproche ses liens avec des oligarques qui ont trahi la démocratie — <b>Critias</b> (l’un des Trente Tyrans) et <b>Alcibiade</b> — et sa critique des institutions démocratiques.`
        ]},
        { h: `2 · Les accusateurs anciens (officieux, plus redoutables)` },
        { ul: [
          `Ce sont les <b>rumeurs populaires anonymes</b> diffusées depuis des décennies. Seul nommé : le poète comique <b>Aristophane</b>, auteur des <i>Nuées</i> (423 av. J.-C.), où Socrate est caricaturé la tête dans les nuages.`,
          `<b>Accusations :</b> être un physicien impie qui scrute le ciel et la terre, et un sophiste qui rend plus forte la cause la plus faible, contre de l’argent.`,
          `<b>Pourquoi plus dangereux ?</b> Ils ont influencé les juges dès l’enfance, quand ils étaient crédules ; leurs arguments, anonymes, sont impossibles à réfuter directement.`
        ]},
        { h: `La réfutation de Socrate` },
        { ol: [
          `Il ne s’est <b>jamais mêlé de physique</b>.`,
          `Il ne réclame <b>aucun salaire</b> pour parler : sa pauvreté en témoigne.`,
          `Son <i>daimonion</i> prouve qu’il croit aux divinités : <b>Mélétos se contredit</b> en l’accusant à la fois d’athéisme absolu et de créer de nouveaux dieux.`
        ]}
      ]
    },
    {
      id: `oracle`,
      titre: `L’oracle de Delphes et l’enquête`,
      resume: `Le plus sage est celui qui sait que sa sagesse n’est rien : d’où la mission de Socrate.`,
      blocs: [
        { p: `Tout commence par une prophétie de la <b>Pythie de Delphes</b>, rendue à son ami <b>Chéréphon</b> : personne n’est plus sage que Socrate. Perplexe — il sait ne détenir aucune sagesse divine (<i>sophia</i>) — Socrate interroge ceux qui passent pour savants afin de comprendre l’énigme.` },
        { ol: [
          `<b>Les hommes politiques.</b> Celui qu’il interroge se croit savant sans l’être ; en lui montrant son ignorance, Socrate s’attire sa haine. Le politique maîtrise la flatterie pour séduire le peuple, mais ignore l’essence de la justice.`,
          `<b>Les poètes.</b> Ils composent non par savoir rationnel mais par une inspiration divine involontaire (<i>enthousiasme</i>). Interrogés sur leurs propres textes, les spectateurs les expliquent mieux qu’eux.`,
          `<b>Les artisans.</b> Eux possèdent un savoir authentique et vérifiable (la <i>technè</i> : le cordonnier sait faire des chaussures). Mais, forts de cette maîtrise, ils se croient experts dans les affaires les plus hautes (politique, vertu, justice). Cette prétention annule leur sagesse.`
        ]},
        { key: `Seul le dieu possède la vraie sagesse. L’oracle a pris Socrate comme exemple pour dire aux hommes : <b>le plus sage d’entre vous est celui qui, comme Socrate, a reconnu que sa sagesse n’est rien</b> face à la vérité absolue.` },
        { p: `Socrate se découvre investi d’une <b>mission divine</b> : éveiller ses concitoyens à la conscience de soi et au <b>soin de leur âme</b> plutôt qu’à l’accumulation des richesses.` },
        { ex: `Socrate se compare à un <b>taon</b> qui pique un grand cheval noble mais endormi : la cité d’Athènes.` }
      ]
    },
    {
      id: `mort`,
      titre: `La mort et la critique de la démocratie`,
      resume: `Condamné, Socrate reste serein : craindre la mort, c’est prétendre savoir ce qu’on ignore.`,
      blocs: [
        { p: `Déclaré coupable à une courte majorité puis condamné à mort, Socrate garde une <b>sérénité inébranlable</b>.` },
        { h: `Les deux hypothèses sur la mort` },
        { cards: [
          { k: `Soit un néant absolu`, v: `Comme une nuit de sommeil profond et sans rêve : un gain paisible par rapport aux tourments de l’existence.` },
          { k: `Soit une migration de l’âme`, v: `Vers un lieu où l’on rencontre les vrais juges intègres (Minos, Rhadamanthe) et les grands esprits (Homère, Hésiode, Ulysse), avec qui il pourra continuer d’interroger sans risquer la mort.` }
        ]},
        { h: `Le principe d’intégrité` },
        { p: `Craindre la mort est encore une forme de fausse sagesse : c’est <b>prétendre savoir ce que l’on ignore</b>.` },
        { q: `Le pouvoir du méchant ne peut nuire à l’homme de bien.`, src: `Socrate, <i>Apologie</i>` },
        { key: `La vraie ruine d’un homme n’est pas la mort du corps, mais la <b>dégradation de son âme par l’injustice</b>.` },
        { h: `La critique de la démocratie athénienne` },
        { p: `Le régime démocratique est vulnérable quand le peuple assemblé délibère sous l’emprise des <b>passions</b>, de la <b>rhétorique sophistique</b> et de jugements expéditifs rendus en une seule journée.` },
        { ul: [
          `Prytane, il s’est opposé au procès illégal et collectif des stratèges des <b>Arginuses</b>.`,
          `Sous la tyrannie des Trente, il a refusé de livrer <b>Léon de Salamine</b>.`
        ]},
        { key: `La philosophie authentique est incompatible avec la <b>démagogie</b>.` }
      ]
    }
  ],
  flashcards: [
    [`D’où vient le mot « philosophie » ?`, `Du grec <b>philein</b> (aimer, désirer) et <b>sophia</b> (sagesse, savoir) : une quête de sagesse jamais achevée.`],
    [`Quelles sont les deux dimensions de la philosophie ?`, `<b>Théorique</b> : aimer le savoir, comprendre le réel.<br><b>Pratique</b> : vivre en accord avec ses principes rationnels.`],
    [`Pourquoi appelle-t-on les présocratiques des « physiciens » ?`, `Ils étudient la <i>phusis</i> (la nature) et expliquent le monde par des principes naturels, non par les mythes.`],
    [`Qu’est-ce que le « recentrement anthropologique » de Socrate ?`, `Il détourne la réflexion de la nature physique vers <b>l’homme</b> : morale, justice, vérité intérieure.`],
    [`Qu’est-ce que la maïeutique ?`, `L’art d’accoucher les esprits : par le dialogue, aider l’autre à enfanter la vérité qu’il porte en lui ou à reconnaître son ignorance. (Sa mère, Phénarète, était sage-femme.)`],
    [`Qu’est-ce que la doxa ?`, `L’opinion commune, non examinée. Le « je sais que je ne sais rien » s’y oppose.`],
    [`Que signifie « Nul n’est méchant volontairement » ?`, `<b>Intellectualisme moral</b> : le mal vient de l’ignorance du vrai bien ; l’injuste croit à tort servir son intérêt.`],
    [`Quels sont les deux sens du titre « Apologie » ?`, `1. Un discours de <b>défense judiciaire</b>.<br>2. Un <b>éloge</b> de Socrate par Platon.`],
    [`Qui sont les accusateurs récents et que reprochent-ils ?`, `<b>Mélétos</b> (poètes), <b>Anytos</b> (politique, tanneur), <b>Lycon</b> (rhéteurs). Accusations : <b>impiété</b> et <b>corruption de la jeunesse</b>.`],
    [`Pourquoi les accusateurs anciens sont-ils plus dangereux ?`, `Ce sont des rumeurs anonymes entendues par les juges dès l’enfance : impossibles à réfuter directement.`],
    [`Quelle œuvre a caricaturé Socrate ?`, `<i>Les Nuées</i> d’<b>Aristophane</b> (423 av. J.-C.) : Socrate y a la tête dans les nuages.`],
    [`Quelle contradiction Socrate relève-t-il chez Mélétos ?`, `Il l’accuse à la fois d’<b>athéisme absolu</b> et d’<b>introduire de nouveaux dieux</b> (le daimonion).`],
    [`Que répond l’oracle de Delphes à Chéréphon ?`, `Que personne n’est plus sage que Socrate.`],
    [`Quelle est l’erreur des artisans selon Socrate ?`, `Ils ont un vrai savoir technique (<i>technè</i>) mais se croient aussi experts en politique, vertu et justice.`],
    [`Que signifie finalement l’oracle ?`, `Le plus sage est celui qui, comme Socrate, <b>reconnaît que sa sagesse n’est rien</b>.`],
    [`À quoi Socrate se compare-t-il ?`, `À un <b>taon</b> qui pique un grand cheval noble mais endormi : Athènes.`],
    [`Quelles sont les deux hypothèses de Socrate sur la mort ?`, `Soit un <b>néant</b> (sommeil sans rêve), soit une <b>migration de l’âme</b> vers les vrais juges et les grands esprits.`],
    [`Pourquoi craindre la mort est-il une fausse sagesse ?`, `C’est prétendre savoir ce que l’on ignore.`],
    [`Deux actes de courage politique de Socrate ?`, `Il s’oppose au procès illégal des stratèges des <b>Arginuses</b> ; il refuse de livrer <b>Léon de Salamine</b> aux Trente.`]
  ],
  quiz: [
    { q: `Que signifie « sophia » ?`, c: [`La sagesse, le savoir`, `L’amour`, `La nature`, `L’opinion`], e: `Philein = aimer ; sophia = sagesse, savoir.` },
    { q: `Les présocratiques sont appelés « physiciens » car…`, c: [`ils étudient la phusis, la nature`, `ils pratiquent la médecine`, `ils font des expériences en laboratoire`, `ils s’opposent à Socrate`], e: `Ils expliquent le monde par des principes naturels et non par les mythes.` },
    { q: `La maïeutique, c’est…`, c: [`l’art d’accoucher les esprits`, `l’art de persuader une foule`, `une rhétorique payante`, `la science des dieux`], e: `Sur le modèle de sa mère Phénarète, sage-femme.` },
    { q: `« Je sais que je ne sais rien » s’oppose à…`, c: [`la doxa`, `la sophia`, `la technè`, `la phusis`], e: `La doxa est l’opinion commune non examinée.` },
    { q: `Lequel n’est PAS un accusateur récent de Socrate ?`, c: [`Aristophane`, `Mélétos`, `Anytos`, `Lycon`], e: `Aristophane fait partie des accusateurs anciens, à travers sa comédie Les Nuées.` },
    { q: `Pourquoi les accusateurs anciens sont-ils les plus redoutables ?`, c: [`Rumeurs anonymes entendues dès l’enfance, impossibles à réfuter`, `Ils sont plus nombreux au tribunal`, `Ils ont des preuves écrites`, `L’oracle les soutient`], e: `On ne peut pas répondre à une rumeur sans visage.` },
    { q: `Quelle contradiction Socrate relève-t-il chez Mélétos ?`, c: [`L’accuser d’athéisme ET d’introduire de nouveaux dieux`, `L’accuser d’être riche ET pauvre`, `L’accuser d’être physicien ET poète`, `L’accuser d’être démocrate ET tyran`], e: `Le daimonion prouve qu’il croit aux divinités.` },
    { q: `Que reproche Socrate aux artisans ?`, c: [`Se croire experts dans les affaires les plus hautes`, `N’avoir aucun savoir`, `Faire payer leurs leçons`, `Être inspirés par les dieux`], e: `Leur savoir technique est réel, mais leur prétention l’annule.` },
    { q: `Selon Socrate, les poètes composent…`, c: [`par une inspiration divine involontaire`, `par un savoir rationnel`, `pour l’argent`, `en imitant les artisans`], e: `C’est l’« enthousiasme » : ils ne savent pas expliquer leurs propres textes.` },
    { q: `À quel animal Socrate se compare-t-il ?`, c: [`Un taon`, `Un cheval`, `Une chouette`, `Un serpent`], e: `Un taon qui pique le grand cheval noble mais endormi qu’est Athènes.` },
    { q: `Pour Socrate, craindre la mort, c’est…`, c: [`prétendre savoir ce qu’on ignore`, `être sage`, `respecter les dieux`, `aimer la vie`], e: `Personne ne sait ce qu’est la mort.` },
    { q: `Sous la tyrannie des Trente, Socrate refuse de…`, c: [`livrer Léon de Salamine`, `juger les stratèges des Arginuses`, `quitter Athènes`, `payer une amende`], e: `Il s’opposait aussi, sous la démocratie, au procès illégal des stratèges des Arginuses.` }
  ]
},

/* ───────────────────────── CHAPITRE 1 ───────────────────────── */
{
  id: `conscience`,
  label: `Chapitre 1`,
  num: `01`,
  titre: `La conscience <em>&amp;</em> l’inconscient`,
  court: `Ch. 1 · Conscience & inconscient`,
  sousTitre: `Peut-on se connaître soi-même ? Le cours suit le plan d’une dissertation, de Descartes à Sartre.`,
  couleur: [`#2E3BFF`, `#8A93FF`],
  notions: [`La conscience`, `L’inconscient`],
  essentiel: [
    `<b>I.</b> La conscience me donne accès à moi-même. <b>Descartes</b> : « je suis, j’existe », je suis <b>une chose qui pense</b>, transparente à elle-même. <b>Hegel</b> : la conscience de soi se construit par l’action sur le monde et la reconnaissance d’autrui.`,
    `<b>II.</b> Mais ce pouvoir est limité : <b>Comte</b> (l’introspection est une illusion), <b>Hume</b> (le moi n’est qu’un faisceau de perceptions), <b>Freud</b> (l’inconscient : « le Moi n’est pas maître dans sa propre maison »).`,
    `L’inconscient est contesté <b>au nom de la morale</b> (la 3ᵉ blessure narcissique) et <b>au nom de la science</b> (Popper : la psychanalyse n’est pas réfutable).`,
    `<b>III.</b> Se connaître, ce n’est pas découvrir un moi déjà fait, c’est <b>se construire</b> : l’examen de soi (<b>Socrate</b>), le choix (<b>Bergson</b>), le projet (<b>Sartre</b> : « l’existence précède l’essence »).`
  ],
  sections: [
    {
      id: `question`,
      partie: `Le sujet du chapitre`,
      titre: `Analyser le sujet : « Peut-on se connaître soi-même ? »`,
      resume: `Tout le chapitre suit le plan d’une dissertation. Voici comment la question est analysée en cours.`,
      blocs: [
        { p: `Le cours est construit comme une <b>dissertation modèle</b>. Avant les auteurs, il faut découvrir ce que la question cache : c’est l’étape indispensable de l’analyse.` },
        { h: `Analyse des termes` },
        { cards: [
          { k: `« Peut-on »`, v: `Deux sens : <b>est-il possible</b>, sommes-nous capables ? et <b>sommes-nous autorisés</b> ? Ex. : « Peut-on tout dire ? » explore les limites du langage et de la liberté d’expression.` },
          { k: `« On »`, v: `L’humain en général. Quelle faculté rend la connaissance de soi possible ? La <b>conscience</b>. Qu’est-ce qui la rend problématique ? Une partie de notre esprit nous échappe : l’<b>inconscient</b>.` },
          { k: `« Se connaître »`, v: `Savoir qui l’on est, ses limites, ses points forts et faibles. Distinguer la connaissance des croyances et des illusions. Interroger l’<b>identité personnelle</b> : innée ou acquise ? fixe ou changeante ?` },
          { k: `« Soi-même »`, v: `La difficulté propre : peut-on être à la fois le <b>sujet</b> qui connaît et l’<b>objet</b> qu’on cherche à connaître ? Avec ou sans l’aide d’autrui ?` }
        ]},
        { h: `Les présupposés du sujet` },
        { ul: [
          `La connaissance est possible.`,
          `On ne se connaît pas toujours : se connaître soi-même est rare.`,
          `On pense souvent se connaître : on cherche rarement à se connaître.`,
          `Il n’est exclu d’emblée ni que ce soit possible, ni que ce soit impossible.`
        ]},
        { p: `<b>Domaines</b> : psychologie, morale, politique.<br><b>Enjeux</b> : se connaître pour faire les meilleurs choix et s’épanouir (ce qui profite aussi à l’entourage). Se remettre en question rend meilleur et plus <b>libre</b> : on prend conscience de ce qui, en nous, nous est étranger (la société, les pensées toutes faites, les croyances limitantes).` },
        { h: `Le tableau des arguments` },
        { table: {
          head: [`Se connaître est possible, souhaitable`, `Se connaître est problématique`],
          rows: [
            [`La conscience est l’intuition qu’a l’esprit de ses états ou actes.`, `Connaître suppose de distinguer le sujet et l’objet : impossible ici d’être impartial, objectif.`],
            [`Je perçois en moi ce qui est inaccessible aux autres.`, `Expériences répétées de l’opacité de notre être : émotions, désirs, contradictions, rêves, TOC.`],
            [`Réflexivité : je me représente les choses et je réfléchis sur ces représentations.`, `Les autres me révèlent des aspects de moi qui m’échappent.`],
            [`« Connais-toi toi-même » est une injonction de sagesse. Or à l’impossible nul n’est tenu…`, `L’objet à connaître change sans cesse et il est libre : une connaissance stable est-elle possible ?`]
          ]
        }},
        { key: `<b>Problématique</b> : la conscience, faculté par laquelle l’homme accède immédiatement à ses états et actes de pensée, est-elle l’instrument nécessaire et suffisant d’une connaissance complète et définitive de soi ? Ou nous plonge-t-elle dans l’<b>illusion</b> d’une telle connaissance, partielle, superficielle, peut-être trompeuse ?` },
        { h: `Le plan du cours` },
        { ol: [
          `<b>I. En tant qu’être de conscience, j’accède à une certaine connaissance de moi-même.</b> A. Qu’est-ce que la conscience ? B. La conscience au fondement de la connaissance (Descartes). C. La constitution de la conscience de soi (Hegel).`,
          `<b>II. Les limites de la conscience comme pouvoir de connaissance.</b> A. Les limites de l’introspection (Comte). B. La remise en question du moi substantiel (Hume). C. L’hypothèse de l’inconscient psychique (Freud).`,
          `<b>III. Vers une meilleure connaissance de soi.</b> A. Le sens du « Connais-toi toi-même » (Socrate). B. La découverte du moi authentique (Bergson, Sartre).`
        ]},
        { p: `<b>Transition I → II</b> : il n’est pas rare de se surprendre, de faire ou dire des choses qui ne nous ressemblent pas. La conscience, comme pouvoir de connaissance, est-elle fiable ?<br><b>Transition II → III</b> : pourtant l’injonction de Socrate reste urgente si l’on veut faire les meilleurs choix de vie. Comment mieux se connaître ?` }
      ]
    },
    {
      id: `definir`,
      partie: `I · La conscience me fait connaître`,
      titre: `Qu’est-ce que la conscience ?`,
      resume: `L’intuition qu’a l’esprit de ses états et de ses actes : immédiate, réfléchie, conscience de soi… et conscience morale.`,
      blocs: [
        { h: `Comment sait-on qu’un être est conscient ?` },
        { ul: [
          `<b>Ses manifestations</b> : un comportement non mécanique, créatif, surprenant, intelligent. La parole est un signe de conscience… mais l’IA générative donne des signes trompeurs.`,
          `<b>Perdre conscience</b>, c’est être coupé du monde et de ses sensations. La conscience est <b>présence</b>, attention, concentration.`,
          `<b>Être inconscient des conséquences</b>, c’est ne pas les imaginer. La conscience est <b>anticipation</b>, projection dans le possible.`,
          `<b>Avoir la conscience tranquille</b>, c’est être en accord avec ses valeurs. La conscience relie au <b>passé</b> et assure la continuité de l’identité. Elle peut aussi se diviser et se condamner elle-même : la <b>culpabilité</b>.`
        ]},
        { cards: [
          { k: `Conscience psychologique`, v: `<i>Bewusstsein</i> en allemand, <i>consciousness</i> en anglais.` },
          { k: `Conscience morale`, v: `<i>Gewissen</i> en allemand, <i>conscience</i> en anglais.` }
        ]},
        { def: `Conscience (étymologie)`, d: `Du latin <i>cum</i>, avec, et <i>scientia</i>, savoir.` },
        { def: `Conscience (Lalande)`, d: `« La conscience désigne l’intuition (plus ou moins complète, claire) qu’a l’esprit de ses propres états ou actes. » André Lalande, <i>Vocabulaire technique et critique de la philosophie</i>. <b>Intuition</b>, du latin <i>intueri</i>, voir : une connaissance <b>immédiate</b>, sans intermédiaire. Actes : imaginer, calculer, juger… États : concentration, distraction, anxiété, désir…` },
        { def: `Conscience (livre de classe)`, d: `« Un processus de représentation de nous-même et du monde extérieur. » <b>Processus</b> : un acte, pas une donnée stable (elle peut être somnolente dans les gestes devenus mécaniques). <b>Représentation</b> : comme au théâtre ou en musique, une interprétation qui donne du sens. L’être conscient s’approprie le monde en le représentant.` },
        { q: `Ce ne sont pas les évènements qui nous troublent, mais l’idée que nous nous faisons des évènements.`, src: `Épictète, philosophe stoïcien, <i>Manuel</i>` },
        { p: `Nos représentations déterminent notre qualité de vie. C’est aussi ce que dit Socrate de la mort dans l’<i>Apologie de Socrate</i> de Platon.` },
        { h: `Les trois modalités de la conscience` },
        { table: {
          head: [`Modalité`, `Définition`, `Exemple`],
          rows: [
            [`<b>Immédiate</b> (spontanée)`, `« Première impression que nous avons de nos états psychiques » : vivre et ressentir.`, `J’ai mal et j’en ai aussitôt conscience.`],
            [`<b>Réfléchie</b>`, `« Retour de l’esprit sur l’impression vécue » : penser à ce que l’on vit.`, `Je ne suis pas seulement en colère : je réfléchis aux raisons de ma colère.`],
            [`<b>De soi</b>`, `Conscience d’être « un sujet qui pense, une personne libre » : se savoir sujet de son expérience.`, `Je sais que c’est moi qui ressens cette émotion.`]
          ]
        }},
        { p: `Définitions entre guillemets : 9ᵉ édition du <i>Dictionnaire de l’Académie française</i>.` },
        { q: `L’homme prend conscience de soi au moment où, pour la « première » fois, il dit « Moi ».`, src: `Alexandre Kojève, <i>Introduction à la lecture de Hegel</i>` },
        { key: `Pour <b>Kojève</b>, l’homme <b>est</b> conscience de soi : c’est ce qui le distingue de l’animal, qui ne dépasse pas le simple <b>sentiment de soi</b>. Être conscient de soi, c’est être un « Je », un sujet capable d’initiative, d’action (pas seulement de réaction) et de responsabilité, conscient de sa <b>dignité</b> (valeur absolue).` },
        { def: `Conscience morale (Lalande)`, d: `« Propriété qu’a l’esprit humain de porter des jugements normatifs spontanés et immédiats sur la valeur morale de certains actes individuels. » Tournée vers l’avenir, c’est une voix qui commande ou défend ; tournée vers le passé, elle donne de la satisfaction ou du remords. Elle peut être claire, obscure, douteuse, erronée…` },
        { ul: [
          `D’où vient la conscience morale : innée ou acquise ? <b>Rousseau</b> ou <b>Freud</b> ?`,
          `Sur quoi se fonde le jugement moral : la raison ou le sentiment ? <b>Kant</b> ou <b>Rousseau</b> ?`
        ]}
      ]
    },
    {
      id: `doute`,
      titre: `Descartes : le doute méthodique`,
      resume: `Pour distinguer le vrai du faux, Descartes rejette tout ce qui n’est pas absolument certain.`,
      blocs: [
        { p: `Prétendre se connaître suppose d’avoir réfléchi à ce qu’est une <b>connaissance</b>. Toute proposition affirmative n’en est pas une : certaines sont des avis subjectifs, des opinions non interrogées, des croyances.` },
        { cards: [
          { k: `Croire`, v: `Adhérer à une idée sans qu’elle fasse l’objet d’une démonstration. Ex. : je crois qu’il existe des formes de vie sur d’autres planètes.` },
          { k: `Savoir`, v: `Saisir des connaissances rigoureuses reposant sur une démonstration et/ou une expérimentation. Ex. : après la radio, je sais que j’ai une côte cassée.` },
          { k: `Objectif`, v: `Ne dépend que de l’objet : tout le monde peut s’accorder. Le domaine du savoir.` },
          { k: `Subjectif`, v: `Dépend du sujet qui juge, varie d’une personne à l’autre. Le domaine de la croyance.` }
        ]},
        { h: `Le contexte : un monde d’incertitude` },
        { p: `Le XVIᵉ siècle est une époque de découvertes (dans l’espace et dans le temps) mais aussi de destruction des anciennes certitudes (Alexandre Koyré, <i>Entretiens sur Descartes</i>). C’est le siècle du <b>scepticisme</b> : pour <b>Montaigne</b> (1533-1592), l’homme ne peut rien savoir, tout n’est qu’opinion. Le scepticisme antique remonte à <b>Pyrrhon d’Élis</b> (vers -300) : impossible d’établir avec certitude la vérité d’une proposition.` },
        { q: `Établir quelque chose de ferme et de constant dans les sciences.`, src: `Descartes, <i>Méditations métaphysiques</i>, I` },
        { p: `<b>René Descartes</b> (1596-1650) veut découvrir <b>au moins une vérité indubitable</b>. Il esquisse ce projet dans le <i>Discours de la méthode</i> (1637) et l’accomplit dans les <i>Méditations métaphysiques</i> (1641). Son moyen : le <b>doute</b>.` },
        { cards: [
          { k: `Volontaire`, v: `Il n’est pas subi mais <b>décidé</b>.` },
          { k: `Méthodique`, v: `Un moyen, donc on l’espère <b>provisoire</b>, et non définitif comme chez les sceptiques.` },
          { k: `Universel`, v: `Appliqué à <b>tous</b> les contenus de pensée : la matière, le corps, les sens, les vérités mathématiques.` },
          { k: `Radical`, v: `Le <b>moindre</b> motif de doute suffit pour rejeter une opinion comme si elle était fausse.` }
        ]},
        { q: `Le moindre sujet de douter que j’y trouverai, suffira pour me les faire toutes rejeter.`, src: `Descartes, <i>Méditations métaphysiques</i>, I` },
        { h: `Les moyens de douter : des expériences de pensée` },
        { ol: [
          `<b>Les sens</b> nous trompent parfois… mais comment penser qu’ils nous trompent toujours ?`,
          `<b>L’argument du rêve</b> : rien ne distingue avec certitude la veille du sommeil.`,
          `<b>Le Dieu trompeur</b>, puis le <b>malin génie</b> : comment douter sérieusement que deux plus trois font cinq ? Avec un trompeur tout-puissant, le doute est poussé à son paroxysme.`
        ]},
        { key: `Quelle proposition peut résister à l’argument du malin génie ? Le risque de l’entreprise : tomber sur une <b>conclusion sceptique</b> (« la seule vérité, c’est que la vérité est inaccessible à l’esprit humain »), qui est un paradoxe.` }
      ]
    },
    {
      id: `cogito`,
      titre: `Descartes : le cogito, « une chose qui pense »`,
      resume: `Même trompé, je pense, donc je suis. La pensée est transparente à elle-même et l’évidence devient le critère du vrai.`,
      blocs: [
        { q: `Il n’y a donc point de doute que je suis, s’il me trompe ; […] la proposition : je suis, j’existe, est nécessairement vraie toutes les fois que je la prononce ou que je la conçois en mon esprit.`, src: `Descartes, <i>Méditations métaphysiques</i>, II` },
        { key: `Le doute mené à son terme, tourné contre la pensée qui le conduit, s’annule dans une évidence irrécusable : <b>le cogito</b>. Je sais <b>que</b> je suis, et que je ne suis <b>essentiellement</b> pas mon corps.` },
        { cards: [
          { k: `Essentiel`, v: `Ce qui relève de l’essence, de la définition d’une chose : ses qualités permanentes et nécessaires, qui ne peuvent lui être enlevées.` },
          { k: `Accidentel`, v: `Ce qui peut être modifié ou supprimé sans changer l’essence de la chose.` },
          { k: `Nécessaire`, v: `Ce qui ne peut pas ne pas être, ou être autrement qu’il est.` },
          { k: `Contingent`, v: `Ce qui peut ne pas être, ou être autrement qu’il est.` }
        ]},
        { q: `Je ne suis donc précisément parlant qu’une chose qui pense.`, src: `Descartes, <i>Méditations métaphysiques</i> — en latin, <i>res cogitans</i>` },
        { q: `Par le mot de penser, j’entends tout ce qui se fait en nous de telle sorte que nous l’apercevons immédiatement par nous-mêmes.`, src: `Descartes, <i>Principes de la philosophie</i> (1644)` },
        { p: `La conscience (la pensée qui fait retour sur elle-même) apporte la connaissance de soi : chez Descartes, la conscience de soi <b>est</b> une connaissance de soi. <b>La pensée est transparente à elle-même et toute pensée est consciente.</b>` },
        { cards: [
          { k: `Simplicité`, v: `« Ne… que » une chose qui pense : la pensée n’est pas composée.` },
          { k: `Transparence`, v: `Elle s’aperçoit immédiatement elle-même.` },
          { k: `Libre arbitre`, v: `Il ne tient qu’à moi de ne pas être déterminé par les états de mon corps.` }
        ]},
        { h: `Le dualisme : deux substances` },
        { table: {
          head: [``, `<i>Res extensa</i>`, `<i>Res cogitans</i>`],
          rows: [
            [`Ce que c’est`, `La matière, dont l’attribut essentiel est l’<b>étendue</b>.`, `La <b>pensée</b>.`],
            [`Ses lois`, `Entièrement régie par la mécanique et le déterminisme.`, `Le libre arbitre.`]
          ]
        }},
        { p: `Descartes est <b>dualiste</b>, non moniste : il existe deux substances réellement distinctes, aux propriétés et aux lois hétérogènes. La sixième Méditation affirme pourtant l’<b>union de l’âme et du corps</b> : « l’âme n’est pas dans le corps ainsi qu’un pilote en son navire ».` },
        { h: `Le critère de la vérité` },
        { p: `Le cogito donne le critère du vrai : l’<b>évidence intellectuelle</b> (et non l’évidence issue de l’habitude). Après avoir démontré que Dieu existe et n’est pas trompeur (<b>Dieu vérace</b>, Méditation III), Descartes étend ce critère aux autres idées : <b>une idée claire et distincte est vraie</b> (2 + 2 = 4). Les mathématiques offrent le modèle de la connaissance.` },
        { h: `Les quatre règles de la méthode` },
        { ol: [
          `<b>L’évidence</b> : « ne recevoir jamais aucune chose pour vraie que je ne la connusse évidemment être telle », en évitant la précipitation et la prévention.`,
          `<b>L’analyse</b> : diviser chaque difficulté en autant de parcelles qu’il faut pour la résoudre.`,
          `<b>L’ordre</b> : conduire ses pensées des objets les plus simples aux plus composés, comme par degrés.`,
          `<b>Le dénombrement</b> : faire des revues si générales que je sois assuré de ne rien omettre.`
        ]},
        { p: `<i>Discours de la méthode</i>, partie II.` }
      ]
    },
    {
      id: `objections`,
      titre: `Les objections au cogito`,
      resume: `Du « je pense » au « je suis une chose qui pense », Descartes fait un saut. Et il m’apprend ce que je suis, pas qui je suis.`,
      blocs: [
        { h: `1. Le saut substantialiste` },
        { p: `Passer de « je suis, j’existe, en tant que je pense » à « je suis <b>une chose</b> qui pense » n’est pas une déduction logique rigoureuse. On aboutit au <b>moi substantiel</b> : une identité stable et permanente, indépendante des états psychologiques qui se succèdent, dont elle serait le support. Rigoureusement, on ne peut pas l’affirmer.` },
        { def: `Substance`, d: `Du latin <i>sub</i>, sous, et <i>stare</i>, demeurer : ce qui demeure sous les changements.` },
        { ul: [
          `<b>Hume</b> (1711-1776) : l’esprit n’est qu’« un faisceau ou une collection de différentes perceptions » (voir partie II).`,
          `<b>Locke</b> (1632-1704), <i>Essai sur l’entendement humain</i> (1689) : l’identité est assurée par la <b>mémoire</b>.`
        ]},
        { h: `2. Toute pensée n’est pas consciente : Leibniz` },
        { p: `Toute pensée consciente suppose des pensées inconscientes. <b>Leibniz</b> (1646-1716), dans les <i>Nouveaux Essais sur l’entendement humain</i> (1704), parle de <b>petites perceptions</b> : des changements dans l’âme dont nous ne nous apercevons pas, parce qu’ils sont trop petits, trop nombreux ou trop unis, mais qui font leur effet ensemble.` },
        { q: `J’ai coutume de me servir de l’exemple du mugissement ou du bruit de la mer dont on est frappé quand on est au rivage.`, src: `Leibniz, <i>Nouveaux Essais sur l’entendement humain</i>` },
        { ex: `Pour entendre le bruit de la mer, il faut bien entendre le bruit de <b>chaque vague</b>, même si aucun ne se fait connaître à part, hors de l’assemblage.` },
        { h: `3. Ce que je suis, pas qui je suis` },
        { key: `Même en oubliant ces objections, Descartes m’apprend <b>ce que</b> je suis (admettons, une chose qui pense) mais non <b>qui</b> je suis. Le moi découvert par la méditation est <b>universel</b>, non <b>singulier</b>. Notre singularité n’est-elle pas le fruit de notre vécu, de notre expérience du monde ?` },
        { table: {
          head: [`Repère`, `Ce qui vaut…`],
          rows: [
            [`Universel`, `pour tous les individus d’une catégorie, sans aucune exception`],
            [`Général`, `dans la majorité des cas, avec quelques exceptions`],
            [`Particulier`, `pour quelques cas`],
            [`Singulier`, `pour un seul cas`]
          ]
        }}
      ]
    },
    {
      id: `hegel`,
      titre: `Hegel : se connaître en agissant sur le monde`,
      resume: `L’homme n’est pas seulement « en soi » comme les choses : il est « pour soi », et il doit se produire lui-même.`,
      blocs: [
        { p: `Nous nous faisons souvent une fausse idée de nous-mêmes, nourrie par ce que disent les autres, à commencer par nos parents. Toute la société fait de chacun l’élément attendu pour son bon fonctionnement (Elena Belotti, <i>Du côté des petites filles</i>, 1973 ; Simone de Beauvoir, <i>Le Deuxième Sexe</i>, 1949 : « on ne naît pas femme, on le devient »). C’est l’expérience, la rencontre des autres et des situations, qui corrige cette fausse idée.` },
        { key: `Avoir conscience d’être singulier n’est pas connaître tout ce qui fait cette singularité. Et la conscience de soi n’est pas immédiate : c’est un <b>processus</b> qui demande une interaction avec le monde. <b>Hegel</b> (1770-1831) introduit le <b>temps</b> et l’<b>histoire</b> dans la réflexion sur la conscience.` },
        { h: `Le texte de l’<i>Esthétique</i>` },
        { q: `Les choses naturelles ne sont qu’immédiatement et pour ainsi dire en un seul exemplaire, mais l’homme, en tant qu’il est esprit, se redouble, car d’abord il est au même titre que les choses naturelles sont, mais ensuite, et tout aussi bien, il est pour soi, se contemple, se représente lui-même, pense et n’est esprit que par cet être-pour-soi actif.`, src: `Hegel, <i>Esthétique</i>` },
        { p: `<b>Thèse</b> : l’homme a une manière d’exister spécifique, qui n’est pas immédiatement réalisée mais <b>à constituer</b>. L’homme est <b>pour soi</b>, et pas seulement <b>en soi</b>.` },
        { cards: [
          { k: `« En soi » : les choses naturelles`, v: `« Ne… qu’ » : leur être est immédiat. Elles se développent, mais selon un programme déjà là. Chaque individu ressemble aux autres : « un seul exemplaire ».` },
          { k: `« Pour soi » : l’homme`, v: `Il est d’abord un corps animé, comme les choses ; mais, en tant qu’esprit, il se <b>redouble</b> : il se représente lui-même. Il « n’est esprit que par » son activité : il doit <b>se faire être</b>. C’est un être de culture.` }
        ]},
        { ex: `Le <b>bébé</b> est d’abord dans la sensation de soi (et pas tout de suite) ; ce n’est que bien plus tard qu’il parvient à la représentation de soi.` },
        { h: `Les deux faces de la prise de conscience de soi` },
        { ol: [
          `<b>Théorique</b>, par la réflexion. Quelque chose « s’agite dans la poitrine humaine » : sentiments, émotions, passions, un travail souterrain que l’homme doit explorer.`,
          `<b>Pratique</b>, par l’action sur le monde. L’homme « est instinctivement porté à se produire lui-même au jour tout comme à se reconnaître lui-même dans ce qui lui est donné immédiatement et s’offre à lui extérieurement ».`
        ]},
        { p: `Pour se comprendre (du latin <i>cum</i>, avec, et <i>prehendere</i>, prendre), l’homme doit s’approprier ce qui lui est étranger : en l’<b>extériorisant</b> (par la parole, l’art), ou en <b>transformant le monde</b> à son image par son travail. En agissant, il se découvre « sujet libre » : il réalise <b>en acte</b> ce qui était déjà là <b>en puissance</b>.` },
        { cards: [
          { k: `En acte`, v: `Ce qui existe réellement, ce qui a été pleinement accompli.` },
          { k: `En puissance`, v: `Ce qui a le potentiel de se réaliser.` }
        ]},
        { ex: `Le geste de l’<b>enfant qui fait des ronds dans l’eau</b> annonce ce processus. Son aboutissement est l’<b>œuvre d’art</b> : l’artiste s’exprime librement et découvre sa singularité, capable de toucher tout homme.` }
      ]
    },
    {
      id: `autrui`,
      titre: `Hegel : autrui, la lutte, le maître et l’esclave`,
      resume: `Je suis certain d’être une conscience ; pour que ce soit vrai, une autre conscience doit me reconnaître.`,
      blocs: [
        { p: `Le rapport à autrui est aussi crucial que le rapport au monde : l’humain ne devient humain que parmi les humains (Lucien Malson, <i>Les Enfants sauvages</i>), et autrui me révèle des aspects de moi que je ne perçois pas. Hegel le montre dans la <i>Phénoménologie de l’esprit</i> (1807).` },
        { def: `Dialectique (Hegel)`, d: `Le mouvement par lequel une pensée, une conscience ou une réalité se transforme en rencontrant ses contradictions, puis les dépasse en les intégrant : 1. une <b>position</b> initiale ; 2. sa <b>négation</b>, la contradiction qui apparaît ; 3. le <b>dépassement</b> (<i>Aufhebung</i>), qui conserve et transforme les deux moments.` },
        { cards: [
          { k: `Certitude`, v: `Subjective : l’incapacité du sujet à douter de ce qu’il tient pour vrai.` },
          { k: `Vérité`, v: `Objective : une proposition vraie correspond à son objet. Ici, elle s’établit par une preuve qui est aussi une <b>épreuve</b>.` }
        ]},
        { q: `Sa propre certitude de soi n’a encore aucune vérité.`, src: `Hegel, <i>Phénoménologie de l’esprit</i>` },
        { p: `Je suis certain d’être une conscience de soi, mais j’ai besoin d’être <b>reconnu</b> par une autre conscience pour passer de la certitude à la vérité. La vérité implique une <b>reconnaissance réciproque</b> des deux consciences.` },
        { def: `Médiat / Immédiat`, d: `<b>Immédiat</b> : accessible directement, sans intermédiaire. <b>Médiat</b> : accessible par un intermédiaire qui fait le lien. La conscience de soi n’est pas immédiate : elle passe par la médiation de l’empreinte que nous laissons dans la réalité.` },
        { h: `Pourquoi une lutte à mort ?` },
        { q: `C’est seulement par le risque de sa vie qu’on conserve la liberté.`, src: `Hegel, <i>Phénoménologie de l’esprit</i>` },
        { key: `L’essence de la conscience de soi n’est pas l’être, la vie biologique : c’est la <b>liberté</b>. Pour le prouver, l’esprit doit montrer qu’il peut <b>mettre sa vie en jeu</b>, s’arracher à l’instinct de survie. C’est le point de départ de l’histoire.` },
        { h: `La dialectique du maître et de l’esclave` },
        { ol: [
          `<b>Après la lutte.</b> Celui qui s’est montré supérieur à la vie garde en vie celui qui a préféré vivre et en fait son <b>esclave</b> (<i>servus</i>), pour que son regard effrayé témoigne de sa victoire.`,
          `<b>La contradiction du maître.</b> Il n’est reconnu que par une conscience d’esclave. Comme il fait travailler l’esclave, il jouit des choses sans les transformer, comme un animal. Sa liberté stagne et il devient dépendant : l’<b>esclave de son esclave</b>.`,
          `<b>La formation de l’esclave.</b> La lutte lui a fait prendre conscience de sa condition mortelle ; les brimades lui apprennent la maîtrise de soi ; le <b>travail</b> lui apprend à dominer la nature (patience, persévérance, planification) et lui fait voir sa pensée <b>objectivée</b> dans le monde. Il devient le <b>maître du maître</b>.`
        ]},
        { table: {
          head: [`Liberté face à…`, `Ce qu’elle signifie`],
          rows: [
            [`La vie`, `Pouvoir risquer sa vie : ne pas être entièrement déterminé par l’instinct de conservation.`],
            [`La nature`, `Modifier la nature et y objectiver sa pensée : transformer le monde.`],
            [`Soi-même`, `Se transformer, maîtriser ses désirs, prendre conscience de sa capacité d’agir : l’<b>autonomie</b>.`]
          ]
        }},
        { p: `L’Histoire universelle est l’histoire des manifestations progressives de la liberté, jusqu’à son inscription dans le <b>droit</b>, qui reconnaît à égalité les sujets libres. La liberté ne peut rester une expérience subjective : elle doit se réaliser objectivement dans les institutions politiques et juridiques.` },
        { key: `<b>Transition vers le II</b> : la conscience a le pouvoir de nous éclairer sur nous-mêmes, mais la conscience de soi prend du temps et passe par des <b>médiations</b>. Se connaître seul, dans l’intimité de sa conscience, semble impossible. Jusqu’où va ce pouvoir, et quelles limites rencontre-t-il ?` }
      ]
    },
    {
      id: `comte`,
      partie: `II · Les limites de la conscience`,
      titre: `Comte : les limites de l’introspection`,
      resume: `L’esprit peut tout observer, sauf lui-même : l’organe observé et l’organe observateur sont le même.`,
      blocs: [
        { def: `Introspection`, d: `Du latin <i>introspectare</i>, regarder à l’intérieur de soi : la méthode qui tente de comprendre l’homme en général à partir de celui qui nous est le plus proche, nous-même.` },
        { p: `Sénèque, saint Augustin, Pascal, Rousseau ou les moralistes y ont recouru. Mais décrire son intériorité ne suffit pas : cette connaissance est-elle <b>objective</b>, a-t-elle une valeur <b>explicative</b>, peut-elle être <b>généralisée</b> ? Ce sont les critères des sciences positives. <b>Auguste Comte</b>, dans le <i>Cours de philosophie positive</i> (1830-1842), exclut l’introspection.` },
        { q: `L’esprit humain peut observer directement tous les phénomènes, excepté les siens propres. Car, par qui serait faite l’observation ?`, src: `Comte, <i>Cours de philosophie positive</i>` },
        { ul: [
          `<b>Les passions</b> : on peut à la rigueur les observer en soi, car leurs organes sont distincts de ceux de l’observation. Mais un état de passion très prononcé, celui qu’il serait le plus important d’examiner, est <b>incompatible</b> avec l’état d’observation. Le mieux est de les observer <b>du dehors</b>.`,
          `<b>Les phénomènes intellectuels</b> : les observer pendant qu’ils s’exécutent est une impossibilité manifeste.`
        ]},
        { q: `L’individu pensant ne saurait se partager en deux, dont l’un raisonnerait, tandis que l’autre regarderait raisonner.`, src: `Comte, <i>Cours de philosophie positive</i>` },
        { key: `L’organe observé et l’organe observateur étant identiques, « cette prétendue contemplation directe de l’esprit par lui-même est une <b>pure illusion</b> ». Par la seule introspection, la conscience ne produit pas une connaissance scientifique et objective de soi, seulement le <b>sentiment</b> de se connaître immédiatement.` },
        { ex: `Celui qui est pris d’une violente colère ne peut pas l’observer sereinement : dès qu’il l’observe, il n’est plus dans la même colère.` },
        { p: `<b>Question ouverte</b> : faut-il alors voir la conscience comme un simple accompagnement de nos pensées, voire comme un <b>épiphénomène</b> qui produit l’illusion d’une connaissance immédiate de soi ?` }
      ]
    },
    {
      id: `hume`,
      titre: `Hume : le moi, un faisceau de perceptions`,
      resume: `Au plus intime de moi, je ne trouve jamais un moi, seulement des perceptions qui passent.`,
      blocs: [
        { p: `Dans le <i>Traité de la nature humaine</i> (livre I, partie IV, section 6), <b>David Hume</b> (1711-1776) s’attaque aux philosophes qui croient sentir à tout instant leur moi, son existence et sa continuité, sa parfaite identité et sa parfaite simplicité.` },
        { ol: [
          `<b>Le principe empiriste</b> : « à toute idée réelle, il faut une impression qui soit à son origine ». Pour que l’idée du moi soit réelle, il faudrait une impression qui reste la même durant toute la vie.`,
          `<b>Le constat</b> : « il n’y a pas d’impression constante et invariable ». Au plus intime de moi, « je tombe toujours sur telle ou telle perception particulière » : chaud ou froid, lumière ou ombre, amour ou haine, douleur ou plaisir.`,
          `<b>L’exemple du sommeil</b> : dans un sommeil profond, sans perceptions, « je cesse d’avoir conscience de moi-même ».`,
          `<b>La conclusion</b> : l’homme n’est « rien d’autre qu’un faisceau ou une collection de différentes perceptions qui se succèdent les unes les autres avec une inconcevable rapidité ».`
        ]},
        { q: `L’esprit est une sorte de théâtre où diverses perceptions font successivement leur apparition ; elles passent, repassent, se perdent, et se mêlent en une variété infinie de positions et de situations.`, src: `Hume, <i>Traité de la nature humaine</i>` },
        { p: `Mais la comparaison ne doit pas égarer : les perceptions seules constituent l’esprit, et nous n’avons pas la moindre idée du <b>lieu</b> où ces scènes sont représentées.` },
        { key: `D’où vient alors l’idée d’un moi identique ? De l’<b>imagination</b> : passer d’une perception à une perception reliée est aussi facile que contempler un objet continu. Cette ressemblance nous fait confondre une suite d’objets reliés avec un objet identique, et nous inventons l’<b>âme</b>, le <b>moi</b> et la <b>substance</b> « pour masquer la variation ».` },
        { h: `Le paragraphe ADREC de la classe` },
        { ol: [
          `<b>A</b> : on peut se demander si nous nous connaissons vraiment nous-mêmes.`,
          `<b>D</b> : nous pensons rester la même personne ; pourtant, en nous observant, nous trouvons surtout des sentiments, des souvenirs et des perceptions différentes.`,
          `<b>R</b> : Hume, <i>Traité de la nature humaine</i> : on ne trouve jamais un moi identique, seulement des perceptions qui se succèdent.`,
          `<b>E</b> : dans un sommeil profond, sans perceptions, nous ne pouvons plus avoir conscience de nous-mêmes. C’est l’imagination qui relie nos perceptions et nous fait croire à une identité permanente.`,
          `<b>C</b> : nous ne pouvons pas être certains de connaître un moi permanent. Distinguer <b>croire</b> et <b>savoir</b> est déjà un progrès dans la connaissance de soi.`
        ]}
      ]
    },
    {
      id: `freud`,
      titre: `Freud : l’hypothèse de l’inconscient psychique`,
      resume: `Les données de la conscience sont lacunaires : pour leur donner un sens, il faut supposer des actes psychiques inconscients.`,
      blocs: [
        { q: `L’hypothèse de l’inconscient est nécessaire et légitime, et […] nous possédons de multiples preuves de l’existence de l’inconscient. Elle est nécessaire parce que les données de la conscience sont extrêmement lacunaires.`, src: `Freud, <i>Métapsychologie</i> (1915)` },
        { cards: [
          { k: `Inconscient somatique`, v: `Du grec <i>soma</i>, le corps : reconnu scientifiquement (le système nerveux autonome, sympathique et parasympathique).` },
          { k: `Inconscient psychique`, v: `Du grec <i>psychè</i>, le souffle, l’esprit : une idée parfois contestée. La conscience serait incapable de percevoir « tout ce qui se passe en nous en fait d’actes psychiques ».` }
        ]},
        { p: `<b>Sigmund Freud</b> (1856-1939), médecin neurologue, donc scientifique, veut le droit « de travailler scientifiquement avec cette hypothèse ». L’idée n’est pas neuve : Leibniz et les petites perceptions, Spinoza ; et côté pratiques, l’<b>hypnose</b> de Charcot, la <b>suggestion</b> de Bernheim, et dans d’autres cultures les transes ou les exorcismes.` },
        { def: `Métapsychologie`, d: `Du grec <i>meta</i>, au-delà : l’ensemble des modèles théoriques de Freud pour expliquer l’appareil psychique. Là où la psychologie classique décrit les phénomènes observables, elle explique en profondeur les processus inconscients qui les déterminent.` },
        { def: `Déterminisme`, d: `Tout phénomène résulte de causes antérieures qui le déterminent. En psychologie : nos pensées, émotions et comportements ne sont dus ni au hasard ni à la volonté consciente. En scientifique, Freud postule ce déterminisme jusque dans les phénomènes psychiques.` },
        { h: `Q1 · Pourquoi l’hypothèse est-elle nécessaire ?` },
        { p: `Les données de la conscience sont <b>lacunaires</b> : des idées « nous viennent sans que nous en connaissions l’origine ». En supposant des idées inconscientes entre les idées conscientes, on restaure la <b>continuité</b> de la vie psychique et on trouve des <b>causes cachées</b> : les actes conscients « s’ordonnent dans un ensemble dont on peut montrer la cohérence, si nous interpolons les actes inconscients inférés ».` },
        { def: `Inférer`, d: `Déduire quelque chose qui n’est pas directement observable à partir d’indices disponibles (la déduction et l’induction sont des inférences).` },
        { key: `L’hypothèse s’accompagne du <b>déterminisme psychique</b> : toute idée consciente est déterminée par des idées inconscientes. La cure inventée par Freud l’utilise dans la méthode des <b>associations libres</b>.` },
        { h: `Rêves et actes manqués ont un sens` },
        { cards: [
          { k: `Le rêve`, v: `Derrière le <b>contenu manifeste</b> (ce qu’on raconte au réveil) se trouve un <b>contenu latent</b>. Interpréter, c’est passer de l’un à l’autre par les associations libres. Ex. : le rêve du chapeau noir, le rêve du théâtre vide.` },
          { k: `L’acte manqué`, v: `Un acte psychique <b>réussi</b> : un compromis où une intention inconsciente se manifeste de façon déguisée. Ex. : le président qui ouvre la séance en disant « la séance est close » (<i>Introduction à la psychanalyse</i>).` }
        ]},
        { h: `L’analogie de l’iceberg` },
        { p: `La plus grande partie de notre vie psychique est inconsciente : nous n’y avons pas accès, et elle détermine notre vie consciente. La partie émergée de l’iceberg est le conscient, la partie immergée l’inconscient. « Il faut voir dans l’inconscient le fond de toute vie psychique. »` },
        { cards: [
          { k: `Ressemblance`, v: `Rapport de similarité entre deux choses pas tout à fait identiques, que l’on peut comparer.` },
          { k: `Analogie`, v: `Égalité de rapports entre quatre termes pris deux à deux : on rapproche des choses éloignées parce qu’elles entretiennent le même rapport.` }
        ]},
        { h: `Repères chronologiques` },
        { timeline: [
          [`1856`, `Naissance à Freiberg, en Moravie.`],
          [`1885-86`, `Stage à la Salpêtrière auprès de Charcot : hystérie et hypnose.`],
          [`1895`, `<i>Études sur l’hystérie</i>, avec Breuer : premiers fondements de la psychanalyse.`],
          [`1900`, `<i>L’Interprétation du rêve</i> : le rêve, « voie royale » vers l’inconscient. 1ʳᵉ topique.`],
          [`1901`, `<i>Psychopathologie de la vie quotidienne</i> : lapsus, oublis, actes manqués.`],
          [`1905`, `<i>Trois essais sur la théorie sexuelle</i> : la sexualité infantile.`],
          [`1914-15`, `<i>Pour introduire le narcissisme</i>, <i>Métapsychologie</i>.`],
          [`1920`, `<i>Au-delà du principe de plaisir</i> : la pulsion de mort.`],
          [`1923`, `<i>Le Moi et le Ça</i> : la 2ᵉ topique.`],
          [`1927`, `<i>L’Avenir d’une illusion</i> : la religion.`],
          [`1930`, `<i>Malaise dans la civilisation</i> : désirs individuels contre exigences sociales.`],
          [`1938-39`, `Fuit le nazisme pour Londres ; meurt le 23 septembre 1939.`]
        ]}
      ]
    },
    {
      id: `topiques`,
      titre: `L’inconscient et les deux topiques`,
      resume: `Un inconscient dynamique, des censures, puis le Ça, le Moi et le Surmoi : le sujet n’est plus maître chez lui.`,
      blocs: [
        { p: `L’inconscient est le lieu des représentations et des désirs <b>refoulés</b>, et des représentations de <b>pulsions</b> innées. Il est <b>dynamique</b> : un réservoir d’énergie qui produit des effets. Ses particularités (<i>Métapsychologie</i>) :` },
        { ul: [
          `<b>Absence de contradiction</b> : ni négation, ni doute, ni degré dans la certitude (c’est la censure qui les introduit).`,
          `<b>Processus primaire</b> : grande mobilité des investissements, par <b>déplacement</b> et <b>condensation</b> (ex. : le rêve du chapeau).`,
          `<b>Intemporalité</b> : les processus inconscients ne sont pas ordonnés dans le temps et ne sont pas modifiés par lui.`,
          `<b>Réalité psychique à la place de la réalité extérieure</b> : ils n’obéissent qu’au principe de plaisir.`
        ]},
        { def: `Refoulement`, d: `Processus inconscient qui exclut de la conscience les désirs et sentiments incompatibles avec les exigences morales et sociales, ou même vitales.` },
        { def: `Pulsion`, d: `Concept-limite entre le psychique et le somatique : une force inconsciente d’origine biologique (faim, soif, besoin sexuel), à forte charge d’énergie, qui oriente le sujet vers un objet qui la satisfera en supprimant la tension.` },
        { def: `Topique`, d: `Une représentation spatialisée du psychisme humain (du grec <i>topos</i>, le lieu).` },
        { table: {
          head: [``, `1ʳᵉ topique (dès 1899, <i>L’Interprétation du rêve</i>) : 3 systèmes`, `2ᵉ topique (à partir de 1920, <i>Le Moi et le Ça</i>, 1923) : 3 instances`],
          rows: [
            [`Le fond`, `<b>Inconscient</b> : inaccessible à la conscience.`, `<b>Ça</b> : entièrement inconscient ; veut la satisfaction immédiate des pulsions et ignore le principe de réalité. Les pulsions peuvent être détournées, refoulées, jamais détruites.`],
            [`Le milieu`, `<b>Préconscient</b> : système intermédiaire ; ses contenus sont accessibles à la conscience ; il protège le conscient.`, `<b>Moi</b> : se forme peu à peu à partir du Ça, sous l’influence de la réalité ; concilie principe de plaisir et principe de réalité ; c’est lui qui refoule. Il est en partie inconscient.`],
            [`Le haut`, `<b>Conscient</b> : lieu des sensations et perceptions ; il nous situe dans l’espace et le temps et assure notre adaptation à la réalité.`, `<b>Surmoi</b> : intériorisation des exigences et des interdits des parents et de la société ; censeur du Moi, source du refoulement et de la conscience morale. Trop sévère, il se retourne contre l’individu.`]
          ]
        }},
        { p: `Dans la 1ʳᵉ topique, une <b>censure</b> s’exerce entre chaque système : entre l’inconscient et le préconscient, et entre le préconscient et le conscient. Elle rend incompréhensible ce qui appartient au stade inférieur. Elle sera identifiée au <b>Surmoi</b> dans la 2ᵉ topique.` },
        { h: `La déconstruction du sujet` },
        { table: {
          head: [`Le sujet n’est pas…`, `car…`],
          rows: [
            [`simple`, `il est composé de trois instances`],
            [`transparent`, `les 9/10ᵉ de sa vie psychique sont inconscients`],
            [`statique`, `il est structuré par des conflits inconscients`]
          ]
        }},
        { q: `Le Moi n’est pas maître dans sa propre maison.`, src: `Freud` },
        { key: `Descartes pensait le sujet comme une instance <b>souveraine</b> de ses pensées et de ses actes ; Freud en fait un <b>équilibre de forces</b> qui s’affrontent. Pour se connaître, il faut abandonner l’illusion de la transparence et chercher le sens de ce qui nous déconcerte en nous. Il faut pour cela un psychanalyste… qui ne sait jamais qui nous sommes : il nous aide seulement à nous découvrir nous-mêmes.` },
        { ex: `Freud avoue lui-même que l’interprétation d’un rituel obsessionnel (la scène de la nuit de noces, <i>Introduction à la psychanalyse</i>) lui aurait été impossible à deviner seul.` }
      ]
    },
    {
      id: `psychanalyse`,
      titre: `Q2-Q3 · La psychanalyse, « une pratique couronnée de succès »`,
      resume: `Thérapie, théorie du psychisme et lecture de la culture : c’est son succès qui légitime l’hypothèse de l’inconscient.`,
      blocs: [
        { p: `C’est la psychanalyse, « pratique couronnée de succès », qui <b>légitime</b> l’hypothèse de l’inconscient psychique.` },
        { cards: [
          { k: `Une thérapie`, v: `Elle soigne certaines maladies mentales en analysant rêves, lapsus et symptômes, par les <b>associations libres</b> et le <b>transfert</b> sur le psychanalyste.` },
          { k: `Une théorie du psychisme`, v: `La 1ʳᵉ et la 2ᵉ topique.` },
          { k: `Une lecture de la culture`, v: `La psychanalyse de l’art, de la religion…` }
        ]},
        { p: `Ses débuts sont présentés dans les <i>Études sur l’hystérie</i> (1895), écrites par <b>Breuer</b> et Freud.` },
        { def: `Hystérie`, d: `Du grec <i>hustera</i>, l’utérus ; terme qui n’est plus utilisé en psychiatrie. Pour Freud, une <b>névrose</b> née d’un conflit psychique inconscient d’origine sexuelle (on parle de <b>pansexualisme</b> à propos de sa théorie). Elle peut provoquer des paralysies sans origine organique : l’hystérie de <b>conversion</b> (du psychique au somatique). Sous hypnose, Charcot les faisait disparaître.` },
        { cards: [
          { k: `Névrose`, v: `Trouble qui n’altère pas le rapport à la réalité (pas d’hallucination) : angoisses, phobies, obsessions. Ex. : le personnage de Woody Allen dans <i>Annie Hall</i> (1977). Ce n’est plus une catégorie officielle aujourd’hui.` },
          { k: `Psychose`, v: `Trouble qui altère profondément le rapport à la réalité : hallucinations, idées délirantes, pensée désorganisée (paranoïa, schizophrénie).` }
        ]},
        { ul: [
          `<b>Anna O.</b> (Bertha Pappenheim) : les symptômes peuvent être liés à des expériences passées qui gardent une efficacité psychique.`,
          `<b>Elisabeth von R.</b> : le symptôme tient à distance des contenus difficiles à accepter, tout en leur donnant une expression détournée.`
        ]},
        { key: `Les symptômes ont un <b>sens</b> et une <b>fonction</b> : ce sont des réminiscences de traumatismes ou de conflits passés, sous forme symbolique. Ils maintiennent un équilibre instable et procurent une satisfaction <b>indirecte</b>, tout en faisant souffrir le sujet.` },
        { p: `Vus en classe : le tableau <i>Une leçon clinique à la Salpêtrière</i> (Brouillet, 1887) et le film <i>Augustine</i> (Alice Winocour, 2012). Les maladies mentales changent selon les sociétés.` }
      ]
    },
    {
      id: `contestations`,
      titre: `Q4 · Les critiques de la psychanalyse`,
      resume: `On conteste l’inconscient au nom de la morale (la responsabilité) et au nom de la science (Popper).`,
      blocs: [
        { h: `Au nom de la morale : la troisième blessure narcissique` },
        { ol: [
          `<b>Copernic</b> : la Terre n’est plus le centre du monde.`,
          `<b>Darwin</b> : l’homme descend de formes animales.`,
          `<b>Freud</b> : l’homme n’est plus maître de son propre esprit.`
        ]},
        { table: {
          head: [``, `Conception classique`, `Avec la psychanalyse`],
          rows: [
            [`Nature humaine`, `Un être de raison (Aristote, <i>La Politique</i> : « l’homme est un animal doué de <i>logos</i> »).`, `Des forces pulsionnelles, irrationnelles.`],
            [`Conscience`, `L’homme est essentiellement <i>res cogitans</i>, transparente à elle-même (Descartes).`, `La conscience seule ne permet aucune connaissance de soi : l’inconscient, ce sont les 9/10ᵉ de la vie psychique.`],
            [`Liberté`, `Volonté infinie, libre arbitre (Descartes).`, `Notre vie psychique est déterminée : nous ne sommes pas les auteurs libres de nos pensées.`],
            [`Responsabilité`, `Le libre arbitre et la conscience fondent la responsabilité, morale et juridique.`, `La psychanalyse aide le sujet à <b>se réapproprier son histoire</b> et à mieux répondre de ses actes : l’inconscient n’est pas un autre Moi. L’homme est <b>déculpabilisé et responsabilisé</b>.`]
          ]
        }},
        { h: `Au nom de la science : Popper et la réfutabilité` },
        { p: `Les théories de Freud sont difficiles à tester expérimentalement, d’où une forte résistance de ses contemporains (et aujourd’hui <i>Le Livre noir de la psychanalyse</i>). <b>Karl Popper</b> (1902-1994) étudie à Vienne dans les années 1920, quand arrivent la relativité, la théorie marxiste de l’histoire et la psychanalyse. Dans <i>La Logique de la découverte scientifique</i> (1934) et <i>Conjectures et réfutations</i> (1963), il cherche ce qui distingue une science d’une <b>pseudo-science</b> (l’astrologie, le matérialisme historique…).` },
        { def: `Réfutabilité (falsifiabilité)`, d: `Une théorie est scientifique si l’on peut imaginer une expérience ou une observation qui <b>pourrait montrer qu’elle est fausse</b>.` },
        { p: `Or la psychanalyse peut expliquer presque tous les comportements, quels qu’ils soient. Ses échecs eux-mêmes s’expliquent par la <b>résistance</b> du patient : qu’il accepte ou rejette l’interprétation, la théorie semble toujours confirmée.` },
        { key: `La psychanalyse n’est donc <b>pas scientifique au sens strict</b>. Cela ne signifie pas qu’elle n’a pas d’intérêt.` },
        { key: `<b>Transition vers le III</b> : la conscience ne donne pas une connaissance transparente et complète de soi. Mais, après Hume, est-ce seulement notre capacité à nous connaître qui est limitée, ou l’existence même d’un moi unifié et permanent ? Faut-il renoncer à se connaître, ou en repenser le sens : non plus découvrir une identité déjà faite, mais comprendre comment nous <b>devenons</b> nous-mêmes ?` }
      ]
    },
    {
      id: `connais-toi`,
      partie: `III · Vers une meilleure connaissance de soi`,
      titre: `« Connais-toi toi-même » : le sens de l’injonction socratique`,
      resume: `Se connaître, ce n’est pas découvrir une identité cachée : c’est examiner ses opinions et ses prétentions au savoir.`,
      blocs: [
        { p: `La thèse de la partie III : se connaître ne signifie pas découvrir une identité <b>déjà constituée</b>, mais interroger son existence et assumer la manière dont on se <b>construit</b>.` },
        { key: `Inscrite au fronton du temple d’Apollon à Delphes, l’injonction « Connais-toi toi-même » n’invite pas à découvrir une identité psychologique cachée, entièrement accessible à l’introspection, mais à l’<b>examen critique</b> de ses opinions, de ses croyances et de ses prétentions au savoir.` },
        { p: `C’est ce que fait Socrate dans l’<i>Apologie de Socrate</i> (voir l’Introduction du site) : reconnaître son ignorance est le premier pas de la sagesse.` }
      ]
    },
    {
      id: `bergson`,
      titre: `Bergson : « conscience signifie choix »`,
      resume: `Le passé pèse sur le présent sans le déterminer mécaniquement : la conscience ouvre des possibles.`,
      blocs: [
        { p: `<b>Rappel du II</b> : pour Hume, le moi substantiel est une fiction de l’imagination ; pour Comte, l’introspection n’est pas fiable ; pour Freud, la personnalité est le lieu de forces qui s’affrontent sans cesse.` },
        { p: `Conséquence : le <b>déterminisme psychique</b> semble réduire l’identité personnelle à son <b>passé</b>. Une réduction qu’on peut refuser, car elle est désespérante et <b>autoréalisatrice</b> : si je me pense comme le résultat indépassable de mon passé, je suis sûr de ne pas lui échapper.` },
        { q: `La conscience est un trait d’union entre ce qui a été et ce qui sera, un pont jeté entre le passé et l’avenir.`, src: `Bergson, « La conscience et la vie » (1911), dans <i>L’Énergie spirituelle</i> (1919)` },
        { p: `Pour <b>Henri Bergson</b>, notre passé tout entier pèse sur notre présent, mais il ne le détermine pas mécaniquement : il forme une histoire singulière qui nourrit nos décisions. La conscience peut <b>suspendre</b> un moment l’action automatique et envisager des possibles.` },
        { q: `Si conscience signifie mémoire et anticipation, c’est que conscience est synonyme de choix.`, src: `Bergson, <i>L’Énergie spirituelle</i>` },
        { key: `Ces choix sont des <b>créations</b>, non des réactions : ils manifestent et construisent l’identité personnelle, que Bergson conçoit comme une <b>durée</b>, un temps subjectif créateur du moi.` },
        { ex: `Le <b>test du marshmallow</b> (Walter Mischel, 1972) : des enfants de 4 ans peuvent renoncer à une friandise tout de suite pour en avoir deux plus tard. La conscience est capable d’imaginer autre chose que le seul présent.` }
      ]
    },
    {
      id: `existence`,
      titre: `Sartre : l’existence précède l’essence`,
      resume: `La conscience n’a pas de dedans : je ne suis rien d’autre que ce que je fais.`,
      blocs: [
        { p: `<b>Jean-Paul Sartre</b> (1905-1980), dans la continuité de la <b>phénoménologie</b> de Husserl (qu’il étudie en Allemagne en 1933-1934), propose dès <i>La Transcendance de l’ego</i> (1936) une nouvelle conception de la conscience, définie par l’<b>intentionnalité</b> : « toute conscience est conscience de quelque chose ».` },
        { q: `La conscience n’a pas de dedans, elle n’est rien que le dehors d’elle-même.`, src: `Sartre, <i>Situations I</i> (1939)` },
        { p: `La conscience ne se définit pas d’abord par la continuité de la mémoire, mais par sa capacité à se <b>distancier</b> de ce qu’elle est et à se <b>projeter</b> vers ce qu’elle n’est pas encore. Sartre le développe dans <i>L’Être et le Néant</i> (1943), puis l’explique au grand public dans la conférence <i>L’existentialisme est un humanisme</i> (1945).` },
        { key: `Chez l’homme, « <b>l’existence précède l’essence</b> » : le pour-soi (la conscience) n’a pas de nature prédéfinie. C’est l’existence, individuelle et libre, qui définit peu à peu mon identité. Le moi n’est pas dans l’intimité de la conscience mais dans le <b>projet</b> qui se déploie dans le monde : je suis ce que je fais, mon action, mon engagement.` },
        { def: `Exister`, d: `Du latin <i>ex</i>, en dehors de, et <i>sistere</i>, se tenir : se tenir hors de soi, se projeter, ne pas se laisser définir par les circonstances ou le passé, s’inscrire dans le monde par des choix qui engagent et donnent du sens. L’<b>essence</b>, c’est la définition, la nature.` },
        { def: `Existentialisme`, d: `Les philosophies qui placent la subjectivité au centre. Pour Sartre : pas de nature humaine, pas de valeurs transcendantes (pas de Dieu pour les concevoir). Chaque individu, par ses choix, dessine les valeurs et <b>engage l’humanité entière</b> : il est responsable de son existence et de l’humanité.` },
        { p: `Le XVIIIᵉ siècle parle de <b>nature humaine</b> pour fonder les droits naturels de l’homme sur ce qui nous est commun, surtout la raison. Le XXᵉ siècle parle de <b>condition humaine</b> pour intégrer la diversité des cultures (Malraux, <i>La Condition humaine</i>, 1933). Sartre la caractérise par la facticité et la transcendance.` },
        { cards: [
          { k: `Facticité`, v: `Ce qui nous est donné sans qu’on l’ait choisi et qu’on doit assumer : naissance et passé, milieu social et familial, corps, situation historique et géographique, événements vécus.` },
          { k: `Transcendance`, v: `Le pouvoir du pour-soi de <b>dépasser</b> ce qu’il est déjà en se projetant vers des possibles. L’homme n’est jamais réductible à son passé ni à sa situation.` }
        ]},
        { q: `Nous sommes sans excuses. […] L’homme est condamné à être libre.`, src: `Sartre, <i>L’existentialisme est un humanisme</i>` },
        { q: `La maladie est une condition à l’intérieur de laquelle l’homme est de nouveau libre et sans excuses.`, src: `Sartre, <i>Cahiers pour une morale</i> (1948)` },
        { ex: `<b>Achmat Hassiem</b>, attaqué par un requin en 2006, perd sa jambe droite et doit renoncer à devenir footballeur. Il surmonte sa dépression et se sert de sa peur des requins pour devenir champion de natation.` },
        { p: `La liberté n’est pas un pouvoir surnaturel de tout réaliser : c’est interpréter les situations qu’on n’a pas choisies en fonction d’un <b>projet</b> qui donne sens à sa vie. Sartre refuse à la fois le déterminisme absolu et une liberté indépendante de toute situation.` },
        { h: `Angoisse et mauvaise foi` },
        { def: `Mauvaise foi`, d: `Nier sa liberté en se cherchant des <b>excuses</b> pour ne pas reconnaître sa responsabilité (du latin <i>ex</i>, en dehors, et <i>causa</i>, la cause : l’excuse place la cause de l’action hors du sujet).` },
        { ol: [
          `<b>Se réfugier dans la facticité</b> et nier sa capacité à dépasser la situation : « l’occupation allemande m’a contraint à collaborer ».`,
          `<b>Se réfugier dans la transcendance</b> et nier la situation : « je ne suis pas cette personne qui a collaboré, je suis celle qui s’engage pour plus de justice sociale ».`,
          `<b>Envers autrui</b> : la <b>réification</b> ou chosification (du latin <i>res</i>, la chose), considérer l’autre comme une chose entièrement définie et nier sa transcendance.`
        ]},
        { p: `<b>Le schéma récapitulatif</b> : le pour-soi → « l’existence précède l’essence » → pouvoir de transcender toute situation → « l’homme a toujours le choix » → responsabilité totale → angoisse → mauvaise foi.` },
        { q: `L’homme n’est rien d’autre que son projet […], il n’est donc rien d’autre que l’ensemble de ses actes, rien d’autre que sa vie.`, src: `Sartre, <i>L’existentialisme est un humanisme</i> (1946)` },
        { key: `<b>Retour à la question</b> : le moi ne peut être saisi que dans sa manifestation extérieure, par nos choix et nos actions. Réfléchir à la question nous fait passer d’une introspection trompeuse à un engagement dans le monde, seul lieu de notre réalisation. Nous ne sommes pas quelque chose à <b>découvrir</b>, mais quelque chose à <b>construire</b>.` }
      ]
    }
  ],
  flashcards: [
    [`Les deux sens de « peut-on » ?`, `<b>Est-il possible</b> (sommes-nous capables) ? et <b>sommes-nous autorisés</b> ?`],
    [`La problématique de « Peut-on se connaître soi-même ? »`, `La conscience est-elle l’instrument <b>nécessaire et suffisant</b> d’une connaissance complète de soi, ou nous plonge-t-elle dans l’<b>illusion</b> de cette connaissance ?`],
    [`Le plan du cours en 3 parties ?`, `I. Par la conscience, j’accède à une certaine connaissance de moi.<br>II. Les limites de la conscience.<br>III. Vers une meilleure connaissance de soi.`],
    [`Étymologie de « conscience » ?`, `Latin <i>cum</i>, avec, et <i>scientia</i>, savoir.`],
    [`Définition de la conscience selon Lalande ?`, `« L’intuition (plus ou moins complète, claire) qu’a l’esprit de ses propres états ou actes. »`],
    [`Que veut dire « intuition » ?`, `Du latin <i>intueri</i>, voir : une connaissance <b>immédiate</b>, sans intermédiaire.`],
    [`Bewusstsein et Gewissen ?`, `<b>Bewusstsein</b> : conscience psychologique.<br><b>Gewissen</b> : conscience morale.`],
    [`Les 3 modalités de la conscience ?`, `<b>Immédiate</b> (vivre, ressentir), <b>réfléchie</b> (penser à ce qu’on vit), <b>de soi</b> (se savoir sujet de son expérience).`],
    [`Ce qui distingue l’homme de l’animal selon Kojève ?`, `La <b>conscience de soi</b> ; l’animal ne dépasse pas le simple <b>sentiment de soi</b>. L’homme prend conscience de soi quand il dit « Moi ».`],
    [`La phrase d’Épictète sur les représentations ?`, `« Ce ne sont pas les évènements qui nous troublent, mais l’idée que nous nous faisons des évènements. » (<i>Manuel</i>)`],
    [`Croire / Savoir ?`, `<b>Croire</b> : adhérer sans démonstration.<br><b>Savoir</b> : connaissance rigoureuse fondée sur une démonstration ou une expérimentation.`],
    [`Le projet de Descartes ?`, `« Établir quelque chose de ferme et de constant dans les sciences » : trouver au moins une vérité indubitable.`],
    [`Les 4 caractères du doute cartésien ?`, `<b>Volontaire</b>, <b>méthodique</b> (provisoire), <b>universel</b>, <b>radical</b>.`],
    [`Les moyens de douter ?`, `Les sens, l’argument du <b>rêve</b>, le <b>Dieu trompeur</b> puis le <b>malin génie</b>.`],
    [`Pourquoi « je suis, j’existe » résiste-t-il au malin génie ?`, `« Il n’y a point de doute que je suis, s’il me trompe » : pour être trompé, il faut être.`],
    [`Que suis-je selon Descartes ?`, `« Une chose qui pense » : <i>res cogitans</i>, distincte de la <i>res extensa</i> (la matière, l’étendue).`],
    [`Essentiel / Accidentel ?`, `<b>Essentiel</b> : appartient à la définition de la chose, ne peut lui être enlevé.<br><b>Accidentel</b> : peut changer sans changer sa nature.`],
    [`Les 3 attributs de la pensée chez Descartes ?`, `<b>Simplicité</b>, <b>transparence</b>, <b>libre arbitre</b>.`],
    [`Le critère de la vérité chez Descartes ?`, `L’<b>évidence intellectuelle</b> : une idée claire et distincte est vraie (garantie par un Dieu vérace).`],
    [`Les 4 règles de la méthode ?`, `<b>Évidence</b>, <b>analyse</b> (diviser), <b>ordre</b> (du simple au composé), <b>dénombrement</b> (ne rien omettre).`],
    [`Qu’est-ce que le saut substantialiste ?`, `Passer de « je suis en tant que je pense » à « je suis <b>une chose</b> qui pense » : ce n’est pas une déduction rigoureuse.`],
    [`Pour Locke, qu’est-ce qui assure l’identité ?`, `La <b>mémoire</b> (<i>Essai sur l’entendement humain</i>, 1689).`],
    [`Les petites perceptions de Leibniz ?`, `Des perceptions trop petites ou trop nombreuses pour être aperçues, qui agissent ensemble. Ex. : le bruit de la mer et de chaque vague.`],
    [`Ce que Descartes ne m’apprend pas ?`, `<b>Qui</b> je suis : il dit <b>ce que</b> je suis. Le moi du cogito est universel, pas singulier.`],
    [`« En soi » et « pour soi » chez Hegel ?`, `<b>En soi</b> : exister immédiatement, comme les choses naturelles.<br><b>Pour soi</b> : se représenter soi-même ; l’homme se « redouble ».`],
    [`Les 2 faces de la conscience de soi chez Hegel ?`, `<b>Théorique</b> (la réflexion) et <b>pratique</b> (l’action sur le monde : travail, art).`],
    [`En acte / En puissance ?`, `<b>En acte</b> : réellement accompli.<br><b>En puissance</b> : qui a le potentiel de se réaliser.`],
    [`Certitude et vérité chez Hegel ?`, `La <b>certitude</b> est subjective ; la <b>vérité</b> exige la reconnaissance d’une autre conscience : « sa propre certitude de soi n’a encore aucune vérité ».`],
    [`Pourquoi la lutte à mort ?`, `Pour prouver que l’essence de la conscience de soi est la <b>liberté</b> et non la vie biologique : « c’est seulement par le risque de sa vie qu’on conserve la liberté ».`],
    [`Le renversement maître / esclave ?`, `Le maître jouit sans transformer et devient l’esclave de son esclave ; l’esclave, par le <b>travail</b>, objective sa pensée et devient le maître du maître.`],
    [`Les 3 libertés de la dialectique ?`, `Face à la <b>vie</b> (risquer sa vie), face à la <b>nature</b> (la transformer), face à <b>soi</b> (maîtriser ses désirs : autonomie).`],
    [`Pourquoi l’introspection est-elle impossible selon Comte ?`, `« L’individu pensant ne saurait se partager en deux » : l’organe observé et l’organe observateur sont identiques.`],
    [`Que trouve Hume au plus intime de lui ?`, `Jamais un moi : toujours « telle ou telle perception particulière ».`],
    [`Qu’est-ce que l’homme selon Hume ?`, `« Un faisceau ou une collection de différentes perceptions » en perpétuel flux.`],
    [`D’où vient l’idée du moi selon Hume ?`, `De l’<b>imagination</b>, qui confond une suite de perceptions reliées avec un objet identique.`],
    [`Pourquoi l’hypothèse de l’inconscient est-elle nécessaire ?`, `Parce que « les données de la conscience sont extrêmement lacunaires » : il faut des actes inconscients pour leur donner cohérence.`],
    [`Pourquoi est-elle légitime ?`, `Parce qu’elle fonde « une pratique couronnée de succès » : la psychanalyse.`],
    [`Inconscient somatique / psychique ?`, `<b>Somatique</b> : corporel, reconnu (système nerveux autonome).<br><b>Psychique</b> : l’hypothèse de Freud, contestée.`],
    [`Qu’est-ce que le déterminisme psychique ?`, `Toute idée consciente est déterminée par des idées inconscientes.`],
    [`Contenu manifeste / latent ?`, `<b>Manifeste</b> : ce qu’on raconte du rêve.<br><b>Latent</b> : son sens caché, retrouvé par les associations libres.`],
    [`Pourquoi l’acte manqué est-il « réussi » ?`, `C’est un compromis où une intention inconsciente s’exprime de façon déguisée (« la séance est close »).`],
    [`Les 4 particularités de l’inconscient ?`, `Absence de contradiction, processus primaire (déplacement, condensation), intemporalité, réalité psychique à la place de la réalité extérieure.`],
    [`Qu’est-ce que le refoulement ?`, `Le processus inconscient qui exclut de la conscience les désirs incompatibles avec les exigences morales, sociales ou vitales.`],
    [`Qu’est-ce que la pulsion ?`, `Concept-limite entre psychique et somatique : force d’origine biologique qui oriente vers un objet de satisfaction.`],
    [`La 1ʳᵉ topique ?`, `Inconscient / Préconscient / Conscient, avec une <b>censure</b> entre chaque système.`],
    [`La 2ᵉ topique ?`, `<b>Ça</b> (pulsions), <b>Moi</b> (concilie plaisir et réalité, refoule), <b>Surmoi</b> (interdits intériorisés, conscience morale).`],
    [`En quoi Freud « déconstruit » le sujet ?`, `Le sujet n’est ni <b>simple</b> (3 instances), ni <b>transparent</b> (9/10ᵉ inconscients), ni <b>statique</b> (conflits).`],
    [`Les 3 dimensions de la psychanalyse ?`, `Une <b>thérapie</b>, une <b>théorie</b> du psychisme, une <b>interprétation de la culture</b>.`],
    [`Névrose / Psychose ?`, `<b>Névrose</b> : le rapport à la réalité est conservé.<br><b>Psychose</b> : il est altéré (hallucinations, délire).`],
    [`Le sens des symptômes ?`, `Des réminiscences symboliques de traumatismes ou de conflits, qui donnent une satisfaction indirecte tout en faisant souffrir.`],
    [`Les deux critiques de la psychanalyse ?`, `Au nom de la <b>morale</b> (3ᵉ blessure narcissique, responsabilité) et au nom de la <b>science</b> (Popper).`],
    [`La psychanalyse supprime-t-elle la responsabilité ?`, `Non : elle aide à se réapproprier son histoire. L’homme est <b>déculpabilisé et responsabilisé</b>.`],
    [`Le critère de scientificité de Popper ?`, `La <b>réfutabilité</b> : une théorie est scientifique si une observation pourrait montrer qu’elle est fausse.`],
    [`Pourquoi la psychanalyse n’est pas scientifique pour Popper ?`, `Elle explique tout ; ses échecs sont expliqués par la <b>résistance</b> du patient.`],
    [`Le vrai sens du « Connais-toi toi-même » ?`, `Non pas découvrir une identité cachée, mais <b>examiner</b> ses opinions, ses croyances et ses prétentions au savoir.`],
    [`La conscience selon Bergson ?`, `« Un trait d’union entre ce qui a été et ce qui sera » ; « conscience est synonyme de <b>choix</b> ».`],
    [`Pourquoi refuser de se réduire à son passé ?`, `Cette thèse est désespérante et <b>autoréalisatrice</b> : qui se croit prisonnier de son passé ne lui échappe pas.`],
    [`L’intentionnalité (Husserl, Sartre) ?`, `« Toute conscience est conscience de quelque chose. »`],
    [`« L’existence précède l’essence » ?`, `L’homme n’a pas de nature prédéfinie : il se définit par ses choix et ses actes.`],
    [`Étymologie de « exister » ?`, `Latin <i>ex</i>, hors de, et <i>sistere</i>, se tenir : se tenir hors de soi, se projeter.`],
    [`Facticité / Transcendance ?`, `<b>Facticité</b> : ce qui nous est donné sans choix.<br><b>Transcendance</b> : le pouvoir de le dépasser par un projet.`],
    [`Les formes de la mauvaise foi ?`, `Se réfugier dans la <b>facticité</b> ; se réfugier dans la <b>transcendance</b> ; <b>réifier</b> autrui.`],
    [`L’exemple d’Achmat Hassiem ?`, `Amputé après une attaque de requin, il renonce au football et devient champion de natation : la situation ne fixe pas le projet.`],
    [`La conclusion du chapitre ?`, `Nous ne sommes pas quelque chose à <b>découvrir</b>, mais quelque chose à <b>construire</b>.`]
  ],
  quiz: [
    { q: `Dans « Peut-on se connaître soi-même ? », « soi-même » pose le problème…`, c: [`d’être à la fois sujet et objet de la connaissance`, `de la liberté d’expression`, `de l’existence de Dieu`, `de la valeur des sciences`], e: `Peut-on être le sujet qui connaît et l’objet à connaître ?` },
    { q: `Étymologiquement, « conscience » signifie…`, c: [`savoir avec`, `voir dedans`, `se tenir hors de soi`, `souffle, esprit`], e: `Cum = avec ; scientia = savoir.` },
    { q: `« Retour de l’esprit sur l’impression vécue » : c’est la conscience…`, c: [`réfléchie`, `immédiate`, `morale`, `de soi`], e: `La conscience immédiate ressent ; la conscience réfléchie pense à ce qu’elle vit.` },
    { q: `Pour Kojève, l’animal ne dépasse pas…`, c: [`le sentiment de soi`, `la conscience réfléchie`, `la conscience morale`, `le langage`], e: `L’homme, lui, est conscience de soi.` },
    { q: `Lequel n’est PAS un caractère du doute cartésien ?`, c: [`définitif`, `volontaire`, `méthodique`, `universel`], e: `Il est méthodique, donc provisoire, contrairement au doute sceptique.` },
    { q: `Quel argument pousse le doute jusqu’aux mathématiques ?`, c: [`le Dieu trompeur et le malin génie`, `l’argument du rêve`, `l’illusion des sens`, `le scepticisme de Montaigne`], e: `Même « deux plus trois font cinq » pourrait être une tromperie.` },
    { q: `Chez Descartes, le critère de la vérité est…`, c: [`l’évidence d’une idée claire et distincte`, `l’accord de tous`, `l’expérience des sens`, `la tradition`], e: `Une idée claire et distincte est vraie, garantie par un Dieu vérace.` },
    { q: `La res extensa, c’est…`, c: [`la matière, l’étendue`, `la pensée`, `l’âme`, `le libre arbitre`], e: `Régie par la mécanique et le déterminisme.` },
    { q: `Le « saut substantialiste » reproché à Descartes, c’est passer de…`, c: [`« je suis en tant que je pense » à « je suis une chose qui pense »`, `« je doute » à « Dieu existe »`, `l’âme au corps`, `l’universel au particulier`], e: `Ce passage n’est pas une déduction rigoureuse.` },
    { q: `Pour Locke, l’identité personnelle est assurée par…`, c: [`la mémoire`, `la substance pensante`, `le corps`, `autrui`], e: `Essai sur l’entendement humain (1689).` },
    { q: `Chez Hegel, l’homme se distingue des choses naturelles car il est…`, c: [`pour soi`, `en soi`, `en un seul exemplaire`, `immédiat`], e: `Il se redouble : il se représente lui-même.` },
    { q: `Pour Hegel, passer de la certitude à la vérité exige…`, c: [`la reconnaissance d’une autre conscience`, `l’introspection`, `le doute`, `la mémoire`], e: `« Sa propre certitude de soi n’a encore aucune vérité. »` },
    { q: `Dans la dialectique, l’esclave se libère par…`, c: [`le travail`, `la guerre`, `la jouissance`, `la fuite`], e: `Le travail lui fait voir sa pensée objectivée dans le monde.` },
    { q: `Selon Comte, l’introspection est une illusion car…`, c: [`l’organe observé et l’organe observateur sont identiques`, `l’esprit n’existe pas`, `les passions n’existent pas`, `seul Dieu connaît l’âme`], e: `« L’individu pensant ne saurait se partager en deux. »` },
    { q: `Pour Hume, l’homme n’est qu’…`, c: [`un faisceau de perceptions`, `une chose qui pense`, `un être pour soi`, `un projet`], e: `Il ne trouve jamais de moi, seulement des perceptions.` },
    { q: `Selon Hume, l’idée d’un moi identique vient de…`, c: [`l’imagination`, `la raison`, `une impression constante`, `Dieu`], e: `Elle confond une suite de perceptions reliées avec un objet continu.` },
    { q: `Selon Freud, l’hypothèse de l’inconscient est nécessaire car…`, c: [`les données de la conscience sont lacunaires`, `la conscience est transparente`, `les rêves n’ont aucun sens`, `le corps est une machine`], e: `Il faut supposer des actes inconscients pour rendre la vie psychique cohérente.` },
    { q: `Ce qui légitime l’hypothèse de l’inconscient, c’est…`, c: [`une pratique couronnée de succès, la psychanalyse`, `l’expérimentation en laboratoire`, `l’introspection`, `la réfutabilité`], e: `Le succès de la cure vaut preuve pour Freud.` },
    { q: `Dans la 1ʳᵉ topique, la censure s’exerce…`, c: [`entre chaque système`, `seulement dans le Ça`, `uniquement dans le conscient`, `nulle part`], e: `Entre inconscient et préconscient, et entre préconscient et conscient.` },
    { q: `L’instance qui concilie principe de plaisir et principe de réalité est…`, c: [`le Moi`, `le Ça`, `le Surmoi`, `le préconscient`], e: `C’est aussi lui qui refoule, et il est en partie inconscient.` },
    { q: `La névrose se distingue de la psychose car…`, c: [`le rapport à la réalité est conservé`, `il y a des hallucinations`, `elle est d’origine organique`, `elle est incurable`], e: `La psychose altère le rapport à la réalité.` },
    { q: `Pour Popper, la psychanalyse n’est pas scientifique car…`, c: [`elle n’est pas réfutable`, `elle est trop récente`, `elle parle du corps`, `elle est toujours réfutée`], e: `Ses échecs mêmes s’expliquent par la « résistance » du patient.` },
    { q: `« Conscience signifie choix » est une idée de…`, c: [`Bergson`, `Descartes`, `Hume`, `Comte`], e: `La conscience est un pont entre le passé et l’avenir.` },
    { q: `« Toute conscience est conscience de quelque chose » définit…`, c: [`l’intentionnalité`, `le cogito`, `le refoulement`, `la réflexivité`], e: `Idée de Husserl, reprise par Sartre.` },
    { q: `Se réfugier dans la facticité, c’est dire par exemple…`, c: [`« l’occupation m’a contraint à collaborer »`, `« je ne suis pas celui qui a collaboré »`, `« je suis ce que je fais »`, `« je pense, donc je suis »`], e: `C’est nier sa capacité à dépasser la situation.` }
  ]
},

/* ───────────────────────── CHAPITRE 2 ───────────────────────── */
{
  id: `liberte`,
  label: `Chapitre 2`,
  num: `02`,
  titre: `La <em>liberté</em>`,
  court: `Ch. 2 · La liberté`,
  sousTitre: `Pouvoir spontané de la volonté, ou conquête de la raison contre les déterminismes ?`,
  couleur: [`#D8401F`, `#FF7A5C`],
  notions: [`La liberté`],
  essentiel: [
    `<b>Descartes</b> : le libre arbitre est réel, la volonté est infinie. Plus bas degré : l’indifférence ; plus haut : la <b>liberté éclairée</b>.`,
    `<b>Spinoza</b> : le libre arbitre est une illusion (la pierre consciente). Être libre, c’est <b>comprendre les causes</b> qui nous déterminent.`,
    `<b>Sartre</b> : l’existence précède l’essence. L’homme est <b>condamné à être libre</b>, sans excuse.`,
    `<b>Platon, Épicure, Kant</b> : la liberté n’est pas la licence ; elle passe par la maîtrise des désirs ou par la loi morale.`
  ],
  sections: [
    {
      id: `descartes`,
      titre: `Descartes : le libre arbitre et ses degrés`,
      resume: `La volonté humaine est infinie ; elle est d’autant plus libre qu’elle est éclairée par le vrai.`,
      blocs: [
        { p: `Dans la quatrième des <i>Méditations métaphysiques</i>, Descartes affirme la réalité incontestable du <b>libre arbitre</b>.` },
        { cards: [
          { k: `La volonté`, v: `<b>Infinie</b> par nature : elle égale en amplitude la volonté divine.` },
          { k: `L’entendement`, v: `Notre capacité de concevoir clairement le vrai : <b>limitée</b>, finie.` }
        ]},
        { h: `Les deux degrés de la liberté` },
        { ol: [
          `<b>La liberté d’indifférence</b> — le plus bas degré. Choisir entre deux contraires par caprice, sans motif, ou par ignorance du bien et du vrai. Ce n’est pas une perfection de la volonté mais un <b>défaut de l’entendement</b>.`,
          `<b>La liberté éclairée</b> — le degré supérieur. Adhérer spontanément à ce que l’entendement conçoit clairement et distinctement comme vrai et bon. Celui qui connaît le bien ne délibère pas péniblement : la vérité n’est pas une contrainte, mais l’épanouissement de sa volonté.`
        ]},
        { key: `Plus je connais le vrai et le bien, <b>plus je suis libre</b> : l’hésitation n’est pas le signe de la liberté, mais de l’ignorance.` }
      ]
    },
    {
      id: `spinoza`,
      titre: `Spinoza : l’illusion du libre arbitre`,
      resume: `Nous nous croyons libres parce que nous ignorons les causes qui nous déterminent.`,
      blocs: [
        { p: `Dans la <i>Lettre à Schuller</i> (1674) et l’<i>Éthique</i> (1677), <b>Spinoza</b> dénonce le libre arbitre comme un <b>préjugé né de l’ignorance des causes</b>.` },
        { q: `Les hommes se trompent en ce qu’ils pensent être libres ; et cette opinion consiste en cela seul qu’ils sont conscients de leurs actions et ignorants des causes par lesquelles ils sont déterminés.`, src: `Spinoza, <i>Éthique</i>` },
        { h: `L’analogie de la pierre consciente` },
        { ol: [
          `Une pierre reçoit d’une cause extérieure une impulsion qui la met en mouvement.`,
          `Si on lui donnait une conscience pendant sa course, elle croirait voler <b>librement</b>, par sa seule volonté.`,
          `Ainsi des hommes : le <b>nourrisson</b> croit désirer librement le lait, le <b>garçon en colère</b> veut librement la vengeance, l’<b>ivrogne</b> croit parler par libre décret… ce qu’il regrettera une fois dégrisé.`
        ]},
        { key: `L’homme n’est pas « <b>un empire dans un empire</b> » : il est une partie de la nature, soumise au déterminisme universel.` },
        { h: `La voie de la libération` },
        { def: `Libre nécessité`, d: `Est libre ce qui existe et agit par la <b>seule nécessité de sa nature</b>, sans contrainte extérieure. Seul Dieu, c’est-à-dire la Nature (<i>Deus sive Natura</i>), est absolument libre.` },
        { p: `Pour l’homme, se libérer ne veut pas dire briser les lois naturelles, mais <b>comprendre rationnellement les causes</b> qui le déterminent. En remplaçant les idées inadéquates (passions) par des idées adéquates (connaissance des causes), il augmente sa puissance d’agir et de penser (<i>conatus</i>) et passe de la tristesse de la servitude à la <b>joie</b> de la béatitude.` }
      ]
    },
    {
      id: `sartre`,
      titre: `Sartre : condamné à être libre`,
      resume: `Sans nature humaine donnée d’avance, l’homme se définit par ses choix : il n’a pas d’excuse.`,
      blocs: [
        { p: `Dans <i>L’existentialisme est un humanisme</i> (1946) et les <i>Cahiers pour une morale</i> (1948), <b>Jean-Paul Sartre</b> fonde une philosophie de la <b>liberté absolue</b> et de la <b>responsabilité radicale</b>.` },
        { h: `L’existence précède l’essence` },
        { cards: [
          { k: `Le coupe-papier`, v: `Objet fabriqué : son <b>essence</b> (son concept, sa fonction) précède son existence.` },
          { k: `L’homme`, v: `Sans Dieu pour concevoir une nature humaine préalable, il <b>existe d’abord</b>, puis se définit par ses actes. Il n’est rien d’autre que son <b>projet</b>.` }
        ]},
        { h: `Facticité et transcendance` },
        { cards: [
          { k: `Facticité`, v: `Ce qui m’est donné sans que je l’aie choisi : mon corps, mon époque, ma classe sociale, mon lieu de naissance.` },
          { k: `Transcendance`, v: `Le pouvoir de la conscience de <b>dépasser</b> ce donné en se projetant vers des fins futures.` }
        ]},
        { q: `La maladie est une condition à l’intérieur de laquelle l’homme est de nouveau libre et sans excuses. Ce qui est de lui, c’est l’invention immédiate d’un projet nouveau à travers cette brusque suppression.`, src: `Sartre, <i>Cahiers pour une morale</i>` },
        { ex: `La <b>tuberculose</b> est une facticité brute ; mais la manière de la vivre (révolte, résignation, abnégation, création) relève de la liberté du malade.` },
        { h: `L’angoisse et la mauvaise foi` },
        { p: `Parce que l’homme est « <b>condamné à être libre</b> », sans déterminisme ni valeur extérieure pour le guider, la liberté s’éprouve dans l’<b>angoisse</b>. Pour la fuir, il se réfugie dans la <b>mauvaise foi</b> : le mensonge à soi-même.` },
        { ol: [
          `<b>Se réfugier dans la facticité</b> : nier sa capacité à dépasser la situation, se dire déterminé par son passé ou les circonstances. Ex. : « l’occupation allemande m’a contraint à collaborer ».`,
          `<b>Se réfugier dans la transcendance</b> : nier la situation, ne pas reconnaître ce qu’on a fait. Ex. : « je ne suis pas cette personne qui a collaboré, je suis celle qui s’engage pour plus de justice sociale ».`,
          `<b>Envers autrui</b> : la <b>réification</b> (chosification), considérer l’autre comme une chose entièrement définie.`
        ]}
      ]
    },
    {
      id: `autres`,
      titre: `Platon, Épicure, Kant : d’autres regards`,
      resume: `Être libre, ce n’est pas faire tout ce qu’on veut : c’est maîtriser ses désirs ou obéir à la loi morale.`,
      blocs: [
        { h: `Platon, Gorgias : la réfutation de Calliclès` },
        { p: `Le sophiste <b>Calliclès</b> défend la liberté comme <b>licence</b> : donner le plus grand cours possible à ses passions. Socrate répond que celui qui multiplie ses désirs est comme un <b>tonneau percé</b> qu’on ne peut jamais remplir : il n’est pas libre, mais esclave de ses manques.` },
        { h: `Épicure, Lettre à Ménécée` },
        { p: `La liberté réside dans le calcul des plaisirs et la <b>modération des désirs</b> :` },
        { table: {
          head: [`Désirs`, `Exemples`],
          rows: [
            [`Naturels et nécessaires`, `Boire de l’eau, philosopher`],
            [`Naturels et non nécessaires`, `Mets raffinés`],
            [`Ni naturels ni nécessaires`, `Gloire, richesse`]
          ]
        }},
        { cards: [
          { k: `Aponie`, v: `L’absence de douleur dans le corps.` },
          { k: `Ataraxie`, v: `L’absence de trouble dans l’âme.` }
        ]},
        { h: `Kant : Critique de la raison pure, Critique de la raison pratique` },
        { cards: [
          { k: `Raison théorique`, v: `Elle étudie les phénomènes naturels, soumis au déterminisme causal dans l’espace et le temps. Dans la nature, le libre arbitre est <b>indémontrable</b>.` },
          { k: `Raison pratique`, v: `Dès qu’il s’agit d’agir moralement, le libre arbitre s’impose comme un <b>postulat</b> indispensable.` }
        ]},
        { q: `Tu dois, donc tu peux.`, src: `Kant` },
        { key: `La loi morale implique le pouvoir d’agir : le libre arbitre est la <b>condition de la responsabilité morale</b>.` }
      ]
    }
  ],
  flashcards: [
    [`Volonté et entendement chez Descartes ?`, `La <b>volonté</b> est infinie ; l’<b>entendement</b> est limité.`],
    [`Qu’est-ce que la liberté d’indifférence ?`, `Le <b>plus bas degré</b> de la liberté : choisir sans motif, par caprice ou ignorance. Un défaut de l’entendement.`],
    [`Qu’est-ce que la liberté éclairée ?`, `Le <b>plus haut degré</b> : adhérer spontanément à ce que l’entendement conçoit clairement comme vrai et bon.`],
    [`Pourquoi les hommes se croient-ils libres selon Spinoza ?`, `Ils sont <b>conscients de leurs actions</b> mais <b>ignorants des causes</b> qui les déterminent.`],
    [`L’analogie de la pierre consciente ?`, `Une pierre lancée, si elle était consciente, croirait voler librement : ainsi l’homme ignore les causes qui le meuvent.`],
    [`Les trois exemples de Spinoza ?`, `Le nourrisson (le lait), le garçon en colère (la vengeance), l’ivrogne (ses paroles).`],
    [`« Un empire dans un empire » ?`, `Ce que l’homme n’est <b>pas</b> pour Spinoza : il est une partie de la nature, soumise à ses lois.`],
    [`La liberté selon Spinoza ?`, `La <b>libre nécessité</b> : agir par la seule nécessité de sa nature. Pour l’homme : comprendre les causes qui le déterminent.`],
    [`Que signifie « Deus sive Natura » ?`, `« Dieu, c’est-à-dire la Nature » : chez Spinoza, Dieu est immanent, confondu avec la Nature. Seul il est absolument libre.`],
    [`« L’existence précède l’essence » ?`, `Contrairement au coupe-papier, l’homme existe d’abord puis se définit par ses actes : il n’est que son projet.`],
    [`Qu’est-ce que la facticité ?`, `Ce qui nous est donné sans qu’on l’ait choisi : corps, époque, classe sociale, lieu.`],
    [`Qu’est-ce que la transcendance chez Sartre ?`, `Le pouvoir de la conscience de dépasser le donné en se projetant vers l’avenir.`],
    [`L’exemple de la maladie chez Sartre ?`, `La tuberculose est une facticité, mais la façon de la vivre reste libre : l’homme est « libre et sans excuse ».`],
    [`Pourquoi la liberté s’éprouve-t-elle dans l’angoisse ?`, `Parce que l’homme est <b>condamné à être libre</b>, sans rien d’extérieur pour décider à sa place.`],
    [`Qu’est-ce que la mauvaise foi ?`, `Le mensonge à soi-même pour fuir l’angoisse : se réfugier dans la facticité ou dans la transcendance.`],
    [`Que répond Socrate à Calliclès ?`, `Celui qui multiplie ses désirs est un <b>tonneau percé</b> : esclave de ses manques, pas libre.`],
    [`Les trois sortes de désirs selon Épicure ?`, `Naturels et nécessaires (eau, philosopher) ; naturels non nécessaires (mets raffinés) ; ni naturels ni nécessaires (gloire, richesse).`],
    [`Aponie et ataraxie ?`, `<b>Aponie</b> : absence de douleur du corps.<br><b>Ataraxie</b> : absence de trouble de l’âme.`],
    [`La liberté chez Kant ?`, `Indémontrable pour la <b>raison théorique</b> (nature déterminée), mais <b>postulat</b> de la raison pratique : « Tu dois, donc tu peux ».`]
  ],
  quiz: [
    { q: `Pour Descartes, la volonté est…`, c: [`infinie`, `limitée`, `inexistante`, `soumise aux passions`], e: `Elle égale en amplitude la volonté divine ; c’est l’entendement qui est limité.` },
    { q: `La liberté d’indifférence est…`, c: [`le plus bas degré de la liberté`, `le plus haut degré de la liberté`, `la liberté de Dieu`, `la libre nécessité`], e: `Elle vient d’un défaut de l’entendement.` },
    { q: `La liberté éclairée consiste à…`, c: [`adhérer à ce que l’entendement voit clairement comme vrai et bon`, `choisir au hasard`, `suivre ses passions`, `refuser toute vérité`], e: `Celui qui connaît le bien ne délibère pas péniblement.` },
    { q: `Selon Spinoza, les hommes se croient libres car…`, c: [`ils sont conscients de leurs actions mais ignorent les causes`, `leur volonté est infinie`, `Dieu les a créés libres`, `ils choisissent leur essence`], e: `C’est un préjugé né de l’ignorance des causes.` },
    { q: `La pierre consciente illustre…`, c: [`l’illusion du libre arbitre`, `la liberté éclairée`, `la mauvaise foi`, `la facticité`], e: `Elle croirait voler librement alors qu’elle a été lancée.` },
    { q: `Pour Spinoza, devenir libre, c’est…`, c: [`comprendre les causes qui nous déterminent`, `briser les lois de la nature`, `suivre tous ses désirs`, `obéir à l’État`], e: `Les idées adéquates augmentent notre puissance d’agir.` },
    { q: `« L’existence précède l’essence » : l’homme…`, c: [`se définit par ses actes et ses choix`, `a une nature fixée d’avance`, `est déterminé par Dieu`, `est comme un objet fabriqué`], e: `Le coupe-papier, lui, a une essence avant d’exister.` },
    { q: `Chez Sartre, la facticité désigne…`, c: [`ce qui nous est donné sans qu’on l’ait choisi`, `le pouvoir de dépasser le donné`, `le mensonge à soi`, `l’angoisse`], e: `Corps, époque, classe sociale, lieu de naissance…` },
    { q: `Pour Sartre, la maladie…`, c: [`laisse l’homme libre et sans excuse`, `supprime toute liberté`, `est une excuse légitime`, `est une forme de mauvaise foi`], e: `La manière de la vivre relève toujours de la liberté.` },
    { q: `La mauvaise foi, c’est…`, c: [`se mentir à soi-même pour fuir l’angoisse`, `mentir aux autres`, `une erreur de raisonnement`, `une forme de politesse`], e: `On se réfugie dans la facticité ou dans la transcendance.` },
    { q: `Celui qui multiplie ses désirs est comparé à…`, c: [`un tonneau percé`, `une pierre lancée`, `un taon`, `un théâtre`], e: `Socrate contre Calliclès, dans le Gorgias de Platon.` },
    { q: `Pour Épicure, la gloire et la richesse sont des désirs…`, c: [`ni naturels ni nécessaires`, `naturels et nécessaires`, `naturels et non nécessaires`, `divins`], e: `Boire de l’eau et philosopher sont naturels et nécessaires.` },
    { q: `L’ataraxie, c’est…`, c: [`l’absence de trouble dans l’âme`, `l’absence de douleur dans le corps`, `le plaisir maximal`, `la liberté d’indifférence`], e: `L’aponie concerne le corps.` },
    { q: `Chez Kant, le libre arbitre est…`, c: [`un postulat de la raison pratique`, `démontré par la science`, `une pure illusion`, `réservé à Dieu`], e: `« Tu dois, donc tu peux. »` }
  ]
}

];
