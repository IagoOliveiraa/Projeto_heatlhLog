import '../CSS/hist.css';
import '../components/naveBar/naveBar.css'

export default function Agenda() {
    return (

        <>
            <section className='naveBarBlue'>
                <div className='LogoHealthImg'>

                </div>
            </section>

            <div className="bloco">
                <div className='tuliImg' >
                    <div className='imgT'></div>
                    <div className='containerButton'>
                        <a href="/Perfil"><button className="btn excluir">Concluir</button></a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card">
                    <h2>Clinica A</h2>
                    <p>21/04: O paciente apresentou sintomas de febre e dor de cabeça, foi tratado com dipirona intravenosa.</p>
                </div>

                <div className="card">
                    <h2>Clinica B</h2>
                    <p>22/03: O paciente apresentou sintomas de febre e dor de cabeça, foi tratado com dipirona intravenosa.</p>
                </div>

                <div className="card">
                    <h2>Clinica C</h2>
                    <p>21/10: O paciente apresentou sintomas de febre e dor de cabeça, foi tratado com dipirona intravenosa.</p>
                </div>
            </div>

        </>

    );

}