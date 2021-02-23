import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonItem, IonIcon, IonCardContent, IonButton } from '@ionic/react';
import { globe, link } from 'ionicons/icons';
import React, { FC } from 'react';
import { Recipe } from '../models';

interface RecipePreviewProps {
  recipe: Recipe;
}

const RecipePreview: FC<RecipePreviewProps> = ({ recipe }) => {
  return (
    <IonCard>
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
        <IonButton expand="block" routerLink={`/recipes/${recipe.id}`}>
          See more
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
}

export default RecipePreview;
