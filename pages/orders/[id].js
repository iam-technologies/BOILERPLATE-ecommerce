import React from 'react';

const order = () => (
  <div>
    <h1>this is ID page</h1>
  </div>
);

order.getInitialProps = async () => {
  console.log('order page: ');
};

export default order;
