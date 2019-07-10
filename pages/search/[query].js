import React from 'react';

const search = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

search.getInitialProps = async () => {
  console.log('search page: ');
};

export default search;
