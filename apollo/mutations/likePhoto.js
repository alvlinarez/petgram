import gql from 'graphql-tag';

export const LIKE_PHOTO = gql`
  mutation likePhoto($id: ID!) {
    likePhoto(id: $id) {
      id
      category {
        id
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
