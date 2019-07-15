import React from 'react';

const favourites = () => (
  <div>
    <h1>this is PRICE page</h1>
  </div>
);

favourites.getInitialProps = async () => {
  console.log('favourites page: ');
};

export default favourites;
