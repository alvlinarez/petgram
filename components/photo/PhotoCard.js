import React from 'react';
import {
  Article,
  Img,
  ImgWrapper
} from '../../styles/components/photo/PhotoCard';
import Link from 'next/link';
import FavButton from './FavButton';
import useNearScreen from '../../hooks/useNearScreen';

const DEFAULT_IMAGE =
  'https://aws-alg-drive.s3.amazonaws.com/petgram/photos/dog1.jpg';

const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  // Show the photocard while scrolling
  const [show, element] = useNearScreen();
  return (
    <Article ref={element}>
      {show && (
        <>
          <Link href={`/pet/${id}`}>
            <a>
              <ImgWrapper>
                <Img src={src} alt="Photo" />
              </ImgWrapper>
            </a>
          </Link>

          <FavButton id={id} liked={liked} likes={likes} />
        </>
      )}
    </Article>
  );
};

export default PhotoCard;
