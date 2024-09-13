import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Pages/Registro";
import Home from "./Pages/Home";
import Clinica from "./Pages/Clinicaspertodevocê";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<login/>}/>
                <Route path="/Registro" element={<Registro/>}/>
                <Route path="/ClinicasPertoDeVoce" element={<Clinica/>}/>

            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;