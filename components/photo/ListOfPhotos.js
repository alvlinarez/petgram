import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PHOTOS } from '../../apollo/queries/getPhotos';
import Error from '../Error';
import { PhotoLoader } from '../loaders';
import PhotoCard from './PhotoCard';
import { AuthContext } from '../../context/auth/AuthContext';

const ListOfPhotos = () => {
  // Apollo query
  const { data, loading, error } = useQuery(GET_PHOTOS);

  // Get favorites from user
  const authContext = useContext(AuthContext);
  const { authenticated, user } = authContext;

  // If user already liked the photo
  let liked = false;

  let photos = [];
  if (!loading && data) {
    photos = data.getPhotos;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ul>
      {loading
        ? [1, 2, 3].map((id) => <PhotoLoader key={id} />)
        : photos.map((photo) => {
            if (authenticated && user.favorites) {
            }
            return <PhotoCard key={photo.id} {...photo} />;
          })}
    </ul>
  );
};

export default ListOfPhotos;
