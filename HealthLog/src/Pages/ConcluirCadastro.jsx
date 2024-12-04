import React, { useState } from "react";
import "../assets/CSS/concluirCadastro.css"; // Certifique-se de que o caminho está correto.
import imgFundo from "../assets/img/cachFund.jpg"; // Imagem de fundo
import maletaEsc from "../assets/img/maletaEsc.png";
import persCla from "../assets/img/persCla.png";
import logo from "../assets/img/logo.png";

function ConcluirCadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDias, setIsOpenDias] = useState(false); // Variável de estado para o segundo menu
  const [selectedOptions, setSelectedOptions] = useState([]); // Define as opções selecionadas

  const [diasSelecionados, setDiasSelecionados] = useState({
    Dom: false,
    Seg: true,
    Ter: true,
    Qua: true,
    Qui: true,
    Sex: true,
    Sab: false,
  });

  const [selectedSingleOption, setSelectedSingleOption] = useState("Tipo de Horário"); // Estado para escolha única
  const [isSingleMenuOpen, setIsSingleMenuOpen] = useState(false); // Controle do menu de escolha única

  // Função para o login
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (email === "exemplo@teste.com" && password === "123456") {
      alert("Login realizado com sucesso!");
    } else {
      alert("E-mail ou senha incorretos.");
    }
  };

  // Alterna o estado do menu de especialidades
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Alterna o estado do menu de dias
  const toggleMenu2 = () => {
    setIsOpenDias((prevState) => !prevState);
  };

  // Função para selecionar ou desmarcar uma opção
  const handleOptionClick = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((selected) => selected !== option); // Remove a opção
      } else {
        return [...prevOptions, option]; // Adiciona a opção
      }
    });
  };

  // Função para alternar o estado de um dia ao clicar
  const handleDiaClick = (dia) => {
    setDiasSelecionados((prevState) => ({
      ...prevState,
      [dia]: !prevState[dia], // Alterna entre true e false
    }));
  };

  // Função para alternar o menu de escolha única
  const toggleSingleMenu = () => {
    setIsSingleMenuOpen((prev) => !prev);
  };

  // Função para selecionar uma opção única
  const handleSingleOptionClick = (option) => {
    setSelectedSingleOption(option); // Define a opção selecionada
    setIsSingleMenuOpen(false); // Fecha o menu após a seleção
  };

  return (
    <div className="login-containerH">
      <img src={imgFundo} alt="" className="background-imageH" />
      <div className="login-boxH">
        <div className="logo-with-imagesH">
          
          <div className="images-containerH">
            <img src={maletaEsc} alt="Imagem 1" className="side-imageH" />
            <img src={persCla} alt="Imagem 2" className="side-image2H" />
          </div>
        </div>

        <h2>Está quase no fim!</h2>

        <div>
          <button className="botaoEspH" onClick={toggleMenu}>
            Adicione uma especialidade +
          </button>

          {/* Mostra as opções selecionadas abaixo do botão */}
          <div className="selected-optionsH">
            {selectedOptions &&
              selectedOptions.map((option) => (
                <div key={option} className="selected-option-itemH">
                  {option}
                </div>
              ))}
          </div>

          {isOpen && (
            <ul className="options-listH">
              <h3>Especialidades Médicas</h3>
              {[
                "Cardiologia",
                "Dermatologia",
                "Neurologia",
                "Ortopedia",
                "Pediatria",
              ].map((option) => (
                <li key={option} onClick={() => handleOptionClick(option)}>
                  {option}
                </li>
              ))}

              <h3>Especialidades Estéticas</h3>
              {[
                "Cirurgia Plástica",
                "Drenagem Linfática",
                "Limpeza Facial",
                "Massagem Corporal",
                "Terapia Capilar",
                "Terapias Alternativas",
              ].map((option) => (
                <li key={option} onClick={() => handleOptionClick(option)}>
                  {option}
                </li>
              ))}

              <h3>Especialidades Odontológicas</h3>
              {[
                "Dentista",
                "Endodontia",
                "Estomatologia",
                "Implantodontia",
                "Odontogereatria",
                "Radiologia Odontológica",
              ].map((option) => (
                <li key={option} onClick={() => handleOptionClick(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="dias-containerH">
          <button className="toggle-buttonH" onClick={toggleMenu2}>
            Selecione os dias de funcionamento
          </button>

          {/* Menu de dias de funcionamento controlado por isOpenDias */}
          {isOpenDias && (
            <div className="dias-selecionadosH">
              {Object.keys(diasSelecionados).map((dia) => (
                <div
                  key={dia}
                  onClick={() => handleDiaClick(dia)}
                  className={`diaH ${
                    diasSelecionados[dia] ? "verdeH" : "vermelhoH"
                  }`}
                >
                  {dia}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="selecHorH">
          {/* Botão de escolha única */}
          <button className="botaoUnicoH" onClick={toggleSingleMenu}>
            {selectedSingleOption}
          </button>
          
          {/* Menu de escolha única */}
          {isSingleMenuOpen && (
            <ul className="opcoesUnicasH">
              {["Flexível", "Rápido", "Especializado"].map((option) => (
                <li key={option} onClick={() => handleSingleOptionClick(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="buttonHdivH">
          <button className="buttonH" type="submit" onClick={handleSubmit}>
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConcluirCadastro;