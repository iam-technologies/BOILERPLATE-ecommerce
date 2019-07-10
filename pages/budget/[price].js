import React from 'react';

const searchByBudget = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

searchByBudget.getInitialProps = async () => {
  console.log('searchByBudget page: ');
};

export default searchByBudget;
