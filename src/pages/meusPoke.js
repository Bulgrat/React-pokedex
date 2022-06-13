import React from "react";

export default function MeusPoke({ lista }) {

  function handleRemoveQueue() {
    lista.pkmDispatch({ type: 'REMOVE_POKE' });
  }

  return (
    <div style={{ textAlign: "center", margin: 100 }}>
      <h1>Meus pokemons</h1>

      {lista.currentPkm.map((pokem, index) => {
        return (
          <label key={index}>
            [ {pokem.name} ]
          </label>
        )
      })}
      <p>
        <button onClick={handleRemoveQueue}>Limpar</button>
      </p>
    </div>
  );
}
