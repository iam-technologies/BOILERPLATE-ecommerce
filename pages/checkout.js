import React from 'react';

const checkout = () => (
  <div>
    <h1>this is Checkout page</h1>
  </div>
);

checkout.getInitialProps = async () => {
  console.log('checkout page: ');
};

export default checkout;
