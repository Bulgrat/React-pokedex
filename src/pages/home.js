import React from "react";
import Listar from "./lista";
import { pkmReducer } from "../reducer";
import MeusPoke from "./meusPoke";

export const PkmConstext = React.createContext({
  pokemon: {
    pokemon: 'Bulba',
    poke_id: '1',
  },
});

export default function Home() {

  const [currentPkm, pkmDispatch] = React.useReducer(pkmReducer, []);

  return (
    <>
      <Listar lista={{ pkmDispatch }}></Listar>
      <MeusPoke lista={{ currentPkm, pkmDispatch }}></MeusPoke>
    </>
  );
}
