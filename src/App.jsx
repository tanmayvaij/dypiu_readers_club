import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Context from "./context";

import Login from "./pages/Login";
import Registration from "./pages/Registration";

export default function App() {
    return (
        <Context>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={ <Login/> } />
                    <Route exact path="/registration" element={ <Registration/> } />
                </Routes>
            </BrowserRouter>
        </Context>
    )
}
