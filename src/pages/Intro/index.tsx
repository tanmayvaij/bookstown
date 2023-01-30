import { IonContent, IonPage, useIonRouter } from '@ionic/react'
import { App } from "@capacitor/app"
import { useHistory } from 'react-router'
import './index.css'

const Intro: React.FC = () => {

	const history = useHistory()

	// code for exiting app
	const ionRouter = useIonRouter()
	document.addEventListener('ionBackButton', (ev: Event) => {
		(ev as any).detail.register(-1, () => {
			if (!ionRouter.canGoBack()) App.exitApp()
		})
	})

	return (
		<IonPage>

			<IonContent fullscreen>
				<div id='landing_page'>

					<div>

						<img id='brand' src="assets/brand.png" alt="" />

						<p>Best place for buying and selling second hand books.</p>

					</div>

					<div id='button_group'>

						<button 
							id='buy_btn' 
							onClick={() => history.push("/buyer_login")}
						>
							Start Buying
						</button>

						<button 
							id='sell_btn' 
							onClick={() => history.push("/seller_login")}
						>
							Start Selling
						</button>

					</div>

					<img id='landing_bottom' src="assets/landing-img.png" alt="" />

				</div>
			</IonContent>

		</IonPage>
	)
}

export default Intro
