import React, { useState } from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonText, IonSegment, IonSegmentButton } from '@ionic/react';

import HLRHeartAdult from '../components/HLRHeartAdult'
import HLRHeartChild from '../components/HLRHeartChild'
import HLRHeartInfant from '../components/HLRHeartInfant'

const HLRHeart: React.FC = () => {  
  const [segment, setSegment] = useState('adult');

  return (
    <IonPage>
      <IonContent className='heart'>
        <IonSegment mode='md' onIonChange={(e) => setSegment(e.detail.value as any)}>
          <IonSegmentButton value='adult' checked={segment=='adult'}>
            <IonLabel>Vuxen</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value='child' checked={segment=='child'}>
            <IonLabel>Barn</IonLabel>
          </IonSegmentButton>
          
          <IonSegmentButton value='infant' checked={segment=='infant'}>
            <IonLabel>Spädbarn</IonLabel>
          </IonSegmentButton>
          
        </IonSegment>


        {segment == 'adult' ? <HLRHeartAdult /> : ''}
        {segment == 'child' ? <HLRHeartChild /> : ''}
        {segment == 'infant' ? <HLRHeartInfant /> : ''}

      </IonContent>
    </IonPage>

  );
};

export default HLRHeart;