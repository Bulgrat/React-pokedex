import React from "react";

export default class Poke extends React.Component {
  state = {
    loading: true,
    pokes: undefined,
  };
  render() {
    if (this.state.loading) return <h1>Carregando ...</h1>;

    const pokemon = this.state.pokes;
    console.log(pokemon.length);
    //const listarPokemon = pokemon.map((d) => <li key={d.name}>{d.name}</li>);

    return (
      <div className="container">
        <select>
          {pokemon.map(function (poke, idp) {
            return <option key={idp}>{poke.name}</option>;
          })}
        </select>
      </div>
    );
  }

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const response = await fetch(url);
    const data = await response.json();
    const pokes = data.results;
    //console.log(pokes[1].name)

    this.setState({
      loading: false,
      pokes: pokes,
    });
  }
}
