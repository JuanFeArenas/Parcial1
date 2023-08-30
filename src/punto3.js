import React, { useState } from 'react';

const Mensaje = () => {
  const [Nombre, setNombre] = useState('');
  const [Hora, setHora] = useState('');
  const [Saludo, setSaludo] = useState('');

  const CambiarNombre = (event) => {
    setNombre(event.target.value);
  };

  const CambiarHora = (event) => {
    setHora(event.target.value);
  };

  const GenerarMensaje = () => {
    const Horas = parseInt(Hora);

    if (Horas >= 0 && Horas < 12) {
        setSaludo(`Buenos días, ${Nombre}`);
    } else if (Horas >= 12 && Horas < 18) {
        setSaludo(`Buenas tardes, ${Nombre}`);
    } else {
        setSaludo(`Buenas noches, ${Nombre}`);
    }

    console.log(Saludo);
  };

  return (
    <div align="center">
      <h2>Punto 3</h2>
      <div>
        <p>Ingresa tu nombre: </p>
        <input type="text" value={Nombre} onChange={CambiarNombre} />
      </div>
      <div>
        <p>Ingresa la hora:</p>
        <p>desde 0 a 23</p>
        <input type="number" value={Hora} onChange={CambiarHora} />
      </div>
      <button onClick={GenerarMensaje}>Saludo</button>
      <p>El resultado se mostrara en la consola del navegador</p>

    </div>
  );
};

export default Mensaje;