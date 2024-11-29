import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registro from "./Pages/Registro";
import Login from "./Pages/Login";
import Home from "./Pages/home";
import EspecialidadesMedicas from "./Pages/EspecialidadesMedicas";
import EspecialidadesOdontologicas from "./Pages/EspecialidadesOdontologicas";
import Clinica from "./Pages/Clinicaspertodevocê";
import EspecialidadesEsteticas from "./Pages/EspecialidadesEsteticas";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>

            <Route path="/inicio" element={<Home/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/EspecialidadesEsteticas" element={<EspecialidadesEsteticas/>}/>
                <Route path="/EspecialidadesMedicas" element={<EspecialidadesMedicas/>}/>
                <Route path="/EspecialidadesOdontologicas" element={<EspecialidadesOdontologicas/>}/>
                <Route path="/Clinicaspertodevoce" element={<Clinica/>}/>  
            </Routes>
        </BrowserRouter>


        
    )
}
export default Router;