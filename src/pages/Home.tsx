import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { globe, link } from 'ionicons/icons';
import './Home.css';

import recipes from '../data.json';


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
              <IonCard key={index}>
                <img src={recipe.image} alt={recipe.name} style={{ objectFit: 'cover', width: '100%', maxHeight: '200px' }} />
                <IonCardHeader>
                  <IonCardTitle>{recipe.name}</IonCardTitle>
                  <IonCardSubtitle>{recipe.category.name}</IonCardSubtitle>
                </IonCardHeader>

                <IonList>
                  <IonItem>
                    <IonIcon icon={globe} />&nbsp;{recipe.area.name}
                  </IonItem>
                  {
                    recipe.source &&
                    <IonItem>
                      <IonIcon icon={link} />&nbsp;
                      <a href={recipe.source} target="_blank" rel="noreferrer">
                        Link
                      </a>
                    </IonItem>
                  }
                </IonList>

                <IonCardContent>
                  <IonButton expand="block">
                    See more
                  </IonButton>
                </IonCardContent>
              </IonCard>
          )
        }

      </IonContent>
    </IonPage>
  );
};

export default Home;
