import React, { useState } from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonSegment, IonSegmentButton } from '@ionic/react';

import SlideList from '../components/SlideList'

const slides = [
  {
    img:'assets/hjartstopp/vuxen/kontrollera_medvetande.png',
    
    title: 'KONTROLLERA MEDVETANDE',
    content:
    `<p>Försök väcka personen.</p>
    <ul>
      <li>Skaka på axlarna</li>
      <li>Ropa på personen</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/vuxen/oppna_luftvagen.png',
    
    title: 'ÖPPNA LUFTVÄGEN',
    content:
    `<ul>
      <li>Lägg ena handen på pannan</li>
      <li>Andra handens fingrar på hakspetsen</li>
      <li>Lyft hakan</li>
      <li>Böj huvudet bakåt</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/vuxen/andas_personen.png',
    
    title: 'ANDAS PERSONEN?',
    content:
    `<p>Håll kvar huvudet bakåtböjt. Lägg ditt öra mot personens näsa och mun</p>
    <ul>
      <li>SE om bröstkorgen höjer sig</li>
      <li>LYSSNA efter normala andetag</li>
      <li>KÄNN efter luftström mot din kund</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/vuxen/larma_112.png',
    
    title: 'LARMA 112',
    content:
    `<ul>
      <li>Om möjligt, be någon annan att larma</li>
      <li>Använd högtalartelefon</li>
      <li>Säg att det är ett hjärtstopp</li>
      <li>Svara på operatörens frågor</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/vuxen/gor_30_kompressioner.png',
    
    title: 'GÖR 30 BRÖSTKOMPRESSIONER',
    content:
    `<p>Placera ena handloven mitt på bröstbenet mellan bröstvårtorna. Placera andra handen rakt ovanpå. Håll raka armar.</p>
    <ul>
      <li>Tryck ned 5-6 cm 30 gånger.</li>
      <li>Håll takt om 100-120/minut</li>
      <li>Släpp upp bröstkorgen mellan varje kompression</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/vuxen/gor_2_inblasningar.png',
    
    title: 'GÖR 2 INBLÅSNINGAR',
    content:
    `<ul>
      <li>Öppna luftvägen, håll huvudet bakåtböjt</li>
      <li>Knip om näsan</li>
      <li>Blås 2 gånger så bröstkorgen höjer sig</li>
      <li>Låt varje inblåsning ta ca 1 sekund</li>
      <li>Ta ett normalt andetag emellan</li>
      <p>Om du inte kan eller vill göra inblåsningar, gör enbart kompressioner.</p>
    </ul>
    `
  },
  {
    img:'assets/hjartstopp/vuxen/fortsatt_hlr.png',
    
    title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
    content:
    `<ul>
      <li>Varva 30 bröstkompressioner med 2 inblåsningar kontinuerligt</li>
      <li>Byt av varandra om ni är flera</li>
      <li>Anslut hjärtstartare om det finns</li>
      <p>Fortsätt utan avbrott tills personal från ambulans eller räddningstjänst tar över eller personen visar tydliga livstecken.</p>
    </ul>
    `
  }
]

const HLRHeartAdult: React.FC = () => {  
  return (
  	<div>
      <div className="padded-text-area space-after">
    		<IonText>
    			<h1>Plötsligt hjärtstopp hos vuxen</h1>
    			<p>Vid ett plötsligt hjärtstopp förlorar hjärtat sin pumpande förmåga och blodcirkulationen upphör. Personen faller ihop livlös.</p>
    			<p>Hjärt-Lungräddning håller igång blodcirkulationen och en strömstöt från en hjärtstartare kan få hjärtat att pumpa sjävligen.</p>
    			<p>För varje minut som går utan åtgärder minskar chansen att överleva med ca 10%.</p>
    		</IonText>
       </div>

      <IonTitle>Instruktioner för Hjärt-Lungräddning</IonTitle>
      <SlideList slides={slides} />
  	</div>
  );
};

export default HLRHeartAdult;