import React, { useState, useEffect } from "react";

export default function Listar({ lista }) {
  const [list, setList] = useState([]);

  async function fetchList() {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((response) => {
        setList(response.results);
      });
  }

  useEffect(() => {
    fetchList();
  }, []);

  function PokemonBtn({ pokemon, idp }) {
    const name = pokemon.name;

    function handleAddQueue() {
      lista.pkmDispatch({ type: "ADD_POKE", payload: { pokemon } });
    }

    return (
      <button onClick={handleAddQueue}>{name}</button>
    );
  }

  return (
    <div style={{ textAlign: "center", margin: 5 }}>
      {list.map((pokemon, idp) => {
        return (
          <>
            <PokemonBtn key={idp} pokemon={pokemon} />
          </>
        );
      })}
    </div>
  );
}
