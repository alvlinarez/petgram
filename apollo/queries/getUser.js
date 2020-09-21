import gql from 'graphql-tag';

export const GET_USER = gql`
  query getUser {
    getUser {
      id
      name
      email
      favorites {
        id
        src
        likes
      }
    }
  }
`;
