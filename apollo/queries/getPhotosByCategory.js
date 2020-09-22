import gql from 'graphql-tag';

export const GET_PHOTOS_BY_CATEGORY = gql`
  query getPhotosByCategory($id: ID!) {
    getPhotosByCategory(id: $id) {
      id
      category {
        id
        name
        emoji
        cover
      }
      src
      usersLiked {
        id
      }
      likes
    }
  }
`;
