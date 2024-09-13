import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Pages/Registro";
import Home from "./Pages/Home";
import Clinica from "./Pages/Clinicaspertodevocê";


import EspecialidadesEsteticas from "./Pages/EspecialidadesEsteticas";
import Login from "./Pages/Login";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Registro" element={<Registro/>}/>
                <Route path="/ClinicasPertoDeVoce" element={<Clinica/>}/>
                <Route path="/EspecialidadesEsteticas" element={<EspecialidadesEsteticas/>}/>


            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;