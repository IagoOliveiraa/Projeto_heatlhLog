
import "../CSS/EspecialidadesMedicas.css";
import imagem200 from "../assets/grafico200.png";//importando imagem do gráfico
import imagem89 from "../assets/grafico89.png";//importando imagem do gráfico
import imagemhealthlog from "../assets/helthloggrafico.png";//importando imagem do gráfico
import imagemmuitomais from "../assets/graficomuitomais.png";//importando imagem do gráfico

function EspecialidadesMedicas(){
    const specialties = [
        {
          title: 'Ortopedia',
          description:
            'Especialidade voltada para a saúde e cuidados com a região do pé e tornozelo',
        },
        {
          title: 'Pediatria',
          description:
            'especialidade que volta a atenção para o bem-estar de crianças e adolescentes.',
        },
        {
          title: 'Cardiologia',
          description:
            'Especialidade voltada aos cuidados com o coração e complicações cardiacas.',
        },
        {
          title: 'Cirurgia Bucomaxilofacial',
          description:
            'Envolve procedimentos cirúrgicos complexos para tratar condições da boca, mandíbula e face',
        },
        {
          title: 'Dermatologia',
          description:
            'especialidade médica que diagnostica e trata doenças da pele, cabelo, unhas e mucosas',
        },
        {
          title: 'Odontologia Restauradora',
          description:
            'Foca em restaurar dentes danificados por cáries ou trauma, incluindo o uso de restaurações e coroas',
        },
      ];
    
      return (
        <div className="container">
          <h1>Especialidades Médicas</h1>
          <div className="specialty-grid">
            {specialties.map((specialty, index) => (
              <div key={index} className="specialty-card">
                <h2>{specialty.title}</h2>
                <p>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      );

}

export default EspecialidadesMedicas;

