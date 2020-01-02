import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heart, medkit, more, pulse } from 'ionicons/icons';
import HLRHeart from './pages/HLRHeart';
import HLRLung from './pages/HLRLung';

import About from './pages/About';
import Defibrilator from './pages/Defibrilator';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/heart" component={HLRHeart} exact={true} />
          <Route path="/lung" component={HLRLung} exact={true} />

          <Route path="/defibrilator" component={Defibrilator} />
          <Route path="/about" component={About} />
          <Route path="/" render={() => <Redirect to="/heart" />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="heart" href="/heart">
            <IonIcon icon={heart} />
            <IonLabel>Hjärtstopp</IonLabel>
          </IonTabButton>
          <IonTabButton tab="lung" href="/lung">
            <IonIcon icon={pulse} />
            <IonLabel>Luftvägsstop</IonLabel>
          </IonTabButton>
          <IonTabButton tab="defibrilator" href="/defibrilator">
            <IonIcon icon={medkit} />
            <IonLabel>Hjärtstartare</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={more} />
            <IonLabel>Om Rädda Hjärtat</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
