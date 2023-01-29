import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './index.css';

const Intro: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>

        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>
        {/* <ExploreContainer /> */}
      </IonContent>

    </IonPage>
  );
};

export default Intro;