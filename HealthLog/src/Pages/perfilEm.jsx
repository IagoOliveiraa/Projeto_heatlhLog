import "../assets/CSS/perfilEm.css";
//import "../components/navBar/navBar.css";
import tulipa from '../assets/img/fotopf.png';
import LogoPerfil from "../assets/img/Logo1.png";


export default function PerfilEm() {
    return (
      <>
        {/* Cabeçalho */}
        <section className="naveBarBlue">
          <div className="LogoHealthImg">
         <a href="/"><img src={LogoPerfil} alt="Foto Logo" /></a>
          </div>
        </section>
  
        {/* Container principal */}
        <div className="form-container">
          {/* Coluna da Imagem */}
          <div className="tuliImg">
            <div className="ipaImg">
              <img src={tulipa} alt="Foto de perfil" />
            </div>
            <div className="containerButton">
              <a href="/">
                <button className="btn excluir">Excluir</button>
              </a>
              <a href="/">
                <button className="btn editar">Editar</button>
              </a>
            
            </div>
          </div>
  
          {/* Formulário */}
          <div className="formDiv">
            <div className="perfil-form">
              <div className="form-group">
                <div className="inputContainer" id="inputOne">
                  <label>Nome da Clínica:</label>
                  <input readOnly />
                </div>
  
                <div className="inputContainer">
                  <label>E-mail:</label>
                  <input readOnly />
                </div>
  
                <div className="inputContainer">
                  <label>Senha:</label>
                  <input readOnly />
                  <p className="change-password">Alterar senha?</p>
                </div>
  
                <div className="inputContainer">
                  <label>CNPJ:</label>
                  <input readOnly />
                </div>
  
                <div className="inputContainer">
                  <label>Endereço:</label>
                  <input readOnly />
                </div>

                <div className="botaoPrincipal">

                  <div className="botaoem-containerUM">
                  <p className="botaoem-text">Especializações</p>
                  <div className="button-group">
                    <button className="bntt edi">Editar</button>
                  </div>
                </div>

                <div className="botaoem-containerDOIS">
                  <p className="butaoem-text">Horário de funcionamento</p>
                  <div className="button-group">
                    <button className="bntt tar">Editar</button>
                  </div>
                </div>

                </div>

            
                 
                 
               
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  