# Ionic React - agrégateur de recettes

## Installation

### 1. Installer les dépendances

`yarn`

### 2. Lancer le serveur local de l'API

`json-server api.json`

### 3. Lancer l'application

`yarn start`

## Travail à réaliser

### 1. Créer un modèle pour les recettes

En observant le contenu du fichier `src/data.json`, créer une interface TypeScript qui décrit la structure de chaque recette, et utiliser cette interface à l'endroit adéquat.

### 2. Créer un composant "aperçu de recette"

Refactoriser le contenu du fichier `src/pages/Home.tsx` de sorte que le code permettant d'afficher chaque carte de recette soit dans un composant à part.

### 3. Exploiter l'API

Faire en sorte que le composant **Home** aille chercher les données des recettes non plus dans le fichier `src/data.json`, mais plutôt à l'aide d'une requête AJAX dans l'API. Vous pouvez utiliser cette adresse pour récupérer des données avec la même structure: `/recipes?_expand=category&_expand=area`.

Le fichier `src/data.json` ne doit plus être utilisé.

### 4. Créer une page "détails d'une recette"

Lorsque l'on clique sur le bouton "See more" d'un aperçu de recette, on doit être redirigé sur la route `/recipes/:id`, ce qui fait apparaître une page avec les détails de la recette demandée. 

#### BONUS (facultatif)

La page "détails d'une recette" doit aussi afficher les étiquettes (tags) associés à cette recette. Vous pouvez utiliser cette adresse pour récupérer les tags associés à une recette en fonction de son _id_: `/recipes/:id/recipeTags?_expand=tag`.

#### BONUS 2 (facultatif)

Sur le modèle du premier bonus, ajouter les ingrédients sur la page "détails d'une recette". Vous pouvez utiliser cette adresse pour récupérer les ingrédients associés à une recette en fonction de son _id_: `/recipes/:id/recipeIngredients?_expand=ingredient`.

### BONUS: Remplacer les instructions de chaque recette par une nouvelle entité

Dans le fichier `api.json`, ajouter une nouvelle entité étape. Lorsqu'on envoie une requête dans l'API, chaque objet de type recette devrait contenir une propriété **steps** avec tous les objet de type étape associés à cette recette. L'affichage de la page "détails d'une recette" doit être adapté en conséquence.
