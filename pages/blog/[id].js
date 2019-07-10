import React from 'react';

const postPage = ({ id }) => console.log('id: ', id) || (
  <div>
    <h1>this is post num {id}</h1>
  </div>
);

postPage.getInitialProps = async ({ query }) => query;

export default postPage;
