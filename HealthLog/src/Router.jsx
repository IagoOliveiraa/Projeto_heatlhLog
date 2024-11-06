import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Pages/Registro";
import Home from "./Pages/Home";
import Clinica from "./Pages/Clinicaspertodevocê";
import EspecialidadesEsteticas from "./Pages/EspecialidadesEsteticas";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import EspecialidadesMedicas from "./Pages/EspecialidadesMedicas";
import EspecialidadesOdontologicas from "./Pages/EspecialidadesOdontologicas";
import Cadastro from "./Pages/Cadastro";
import LoginClinic from "./Pages/LoginClinic";
import CadastroClinic from "./Pages/CadastroClinic";

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
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
