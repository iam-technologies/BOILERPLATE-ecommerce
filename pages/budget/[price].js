import React from 'react';

import { Layout, SearchByBudget } from '../../components';

const searchByBudget = ({ price }) => (
  <Layout>
    <h1>this the budget page: {price}</h1>
    <SearchByBudget price={price} />
  </Layout>
);

searchByBudget.getInitialProps = async ({ query }) => {
  const { price } = query;

  return { price };
};

export default searchByBudget;
