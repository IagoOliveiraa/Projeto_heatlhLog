import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Pages/Registro";
import Home from "./Pages/Home";
import Clinica from "./Pages/Clinicaspertodevocê";
import EspecialidadesEsteticas from "./Pages/EspecialidadesEsteticas";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Registro" element={<Registro/>}/>
                <Route path="/ClinicasPertoDeVoce" element={<Clinica/>}/>
                <Route path="/EspecialidadesEsteticas" element={<EspecialidadesEsteticas/>}/>
<<<<<<< HEAD
                <Route path="/Clinicaspertodevoce" element={<Clinica/>}/>
=======
                <Route path="/Perfil" element={<Perfil/>}/>
                <Route path="/EspecialidadesMedicas" element={<EspecialidadesEsteticas/>}/>

>>>>>>> b9e2d34d30f57735621134021b9c73a8045084d8

            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;


