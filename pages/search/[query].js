import React from 'react';

const search = () => (
  <div>
    <h1>this is QUERY page</h1>
  </div>
);

search.getInitialProps = async () => {
  console.log('search page: ');
};

export default search;
