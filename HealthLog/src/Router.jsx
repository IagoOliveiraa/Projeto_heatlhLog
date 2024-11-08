import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Pages/Registro";
import BoasVindas from "./Pages/BoasVindas"
import Login from "./Pages/Login";
import LoginClinic from "./Pages/LoginClinic"; 
import Cadastro from "./Pages/Cadastro"
import CadastroClinic from "./Pages/CadastroClinic"
import Cpdv from "./Pages/Cpdv"
import ConcluirCadastro from "./Pages/ConcluirCadastro";
import Home from "./Pages/home";
import EspecialidadesMedicas from "./Pages/EspecialidadesMedicas";
import EspecialidadesOdontologicas from "./Pages/EspecialidadesOdontologicas";
import Clinica from "./Pages/Clinicaspertodevocê";
import EspecialidadesEsteticas from "./Pages/EspecialidadesEsteticas";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<BoasVindas/>}/>
            <Route path="/inicio" element={<Home/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/loginClinic" element={<LoginClinic/>}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/cadastroClinic" element={<CadastroClinic/>}/>
                <Route path="/cpdv" element={<Cpdv/>}/>
                <Route path="/concluirCadastro" element={<ConcluirCadastro/>}/>
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