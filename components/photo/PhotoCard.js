import React from 'react';
import {
  Article,
  Img,
  ImgWrapper
} from '../../styles/components/photo/PhotoCard';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { LIKE_PHOTO } from '../../apollo/mutations/likePhoto';
import { GET_PHOTOS } from '../../apollo/queries/getPhotos';
import { UNLIKE_PHOTO } from '../../apollo/mutations/unlikePhoto';
import FavButton from './FavButton';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
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
    <Article>
      <>
        <Link href={encodeURIComponent(`/pet/${id}`)}>
          <a>
            <ImgWrapper>
              <Img src={src} alt="Photo" />
            </ImgWrapper>
          </a>
        </Link>

        <FavButton liked={true} likes={likes} onClick={handleFavClick} />
      </>
    </Article>
  );
};

export default PhotoCard;
