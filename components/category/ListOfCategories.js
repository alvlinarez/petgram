import React, { useEffect, useState } from 'react';
import { Item, List } from '../../styles/components/category/ListOfCategories';
import { CategoryLoader } from '../loaders';
import Category from './Category';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../apollo/queries/getCategories';
import Error from '../Error';

const ListOfCategories = () => {
  // State to make the navbar fixed in the top of the screen
  const [showFixed, setShowFixed] = useState(false);

  // Apollo query
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  let categories = [];
  if (!loading && data) {
    categories = data.getCategories;
  }

  // Show categories fixed in navbar
  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);

    // componentWillUnmount
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4, 5, 6].map((loader) => <CategoryLoader key={loader} />)
        : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/category/${category.id}`} />
            </Item>
          ))}
    </List>
  );

  if (error) {
    return <Error />;
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategories;
