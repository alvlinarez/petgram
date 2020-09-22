import React from 'react';
import { LoaderRoller } from '../../styles/components/loaders';
import ContentLoader from 'react-content-loader';

export const CategoryLoader = () => (
  <LoaderRoller>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </LoaderRoller>
);

export const PhotoLoader = () => (
  <ContentLoader
    speed={2}
    width={500}
    height={500}
    viewBox="0 0 500 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="2" ry="2" width="500" height="275" />
    <rect x="40" y="290" rx="2" ry="2" width="140" height="10" />
    <circle cx="20" cy="300" r="15" />
  </ContentLoader>
);

export const ImageGrid = () => (
  <ContentLoader
    speed={2}
    width={500}
    height={500}
    viewBox="0 0 500 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="30" rx="2" ry="2" width="150" height="150" />
    <rect x="170" y="30" rx="2" ry="2" width="150" height="150" />
    <rect x="330" y="30" rx="2" ry="2" width="150" height="150" />
    <rect x="10" y="200" rx="2" ry="2" width="150" height="150" />
    <rect x="170" y="200" rx="2" ry="2" width="150" height="150" />
    <rect x="330" y="200" rx="2" ry="2" width="150" height="150" />
  </ContentLoader>
);
