import React from 'react';

const landing = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

landing.getInitialProps = async () => {
  console.log('landing page: ');
};

export default landing;
