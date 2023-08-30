import React, { useState } from 'react';

const Convertidor = () => {
  const [IniciarSegundos, setIniciarSegundos] = useState(0);
  const [Horas, setHoras] = useState(0);
  const [Minutos, setMinutos] = useState(0);
  const [Segundos, setSegundos] = useState(0);

  const convertTime = () => {
    const TotalSegundos = parseInt(IniciarSegundos);
    const Horas = Math.floor(TotalSegundos / 3600);
    const Minutos = Math.floor((TotalSegundos % 3600) / 60);
    const Segundos = TotalSegundos % 60;

    setHoras(Horas);
    setMinutos(Minutos);
    setSegundos(Segundos);

    console.log(`Horas: ${Horas}, Minutos: ${Minutos}, Segundos: ${Segundos}`);
  };

  return (
    <div align="center">
      <h2>Punto 1</h2>
      <div>
        <p>Ingresa los segundos:</p>
        <input
          type="number"
          value={IniciarSegundos}
          onChange={(event) => setIniciarSegundos(event.target.value)}
        />
                <p>El resultado se mostrara en la consola del navegador</p>

      </div>
      <button onClick={convertTime}>Convertir</button>
    </div>
  );
};

export default Convertidor;