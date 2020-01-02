import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSlides, IonSlide } from '@ionic/react';

import './HLRHjartstopp.css'
import CardSlider from '../../components/CardSlider'


const slides_hlr_adult = [
  {
    media_src:'',
    media_type:'video',
    title: 'HJÄRT-LUNGRÄDDNING VUXEN',
    content:
    `<p>Vid ett plötsligt hjärtstopp förlorar hjärtat sin pumpande förmåga och blodcirkulationen upphör. Personen faller ihop livlös.</p>
    <p>Hjärt-Lungräddning håller igång blodcirkulationen och en strömstöt från en hjärtstartare kan få hjärtat att pumpa sjävligen.</p>
    <p>För varje minut som går utan åtgärder minskar chansen att överleva med ca 10%.</p>`
  },
  {
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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

const slides_hlr_kid = [
  {
    media_src:'',
    media_type:'video',
    title: 'HJÄRT-LUNGRÄDDNING BARN 1 ÅR - PUBERTET',
    content:
    `<p>Hjärtstopp hos barn är mycket ovanligt och beror oftast på syrebrist men även barn kan drabbas av plötsligt hjärtstopp på grund av hjärt-kärlsjukdom.</p>
     <p>Hjärt-lungräddning till barn börjar därför med fem inblåsningar och fortsätter 30 kompressioner och två inblåsningar.</p>
     <p>Larma 112 så snart som möjligt.</p>`
  },
  {
    media_src:'',
    media_type:'image',
    title: 'KONTROLLERA MEDVETANDE',
    content:
    `<p>Försök att väcka barnet.</p>
    <ul>
      <li>Nyp eller skaka försiktigt i barnet</li>
      <li>Om barnet är livlöst, ropa på hjälp</li>
    </ul>`
  },
  {
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
    title: 'ANDAS BARNET?',
    content:
    `<p>Håll kvar huvudet bakåtböjt. Lägg ditt öra mot barnets näsa och mun.</p>
    <ul>
      <li>SE om bröstkorgen rör sig</li>
      <li>LYSSNA efter normala andetag</li>
      <li>KÄNN efter lyftström mot din kind</li>
      <li>Om ingen eller onormal andning, gör inblåsningar</li>
    </ul>`
  },
  {
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
    title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
    content:
    `<ul>
      <li>Varva 30 kompressioner och 2 inblåsningar, ca 1 minut</li>
      <li>Larma 112</li>
      <li>Använd hjärtstartare om det finns</li>
    </ul>`
  },
  {
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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

const slides_hlr_infant = [
  {
    media_src:'',
    media_type:'video',
    title: 'HJÄRT-LUNGRÄDDNING BARN 0-1 ÅR',
    content:
    `<p>Hjärtstopp hos barn är mycket ovanligt och beror oftast på syrebrist men även barn kan drabbas av plötsligt hjärtstopp på grund av hjärt-kärlsjukdom.</p>
     <p>Hjärt-lungräddning till barn börjar därför med fem inblåsningar och fortsätter med 30 kompressioner och två inbblåsningar.</p>
     <p>Larma 112 så snart som möjligt.</p>
    `
  },
  {
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
    title: 'GÖR FEM LÅNGSAMMA INBLÅSNINGAR',
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
    media_src:'',
    media_type:'image',
    title: 'GÖR 30 BRÖSTKOMPRESSIONER',
    content:
    `<ul>
      <li>Placera pek- och långfinger på den nedre halvan av bröstbenet.</li>
      <li>Tryck ned 4 cm, 30 gånger.</li>
      <li>Håll en takt 100-120 tryck per minut.</li>
    </ul>
    <p>Släpp upp bröstkorgen mellan varje kompression.</p>
    `
  },
  {
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
    title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
    content:
    `<ul>
      <li>Varva 30 kompressioner och 2 inblåsningar.</li>
      <li>Byt av varandra om ni är flera.</li>
      <li>Använd hjärtstartare om det finns.</li>
    </ul>
    <p>Fortsätt tills personal från ambulans eller räddningstjänst tar över eller barnet visar tydliga livstecken.</p>
    `
  },
]

const slides_hlr_defibrillator = [
  {
    media_src:'',
    media_type:'image',
    title: 'HJÄRTSTARTARE',
    content:
    `<p>Hjärtstartare är en liten EKG-apparat (maskin som läser hjärtrytmen) som också kan ge en strömstöt om det behövs.</p>
     <p>En strömstöt från en hjärtstartare kan återge hjärtat sin pumpande förmåga vid ett plötsligt hjärtstopp.</p>
     <p>Du kan aldrig ge en strömstöt om inte hjärtstartaren gett instruktion om det.</p>
    `
  },
  {
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
    title: 'STARTA HJÄRTSTARTAREN',
    content:
    `<ul>
      <li>Starta hjärtstartaren. En röst ger dig intruktioner om varje steg.</li>
      <li>Om ni är två fortsätter den andra med hjärt-lungräddning tills hjärtstartaren säger "Rör ej personen".</li>
    </ul>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'TA FRAM ELEKTRODERNA',
    content:
    `<p>Elektroderna är förpackade i en kasett, plastförpackning eller ask som är ansluten i eller på hjärtstartaren. Elektroderna kan också finnas i hjärtstartarens lock.</p>
    `
  },
  {
    media_src:'',
    media_type:'image',
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
    media_src:'',
    media_type:'image',
    title: 'HJÄRTSTARTAREN ANALYSERAR',
    content:
    `<p>Hör inte personen under analys av hjärtrytmen. Efetr analys ges instruktion om:.</p>
    <p>Strömstöt - Kontrollera att ingen rör personen när strömstöt ges. Personen rycker till när strömstöten ges.</p>
    <p>eller</p>
    <p>Hjärt-lungräddning - Fortsätt hjärt-lungräddning om personen fortfarande inte andas normalt.</p>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
    content:
    `<p>Efter strömstöt fortsätter du med hjärt-lungräddning. Avbryt bara när hjärtstartaren avbryter för analys, personen visar tydliga livstecken eller personal från ambulans eller räddningstjänst kommer och tar över.</p>
    <p>Hjärtstartaren avbryter för analys med två minuters mellanrum. Under dessa avbrott ska du fortsätta med hjärt-lungräddning kontinuerligt.</p>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'BEDÖM - KAN PERSONEN TALA/HOSTA',
    titelmix: true,
    content:
    `<p>Person som inte talar, hostar eller andas normalt hjälper du med ryggslag och buktryck.</p>
    <p>Person som inte talar eller hostar - stanna kvar hos personen tills de kan andas och tala normalt igen.</p>
    <p>Person som satt i halsen och blivit medvetslös - larma 112 och gör hjärt-lungräddning.</p>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'GÖR 5 RYGGSLAG',
    content:
    `<p>Om personen inte kan andas, hosta eller tala.</p>
     <ul>
      <li>Lägg en hand på personens bröstben.</li>
      <li>Böj personen framåt.</li>
      <li>Gör 5 kraftiga ryggslag med handloven mellan skulderbladen.</li>
    </ul>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'GÖR 5 BUKTRYCK',
    content:
    `<ul>
      <li>Placera ena knytnäven strax ovanför naveln.</li>
      <li>Greppa knytnäven med den andra handen.</li>
      <li>Tryck 5 gånger inåt - uppåt.</li>
      <li>Kontrollera om föremålet kommit upp.</li>
    </ul>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'FORTSÄTT RYGGSLAH OCH BUKTRYCK',
    content:
    `<p>Varva ryggslag och buktryck tills föremålet kommer upp.</p>
    <p>Om personen blir medvetslös:</p>
     <ul>
      <li>Larma 112.</li>
      <li>Gör hjärt-lungräddning.</li>
      <li>Hämta hjärtstartare.</li>
    </ul>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'LARMA 112',
    content:
    `<p>LArma 112 om personen blir medvetslös.</p>
     <ul>
      <li>Be hellst någon annan att ringa.</li>
      <li>Meddela om adress, eller koordinater.</li>
    </ul>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'GÖR 30 BRÖSTKOMPRESSIONER',
    content:
    `<p>VPlacera ena handloven mitt på bröstbenet mellan bröstvårtorna. Placera andra handen rakt ovanför. Håll raka armar.</p>
    <p>Om personen blir medvetslös:</p>
     <ul>
      <li>Tryck 5-6 cm 30 gånger.</li>
      <li>Håll takt om 100-120 tryck per minut.</li>
      <li>Släpp upp bröstkorgen mellan varje tryck.</li>
    </ul>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'TITTA EFTER FRÄMMANDE FÖREMÅL',
    content:
    `rubrik!!!!!! ÖPPNA LUFTVÄGEN
     <ul>
      <li>Lägg ena handen på pannan.</li>
      <li>Andra handens hingrar på hakspetsen.</li>
      <li>Lyft upp hakan.</li>
      <li>Böj huvudet bakåt.</li>
      <li>Titta i munnen, ta bort om något kommit upp.</li>
    </ul>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'GÖR 2 INBLÅSNINGAR',
    content:
    `<ul>
      <li>Öppna luftvägen, håll huvudet bakböjt.</li>
      <li>Knip om näsan.</li>
      <li>Blås 2 gånger så att brötskorgen höjer sig.</li>
      <li>Låt varje inblåsning ta ca 1 sekund.</li>
      <li>Ta ett normalt andetag emellan.</li>
    </ul>
    <p>Om du inte kan eller vill göra inblåsningar, gör enbart kompressioner.</p>
    `
  },
  {
    media_src:'',
    media_type:'image',
    title: 'FORTSÖTT HJÄRT-LUNGRÄDDNING',
    content:
    `<ul>
      <li>Varva 30 bröstkopressioner med 2 inblåsningar tills ambulans- eller räddningspersonal tar över.</li>
      <li>Byt av varandra om ni är flera.</li>
      <li>Anslut hjärtstartare om det finns.</li>
    </ul>
    <p>Fortsätt utan avbrott tills personal från ambulans eller räddningstjänst tar över eller personen visar tydliga livstecken.</p>
    `
  },
]

const HLRHjartstopp: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HLR</IonTitle>
        </IonToolbar>
      </IonHeader>

       <IonContent>
         <CardSlider slides={slides_hlr_adult} />
       </IonContent>
    </IonPage>

  );
};

export default HLRHjartstopp;