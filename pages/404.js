import React from 'react';

const page404 = () => (
  <div>
    <h1>404 NOT FOUND</h1>
  </div>
);

page404.getInitialProps = async () => {
  console.log('page404 page: ');
};

export default page404;
