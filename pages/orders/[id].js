import React from 'react';

const order = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

order.getInitialProps = async () => {
  console.log('order page: ');
};

export default order;
