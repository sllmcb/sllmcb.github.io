# Philo · Terminale

Site de révision de philosophie : le cours vu en classe, des fiches express, des flashcards, des quiz, les citations, les auteurs, les repères et la méthode du bac.

## Structure

```
index.html          la page (ne change presque jamais)
assets/style.css    le design
assets/app.js       le fonctionnement (pages, flashcards, quiz, recherche)
data/chapitres.js   ← LE COURS : un bloc par chapitre
data/outils.js      ← méthode, repères, auteurs, programme
```

Tout le contenu est dans `data/`. Le reste du site se met à jour tout seul.

## Ajouter un chapitre

1. Ouvre `data/chapitres.js`.
2. Copie un chapitre entier (de `{` à `},`) et colle-le à la fin, juste avant le `];`.
3. Change :
   - `id` : un mot sans espace ni accent (ex. `verite`). Il sert dans l'adresse : `#/cours/verite`.
   - `label`, `num` : `Chapitre 3`, `03`.
   - `titre` : le mot entre `<em>…</em>` s'affiche en italique couleur.
   - `couleur` : `[couleur thème clair, couleur thème sombre]`.
   - `notions` : les notions du programme traitées (elles s'allument sur la page Programme). Écris-les exactement comme dans `data/outils.js`, ex. `La vérité`.
   - `essentiel` : 4 phrases pour « L'essentiel en 30 secondes ».
   - `sections` : les parties du cours.
   - `flashcards` : `[question, réponse]`.
   - `quiz` : la **première** réponse de `c` est la bonne (elles sont mélangées à l'affichage).
4. Ajoute les nouveaux auteurs dans `PHILO.auteurs` (`data/outils.js`), avec `ch: ['verite']`.

### Les blocs disponibles dans une section

| Bloc | Écriture | Visible en « fiche express » |
|---|---|---|
| Paragraphe | `{ p: \`texte\` }` | non |
| Sous-titre | `{ h: \`titre\` }` | non |
| Liste à puces | `{ ul: [\`a\`, \`b\`] }` | non |
| Liste numérotée | `{ ol: [\`a\`, \`b\`] }` | non |
| Définition | `{ def: \`Mot\`, d: \`définition\` }` | oui |
| Citation | `{ q: \`citation\`, src: \`Auteur, <i>Œuvre</i>\` }` | oui (et page Citations) |
| À retenir | `{ key: \`texte\` }` | oui |
| Exemple | `{ ex: \`texte\` }` | non |
| Cartes | `{ cards: [{ k: \`titre\`, v: \`texte\` }] }` | non |
| Tableau | `{ table: { head: [...], rows: [[...]] } }` | non |
| Frise | `{ timeline: [[\`1900\`, \`texte\`]] }` | non |

Dans le texte : `<b>gras</b>`, `<i>italique</i>`, `<br>` pour un retour à la ligne.

## Date du bac blanc

`PHILO.config.bacBlanc` en haut de `data/chapitres.js` (format `AAAA-MM-JJ`). Le compte à rebours disparaît une fois la date passée.

## Tester en local

Ouvre simplement `index.html` dans un navigateur : tout fonctionne sans serveur.
La progression de chaque élève (parties comprises, cartes maîtrisées, scores) est enregistrée dans son propre navigateur.
