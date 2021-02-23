import { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import { RecipePreview } from '../components';
import { Recipe } from '../models';


const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(
    () => {
      fetch('http://localhost:3000/recipes?_expand=category&_expand=area')
      .then(response => response.json())
      .then( (json: Recipe[]) => setRecipes(json));
    },
    []
  );

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
          recipes.map(
            (recipe, index) => 
              <RecipePreview key={index} recipe={recipe} />
          )
        }

      </IonContent>
    </IonPage>
  );
};

export default Home;
