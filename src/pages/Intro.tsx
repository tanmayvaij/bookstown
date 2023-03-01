import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useHistory } from 'react-router-dom'

const Intro: React.FC = () => {

    const history = useHistory()

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>

                    <IonTitle>Intro</IonTitle>

                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonButton onClick={ () => history.push("/signin") }>Sign In</IonButton>
                <IonButton onClick={ () => history.push("/signup") }>Sign Up</IonButton>

            </IonContent>

        </IonPage>
    )
}

export default Intro
