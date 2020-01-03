import { IonText } from '@ionic/react';
import React from 'react';
import SlideList from '../components/SlideList';


const slides = [
	// {
	// 	img:'assets/luftvagsstopp/vuxen/bedom.png',
		
	// 	title: 'KAN PERSONEN TALA / HOSTA',
	// 	content:
	// 	`<p>Person som inte talar, hostar eller andas normalt hjälper du med ryggslag och buktryck.</p>
	// 	<p>Person som kan tala eller hostar - stanna kvar hos personen tills de kan andas och tala normalt igen.</p>
	// 	<p>Person som satt i halsen och blivit medvetslös - larma 112 och gör hjärt-lungräddning.</p>
	// 	`
	// },
	{
		img:'assets/luftvagsstopp/vuxen/gor_5_ryggslag.png',
		
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
		img:'assets/luftvagsstopp/vuxen/gor_5_buktryck.png',
		
		title: 'GÖR 5 BUKTRYCK',
		content:
		`<ul>
		<li>Placera ena knytnäven strax över naveln.</li>
		<li>Greppa knytnäven med den andra handen.</li>
		<li>Tryck 5 gånger inåt - uppåt.</li>
		<li>Kontrollera om föremålet kommit upp.</li>
		</ul>

		`
	},
	{
		img:'assets/luftvagsstopp/vuxen/fortsatt_ryggslag_och_buktryck.png',
		
		title: 'FORTSÄTT RYGGSLAG OCH BUKTRYCK',
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
		img:'assets/luftvagsstopp/vuxen/larma_112.png',
		
		title: 'LARMA 112',
		content:
		`<p>Larma 112 om personen blir medvetslös.</p>
		<ul>
		<li>Be helst någon annan ringa.</li>
		<li>Meddela om adress, eller koordinatorer.</li>
		</ul>
		`
	},
	{
		img:'assets/luftvagsstopp/vuxen/gor_30_brostkompressioner.png',
		
		title: 'GÖR 30 BRÖST-KOMPRESSIONER',
		content:
		`<p>Placera ena handloven mitt på bröstbenet mellan bröstvårtorna. Placera den andra handen rakt ovanför. Håll raka armar.</p>
		<ul>
		<li>Tryck 5-6 cm 30 gånger.</li>
		<li>Håll takt om 100-120 tryck per minut.</li>
		<li>Släpp upp bröstkorgen mellan varje tryck.</li>
		</ul>
		`
	},
	{
		img:'assets/luftvagsstopp/vuxen/oppna_luftvagen.png',
		
		title: 'ÖPPNA LUFTVÄGEN',
		content:
		`<ul>
		<li>Håll ena handen på pannan.</li>
		<li>Andra handens fingrar på hakspetsen.</li>
		<li>Böj huvudet bakåt.</li>
		<li>Titta i munnen, ta bort om något kommit upp.</li>
		</ul>
		`
	},
	{
		img:'assets/luftvagsstopp/vuxen/gor_2_inblasningar.png',
		
		title: 'GÖR 2 INBLÅSNINGAR',
		content:
		`<ul>
		<li>Öppna luftvägen, håll huvudet bakåtböjt.</li>
		<li>Knip om näsan.</li>
		<li>Blås 2 gånger så att bröstkorgen höjer sig.</li>
		<li>Låt varje inblåsning ta ca 1 sekund.</li>
		<li>Ta ett normalt andetag emellan.</li>
		</ul>
		<p>Om du inte kan eller vill göra inblåsningar, gör enbart kompressioner.</p>
		`
	},
	{
		img:'assets/luftvagsstopp/vuxen/fortsatt_hjart-lungraddning.png',
		
		title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
		content:
		`<ul>
		<li>Varva 30 bröstkopressioner med 2 inblåsningar tills ambulans- eller räddningspersonal tar över.</li>
		<li>Byt av varandra om ni är flera.</li>
		<li>Anslut hjärtstartare om det finns.</li>
		</ul>
		<p>Fortsätt utan avbrott tills personal från ambulans eller räddningstjänst tar över eller personen visar tydliga livstecken.</p>
		`
	}
]

const HLRLungAdult: React.FC = () => {  

  return (
  	<div>
  		<div className="padded-text-area">
	  		<IonText>
				<p>Person som inte talar, hostar eller andas normalt hjälper du med ryggslag och buktryck.</p>
			 	<p>Person som kan tala eller hostar - stanna kvar hos personen tills de kan andas och tala normalt igen.</p>
			 	<p>Person som satt i halsen och blivit medvetslös - larma 112 och gör hjärt-lungräddning.</p>
			</IonText>
		</div>

  		<SlideList slides={slides} />
  	</div>
  );
};

export default HLRLungAdult;