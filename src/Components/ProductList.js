import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      items {
        id
        name
        description
        featuredAsset{
            preview
          }
      }
    }
  }
`;

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {data.products.items.map((product) => (
          <div key={product.id} className="product">
     <img src={product.featuredAsset.preview} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
