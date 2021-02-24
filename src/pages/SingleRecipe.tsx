import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonListHeader } from "@ionic/react";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Recipe, RecipeIngredient } from "../models";

interface SingleRecipeParams {
  id: string;
}

const SingleRecipe: FC = () => {
  const { id } = useParams<SingleRecipeParams>();

  const [recipe, setRecipe] = useState<Recipe>();
  const [recipeIngredients, setRecipeIngredients] = useState<RecipeIngredient[]>([]);

  useEffect(
    () => {
      fetch(`http://localhost:3000/recipes/${id}?_expand=category&_expand=area`)
      .then(response => response.json())
      .then( (json: Recipe) => setRecipe(json));

      fetch(`http://localhost:3000/recipes/${id}/recipeIngredients?_expand=ingredient`)
      .then(response => response.json())
      .then( (json: RecipeIngredient[]) => setRecipeIngredients(json));
    },
    [id]
  )


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recipes</IonTitle>
          </IonToolbar>
        </IonHeader>

        {
          recipe && <>
            <IonTitle>{recipe.name}</IonTitle>
            <IonListHeader>Ingredients</IonListHeader>
            <IonList>
              {recipeIngredients.map(
                (recipeIngredient, index) =>
                  <IonItem key={index}>
                    {recipeIngredient.measure} {recipeIngredient.ingredient.name}
                  </IonItem>
              )}
            </IonList>
          </>
        }

      </IonContent>
    </IonPage>
  );
}

export default SingleRecipe;
