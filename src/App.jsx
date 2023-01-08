import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainContext from "./context"
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/Navbar"

export default function App() {
    return (
        <MainContext>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                </Routes>
            </BrowserRouter>
        </MainContext>
    )
}
