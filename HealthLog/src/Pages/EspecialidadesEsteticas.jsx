import "../CSS/EspecialidadesEsteticas.css"

function EspecialidadesEsteticas() {
    return (
        <div className="Estetica-container">
            <header className="cabeçalho">

                <div className="logo">
                    <img src="" alt="Health Log Logo" />
                    <h1>Health Log</h1>
                </div>

                <div className="pesquisa-login">
                    <input type="text" placeholder="Buscar" />
                    <a href="/Login">Login</a>
                    <a href="/registro"> Cadastra-se</a>

                </div>


            </header>

            <section className="conteudo-principal">

                <div className="grafico">
                    <img src="" alt="" />
                </div>

            </section>



        </div>
    )
}


export default EspecialidadesEsteticas;
