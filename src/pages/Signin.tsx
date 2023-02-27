import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react'

const Signin: React.FC = () => {
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>

                    <IonTitle>Signin</IonTitle>

                    <IonButtons slot="end">
                        <IonBackButton></IonBackButton>
                    </IonButtons>

                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonItem>
                    <IonLabel position="floating">Default input</IonLabel>
                    <IonInput placeholder="Enter text"></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Default input</IonLabel>
                    <IonInput placeholder="Enter text"></IonInput>
                </IonItem>

            </IonContent>

        </IonPage>
    )
}

export default Signin
