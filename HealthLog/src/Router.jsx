import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Pages/Registro";
import Home from "./Pages/Home";
<<<<<<< HEAD
import BoasVindas from "./Pages/boasvindas"
=======
import Login from "./Pages/Login";
import LoginClinic from "./Pages/LoginClinic"; 
import Cadastro from "./Pages/Cadastro"
import CadastroClinic from "./Pages/CadastroClinic"
>>>>>>> f0d4d8fd7a5428112385a1358c84869259f31fab

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/boas-vindas" element={<BoasVindas/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/loginClinic" element={<LoginClinic/>}/> 
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/cadastroClinic" element={<CadastroClinic/>}/>
            </Routes>
        </BrowserRouter>


        
    )
}
export default Router;