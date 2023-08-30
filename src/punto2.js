import React, { useState } from 'react';

const CalcularCosto=()=>{

  const [Llamada, setLlamada] = useState(0);

  const CalcularCostoTotal = () => {

    let CostoTotal = 0;

    if(Llamada <= 3){

        CostoTotal = 100;
    }else{
        CostoTotal = 100 + 50 * (Llamada - 3);
    }

    console.log(`Total Cost: ${CostoTotal} pesos`);

  };

  return(

    <div align="center">
      <h2>Punto 2</h2>
      <div>
        <p>Duracion de la llamda: </p>
        <input
          type="number"
          value={Llamada}
          onChange={(event) => setLlamada(parseInt(event.target.value))}
        />
      </div>
      <button onClick={CalcularCostoTotal}>Calculate Cost</button>
      <p>El resultado se mostrara en la consola del navegador</p>

    </div>
    );
};
export default CalcularCosto;

