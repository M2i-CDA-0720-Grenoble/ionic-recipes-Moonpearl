import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import recipes from '../data.json';
import { RecipePreview } from '../components';


const Home: React.FC = () => {
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
            (recipe: any, index: number) => 
              <RecipePreview key={index} recipe={recipe} />
          )
        }

      </IonContent>
    </IonPage>
  );
};

export default Home;
