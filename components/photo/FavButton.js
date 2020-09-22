import React from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Button } from '../../styles/components/photo/FavButton';
import { useMutation } from '@apollo/client';
import { LIKE_PHOTO } from '../../apollo/mutations/likePhoto';
import { GET_PHOTOS } from '../../apollo/queries/getPhotos';
import { UNLIKE_PHOTO } from '../../apollo/mutations/unlikePhoto';

const FavButton = ({ liked, likes }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  // Mutation to like photo
  const [likePhoto] = useMutation(LIKE_PHOTO, {
    update(cache) {
      // Get a copy of cache object
      const { getPhotos } = cache.readQuery({
        query: GET_PHOTOS
      });
      // Overwrite cache
      cache.writeQuery({
        query: GET_PHOTOS,
        data: {
          getPhotos: getPhotos.map((photo) => photo.id === id && photo.likes++)
        }
      });
    }
  });

  // Mutation to unlike photo
  const [unlikePhoto] = useMutation(UNLIKE_PHOTO, {
    update(cache) {
      // Get a copy of cache object
      const { getPhotos } = cache.readQuery({
        query: GET_PHOTOS
      });
      // Overwrite cache
      cache.writeQuery({
        query: GET_PHOTOS,
        data: {
          getPhotos: getPhotos.map((photo) => photo.id === id && photo.likes--)
        }
      });
    }
  });

  const handleFavClick = () => {};

  return (
    <Button onClick={handleFavClick}>
      <Icon size="32px" /> {likes} likes
    </Button>
  );
};

export default FavButton;
