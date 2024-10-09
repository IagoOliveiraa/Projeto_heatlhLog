import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Pages/Registro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Agendamento from "./Pages/Agendamento";
import HorariosPage from "./Pages/Horarios";
import AdicionarDia from "./Pages/gerenciamentoDia";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Registro" element={<Registro/>}/>
                


            </Routes>
        </BrowserRouter>
        
    )
}
export default Router;