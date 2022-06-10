import React from "react";
import { UserContext } from '../auth';
import Layout from "../layouts/layouts";

export default function MeusPoke() {
  const { currentUser } = React.useContext(UserContext);

  return (
    <Layout>
      <h1>Meus pokemons</h1>
      <p>aaaa</p>
    </Layout>
  );
}
