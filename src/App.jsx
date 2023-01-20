import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainContext from "./context"

// importing common components
import Navbar from "./components/Navbar"

// importing pages
import LandingPage from "./pages/LandingPage"
import BuyerLoginPage from "./pages/BuyerLoginPage"
import BuyerRegistrationPage from "./pages/BuyerRegistrationPage"
import SellerLoginPage from "./pages/SellerLoginPage"
import SellerRegistrationPage from "./pages/SellerRegistrationPage"

export default function App() {
    return (
        <MainContext>
            <BrowserRouter>

                <Navbar/>

                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route exact path="/buyer_login" element={ <BuyerLoginPage/> } />
                    <Route exact path="/buyer_registration" element={ <BuyerRegistrationPage/> } />
                    <Route exact path="/seller_login" element={ <SellerLoginPage/> } />
                    <Route exact path="/seller_registration" element={ <SellerRegistrationPage/> } />
                </Routes>

            </BrowserRouter>
        </MainContext>
    )
}
