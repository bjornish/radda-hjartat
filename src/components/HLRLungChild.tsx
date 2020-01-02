import React, { useState } from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonText, IonSegment, IonSegmentButton } from '@ionic/react';

import SlideList from '../components/SlideList'

const slides = [
	// {
	// 	img:'',
		
	// 	title: 'KAN BARNET HOSTA / TALA',
	// 	content:
	// 	`<p>Om barnet kan hosta eller tala - bäst är om barnet själva kan hosta upp föremålet. Uppmana att hosta, stanna med barnet tills barnet kan tala och andas normalt igen.</p>
	// 	<p>Om barnet talar, hostar eller andas med svårighet måste du hjälpa till med ryggslag och buktryck.</p>
	// 	<p>Om barnet satt i halsen och blivit medvetslöst - larma 112 och gör hjärt-lungräddning.</p>
	// 	`
	// },
	{
		img:'assets/luftvagsstopp/barn/gor_5_ryggslag.png',
		
		title: 'GÖR 5 RYGGSLAG',
		content:
		`<p>Om barnet talar, hostar eller andas med svårighet.</p>
		<ul>
		<li>Lägg en hand på barnets bröst.</li>
		<li>Luta barnet framåt.</li>
		<li>Ge 5 ryggslag med handloven mellan skulderbladen.</li>
		</ul>
		<p>Om föremålet inte lossnat fortsätt med buktryck</p>
		`
	},
	{
		img:'assets/luftvagsstopp/barn/gor_5_buktryck.png',
		
		title: 'GÖR 5 BUKTRYCK',
		content:
		`<ul>
		<li>Placera din knytnäve över naveln.</li>
		<li>Greppa knytnäven med den andra handen.</li>
		<li>Tryck snabbt 5 gånger inåt - uppåt.</li>
		<li>Har föremålet kommit upp?<br/>
		Kan barnet andas och tala?.</li>
		</ul>
		<p>På ett litet barn måste du kanske titta i munnen, leta inte med fingret.</p>
		`
	},
	{
		img:'assets/luftvagsstopp/barn/fortsatt_ryggslag_och_buktryck.png',
		
		title: 'FORTSÄTT RYGGSLAG OCH BUKTRYCK',
		content:
		`<p>Varva ryggslag och buktryck - om föremålet inte kommit upp efter 3 serier - larma 112..</p>
		<p>Om barnet är vid medvetande:</p>
		<p>Varva ryggslag med buktryck tills föremålet kommer upp.</p>
		<p>Om barnet blir medvetslöst:</p>
		<p>Gör hjärt-lungräddning</p>

		`
	},
	{
		img:'assets/luftvagsstopp/barn/larma_112.png',
		
		title: 'LARMA 112',
		content:
		`<p>Om föremålet inte kommit upp efter tre serier med ryggslag och buktryck - larma 112.</p>
		<p>Varva ryggslag och buktryck så länge barnet är vid medvetande.</p>
		<p>Gör hjärt-lungräddning om barnet blir medvetslöst.</p>

		`
	},
	{
		img:'assets/luftvagsstopp/barn/kontrollera_medvetande.png',
		
		title: 'KONTROLLERA MEDVETANDE',
		content:
		`<p>Om föremålet inte kommit upp och barnet blvit medvetslöst måste du göra hjärt-lungräddning.</p>
		`
	},
	{
		img:'assets/luftvagsstopp/barn/oppna_luftvagen.png',
		
		title: 'ÖPPNA LUFTVÄGEN - SE EFTER FÖREMÅL',
		content:
		`<ul>
		<li>Lägg ena handen på pannan.</li>
		<li>Andra handens fingrar på hakspetsen.</li>
		<li>Lyft hakan.</li>
		<li>Böj huvudet bakåt.</li>
		<li>Titta i munnen, ta bort det du kan se<br/>
		Leta inte med fingret.</li>
		</ul>
		`
	},
	{
		img:'assets/luftvagsstopp/barn/gor_5_langsamma_inblasningar.png',
		
		title: 'GÖR 5 LÅNGSAMMA INBLÅSNINGAR',
		content:
		`<ul>
		<li>Håll kvar huvudet bakåtböjt.</li>
		<li>Knip om näsan.</li>
		<li>Lägg din mun över barnets mun.</li>
		<li>Gör 5 långsamma inblåsningar.</li>
		<li>Kontrollera att bröstkorgen höjs</li>
		</ul>

		`
	},
	{
		img:'assets/luftvagsstopp/barn/gor_30_brostkompressioner.png',
		
		title: 'GÖR 30 BRÖSTKOMPRESSIONER',
		content:
		`<p>Placera ena handloven på nedre halvan av bröstbenet. Håll armen rak. Håll andra handen på barnets panna.</p>
		<ul>
		<li>Tryck ned 5 cm 30 gånger.</li>
		<li>Håll takten 100-120 tryck per minut.</li>
		<li>Släpp upp bröstkorgen mellan varje bröstkompression.</li>
		<li>Kontrollera om föremålet kommit upp.</li>
		</ul>

		`
	},
	{
		img:'assets/luftvagsstopp/barn/gor_2_langsamma_inblasningar.png',
		
		title: 'GÖR 2 LÅNGSAMMA  INBLÅSNINGAR',
		content:
		`<ul>
		<li>Öppna luftvägarna, håll huvudet bakåtböjt.</li>
		<li>Titta i munnen, ta bort det du kan se. Leta inte med fingret.</li>
		<li>Knip om näsan..</li>
		<li>Gör 2 långsamma inblåsningar.</li>
		<li>Kontrollera att bröstkorgen höjer sig</li>
		</ul>

		`
	},
	{
		img:'assets/luftvagsstopp/barn/fortsatt_hjart-lungraddning.png',
		
		title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
		content:
		`<p>Varva 30 bröstkompressioner med 2 inblåsningar. Kontrollera om föremålet kommit upp innan nya inblåsningar.</p>
		<p>Fortsätt hjärt-lungräddning tills barnet visar tydliga livstecken eller tills person från ambulans eller räddningstjänst tar över.</p>
		<p>Använd hjärtstartare om det finns.</p>
		`
	}
]

const HLRLungChild: React.FC = () => {  

  return (
  	<div>
  		<div className="padded-text-area">
		<IonText>
			<h1>Luftvägsstopp hos barn</h1>
		<p>Om barnet kan hosta eller tala - bäst är om barnet själva kan hosta upp föremålet. Uppmana att hosta, stanna med barnet tills barnet kan tala och andas normalt igen.</p>
		<p>Om barnet talar, hostar eller andas med svårighet måste du hjälpa till med ryggslag och buktryck.</p>
		<p>Om barnet satt i halsen och blivit medvetslöst - larma 112 och gör hjärt-lungräddning.</p>
	</IonText>
		</div>
      	<IonTitle>Instruktioner för Hjärt-Lungräddning</IonTitle>
  		<SlideList slides={slides} />
  	</div>
  );
};

export default HLRLungChild;