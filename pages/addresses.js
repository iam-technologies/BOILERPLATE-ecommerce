import React from 'react';

const address = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

address.getInitialProps = async () => {
  console.log('address page: ');
};

export default address;
