import React, { useState } from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonText, IonSegment, IonSegmentButton } from '@ionic/react';

import SlideList from '../components/SlideList'

const slides = [
  {
    img:'assets/hjartstopp/spadbarn/kontrollera_medvetande.png',
    
    title: 'KONTROLLERA MEDVETANDE',
    content:
    `<p>Försök att väcka barnet.</p>
    <ul>
      <li>Nyp eller skaka försiktigt barnet.</li>
      <li>Om barnet är livlöst, ropa på hjälp.</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/spadbarn/oppna_luftvagen.png',
    
    title: 'ÖPPNA LUFTVÄGEN',
    content:
    `<ul>
      <li>Lägg handen på pannan.</li>
      <li>Andra handesns fingrar på hakspetsen.</li>
      <li>Lyft hakan.</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/spadbarn/kontrollera_andning.png',
    
    title: 'ANDAS BARNET?',
    content:
    `<p>Håll hakan upplyft. Lägg ditt öra mot barnets näsa och mun.</p>
    <ul>
      <li>SE om bröstkorgen rör sig.</li>
      <li>LYSSNA efter normala andetag.</li>
      <li>KÄNN efter luftström mit din kind.</li>
      <li>Om ingen eller onormal andning, gör inbblåsningar.</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/spadbarn/gor_5_langsamma_inblasningar.png',
    
    title: 'GÖR 5 LÅNGSAMMA INBLÅSNINGAR',
    content:
    `<ul>
      <li>Håll hakan upplyft.</li>
      <li>Täck barnets näsa och mun med din mun.</li>
      <li>Gör fem långsamma inblåsningar.</li>
      <li>Blås in den luft som ryms i din mun.</li>
      <li>Kontrollera att bröstkorgen höjs.</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/spadbarn/gor_30_brostkompressioner.png',
    
    title: 'GÖR 30 BRÖSTKOMPRESSIONER',
    content:
    `<ul>
      <li>Placera pek- och långfinger på den nedre halvan av bröstbenet.</li>
      <li>Tryck ned 4 cm, 30 gånger.</li>
      <li>Håll en takt 100-120 /minut.</li>
    </ul>
    <p>Släpp upp bröstkorgen mellan varje kompression.</p>
    `
  },
  {
    img:'assets/hjartstopp/spadbarn/gor_2_langsamma_inblasningar.png',
    
    title: 'GÖR 2 LÅNGSAMMA INBLÅSNINGAR',
    content:
    `<ul>
      <li>Lyft hakan.</li>
      <li>Täck barnets näsa och mun med din mun.</li>
      <li>Gör 2 långsamma inblåsningar.</li>
      <li>Blås in den luft som ryms i din mun.</li>
      <li>Kontrollera att bröstkorgen höjs.</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/spadbarn/fortsatt_hjart-lungraddning.png',
    
    title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
    content:
    `<ul>
      <li>Varva 30 kompressioner och 2 inblåsningar.</li>
      <li>Larma 112 efter 3 serier.</li>
      <li>Använd hjärtstartare om det finns.</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/spadbarn/larma_112.png',
    
    title: 'LARMA 112',
    content:
    `<ul>
      <li>Om möjligt, be någon annan att larma</li>
      <li>Använd högtalartelefon</li>
      <li>Säg att det är ett hjärtstopp</li>
      <li>Svara på operatörens frågor</li>
    </ul>`
  },
  {
    img:'assets/hjartstopp/spadbarn/fortsatt_hjart-lungraddning.png',
    
    title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
    content:
    `<ul>
      <li>Varva 30 kompressioner och 2 inblåsningar.</li>
      <li>Byt av varandra om ni är flera.</li>
      <li>Använd hjärtstartare om det finns.</li>
    </ul>
    <p>Fortsätt tills personal från ambulans eller räddningstjänst tar över eller barnet visar tydliga livstecken.</p>
    `
  }
]

const HLRHeartInfant: React.FC = () => {  

  return (
  	<div>
      <div className="padded-text-area">
    		<IonText>
    			<h1>Plötsligt hjärtstopp hos spädbarn (0-1 år)</h1>
          <p>Hjärtstopp hos barn är mycket ovanligt och beror oftast på syrebrist men även barn kan drabbas av plötsligt hjärtstopp på grund av hjärt-kärlsjukdom.</p>
          <p>Hjärt-lungräddning till barn börjar därför med fem inblåsningar och fortsätter med 30 kompressioner och två inbblåsningar.</p>
          <p>Larma 112 så snart som möjligt.</p>
        </IonText>
      </div>
      
      <IonTitle>Instruktioner för Hjärt-Lungräddning</IonTitle>
  		<SlideList slides={slides} />
  	</div>
  );
};

export default HLRHeartInfant;