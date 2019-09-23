import React from 'react';
import { graphql } from 'gatsby';

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
query postBlog($id: ID!){
    rickAndMorty {
      character(id: $id) {
        id
        name
      }
    }
}
`;

const PostTemplate = ({
  data: {
    rickAndMorty: { character },
  },
}) => {

    return (

          <div>
              <h3>{character.id}</h3>
              <div>{character.name}</div>
          </div>
        )
}

export default PostTemplate;
