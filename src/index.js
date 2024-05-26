import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import App from './App';
import './index.css';


const client = new ApolloClient({
  uri: 'http://localhost:3000/shop-api',
  cache: new InMemoryCache(),
});




ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

