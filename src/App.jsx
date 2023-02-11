import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Context from "./context";

import WebNavbar from "./components/WebNavbar";
import WebFooter from "./components/WebFooter";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

export default function App() {
    return (
        <Context>
            <BrowserRouter>

                <WebNavbar/>

                <Routes>

                    <Route exact path="/" element={ <Home/> } />
                    <Route exact path="/about" element={ <About/> } />

                    <Route exact path="/login" element={ <Login/> } />
                    <Route exact path="/registration" element={ <Registration/> } />
                </Routes>

                <WebFooter/>

            </BrowserRouter>

            

        </Context>
    )
}
