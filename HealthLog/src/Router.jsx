import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import LoginClinic from "./Pages/LoginClinic"; 
import Cadastro from "./Pages/Cadastro"
import CadastroClinic from "./Pages/CadastroClinic"
import ClinicaCalendario from "./Pages/agendamento";
import Cpdv from "./Pages/Cpdv";
import ConcluirCadastro from "./Pages/ConcluirCadastro";
import BemVindo from "./Pages/boasvindas.jsx";






const Router = () => {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<BemVindo/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/loginClinic" element={<LoginClinic/>}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/cadastroClinic" element={<CadastroClinic/>}/>
                <Route path="/agendamento" element={<ClinicaCalendario/>}/>
                <Route path="/cpdv" element={<Cpdv/>}/> 
                <Route path="/concluirCadastro" element={<ConcluirCadastro/>}/>
                
              




            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;