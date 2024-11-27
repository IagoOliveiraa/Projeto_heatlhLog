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


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<BemVindo/>}/>
                <Route path="/inicio" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/ClinicasPertoDeVoce" element={<Clinica />} />
                <Route path="/EspecialidadesEsteticas" element={<EspecialidadesEsteticas />} />
                <Route path="/EspecialidadesMedicas" element={<EspecialidadesMedicas />} />
                <Route path="/EspecialidadesOdontologicas" element={<EspecialidadesOdontologicas/>} />
                <Route path="/LoginClinic" element={<LoginClinic />} />
                <Route path="/CadastroClinic" element={<CadastroClinic />} />
                <Route path="/BemVindo" element={<BemVindo/>} />
                <Route path="/ConcluirCadastro" element={<ConcluirCadastro/>} />
                <Route path="/BemVindo" element={<BemVindo/>} />
                <Route path="/cpdv" element={<Cpdv />} />
                <Route path="/loginClinic" element={<LoginClinic/>}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/Agendamento" element={<ClinicaCalendario/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
