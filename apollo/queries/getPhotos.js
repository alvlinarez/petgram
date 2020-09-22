import { gql } from '@apollo/client';

export const GET_PHOTOS = gql`
  query getPhotos {
    getPhotos {
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
