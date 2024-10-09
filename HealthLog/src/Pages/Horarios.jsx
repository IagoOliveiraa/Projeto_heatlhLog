import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HorariosPage = () => {
  const { diaId } = useParams();
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const fetchHorarios = async () => {
      const response = await fetch(`/horarios/${diaId}`);
      const data = await response.json();
      setHorarios(data);
    };

    fetchHorarios();
  }, [diaId]);

  return (
    <div>
      <h1>Horários Disponíveis</h1>
      <ul>
        {horarios.map((horario) => (
          <li key={horario.id}>
            {horario.horario} - {horario.disponivel ? 'Disponível' : 'Indisponível'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HorariosPage;
