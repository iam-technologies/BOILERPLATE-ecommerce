import React from 'react';

const page404 = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

page404.getInitialProps = async () => {
  console.log('page404 page: ');
};

export default page404;
