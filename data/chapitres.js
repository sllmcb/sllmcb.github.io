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
  sousTitre: `La conscience de soi est-elle une certitude transparente, ou une construction traversée d’illusions ?`,
  couleur: [`#2E3BFF`, `#8A93FF`],
  notions: [`La conscience`, `L’inconscient`],
  essentiel: [
    `<b>Descartes</b> : le doute hyperbolique mène à une certitude absolue, « je pense, donc je suis ». Le sujet est une <b>chose qui pense</b>, transparente à elle-même.`,
    `<b>Comte, Hume, Hegel</b> contestent cette transparence : l’introspection est impossible, le moi n’est qu’un flux de perceptions, on se connaît par le monde et par autrui.`,
    `<b>Freud</b> : l’essentiel de la vie psychique est inconscient. « Le moi n’est pas maître dans sa propre maison. »`,
    `L’inconscient est contesté <b>au nom de la morale</b> (la responsabilité) et <b>au nom de la science</b> (Popper : la psychanalyse n’est pas réfutable).`
  ],
  sections: [
    {
      id: `doute`,
      partie: `I · La conscience`,
      titre: `Descartes : le doute méthodique`,
      resume: `Pour trouver une vérité indubitable, Descartes doute volontairement de tout ce qui peut l’être.`,
      blocs: [
        { p: `Dans un contexte de crise intellectuelle (effondrement de la physique d’Aristote), <b>René Descartes</b> (1596-1650) veut refonder le savoir sur des bases inébranlables. Son outil : le <b>doute</b>.` },
        { cards: [
          { k: `Volontaire`, v: `Une décision réfléchie, pas un égarement sceptique subi.` },
          { k: `Méthodique`, v: `Provisoire : un moyen d’atteindre la certitude, pas une fin en soi.` },
          { k: `Universel`, v: `Radical : il attaque les fondements. « Dès lors que les fondations sont ébranlées, tout l’édifice s’écroule. »` },
          { k: `Hyperbolique`, v: `Poussé à l’extrême : tout ce qui offre le moindre motif de doute est tenu pour faux.` }
        ]},
        { h: `Les trois échelons du doute` },
        { ol: [
          `<b>L’illusion des sens.</b> Le bâton plongé dans l’eau paraît brisé, la tour carrée semble ronde de loin. Il est prudent de ne jamais se fier entièrement à ce qui nous a trompés une fois.`,
          `<b>L’argument du rêve.</b> Aucun indice certain ne distingue la veille du sommeil : je peux croire être assis près du feu alors que je dors nu dans mon lit.`,
          `<b>Le Dieu trompeur et le Malin Génie.</b> Même 2 + 3 = 5 pourrait être une illusion, si une puissance omnipotente mettait sans cesse de fausses évidences dans mon esprit : un « mauvais génie, non moins rusé et trompeur que puissant ».`
        ]}
      ]
    },
    {
      id: `cogito`,
      titre: `Descartes : le cogito, « une chose qui pense »`,
      resume: `Même si un génie me trompe, pour être trompé il faut exister : je pense, donc je suis.`,
      blocs: [
        { p: `Dans la deuxième des <i>Méditations métaphysiques</i> (1641), Descartes découvre le point fixe qui résiste au doute hyperbolique :` },
        { q: `Il n’y a donc point de doute que je suis, s’il me trompe ; et qu’il me trompe tant qu’il voudra, il ne saura jamais faire que je ne sois rien, tant que je penserai être quelque chose. […] Je suis, j’existe, est nécessairement vraie, toutes les fois que je la prononce, ou que je la conçois en mon esprit.`, src: `Descartes, <i>Méditations métaphysiques</i> II` },
        { key: `Pensée et existence sont <b>indissociables</b> : pour être trompé, il faut nécessairement exister. Le <b>cogito</b> (<i>cogito ergo sum</i>, « je pense, donc je suis », <i>Discours de la méthode</i>, 1637) est une <b>intuition intellectuelle immédiate</b> : la conscience fait retour sur elle-même.` },
        { h: `Que suis-je ?` },
        { q: `Une chose qui pense.`, src: `Descartes — <i>res cogitans</i>` },
        { q: `Par le mot de pensée, j’entends tout ce qui se fait en nous de telle sorte que nous l’apercevons immédiatement par nous-mêmes.`, src: `Descartes, <i>Principes de la philosophie</i>` },
        { cards: [
          { k: `Simplicité`, v: `L’âme est indivisible, distincte du corps matériel étendu (<i>res extensa</i>).` },
          { k: `Transparence`, v: `La pensée est immédiatement consciente d’elle-même, sans zone d’ombre.` },
          { k: `Libre arbitre`, v: `Une puissance infinie d’affirmer, de nier, de poursuivre ou de fuir.` }
        ]}
      ]
    },
    {
      id: `comte`,
      titre: `Comte : l’introspection est impossible`,
      resume: `L’esprit ne peut pas s’observer lui-même : l’observateur et l’observé sont le même organe.`,
      blocs: [
        { p: `Dans son <i>Cours de philosophie positive</i> (1830-1842), <b>Auguste Comte</b> dénonce l’illusion selon laquelle l’esprit pourrait se connaître par contemplation intérieure.` },
        { def: `Introspection`, d: `Du latin <i>introspectare</i> : regarder à l’intérieur de soi. Elle prétend faire de la conscience à la fois le <b>sujet</b> qui connaît et l’<b>objet</b> connu.` },
        { p: `Or toute méthode scientifique suppose que l’observateur se distingue de ce qu’il observe.` },
        { ex: `L’homme agité par une <b>violente colère</b> ne peut s’observer sereinement sans détruire l’état même qu’il veut analyser.` },
        { q: `L’individu pensant ne saurait se partager en deux, dont l’un raisonnerait, tandis que l’autre regarderait raisonner.`, src: `Comte, <i>Cours de philosophie positive</i>` },
        { key: `L’organe observé et l’organe observateur étant identiques, l’observation intérieure objective est un <b>sophisme</b>. La conscience immédiate produit l’<b>illusion</b> d’une science de soi.` }
      ]
    },
    {
      id: `hume`,
      titre: `Hume : le moi, un théâtre sans scène`,
      resume: `Quand je regarde en moi, je ne trouve jamais « le moi », seulement des perceptions qui passent.`,
      blocs: [
        { p: `Dans le <i>Traité de la nature humaine</i> (1739-1740), <b>David Hume</b> applique l’<b>empirisme</b> à l’idée d’un « moi » permanent :` },
        { ol: [
          `Toute idée valide doit venir d’une <b>impression sensible</b>. Pour que le moi existe comme substance, il faudrait une impression invariable tout au long de la vie.`,
          `Or, en moi, je ne rencontre jamais le moi : seulement des <b>perceptions particulières</b> (chaud ou froid, douleur ou plaisir, lumière ou ombre) qui se succèdent à une vitesse inconcevable.`,
          `Donc le moi substantiel et l’âme unifiée sont des <b>fictions de l’imagination</b>, qui relie des impressions discontinues par ressemblance et causalité.`
        ]},
        { key: `L’esprit est une sorte de <b>théâtre</b> où des perceptions apparaissent, passent, repassent et s’évanouissent. Mais la métaphore s’arrête là : il n’y a <b>même pas de scène fixe</b>.` }
      ]
    },
    {
      id: `hegel`,
      titre: `Hegel : se connaître par le monde et par autrui`,
      resume: `La conscience de soi ne s’atteint pas seul : elle passe par le travail, l’art et la reconnaissance d’autrui.`,
      blocs: [
        { p: `Pour <b>Hegel</b> (<i>Cours d’esthétique</i>, <i>Phénoménologie de l’esprit</i>, 1807), on ne se connaît pas par une introspection solitaire, mais en <b>s’extériorisant</b>.` },
        { cards: [
          { k: `« En soi »`, v: `Les choses naturelles existent immédiatement, en un seul exemplaire. L’homme aussi est un être naturel.` },
          { k: `« Pour soi »`, v: `Mais l’homme est aussi un être conscient, capable de réflexivité : il a une double existence.` }
        ]},
        { h: `Deux voies pour prendre conscience de soi` },
        { ol: [
          `<b>La voie théorique</b> : par la réflexion, l’homme contemple ce qui s’agite en lui, ses passions et ses pensées.`,
          `<b>La voie pratique</b> : en transformant le monde (le <b>travail</b> et l’<b>art</b>), l’homme « dépose le sceau de son intériorité » dans les choses. Il supprime leur étrangeté et s’y reconnaît : il réalise <b>en acte</b> ce qui n’était qu’<b>en puissance</b>.`
        ]},
        { ex: `L’<b>enfant qui jette des cailloux</b> dans la rivière et admire les ronds dans l’eau contemple le reflet de sa propre activité.` },
        { h: `La dialectique du maître et de l’esclave` },
        { q: `La conscience de soi n’atteint sa vérité que par la reconnaissance d’une autre conscience de soi.`, src: `Hegel, <i>Phénoménologie de l’esprit</i>` },
        { ol: [
          `<b>Le face-à-face.</b> Deux consciences se rencontrent. Chacune a une certitude subjective d’elle-même, sans vérité objective tant qu’autrui ne la reconnaît pas.`,
          `<b>La lutte à mort.</b> Pour prouver qu’elle n’est pas réductible à la vie animale, la conscience doit <b>risquer sa vie</b>.`,
          `<b>Maître et esclave.</b> Celle qui préfère la liberté à la vie devient le <b>Maître</b> ; celle qui a peur de la mort et préfère la servitude devient l’<b>Esclave</b>.`,
          `<b>Le renversement.</b> Le maître jouit des objets sans rien faire : sa conscience stagne et dépend de l’esclave. L’esclave, lui, discipline ses désirs et transforme la matière : par son travail, il acquiert la <b>véritable autonomie</b>.`
        ]}
      ]
    },
    {
      id: `freud`,
      partie: `II · L’inconscient`,
      titre: `Freud invente l’inconscient psychique`,
      resume: `Une partie de notre vie psychique échappe à la conscience et agit sur elle : c’est l’inconscient.`,
      blocs: [
        { p: `<b>Sigmund Freud</b> (1856-1939), médecin et neurologue viennois, formé auprès de <b>Charcot</b> à la Salpêtrière puis collaborateur de <b>Breuer</b>, fonde la <b>psychanalyse</b> à partir du traitement des névroses. Sa découverte brise la <b>transparence cartésienne</b> de l’esprit.` },
        { cards: [
          { k: `Inconscient somatique`, v: `Purement corporel, physiologique (<i>sôma</i> = le corps).` },
          { k: `Inconscient psychique`, v: `Celui de Freud (<i>psyché</i> = souffle, esprit) : <b>dynamique</b>, doté d’une énergie propre, régi par le <b>principe de plaisir</b>.` }
        ]},
        { def: `Pulsion (Trieb)`, d: `Concept-limite entre le psychique et le corporel : une force d’origine biologique qui pousse le sujet vers un objet capable de le satisfaire.` },
        { def: `Refoulement (Verdrängung)`, d: `Mécanisme inconscient par lequel le sujet écarte de la conscience des souvenirs ou des désirs incompatibles avec les exigences morales, sociales ou vitales.` },
        { key: `L’inconscient ignore le <b>temps</b>, le <b>doute</b>, la <b>contradiction</b> et la <b>négation</b> : il est entièrement gouverné par le principe de plaisir.` },
        { h: `Repères chronologiques` },
        { timeline: [
          [`1885-86`, `Stage à Paris auprès de Charcot : hystérie et hypnose.`],
          [`1895`, `<i>Études sur l’hystérie</i>, avec Breuer (Anna O., Elisabeth von R.).`],
          [`1900`, `<i>L’Interprétation du rêve</i> : le rêve, « voie royale » vers l’inconscient.`],
          [`1901`, `<i>Psychopathologie de la vie quotidienne</i> : actes manqués, oublis, lapsus.`],
          [`1905`, `<i>Trois essais sur la théorie sexuelle</i> : la sexualité infantile.`],
          [`1914-15`, `<i>Pour introduire le narcissisme</i>, <i>Métapsychologie</i>.`],
          [`1920`, `<i>Au-delà du principe de plaisir</i> : la pulsion de mort.`],
          [`1923`, `<i>Le Moi et le Ça</i> : la deuxième topique.`],
          [`1927`, `<i>L’Avenir d’une illusion</i> : la religion.`],
          [`1930`, `<i>Malaise dans la civilisation</i>.`],
          [`1938-39`, `Exil à Londres pour fuir le nazisme ; mort le 23 septembre 1939.`]
        ]}
      ]
    },
    {
      id: `topiques`,
      titre: `Les deux topiques et l’iceberg`,
      resume: `Freud cartographie l’esprit : la conscience n’est que la partie émergée de l’iceberg.`,
      blocs: [
        { def: `Topique`, d: `Du grec <i>topos</i>, le lieu : une représentation « spatiale » de l’appareil psychique.` },
        { table: {
          head: [``, `1ʳᵉ topique (1900-1920)`, `2ᵉ topique (1920-1939)`],
          rows: [
            [`Le fond`, `<b>Inconscient</b> : pulsions innées et représentations refoulées.`, `<b>Ça</b> : réservoir pulsionnel, entièrement inconscient, qui exige une satisfaction immédiate.`],
            [`Le milieu`, `<b>Préconscient</b> : souvenirs et savoirs absents de la conscience mais accessibles volontairement.`, `<b>Moi</b> : arbitre fragile entre le Ça, le Surmoi et la réalité.`],
            [`Le haut`, `<b>Conscient</b> : système perceptif en contact avec la réalité.`, `<b>Surmoi</b> : héritier du complexe d’Œdipe, interdits parentaux et normes intériorisés ; juge intérieur, source de culpabilité.`]
          ]
        }},
        { p: `Dans la première topique, une <b>censure</b> sépare l’inconscient du préconscient.` },
        { h: `L’analogie de l’iceberg` },
        { p: `La conscience n’est que la <b>partie émergée</b>. La masse immergée, invisible et bien plus grande, c’est l’inconscient, qui oriente la vie consciente à l’insu du sujet.` },
        { q: `Le moi n’est pas maître dans sa propre maison.`, src: `Freud` }
      ]
    },
    {
      id: `manifestations`,
      titre: `Rêves, lapsus, symptômes : la cure`,
      resume: `L’inconscient se trahit par des compromis entre le désir refoulé et la censure.`,
      blocs: [
        { cards: [
          { k: `Le rêve`, v: `Un <b>contenu manifeste</b> (le récit dont on se souvient) et un <b>contenu latent</b> (le sens caché), déformé par le travail du rêve : <b>condensation</b> et <b>déplacement</b>.` },
          { k: `Actes manqués, lapsus`, v: `Erreurs de langage ou gestes maladroits : un désir inconscient contrarie l’intention consciente.` },
          { k: `Symptôme, hystérie`, v: `Troubles psychiques ou physiques (paralysies sans lésion) issus d’un conflit refoulé, souvent infantile et sexuel.` }
        ]},
        { h: `La cure psychanalytique` },
        { ul: [
          `La méthode des <b>associations libres</b>.`,
          `L’analyse du <b>transfert</b> : le patient projette ses affects sur l’analyste.`
        ]},
        { key: `Le psychanalyste n’apporte pas un savoir tout fait : il aide le patient à <b>verbaliser</b> ses conflits pour se réapproprier son histoire et transformer sa souffrance en <b>lucidité</b>.` }
      ]
    },
    {
      id: `contestations`,
      titre: `Les critiques de la psychanalyse`,
      resume: `L’inconscient blesse l’orgueil humain (morale) et n’est pas réfutable (science).`,
      blocs: [
        { h: `Au nom de la morale : la troisième blessure narcissique` },
        { ol: [
          `<b>Copernic</b> : la Terre n’est plus le centre du monde.`,
          `<b>Darwin</b> : l’homme descend de formes animales.`,
          `<b>Freud</b> : l’homme n’est plus souverain dans son propre esprit.`
        ]},
        { table: {
          head: [``, `Conception classique`, `Avec la psychanalyse`],
          rows: [
            [`Nature humaine`, `Être de raison (Aristote : animal doué de <i>logos</i>).`, `Forces pulsionnelles et irrationnelles.`],
            [`Conscience`, `Transparente (<i>res cogitans</i>, Descartes).`, `Lacunaire : 9/10ᵉ de la vie psychique sont inconscients.`],
            [`Liberté`, `Libre arbitre, volonté infinie.`, `Déterminisme psychique.`],
            [`Responsabilité`, `Fondement de la morale et du droit.`, `Risque de déculpabilisation, mais visée d’émancipation par la prise de conscience.`]
          ]
        }},
        { h: `Au nom de la science : Popper et la réfutabilité` },
        { p: `Dans <i>La Logique de la découverte scientifique</i> (1934) et <i>Conjectures et réfutations</i> (1963), <b>Karl Popper</b> propose un critère pour distinguer science et non-science :` },
        { def: `Falsifiabilité (réfutabilité)`, d: `Une théorie n’est scientifique que si une observation ou une expérience concevable <b>pourrait montrer qu’elle est fausse</b>.` },
        { p: `Or la psychanalyse explique tout après coup : si le patient accepte l’interprétation, elle est confirmée ; s’il la refuse, son refus est une « <b>résistance</b> »… qui la confirme encore.` },
        { key: `Immunisée contre toute réfutation, la psychanalyse est, sur le plan épistémologique, une <b>pseudo-science</b> (comme l’astrologie ou le marxisme dogmatique), même si elle garde un intérêt clinique et interprétatif.` },
        { h: `Un précurseur : Leibniz et les petites perceptions` },
        { p: `Dès 1704, dans les <i>Nouveaux Essais sur l’entendement humain</i>, <b>Leibniz</b> conteste la transparence cartésienne : notre conscience repose sur une infinité d’impressions inconscientes.` },
        { ex: `Le <b>bruit des vagues</b> est fait de l’infinité des petits bruits de chaque goutte d’eau, que nous ne percevons pas un par un.` }
      ]
    }
  ],
  flashcards: [
    [`Les 4 caractéristiques du doute cartésien ?`, `<b>Volontaire</b>, <b>méthodique</b> (provisoire), <b>universel</b> (radical), <b>hyperbolique</b>.`],
    [`Les 3 échelons du doute ?`, `1. L’illusion des sens<br>2. L’argument du rêve<br>3. Le Dieu trompeur / Malin Génie`],
    [`Pourquoi le Malin Génie ne peut-il pas tout rendre douteux ?`, `Pour être trompé, il faut exister : « je suis, j’existe » est nécessairement vrai chaque fois que je le pense.`],
    [`Où trouve-t-on « cogito ergo sum » ?`, `Dans le <i>Discours de la méthode</i> (1637). Dans les <i>Méditations</i> (1641) : « Je suis, j’existe ».`],
    [`Que suis-je selon Descartes ?`, `<b>Une chose qui pense</b> (<i>res cogitans</i>), distincte du corps étendu (<i>res extensa</i>).`],
    [`Les 3 attributs de la pensée chez Descartes ?`, `<b>Simplicité</b> (indivisible), <b>transparence</b> (consciente d’elle-même), <b>libre arbitre</b>.`],
    [`Pourquoi l’introspection est-elle impossible selon Comte ?`, `L’organe observateur et l’organe observé sont le même : on ne peut se partager en deux.`],
    [`L’exemple de Comte ?`, `L’homme en colère ne peut s’observer sans détruire sa colère.`],
    [`Que trouve Hume quand il regarde en lui ?`, `Jamais le moi : seulement des <b>perceptions particulières</b> qui se succèdent.`],
    [`À quoi Hume compare-t-il l’esprit ?`, `À un <b>théâtre</b> où les perceptions passent… mais sans même de scène fixe.`],
    [`D’où vient l’idée d’un moi selon Hume ?`, `D’une <b>fiction de l’imagination</b>, qui relie des impressions discontinues par ressemblance et causalité.`],
    [`« En soi » et « pour soi » chez Hegel ?`, `<b>En soi</b> : exister immédiatement, comme une chose.<br><b>Pour soi</b> : être conscient de soi, réflexif.`],
    [`Les deux voies de la conscience de soi chez Hegel ?`, `<b>Théorique</b> (réflexion) et <b>pratique</b> (transformer le monde : travail, art).`],
    [`L’exemple de l’enfant chez Hegel ?`, `Il jette des cailloux dans la rivière et admire les ronds : il contemple le reflet de sa propre activité.`],
    [`Comment naissent le maître et l’esclave ?`, `Par la <b>lutte à mort</b> : celui qui risque sa vie devient maître ; celui qui a peur de mourir devient esclave.`],
    [`Le renversement maître / esclave ?`, `Le maître dépend du travail de l’esclave et stagne ; l’esclave, par son travail, devient <b>autonome</b>.`],
    [`Inconscient somatique vs psychique ?`, `<b>Somatique</b> : corporel.<br><b>Psychique</b> (Freud) : dynamique, régi par le principe de plaisir.`],
    [`Qu’est-ce que la pulsion ?`, `Une force d’origine biologique, entre le psychique et le corporel, qui pousse vers un objet de satisfaction.`],
    [`Qu’est-ce que le refoulement ?`, `Le mécanisme inconscient qui écarte de la conscience les désirs ou souvenirs inacceptables.`],
    [`Ce que l’inconscient ignore ?`, `Le temps, le doute, la contradiction et la négation.`],
    [`La 1ʳᵉ topique ?`, `Inconscient / Préconscient / Conscient (une censure sépare l’inconscient du préconscient).`],
    [`La 2ᵉ topique ?`, `<b>Ça</b> (pulsions), <b>Moi</b> (arbitre), <b>Surmoi</b> (interdits intériorisés).`],
    [`Qu’est-ce que le Surmoi ?`, `L’héritier du complexe d’Œdipe : les interdits parentaux et sociaux intériorisés. Juge intérieur, source de culpabilité.`],
    [`Contenu manifeste vs latent ?`, `<b>Manifeste</b> : le récit du rêve.<br><b>Latent</b> : son sens caché (condensation, déplacement).`],
    [`Les trois blessures narcissiques ?`, `<b>Copernic</b> (cosmologique), <b>Darwin</b> (biologique), <b>Freud</b> (psychologique).`],
    [`Le critère de scientificité de Popper ?`, `La <b>falsifiabilité</b> : une théorie doit pouvoir être réfutée par l’expérience.`],
    [`Pourquoi la psychanalyse n’est pas scientifique pour Popper ?`, `Elle explique tout : si le patient refuse l’interprétation, c’est une « résistance » qui la confirme.`],
    [`Les petites perceptions de Leibniz ?`, `Une infinité d’impressions inconscientes sous la conscience. Ex. : le bruit des vagues.`]
  ],
  quiz: [
    { q: `Le doute cartésien est…`, c: [`volontaire, méthodique, universel et hyperbolique`, `subi, sceptique et définitif`, `limité aux sens`, `une fin en soi`], e: `C’est un outil provisoire pour atteindre la certitude.` },
    { q: `Quel argument fait douter même des mathématiques ?`, c: [`Le Dieu trompeur / Malin Génie`, `L’illusion des sens`, `L’argument du rêve`, `Le bâton brisé dans l’eau`], e: `Une puissance trompeuse pourrait me faire croire que 2 + 3 = 5.` },
    { q: `Pourquoi « je suis, j’existe » résiste au Malin Génie ?`, c: [`Pour être trompé, il faut exister`, `Car Dieu est bon`, `Car les sens le confirment`, `Car c’est une vérité mathématique`], e: `Pensée et existence sont indissociables.` },
    { q: `« Cogito ergo sum » est formulé dans…`, c: [`le Discours de la méthode (1637)`, `le Traité de la nature humaine`, `la Phénoménologie de l’esprit`, `le Cours de philosophie positive`], e: `Les Méditations (1641) disent « Je suis, j’existe ».` },
    { q: `Selon Comte, l’introspection est impossible car…`, c: [`l’observateur et l’observé sont le même organe`, `l’esprit n’existe pas`, `les passions n’existent pas`, `il faut un psychanalyste`], e: `« L’individu pensant ne saurait se partager en deux. »` },
    { q: `Hume compare l’esprit à…`, c: [`un théâtre sans scène fixe`, `un iceberg`, `une maison`, `un taon`], e: `Des perceptions y passent et repassent, sans moi permanent.` },
    { q: `Chez Hegel, l’enfant qui jette des cailloux dans l’eau…`, c: [`contemple le reflet de sa propre activité`, `apprend la physique`, `fuit son maître`, `refoule un désir`], e: `C’est la voie pratique de la conscience de soi.` },
    { q: `Dans la dialectique hégélienne, le maître est celui qui…`, c: [`a risqué sa vie dans la lutte`, `a eu peur de la mort`, `travaille la matière`, `possède le plus de terres`], e: `Il a préféré la liberté à la vie biologique.` },
    { q: `Qui finit par acquérir la véritable autonomie ?`, c: [`L’esclave, par son travail`, `Le maître, par sa jouissance`, `Les deux également`, `Aucun des deux`], e: `En transformant la matière, l’esclave y objective sa pensée.` },
    { q: `Dans la 2ᵉ topique, le réservoir des pulsions est…`, c: [`le Ça`, `le Moi`, `le Surmoi`, `le préconscient`], e: `Entièrement inconscient, il exige une satisfaction immédiate.` },
    { q: `Le Surmoi, c’est…`, c: [`les interdits parentaux et sociaux intériorisés`, `le réservoir des pulsions`, `la conscience perceptive`, `un souvenir accessible`], e: `Héritier du complexe d’Œdipe, il est source de culpabilité.` },
    { q: `Le rêve a un contenu manifeste et un contenu…`, c: [`latent`, `refoulé`, `préconscient`, `somatique`], e: `Le contenu latent est le sens caché, déformé par condensation et déplacement.` },
    { q: `La troisième blessure narcissique est infligée par…`, c: [`Freud`, `Copernic`, `Darwin`, `Descartes`], e: `Après Copernic et Darwin : l’homme n’est plus maître de son esprit.` },
    { q: `Pour Popper, une théorie est scientifique si elle est…`, c: [`réfutable`, `toujours confirmée`, `capable de tout expliquer`, `très ancienne`], e: `C’est justement parce qu’elle explique tout que la psychanalyse n’est pas scientifique.` },
    { q: `Les « petites perceptions » sont une idée de…`, c: [`Leibniz`, `Hume`, `Comte`, `Freud`], e: `Nouveaux Essais (1704) : l’exemple du bruit des vagues.` }
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
        { q: `La maladie est une condition à l’intérieur de laquelle l’homme est de nouveau libre et sans excuse. Ce qui est de lui, c’est l’invention immédiate d’un nouveau projet à travers cette brusque répression.`, src: `Sartre, <i>Cahiers pour une morale</i>` },
        { ex: `La <b>tuberculose</b> est une facticité brute ; mais la manière de la vivre (révolte, résignation, abnégation, création) relève de la liberté du malade.` },
        { h: `L’angoisse et la mauvaise foi` },
        { p: `Parce que l’homme est « <b>condamné à être libre</b> », sans déterminisme ni valeur extérieure pour le guider, la liberté s’éprouve dans l’<b>angoisse</b>. Pour la fuir, il se réfugie dans la <b>mauvaise foi</b> : le mensonge à soi-même.` },
        { ol: [
          `<b>Se réfugier dans la facticité</b> : prétendre ne pas avoir eu le choix, agir comme une chose déterminée par son passé, ses gènes ou la société (le « lâche »).`,
          `<b>Se réfugier dans la transcendance</b> : se croire au-dessus de toute situation concrète, rêver des possibles sans jamais s’engager dans le réel.`
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
