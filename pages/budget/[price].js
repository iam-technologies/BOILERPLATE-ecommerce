import React from 'react';

<<<<<<< HEAD
import { Layout, SearchByBudget } from '../../components';

const searchByBudget = ({ price }) => (
  <Layout>
    <h1>this the budget page: {price}</h1>
    <SearchByBudget price={price} />
  </Layout>
=======
const searchByBudget = () => (
  <div>
    <h1>this is PRICE page</h1>
  </div>
>>>>>>> 04765b9aec78f2498c6c2d4859898735a9a1bf93
);

searchByBudget.getInitialProps = async ({ query }) => {
  const { price } = query;

  return { price };
};

export default searchByBudget;
