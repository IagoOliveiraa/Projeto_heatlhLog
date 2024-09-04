import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Pages/Registro";
import Home from "./Pages/Home";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<login/>}/>
                <Route path="/Registro" element={<Registro/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;