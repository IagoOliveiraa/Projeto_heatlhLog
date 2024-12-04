import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Perfil from "./Pages/perfil";
import PerfilEm from "./Pages/perfilEm";
import EspecialidadesEsteticas from "./Pages/EspecialidadesEsteticas";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>

            <Route path="/" element={<BoasVindas/>}/>
            <Route path="/inicio" element={<Home/>}/>
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
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/perfilEm" element={<PerfilEm/>}/>
            
                

            </Routes>
        </BrowserRouter>


        
    )
}
export default Router;