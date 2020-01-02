import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList, IonImg } from '@ionic/react';
import React from 'react';

type SlideListProps = {
  slides: Array<any>
}


const SlideList: React.FC<SlideListProps> = (props) => {
  return (
    <IonList lines='none'>
    {props.slides.map((slide, index) => {
      return(
        <IonItem key={index}>
          <IonCard>
                <IonImg src={slide.img} />

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
        </IonItem>
      )})}
   </IonList>
  )
}

export default SlideList;