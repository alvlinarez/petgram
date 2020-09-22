import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PHOTOS_BY_CATEGORY } from '../../apollo/queries/getPhotosByCategory';
import Error from '../../components/Error';
import { AuthContext } from '../../context/auth/AuthContext';
import { assignUserLike } from '../../utils/assignUserLike';
import ListOfCategories from '../../components/category/ListOfCategories';
import { PhotoLoader } from '../../components/loaders';
import PhotoCard from '../../components/photo/PhotoCard';
import { ListPhotos } from '../../styles/components/photo/ListOfPhotos';

const Pet = () => {
  const router = useRouter();
  // Getting category id from params
  const {
    query: { id }
  } = router;

  // Get user info
  const authContext = useContext(AuthContext);
  const { authenticated, user } = authContext;

  // Query to get photosByCategory
  const { data, loading, error } = useQuery(GET_PHOTOS_BY_CATEGORY, {
    variables: {
      id
    }
  });

  let photos = {};
  if (!loading && data) {
    photos = data.getPhotosByCategory;
    if (authenticated) {
      if (authenticated) {
        photos = assignUserLike(photos, user);
      }
    }
  }

  if (error) {
    return <Error />;
  }

  return (
    <Layout>
      <ListOfCategories />

      <ListPhotos>
        {loading
          ? [1, 2, 3].map((id) => <PhotoLoader key={id} />)
          : photos.map((photo) => {
              return <PhotoCard key={photo.id} {...photo} />;
            })}
      </ListPhotos>
    </Layout>
  );
};

export default Pet;
