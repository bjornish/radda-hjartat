import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonSlide, IonSlides } from '@ionic/react';
import React from 'react';
import './CardSlider.css';


type CardSliderProps = {
  slides: Array<any>
}


const CardSlider: React.FC<CardSliderProps> = (props) => {
  return (
    <div>
      <IonIcon name="arrow-back" class='ion-float-left'/>
      <IonIcon name="arrow-forward" class='ion-float-right'/>

      <IonSlides pager={true}>
      {props.slides.map((slide, index) => {
        return (            
          <IonSlide key={index}>
            <IonCard>
              <img src={slide.img} />

              <IonCardHeader>
                <IonCardSubtitle>
                  Steg {index + 1}/{props.slides.length}                   
                </IonCardSubtitle>
                <IonCardTitle>
                  {slide.title}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className='contentdiv' dangerouslySetInnerHTML={{__html:slide.content}}>
                </div>                  
              </IonCardContent>
            </IonCard>
          </IonSlide>
          )
      })}
      </IonSlides>

{/*      <IonButton fill='clear' class='ion-float-left'>Tillbaka</IonButton>
      <IonButton fill='clear' class='ion-float-right'>Nästa</IonButton>
*/}
     </div>
  );
};

export default CardSlider;