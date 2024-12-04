import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import EspecialidadesMedicas from "./Pages/EspecialidadesMedicas";
import EspecialidadesOdontologicas from "./Pages/EspecialidadesOdontologicas";
import LoginClinic from "./Pages/LoginClinic"; 
import Cadastro from "./Pages/Cadastro"
import CadastroClinic from "./Pages/CadastroClinic"
import Home from "./Pages/Home";
import ConcluirCadastro from "./Pages/ConcluirCadastro";
import Cpdv from "./Pages/Cpdv"
import Clinica from "./Pages/Clinicaspertodevocê";
import EspecialidadesEsteticas from "./Pages/EspecialidadesEsteticas";
import BemVindo from "./Pages/BoasVindas";
import ClinicaCalendario from "./Pages/agendamento";
import Perfil from "./Pages/perfil";
import PerfilEm from "./Pages/perfilEm";






const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

            <Route path="/" element={<BemVindo/>}/>
            <Route path="/inicio" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/ConcluirCadastro" element={<ConcluirCadastro/>} />
            <Route path="/Agendamento" element={<ClinicaCalendario/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/loginClinic" element={<LoginClinic/>}/> 
                <Route path="/cadastroClinic" element={<CadastroClinic/>}/>
                <Route path="/cpdv" element={<Cpdv/>}/>
                <Route path="/EspecialidadesEsteticas" element={<EspecialidadesEsteticas/>}/>
                <Route path="/EspecialidadesMedicas" element={<EspecialidadesMedicas/>}/>
                <Route path="/EspecialidadesOdontologicas" element={<EspecialidadesOdontologicas/>}/>
                <Route path="/Clinicaspertodevoce" element={<Clinica/>}/>   
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/perfilEm" element={<PerfilEm/>}/>
            
                
                
              



            </Routes>
        </BrowserRouter>
    );
};

export default Router;
