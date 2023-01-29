import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './index.css';

const Intro: React.FC = () => {
  return (
    <IonPage>

      {/* <IonHeader>

        <IonToolbar>
          <IonTitle>Bookstown</IonTitle>
        </IonToolbar>

      </IonHeader> */}

      <IonContent fullscreen>
        <div id='landing_page'>

          <div>

              <img id='brand' src="assets/brand.png" alt="" />

              <p>Best place for buying and selling second hand books.</p>

          </div>

          <div id='button_group'>

              <button id='buy_btn'>    
                  Start Buying
              </button>

              <button id='sell_btn'>    
                  Start Selling
              </button>

          </div>

          <img id='landing_bottom' src="assets/landing-img.png" alt="" />

        </div>
      </IonContent>

    </IonPage>
  );
};

export default Intro;
