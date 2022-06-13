import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Importação do BD
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';

//Autenticação
import AuthContext from './auth';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <AuthContext>
      <App />
    </AuthContext>
  </ApolloProvider>
);
