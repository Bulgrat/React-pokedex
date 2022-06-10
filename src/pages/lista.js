import React, { useState, useEffect } from "react";
import Layout from "../layouts/layouts";

export default function Listar() {
  const [list, setList] = useState([]);
  const [pokem, setPoke] = useState([]);

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

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <table>
          <thead>
            <tr>
              <th>Pokemons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {list.map(function (poke, idp) {
                  return (
                    <button onClick={() => setPoke(poke.name)} key={idp}>
                      {poke.name}
                    </button>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <p>{pokem}</p>
        {console.log(pokem)}
        {/*<button onClick={handlePokeAdd}>Confirmar</button>*/}
      </div>
    </Layout>
  );
}
