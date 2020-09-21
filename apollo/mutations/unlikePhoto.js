import gql from 'graphql-tag';

export const UNLIKE_PHOTO = gql`
  mutation unlikePhoto($id: ID!) {
    unlikePhoto(id: $id) {
      id
      category {
        id
        emoji
        cover
      }
      src
      user {
        id
        name
        email
        favorites {
          id
          src
          likes
        }
      }
      likes
    }
  }
`;
