import { 
	IonBackButton, 
	IonButtons, 
	IonContent, 
	IonHeader, 
	IonInput, 
	IonItem, 
	IonLabel, 
	IonNote, 
	IonPage, 
	IonTitle, 
	IonToolbar 
} from '@ionic/react';
import { useState } from 'react';
import './index.css';

const BuyerLoginPage: React.FC = () => {

    const [isTouched, setIsTouched] = useState(false)
    const [isValid, setIsValid] = useState<boolean>()
  
    const validateEmail = (email: string) => {
      return email.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )
    }
  
    const validate = (ev: Event) => {
      const value = (ev.target as HTMLInputElement).value
      setIsValid(undefined)
      if (value === '') return
      validateEmail(value) !== null ? setIsValid(true) : setIsValid(false)
    }
  
    const markTouched = () => setIsTouched(true)

	return (
        <IonPage>

            <IonHeader>
                <IonToolbar>

                    <IonTitle>Buyer Login</IonTitle>

                    <IonButtons slot="end">
                        <IonBackButton></IonBackButton>
                    </IonButtons>

                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <div id="seller_login">

                    <IonItem className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
                        <IonLabel position="floating" >Email</IonLabel>
                        <IonInput 
                            placeholder="Enter Email" 
                            onIonInput={(event) => validate(event)} 
                            onIonBlur={() => markTouched()}
                        >
                        </IonInput>
                        <IonNote slot="error">Invalid email</IonNote>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type='password' placeholder="Enter Password"></IonInput>
                    </IonItem>

                    <button id='login_btn'>Login</button>

                </div>
            </IonContent>

        </IonPage>
	);
};

export default BuyerLoginPage;
