import { Link } from 'react-router-dom';
import '../assets/CSS/boasvindas.css';
import imgFund from '../assets/img/cachFund.jpg';
import logo from '../assets/img/Rectangle 205.svg'

function BemVindo() {
    return (
        <>
        <img src={logo} alt="Rectangle 205.svg" className='LOGOR'/>
            <div className='background-imageZ'>
                <img src={imgFund} alt="Imagem de fundo" />
            </div>
            <div className='Front'>
                <div className="text-boaV">
                    <h1>Chega de longas esperas e agendamentos complicados Venha para o Health Log</h1>
                    <p>Marque suas consultas com médicos 
                        e especialistas em poucos cliques! 
                        Veja a disponibilidade em tempo real, 
                        escolha o horário que mais lhe convém e 
                        receba confirmações instantâneas.</p>
                </div>
                <div className="linha"></div>
            <div className="box-para-login">
                    <h1 className='title-box-login'>Marque a sua próxima consulta!</h1>
                    <Link to="/Login" className='bottom-box-login'>Login</Link>
                    <h2 className='text-box-login'>Não tem login? <a href="/registro">cadastre - se</a></h2>
            </div>
            <div className="deseja-continuar">
                <a href="/Home">Deseja continuar sem <font color="#2F80ED">login?</font> 🡪</a> 
               
            </div>                                
            <span className='text-rodapé'>
                <p className='CNPJ'>CNPJ: 47.854.666/0001-70</p>
                <p>R. Direita, 955 - Vila Santo Antônio, Cotia - SP, 06708-280</p>
            </span>
            </div>
        </>
    );
}

export default BemVindo;