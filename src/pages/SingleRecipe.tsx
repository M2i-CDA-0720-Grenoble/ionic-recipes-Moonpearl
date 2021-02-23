import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Recipe } from "../models";

interface SingleRecipeParams {
  id: string;
}

const SingleRecipe: FC = () => {
  const { id } = useParams<SingleRecipeParams>();

  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(
    () => {
      fetch(`http://localhost:3000/recipes/${id}?_expand=category&_expand=area`)
      .then(response => response.json())
      .then( (json: Recipe) => setRecipe(json));
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
          recipe && <IonTitle>{recipe.name}</IonTitle>
        }

      </IonContent>
    </IonPage>
  );
}

export default SingleRecipe;
