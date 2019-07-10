import React from 'react';

const loginTo = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

loginTo.getInitialProps = async () => {
  console.log('loginTo page: ');
};

export default loginTo;
