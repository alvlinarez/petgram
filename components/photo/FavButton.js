import React, { useContext } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Button } from '../../styles/components/photo/FavButton';
import { useMutation } from '@apollo/client';
import { LIKE_PHOTO } from '../../apollo/mutations/likePhoto';
import { GET_PHOTOS } from '../../apollo/queries/getPhotos';
import { UNLIKE_PHOTO } from '../../apollo/mutations/unlikePhoto';
import { AuthContext } from '../../context/auth/AuthContext';
import { useRouter } from 'next/router';

const FavButton = ({ id, liked, likes }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  // Get user info
  const authContext = useContext(AuthContext);
  const { authenticated, user } = authContext;

  const router = useRouter();

  // Mutation to like photo
  const [likePhoto] = useMutation(LIKE_PHOTO);

  // Mutation to unlike photo
  const [unlikePhoto] = useMutation(UNLIKE_PHOTO);

  const handleFavClick = async () => {
    if (!authenticated) {
      router.push('/signin');
    } else {
      try {
        if (liked) {
          // Unlike photo
          const { data } = await unlikePhoto({
            variables: {
              id
            }
          });
          console.log(data);
        } else {
          // Like Photo
          const { data } = await likePhoto({
            variables: {
              id
            }
          });
          console.log(data);
        }
      } catch (e) {
        console.log(e);
        throw new Error(e.message.replace('GraphQL error: ', ''));
      }
    }
  };

  return (
    <Button onClick={handleFavClick}>
      <Icon size="32px" /> {likes} likes
    </Button>
  );
};

export default FavButton;
