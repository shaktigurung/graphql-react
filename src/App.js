import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Products from './components/Products';

const client = new ApolloClient({
  uri: "https://fakerql.com/graphql"
});

const App = () => {
  return (
      <ApolloProvider client = {client}>
        <div className="container">
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">React and GraphQL - Application</a>
          </nav>
          <div>
          <Products />
        </div>
    </div>
      </ApolloProvider>
  );
}

export default App;
