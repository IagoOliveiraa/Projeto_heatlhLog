import '../CSS/Perfil.css';
import logosite from '../assets/Logo Health_log.png';

function Perfil() {

    return (
        <div className="perfil-container">
          <header className="cabeçalhopf">
            <div className="logopf">
              <img src={logosite} alt="Health Log nome" />
              <h1>Health Log</h1>
            </div>
          </header>  
        </div>
    )
        


    
}

export default Perfil;