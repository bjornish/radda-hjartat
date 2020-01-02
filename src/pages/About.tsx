import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonText } from '@ionic/react';
//import './HLR.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Om Rädda hjärtat</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonText>
          <p>Rädda hjärtat är ett kom ihåg för:</p>
          <ul>
            <li>Hjärt-lungräddning</li>
            <li>Hantering av luftvägsstopp</li>
            <li>Hitta och registrera hjärtstartare</li>
          </ul>
          <p>Rädda hjärtat är inte avsedd att användas i akutsituation eller som en kurs i hjärt-lungräddning utan som ett kom ihåg. Årlig repititionskurs rekommenderas av Svenska rådet för hjärt-lungräddning</p>
        </IonText>

        <IonText>
          <p>Rädda hjärtat tillhandahålls av Hjärt-Lungfonden.</p>
          <p>Hjärt-Lungfonden samlar in pengar till vinnande hjärt-lungforskning och arbetar för ökad kunskap om forskningens betydelse, för att ge fler ett längre och friskare liv.</p>
          <p>Hjärt-Lungfonden bildades 1904 i kampen mot tuberkulos (tbc) och idag är vår vision en värld fri från hjärt-lungsjukdom. Verksamheten är helt beroende av gåvor från priatpersoner och företag.</p>
        </IonText>

        <IonButton class='btn' color="primary" expand="block">
           Hjärt-lungfonden
        </IonButton>
      </IonContent>
    </IonPage>

  );
};

export default About;