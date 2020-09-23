import { gql } from '@apollo/client';

export const GET_LIKED_PHOTOS = gql`
  query getLikedPhotos {
    getLikedPhotos {
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
