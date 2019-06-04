import React from 'react';
import {Query } from 'react-apollo';
import gql from 'graphql-tag';
import Product from './Product';

const QUERY = gql `{
    products: allProducts(count: 25) {
      id
      name
      price
    }
  
    user: User(id: "wk0z1j1tzj7xc0116is3ckdrx") {
      id
      firstName
      lastName
      email
      avatar
    }
  }`;

const Products = () => {
    return (
        <Query 
            query={ QUERY}
        >
            {({loading, error, data})=> {
                if(loading) return <p> Loading...</p>;
                if (error) return <p> Error :( </p>;
                
                return data.allProducts.map((currentProduct) => (
                    <Product course = {currentProduct} />
                ));
            }}
        </Query>
    );
}

export default Products;