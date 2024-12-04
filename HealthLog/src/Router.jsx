import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Pages/Registro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import LoginClinic from "./Pages/LoginClinic"; 
import Cadastro from "./Pages/Cadastro"
import CadastroClinic from "./Pages/CadastroClinic"
import BemVindo from "./Pages/boasvindas";
import ClinicaCalendario from "./Pages/agendamento";
import Cpdv from "./Pages/Cpdv";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BemVindo/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/loginClinic" element={<LoginClinic/>}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/cadastroClinic" element={<CadastroClinic/>}/>
                <Route path="/agendamento" element={<ClinicaCalendario/>}/>
                <Route path="/cpdv" element={<Cpdv/>}/> 

            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;