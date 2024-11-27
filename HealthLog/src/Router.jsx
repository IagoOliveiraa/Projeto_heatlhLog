import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import LoginClinic from "./Pages/LoginClinic"; 
import Cadastro from "./Pages/Cadastro"
import CadastroClinic from "./Pages/CadastroClinic"
import Cpdv from "./Pages/Cpdv.jsx"
import ConcluirCadastro from "./Pages/ConcluirCadastro";
import Home from "./Pages/home";




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
                <Route path="/login" element={<Login/>}/>
              



            </Routes>
        </BrowserRouter>


        
    )
}
export default Router;