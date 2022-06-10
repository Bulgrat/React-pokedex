import React from "react";
import Layout from "../Layouts/layout";
import { UserContext } from '../auth';

export default function MeusPoke() {
  const { currentUser } = React.useContext(UserContext);

  return (
    <Layout>
      <h1>Meus pokemons</h1>
    </Layout>
  );
}
