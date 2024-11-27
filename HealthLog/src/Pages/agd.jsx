import '../CSS/agd.css';
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

            <div className="card-container">
            <div className="date-circle">10</div>
            <div className="details">
                    <h3>Quarta-Feira</h3>
                    <p>11h - 12h</p>
                    <div className="buttons">
                        <button className="btn reagendar">Reagendar</button>
                        <button className="btn excluir">Excluir</button>
                    </div>
                </div>
            </div>

            <div className="card-containerr">
            <div className="date-circle">10</div>
            <div className="details">
                    <h3>Quarta-Feira</h3>
                    <p>11h - 12h</p>
                    <div className="buttons">
                        <button className="btn reagendar">Reagendar</button>
                        <button className="btn excluir">Excluir</button>
                    </div>
                </div>
            </div>

            <div className="card-containerrr">
            <div className="date-circle">10</div>
            <div className="details">
                    <h3>Quarta-Feira</h3>
                    <p>11h - 12h</p>
                    <div className="buttons">
                        <button className="btn reagendar">Reagendar</button>
                        <button className="btn excluir">Excluir</button>
                    </div>
                </div>
            </div>

            <div className="card-containerrrr">
            <div className="date-circle">10</div>
            <div className="details">
                    <h3>Quarta-Feira</h3>
                    <p>11h - 12h</p>
                    <div className="buttons">
                        <button className="btn reagendar">Reagendar</button>
                        <button className="btn excluir">Excluir</button>
                    </div>
                </div>
            </div>

        </>

    );

}


