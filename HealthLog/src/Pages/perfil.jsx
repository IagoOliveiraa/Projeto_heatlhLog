import '../CSS/Perfil.css';
import '../components/naveBar/naveBar.css'
import tulipa from '../assets/img/fotopf.png';

export default function Perfil() {
  return (
    <>
      <section className='naveBarBlue'>
        <div className='LogoHealthImg'>

        </div>
      </section>


      <div className="form-container">
        <div className='tuliImg' >
          <div className='imgT'></div>
          <div className='containerButton'>
             <a href="/"><button className="btn excluir">Excluir</button></a> 
            <a href="/"><button className="btn editar">Editar</button></a>
            <a href="/agd"><button href="" className="btn agendamentos">Agendamentos</button></a>
            <a href="/hist"><button className="btn historico">Diagnóticos</button></a>
          </div>
        </div>


        <div className='formDiv'>
          <div className='perfil-form'>

            <div className="form-group">
              <div className='inputContainer' id='inputOne'>
                <label>Nome do Usuário</label>
                <input  readOnly />
              </div>

              <div className='inputContainer'>
                <label>E-mail</label>
                <input  readOnly />

              </div>

              <div className='inputContainer'>
                <label>Senha</label>
                <input  readOnly />
                <p className="change-password">Alterar senha?</p>
              </div>

              <div className='inputContainer'>
                <label>Gênero</label>
                <input  readOnly />
              </div>

              <div className='inputContainer'>
                <label>Data de Nascimento</label>
                <input  readOnly />

              </div>

            </div>





          </div>
        </div>
      </div>
    </>
  );
}


