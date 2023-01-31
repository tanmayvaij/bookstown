import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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

// Context imported
import Context from './context';

// Importing pages
import IntroPage from './pages/IntroPage';
import SellerLoginPage from './pages/SellerLoginPage';
import SellerRegistrationPage from './pages/SellerRegistrationPage';
import BuyerLoginPage from './pages/BuyerLoginPage';
import BuyerRegistrationPage from './pages/BuyerRegistrationPage';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<Context>
			<IonReactRouter>
				<IonRouterOutlet>

					<Route exact path="/">
						<Redirect to="/intro" />
					</Route>

					<Route exact path="/intro">
						<IntroPage />
					</Route>

					<Route exact path="/seller_login">
						<SellerLoginPage />
					</Route>

					<Route exact path="/seller_registration">
						<SellerRegistrationPage />
					</Route>

					<Route exact path="/buyer_login">
						<BuyerLoginPage />
					</Route>

					<Route exact path="/buyer_registration">
						<BuyerRegistrationPage />
					</Route>


				</IonRouterOutlet>
			</IonReactRouter>
		</Context>
	</IonApp>
);

export default App;
