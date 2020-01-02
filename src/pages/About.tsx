import { IonButton, IonContent, IonImg, IonPage, IonText } from '@ionic/react';
import React from 'react';
//import './HLR.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='about'>
        <div className='padded-text-area'>
          <div className='about-page-img'>
            <IonImg src={process.env.PUBLIC_URL + '/assets/heart.png'}></IonImg>
          </div>

          <IonText>
            <h1>Om Rädda Hjärtat</h1>
            <p>Rädda hjärtat är ett kom ihåg för Hjärt-Lungräddning, hantering av luftvägsstopp samt för hantering av hjärtstartare.</p>
            <p>Rädda hjärtat är inte avsedd att användas i akutsituation eller som en kurs i hjärt-lungräddning utan som ett kom ihåg. Årlig repititionskurs rekommenderas av Svenska rådet för hjärt-lungräddning</p>

            {/* <p>Rädda hjärtat är ett kom ihåg för:</p>
            <ul>
              <li>Hjärt-lungräddning</li>
              <li>Hantering av luftvägsstopp</li>
              <li>Hitta och registrera hjärtstartare</li>
            </ul>
            <p>Rädda hjärtat är inte avsedd att användas i akutsituation eller som en kurs i hjärt-lungräddning utan som ett kom ihåg. Årlig repititionskurs rekommenderas av Svenska rådet för hjärt-lungräddning</p> */}
          </IonText>

          <IonText>
            <h2>Rädda hjärtat tillhandahålls av Hjärt-Lungfonden.</h2>
            <p>Hjärt-Lungfonden samlar in pengar till vinnande hjärt-lungforskning och arbetar för ökad kunskap om forskningens betydelse, för att ge fler ett längre och friskare liv.</p>
            <p>Verksamheten är helt beroende av gåvor från priatpersoner och företag.</p>
          </IonText>
          <IonButton expand="block" href="https://www.hjart-lungfonden.se">
            Stöd Hjärt-lungfonden
          </IonButton>
        </div>
      </IonContent>
    </IonPage>

  );
};

export default About;