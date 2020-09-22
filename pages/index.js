import React from 'react';
import Layout from '../components/layout/Layout';
import ListOfCategories from '../components/category/ListOfCategories';

export default function Home() {
  return (
    <Layout>
      <ListOfCategories />
    </Layout>
  );
}
