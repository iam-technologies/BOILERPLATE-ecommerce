import React from 'react';

const compareProducts = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

compareProducts.getInitialProps = async () => {
  console.log('compareProducts page: ');
};

export default compareProducts;
