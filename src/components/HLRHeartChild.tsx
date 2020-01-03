import { IonText } from '@ionic/react';
import React from 'react';
import SlideList from '../components/SlideList';


const slides = [
  {
    img:'assets/hjartstopp/barn/kontrollera_medvetande.png',
    
    title: 'KONTROLLERA MEDVETANDE',
    content:
    `<p>Försök att väcka barnet.</p>
    <ul>
      <li>Nyp eller skaka försiktigt i barnet</li>
      <li>Om barnet är livlöst, ropa på hjälp</li>
    </ul>`
  },
  {
    img:'assets/hjartstopp/barn/oppna_luftvagen.png',
    
    title: 'ÖPPNA LUFTVÄGEN',
    content:
    `<ul>
      <li>Lägg handen på pannan</li>
      <li>Andra handens fingrar på hakspetsen</li>
      <li>Lyft hakan</li>
      <li>Böj huvudet bakåt</li>
    </ul>`
  },
  {
    img:'assets/hjartstopp/barn/kontrollera_andning.png',
    
    title: 'ANDAS BARNET?',
    content:
    `<p>Håll kvar huvudet bakåtböjt. Lägg ditt öra mot barnets näsa och mun.</p>
    <ul>
      <li>SE om bröstkorgen rör sig</li>
      <li>LYSSNA efter normala andetag</li>
      <li>KÄNN efter luftström mot din kind</li>
      <li>Om ingen eller onormal andning, gör inblåsningar</li>
    </ul>`
  },
  {
    img:'assets/hjartstopp/barn/gor_5_langsamma_inblasningar.png',
    
    title: 'GÖR 5 LÅNGSAMMA INBLÅSNINGAR',
    content:
    `<ul>
      <li>Håll kvar huvudet bakåtböjt</li>
      <li>Knip om näsan</li>
      <li>Lägg din mun över barnets mun</li>
      <li>Gör 5 långsamma inblåsningar</li>
      <li>Kontrollera att bröstkorgen höjs</li>
      <li>Varje inblåsning ska ta ca 1 sekund</li>
    </ul>`
  },
  {
    img:'assets/hjartstopp/barn/gor_30_brostkompressioner.png',
    
    title: 'GÖR 30 BRÖSTKOMPRESSIONER',
    content:
    `<p>Placera ena handloven på nedre halvan av bröstbenet. Håll armen rak. Håll den andra handen på barnets panna.</p>
    <ul>
      <li>Tryck ned 5 cm 30 gånger</li>
      <li>Håll takten 100-120/minut</li>
      <li>Släpp upp bröstkorgen mellan varje kompression</li>
    </ul>`
  },
  {
    img:'assets/hjartstopp/barn/gor_2_langsamma_inblasningar.png',
    
    title: 'GÖR 2 LÅNGSAMMA INBLÅSNINGAR',
    content:
    `<ul>
      <li>Öppna luftvägen, håll huvudet bakåtböjt</li>
      <li>Knip om näsan</li>
      <li>Gör 2 långsamma inblåsningar</li>
      <li>Kontrollera att bröstkorgen höjer sig</li>
      <li>Låt varje inblåsning ta ca 1 sekund</li>
    </ul>`
  },
  {
    img:'assets/hjartstopp/barn/fortsatt_hjart-lungraddning.png',
    
    title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
    content:
    `<ul>
      <li>Varva 30 kompressioner och 2 inblåsningar, ca 1 minut</li>
      <li>Larma 112</li>
      <li>Använd hjärtstartare om det finns</li>
    </ul>`
  },
  {
    img:'assets/hjartstopp/barn/larma_112.png',
    
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
    img:'assets/hjartstopp/barn/fortsatt_hjart-lungraddning.png',
    
    title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
    content:
    `<ul>
      <li>Varva 30 kompressioner med 2 inblåsningar</li>
      <li>Byt av varandra om ni är flera</li>
      <li>Anslut hjärtstartare om det finns</li>
      <p>Fortsätt utan avbrott tills personal från ambulans eller räddningstjänst tar över eller om barnet visar tydliga livstecken.</p>
    </ul>`
  }
]

const HLRHeartChild: React.FC = () => {  

  return (
  	<div>
      <div className="padded-text-area">
    		<IonText>
  				<p>Instruktioner för barn i åldern 1 år till puberteten.</p>
          <p>Hjärtstopp hos barn är mycket ovanligt och beror oftast på syrebrist men även barn kan drabbas av plötsligt hjärtstopp på grund av hjärt-kärlsjukdom.</p>
          <p>Hjärt-lungräddning till barn börjar därför med fem inblåsningar och fortsätter med 30 kompressioner och två inblåsningar.</p>
          <p>Larma 112 så snart som möjligt.</p>
        </IonText>
      </div>

  		<SlideList slides={slides} />
  	</div>
  );
};

export default HLRHeartChild;