// Importa o arquivo CSS para estilização e a imagem do logo
import "../CSS/ClinicaPertodevoce.css"; 
import logoh from "../assets/Logo1.png"; // Verifica se o caminho e o nome da imagem estão corretos
import { FaSearch } from 'react-icons/fa'; // Importa o ícone de lupa da biblioteca react-icons
import { FaRegCircleUser } from "react-icons/fa6";

// Função do componente React que representa a clínica
function Clinica() {
  return (
    <>
      {/* Barra de navegação no topo do site */}
      <div className="barra">
        {/* Exibe o logo da clínica */}
        <img src={logoh} alt="Logo" className="logo" />
        
        {/* Barra de pesquisa centralizada */}
        <div className="barra-pesquisa">
          {/* Ícone de lupa antes do campo de entrada */}
          <FaSearch className="icone-pesquisa" /> {/* Ícone de busca */}
          {/* Campo de entrada para busca, com texto de placeholder */}
          <input 
            type="text" // Define o tipo do input como texto
            placeholder="Buscar" // Texto que aparece quando o campo está vazio
            className="input-pesquisa" // Classe CSS para estilização
          />
        </div>    
        <div className="containerservicos">
          <p className="divservicos">Serviços

          </p>

          <div className="divmenu">

            <a href="#">Medicina</a>
            <a href="#">Odontologia</a>
            <a href="#">Estética</a>

          </div>
        </div>

        {/* Ícone de perfil à direita */}
        <FaRegCircleUser className="icone-perfil" /> {/* Ícone de perfil */}

        
      </div>
      
    </>
  );
}

// Exporta o componente para uso em outras partes da aplicação
export default Clinica; 
