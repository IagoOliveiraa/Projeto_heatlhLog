import "../assets/CSS/perfil.css";
//import '../components/naveBar/naveBar.css';
import tulipa  from '../assets/img/fotopf.png';
import LogoPerfil from "../assets/img/Logo1.png"; // Corrigindo o caminho


export default function Perfil() {
    return (
      <>
        {/* Cabeçalho */}
        <section className="naveBarBlueUM">
          <div className="LogoHealthImgUM">
         <a href="/"><img src={LogoPerfil} alt="Foto Logo" /></a>
          </div>
        </section>
  
        {/* Container principal */}
        <div className="form-containerUM">
          {/* Coluna da Imagem */}
          <div className="tuliImgUM">
            <div className="ipaImgUM">
              <img src={tulipa} alt="Foto de perfil" />
            </div>
            <div className="containerButtonUM">
              <a href="/">
                <button className="btn excluirUM">Excluir</button>
              </a>
              <a href="/">
                <button className="btn editarUM">Editar</button>
              </a>
            
            </div>
          </div>
  
          {/* Formulário */}
          <div className="formDivUM">
            <div className="perfil-formUM">
              <div className="form-groupUM">
                <div className="inputContainerUM" id="inputOne">
                  <label>Nome do Usuário</label>
                  <input readOnly />
                </div>
  
                <div className="inputContainerUM">
                  <label>E-mail</label>
                  <input readOnly />
                </div>
  
                <div className="inputContainerUM">
                  <label>Senha</label>
                  <input readOnly />
                  <p className="change-passwordUM">Alterar senha?</p>
                </div>
  
                <div className="inputContainerUM">
                  <label>Gênero</label>
                  <input readOnly />
                </div>
  
                <div className="inputContainerUM">
                  <label>Data de Nascimento</label>
                  <input readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  