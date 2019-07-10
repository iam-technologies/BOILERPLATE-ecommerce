import React from 'react';

const legal = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

legal.getInitialProps = async () => {
  console.log('legal page: ');
};

export default legal;
