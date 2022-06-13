import React from "react";
import { UserContext } from '../auth';

export default function MeusPoke({ lista }) {
  const { currentUser } = React.useContext(UserContext);

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
