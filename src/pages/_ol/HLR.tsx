import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonText, IonSegment, IonSegmentButton, IonIcon, IonImg } from '@ionic/react';
import './HLR.css';

const HLR: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <IonButton className='bigbutt' expand="block" routerLink="/hlr/heart">
        	<IonIcon slot='start' name="heart" />
        	Hjärtstopp
        </IonButton>
        <IonButton expand="block" routerLink="/hlr/breath">
	        <IonImg src={'assets/heart.png'} />
        	Luftvägsstopp
        </IonButton>
      </IonContent>
    </IonPage>

  );
};

export default HLR;