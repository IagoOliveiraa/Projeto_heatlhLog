// Importa o arquivo CSS e a imagem do logo
import "../CSS/ClinicaPertodevoce.css"; 
import logoh from "../assets/Logo1.png"; // Verifique se o caminho e o nome estão corretos

// Função do componente React
function Clinica() {
  return (
    <>
      {/* Barra com a cor e tamanho especificados */}
      <div className="barra">
        <img src={logoh} alt="Logo" className="logo" />
      </div>
      
    </>
  );
}

export default Clinica;
