import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Importação do BD
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';

//Autenticação
import AuthContext from './auth';

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthContext>
      <App />
    </AuthContext>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
