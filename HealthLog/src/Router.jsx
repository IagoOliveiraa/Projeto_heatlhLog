import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Pages/Registro";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import EspecialidadesMedicas from "./Pages/EspecialidadesMedicas";
import EspecialidadesOdontologicas from "./Pages/EspecialidadesOdontologicas";
import LoginClinic from "./Pages/LoginClinic"; 
import Cadastro from "./Pages/Cadastro"
import CadastroClinic from "./Pages/CadastroClinic"
import Home from "./Pages/Home";
import BemVindo from "./Pages/boasvindas";
import ConcluirCadastro from "./Pages/ConcluirCadastro";
import Cpdv from "./Pages/Cpdv"
import EspecialidadesEsteticas from "./Pages/EspecialidadesEsteticas";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registro" element={<Registro />} />
                <Route path="/ClinicasPertoDeVoce" element={<Clinica />} />
                <Route path="/EspecialidadesEsteticas" element={<EspecialidadesEsteticas />} />
                <Route path="/Perfil" element={<Perfil />} />
                <Route path="/EspecialidadesMedicas" element={<EspecialidadesMedicas />} />
                <Route path="/EspecialidadesOdontologicas" element={<EspecialidadesOdontologicas/>} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/LoginClinic" element={<LoginClinic />} />
                <Route path="/CadastroClinic" element={<CadastroClinic />} />
                <Route path="/BemVindo" element={<BemVindo/>} />
                <Route path="/ConcluirCadastro" element={<ConcluirCadastro/>} />
                <Route path="/BemVindo" element={<BemVindo/>} />
                <Route path="/" element={<Cpdv />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;
