import { IonButton, IonContent, IonPage, IonText, IonTitle } from '@ionic/react';
import React from 'react';
import SlideList from "../components/SlideList";


const slides = [
  // {
  //   img:'',
  //   
  //   title: 'HJÄRTSTARTARE',
  //   content:
  //   `<p>Hjärtstartare är en liten EKG-apparat (maskin som läser hjärtrytmen) som också kan ge en strömstöt om det behövs.</p>
  //   <p>En strömstöt från en hjärtstartare kan återge hjärtat sin pumpande förmåga vid ett plötsligt hjärtstopp.</p>
  //   <p>Du kan aldrig ge en strömstöt om inte hjärtstartaren gett instruktion om det.</p>
  //   `
  // },
  {
    img:'assets/hjartstartare/forbered_for_hjartstartaren.png',
    
    title: 'FÖRBERED FÖR HJÄRTSTARTAREN',
    content:
    `<ul>
    <li>Placera hjärtstartaren närs personens axel på samma sida som du sitter på.</li>
    <li>Om ni är två, en fortsätter med hjärt-lungräddning, den andra hanterar hjärtstartaren.</li>
    <li>Se till att personen inte ligger mot något strömförande, raka eventuellt hår, torka av bröstkorgen</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstartare/starta_hjartstartaren.png',
    
    title: 'STARTA HJÄRTSTARTAREN',
    content:
    `<ul>
    <li>Starta hjärtstartaren. En röst ger dig intruktioner om varje steg.</li>
    <li>Om ni är två fortsätter den andra med hjärt-lungräddning tills hjärtstartaren säger "Rör ej personen".</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstartare/ta_fram_elektroderna.png',
    
    title: 'TA FRAM ELEKTRODERNA',
    content:
    `<p>Elektroderna är förpackade i en kasett, plastförpackning eller ask som är ansluten i eller på hjärtstartaren. Elektroderna kan också finnas i hjärtstartarens lock.</p>
    `
  },
  {
    img:'assets/hjartstartare/fast_elektroderna.png',
    
    title: 'FÄST ELEKTRODERNA',
    content:
    `<ul>
    <li>Färst elektroderna som bilden visar.</li>
    <li>Den ena på personens högra bröst med övre delen mot nyckelbenet.</li>
    <li>Den andra ca 10 cm rakt under personens vänstra armhåla.</li>
    </ul>
    `
  },
  {
    img:'assets/hjartstartare/hjartstartaren_analyserar.png',
    
    title: 'HJÄRTSTARTAREN ANALYSERAR',
    content:
    `<p>Rör inte personen under analys av hjärtrytmen. Efter analys ges instruktion om:</p><br/>
    <p><b>Strömstöt</b> - Kontrollera att ingen rör personen när strömstöt ges. Personen rycker till när strömstöten ges.</p><br/>
    <p>eller</p><br/>
    <p><b>Hjärt-lungräddning</b> - Fortsätt hjärt-lungräddning om personen fortfarande inte andas normalt.</p>
    `
  },
  {
    img:'assets/hjartstartare/fortsatt_hjart-lungraddning.png',
    
    title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
    content:
    `<p>Efter strömstöt fortsätter du med hjärt-lungräddning. Avbryt bara när hjärtstartaren avbryter för analys, personen visar tydliga livstecken eller personal från ambulans eller räddningstjänst kommer och tar över.</p>`
  },  
]

const Defibrilator: React.FC = () => {
  return (
    <IonPage>
    
      <IonContent className='defibrilator'>
        <div className='padded-text-area'>
          <IonText>
            <h1>Hjärtstartare</h1>
            <p>Hjärtstartare är en liten EKG-apparat (maskin som läser hjärtrytmen) som också kan ge en strömstöt om det behövs.</p>
            <p>En strömstöt från en hjärtstartare kan återge hjärtat sin pumpande förmåga vid ett plötsligt hjärtstopp.</p>

{/*            <p>En strömstöt från en hjärtstartare kan återge hjärtat sin pumpande förmåga vid ett plötsligt hjärtstopp.</p>
            <p>Om en strömstöt kan ges inom 3 minuter har personen ca 75% chans att överleva.</p>
            <p>Det är därför viktigt att härtstartaren är:</p>
            <ul>
              <li>Så tillgänglig som möjligt</li>
              <li>Väl skyddad</li>
              <li>Underhållen med batteri och elektroder</li>
              <li>Registrerad i hjärtstartarregistret</li>
            </ul>
*/}            
              <p>I Sveriges Hjärtstartarregister kan du söka efter eller registrera en publik hjärtstartare.</p>
              <IonButton expand="block" href="https://www.hjartstartarregistret.se/">Hitta närmaste hjärtstartare</IonButton>
              <br/>
          		<h2>Instruktioner för handhavande</h2>
          </IonText>
        </div>

        <SlideList slides={slides} />

{/*        <IonText>
           <a href="">Närmaste hjärtstartare</a>
           <a href="">Registrera hjärtstartare</a>
           <a href="">Standarden Hjärtsäker zon</a>
           <a href="">Branschrådet för Hjärtstartare i Sverige</a>
           <a href="">Svenska HLR-rådet</a>
        </IonText>
        <IonButton class='btn' color="primary" expand="block" >
           brn
        </IonButton>*/}
      </IonContent>
    </IonPage>

  );
};

export default Defibrilator;