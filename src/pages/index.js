import React from 'react';
import { graphql } from 'gatsby';
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`;

export default ({
  data: {
    rickAndMorty: { character },
  },
}) => {

  return (
    <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
      <h1>{character.name} With His Friend Sara</h1>
      <p>
        Rick & Morty API data loads at build time. Sara Vieira’s meme API loads
        at runtime.
      </p>
      <div>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: 300 }}
        />

      </div>
    </div>
  );
};
