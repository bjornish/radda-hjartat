import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';
//import {slides_hlr_adult} from '../content.js'
import HLRLungAdult from '../components/HLRLungAdult';
import HLRLungChild from '../components/HLRLungChild';
import HLRLungInfant from '../components/HLRLungInfant';


const HLRLung: React.FC = () => {
  const [segment, setSegment] = useState('adult');

  return (
    <IonPage>
      <IonContent className='lung'>
        <IonSegment mode='md' onIonChange={(e) => setSegment(e.detail.value as any)}>
          <IonSegmentButton value='adult' checked={segment==='adult'}>
            <IonLabel>Vuxen</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value='child' checked={segment==='child'}>
            <IonLabel>Barn</IonLabel>
          </IonSegmentButton>
          
          <IonSegmentButton value='infant' checked={segment==='infant'}>
            <IonLabel>Spädbarn</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {segment === 'adult' ? <HLRLungAdult /> : ''}
        {segment === 'child' ? <HLRLungChild /> : ''}
        {segment === 'infant' ? <HLRLungInfant /> : ''}

      </IonContent>
    </IonPage>

  );
};

export default HLRLung;