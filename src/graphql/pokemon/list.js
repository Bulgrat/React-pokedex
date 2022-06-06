import { gql } from "@apollo/client";

export const ADD_USER = gql`
  query MyQuery {
    lista_pokemon(
      where: { user_id: { _eq: "e23ee0e7-fc46-48dd-8c73-85815c581a84" } }
    ) {
      poke_id
      pokemon
      user_id
    }
  }
`;

// arrumar o nome da query