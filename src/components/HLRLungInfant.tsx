import { IonText, IonTitle } from '@ionic/react';
import React from 'react';
import SlideList from '../components/SlideList';


const slides = [

	// {
	// 	img:'',
	// 	title: 'LUFTVÄGSSTOPP BARN 0-1 ÅR',
	// 	content:
	// 	`<p>Barn som sätter i halsen kan ofta hosta upp föremålet själva. Att hosta är det bästa sättet att få upp något som fastnat i halsen<br/>
	// 	Tecken på luftvägsstopp kan vara plötslig hosta, väsande eller ansträngd andning. Vid totalt luftvägsstopp kan barnet inte hosta, det hörs inga andningsljud, barnet har panik i blicken och får snart blåaktig ansiktsfärg på grund av syrebrist.</p>
	// 	<p>Ropa högt för att få hjälp att larma 112. Bedöm och åtgärda
	// 	`
	// },
	{
		img:'assets/luftvagsstopp/spadbarn/bedom_barnet.png',
		title:'BEDÖM BARNET',
		content:
		`<ul>
		<li>Hostar eller andas barnet med svårighet? Gör ryggslag och brösttryck.</li>
		<li>Är barnet slappt och livlöst gör du hjärt-lungräddning.</li>
		<li>Ropa efter hjälp.</li>
		</ul>
		`
	},
	{
		img:'assets/luftvagsstopp/spadbarn/gor_5_ryggslag.png',
		
		title: 'GÖR 5 RYGGSLAG',
		content:
		`<p>Om barnet hostar eller andas med svårighet.</p>
		<ul>
		<li>Lägg barnet på mage på din arm, huvudet i din hand.</li>
		<li>Luta barnet så huvudet kommer lägre än kroppen.</li>
		<li>Ta stöd mot ditt ben om det behövs.</li>
		<li>Gör 5 ryggslag med handloven mellan skulderbladen</li>
		</ul>
		`
	},
	{
		img:'assets/luftvagsstopp/spadbarn/gor_5_brosttryck.png',
		
		title: 'GÖR 5 BUKTRYCK',
		content:
		`<ul>
		<li>Vänd barnet på rygg på andra armen. Stöd huvudet i din hand.</li>
		<li>Placera pek- och långfinger på nedre halvan av bröstbenet.</li>
		<li>Tryck 4 cm. 5 gånger.</li>
		<li>Titta om föremålet kommit upp.</li>
		<li>Leta inte med fingret. Andas barnet?</li>
		</ul>
		`
	},
	{
		img:'assets/luftvagsstopp/spadbarn/fortsatt_ryggslag_och_brosttryck.png',
		
		title: 'FORTSÄTT RYGGSLAG OCH BUKTRYCK',
		content:
		`<ul>
		<li>Varva ryggslag och buktryck - om föremålet inte kommit upp efter 3 serier - larma 112.</li>
		<li>Om barnet är vid medvetande: varva ryggslag med brösttryck tills föremålet kommer upp.</li>
		<li>Om barnet blir medvetslöst: Gör hjärt-lungräddniong.</li>
		</ul>
		`
	},
	{
		img:'assets/luftvagsstopp/spadbarn/larma_112.png',
		
		title: 'LARMA 112',
		content:
		`<p>Om föremålet inte kommit upp efter tre serier med ryggslag och brösttryk - larma 112.</p>
		<p>Om möjligt - be någon annan att larma.</p>
		<p>Varva ryggslag och brösttryck tills föremålet kommer upp.</p>
		<p>Gör hjärt-lungräddning om barnet blir medvetslöst.</p>
		`
	},
	{
		img:'assets/luftvagsstopp/spadbarn/kontrollera_medvetande.png',
		
		title: 'KONTROLLERA MEDVETANDE',
		content:
		`<p>Om föremålet inte kommit upp och barnet blvit medvetslöst måste du göra hjärt-lungräddning.</p>
		`
	},
	{
		img:'assets/luftvagsstopp/spadbarn/oppna_luftvagen.png',
		
		title: 'ÖPPNA LUFTVÄGEN OCH TITTA I MUNNEN',
		content:
		`<p>Lägg en hand på pannan. Lyft hakan med andra handens finger. Titta i munnen, ta bort det du kan se. Leta inte med fingret.</p>
		`
	},
	{
		img:'assets/luftvagsstopp/spadbarn/gor_5_langsamma_inblasningar.png',
		
		title: 'GÖR 5 LÅNGSAMMA  INBLÅSNINGAR',
		content:
		`<ul>
		<li>Håll hakan upplyft.</li>
		<li>Täck barnets näsa och mun med din mun.</li>
		<li>Gör 5 långsamma inblåsningar.</li>
		<li>Blås in den luft som ryms i din mun.</li>
		<li>Kontrollera att bröstkorgen höjs.</li>
		</ul>

		`
	},
	{
		img:'assets/luftvagsstopp/spadbarn/gor_30_brostkompressioner.png',
		
		title: 'GÖR 30 BRÖSTKOMPRESSIONER',
		content:
		`<p>Placera pek- och långfinger på nedre halvan av bröstbenet.</p>
		<ul>
		<li>Tryck ned 4 cm 30 gånger.</li>
		<li>Håll takten 100-120 tryck per minut.</li>
		<li>Släpp upp bröstkorgen mellan varje bröstkompression.</li>
		<li>Kontrollera om föremålet kommit upp.</li>
		</ul>

		`
	},
	{
		img:'assets/luftvagsstopp/spadbarn/gor_2_langsamma_inblasningar.png',
		
		title: 'GÖR 2 LÅNGSAMMA INBLÅSNINGAR',
		content:
		`<ul>
		<li>Lyft hakan.</li>
		<li>Täck barnets näsa och mun med din mun</li>
		<li>Gör 2 långsamma inblåsningar.</li>
		<li>Blås in den luft som ryms i din mun.</li>
		<li>Kontrollera att bröstkorgen höjs.</li>
		</ul>

		`
	},
	{
		img:'assets/luftvagsstopp/spadbarn/fortsatt_hjart-lungraddning.png',
		
		title: 'FORTSÄTT HJÄRT-LUNGRÄDDNING',
		content:
		`<p>Varva 30 bröstkompressioner med 2 inblåsningar tills personal från ambulans eller räddningstjänst tar över. Sluta bara om barnet visar tydliga livstecken. Använd hjärtstartare om det finns.</p>
		`
	}
]

const HLRLungInfant: React.FC = () => {  

  return (
  	<div>
  		<div className="padded-text-area">
	  		<IonText>
	  			<h1>Luftvägsstopp spädbarn</h1>
				<p>Barn som sätter i halsen kan ofta hosta upp föremålet själva. Att hosta är det bästa sättet att få upp något som fastnat i halsen</p>
				<p>Tecken på luftvägsstopp kan vara plötslig hosta, väsande eller ansträngd andning. Vid totalt luftvägsstopp kan barnet inte hosta, det hörs inga andningsljud, barnet har panik i blicken och får snart blåaktig ansiktsfärg på grund av syrebrist.</p>
				<p>Ropa högt för att få hjälp att larma 112. Bedöm och åtgärda</p>
			</IonText>
		</div>
      	<IonTitle>Instruktioner för Hjärt-Lungräddning</IonTitle>		
  		<SlideList slides={slides} />
  	</div>
  );
};

export default HLRLungInfant;