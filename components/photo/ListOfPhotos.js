import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PHOTOS } from '../../apollo/queries/getPhotos';
import Error from '../Error';
import { PhotoLoader } from '../loaders';
import PhotoCard from './PhotoCard';
import { AuthContext } from '../../context/auth/AuthContext';
import { assignUserLike } from '../../utils/assignUserLike';
import { ListPhotos } from '../../styles/components/photo/ListOfPhotos';

const ListOfPhotos = () => {
  // Apollo query
  const { data, loading, error } = useQuery(GET_PHOTOS);

  // Get favorites from user
  const authContext = useContext(AuthContext);
  const { authenticated, user } = authContext;

  let photos = [];
  if (!loading && data) {
    photos = data.getPhotos;
    // Assign likes to photos
    if (authenticated) {
      photos = assignUserLike(photos, user);
    }
  }

  if (error) {
    return <Error />;
  }

  return (
    <ListPhotos>
      {loading
        ? [1, 2, 3].map((id) => <PhotoLoader key={id} />)
        : photos.map((photo) => {
            return <PhotoCard key={photo.id} {...photo} />;
          })}
    </ListPhotos>
  );
};

export default ListOfPhotos;
