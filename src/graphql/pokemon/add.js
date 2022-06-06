import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation MyMutation {
    insert_lista_pokemon(
      objects: {
        user_id: "e23ee0e7-fc46-48dd-8c73-85815c581a84"
        pokemon: "bulba"
        poke_id: "1"
      }
    ) {
      affected_rows
    }
  }
`;
// arrumar o nome da query
