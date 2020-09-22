import gql from 'graphql-tag';

export const GET_PHOTO = gql`
  query getPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      category {
        id
        name
        emoji
        cover
      }
      src
      likes
      usersLiked {
        id
      }
    }
  }
`;
