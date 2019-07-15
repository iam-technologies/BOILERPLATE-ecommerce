import React from 'react';

import { Search, Layout } from '../../components';

const search = () => (
  <Layout>
    <h1>this is a page</h1>
    <Search />
  </Layout>
);

search.getInitialProps = async () => {
  console.log('search page: ');
};

export default search;
