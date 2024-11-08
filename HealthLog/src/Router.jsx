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

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="/boasVindas" element={<BoasVindas/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/loginClinic" element={<LoginClinic/>}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/cadastroClinic" element={<CadastroClinic/>}/>
                <Route path="/cpdv" element={<Cpdv/>}/>
                <Route path="/concluirCadastro" element={<ConcluirCadastro/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Registro" element={<Registro/>}/>
            </Routes>
        </BrowserRouter>


        
    )
}
export default Router;