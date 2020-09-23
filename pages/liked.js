import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import { AuthContext } from '../context/auth/AuthContext';
import { useQuery } from '@apollo/client';
import Error from '../components/Error';
import { GET_LIKED_PHOTOS } from '../apollo/queries/getLikedPhotos';
import { ImageGrid } from '../components/loaders';
import { Grid, LinkPhoto, Image } from '../styles/pages/liked';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Liked = () => {
  const router = useRouter();
  // Get user info
  const authContext = useContext(AuthContext);
  const { authenticated } = authContext;

  // Query to get photosByCategory
  const { data, loading, error } = useQuery(GET_LIKED_PHOTOS);

  let photos = [];
  if (!loading && data) {
    photos = data.getLikedPhotos;
  }

  if (!authenticated) {
    router.push('/signin');
  }

  if (error) {
    return <Error />;
  }
  return (
    <Layout
      title="Your liked ones"
      subtitle="You can find your liked photos here!"
    >
      {loading ? (
        <ImageGrid />
      ) : photos.length === 0 ? (
        <p>No liked photos yet</p>
      ) : (
        <Grid>
          {photos.map((photo) => (
            <Link href={`/pet/${photo.id}`} key={photo.id}>
              <LinkPhoto>
                <Image key={photo.id} src={photo.src} />
              </LinkPhoto>
            </Link>
          ))}
        </Grid>
      )}
    </Layout>
  );
};

export default Liked;
