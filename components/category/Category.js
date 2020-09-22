import React from 'react';
import Link from 'next/link';
import { Image, LinkCategory } from '../../styles/components/category/Category';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?', name }) => {
  return (
    <Link href={path}>
      <LinkCategory>
        <Image src={cover} alt={name} />
        {emoji}
      </LinkCategory>
    </Link>
  );
};

export default Category;
