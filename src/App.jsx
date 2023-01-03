import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainContext from "./context"
import AccountChoice from "./pages/AccountChoice"

export default function App() {
    return (
        <MainContext>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <AccountChoice/> } />
                </Routes>
            </BrowserRouter>
        </MainContext>
    )
}
