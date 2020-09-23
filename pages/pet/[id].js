import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth/AuthContext';
import { useQuery } from '@apollo/client';
import Error from '../../components/Error';
import { GET_PHOTO } from '../../apollo/queries/getPhoto';
import { PhotoLoader } from '../../components/loaders';
import PhotoCard from '../../components/photo/PhotoCard';

const Pet = () => {
  const router = useRouter();
  const {
    query: { id }
  } = router;

  // Get user info
  const authContext = useContext(AuthContext);
  const { authenticated, user } = authContext;

  // Query to get photo
  const { data, loading, error } = useQuery(GET_PHOTO, {
    variables: {
      id
    }
  });

  let photo = {};
  if (!loading && data) {
    photo = data.getPhoto;
    if (authenticated) {
      if (authenticated) {
        photo = {
          ...photo,
          liked: !!photo.usersLiked.find(
            (userLiked) => userLiked.id === user.id
          )
        };
      }
    }
  }

  if (error) {
    return <Error />;
  }

  return (
    <Layout>{loading ? <PhotoLoader /> : <PhotoCard {...photo} />}</Layout>
  );
};

export default Pet;
