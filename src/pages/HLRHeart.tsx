import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton, IonText } from '@ionic/react';
import React, { useState } from 'react';
import HLRHeartAdult from '../components/HLRHeartAdult';
import HLRHeartChild from '../components/HLRHeartChild';
import HLRHeartInfant from '../components/HLRHeartInfant';


const HLRHeart: React.FC = () => {  
  const [segment, setSegment] = useState('adult');

  return (
    <IonPage>
      <IonContent className='heart'>
        <div className="padded-text-area">
          <h1>Hjärt-lungräddning vid plötsligt hjärtstopp</h1>
        </div>

        <IonSegment onIonChange={(e) => setSegment(e.detail.value as any)}>
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


        {segment === 'adult' ? <HLRHeartAdult /> : ''}
        {segment === 'child' ? <HLRHeartChild /> : ''}
        {segment === 'infant' ? <HLRHeartInfant /> : ''}

      </IonContent>
    </IonPage>

  );
};

export default HLRHeart;