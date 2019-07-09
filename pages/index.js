import React from 'react';
import _get from 'lodash/get';

import { api } from '../serverServices';
import { Home } from '../components';
import { SEO } from '../components/common';

import Layout from '../components/Layout';


const index = ({ data }) => {
  const pageTitle = _get(data, 'title', '');
  const seoTitle = _get(data, 'SEO.title', '');
  const desc = _get(data, 'SEO.desc', '');
  const attachment = _get(data, 'SEO.img.attachment', {});
  return (
    <Layout>
      {/* <SEO
        title={seoTitle || pageTitle}
        description={desc || 'Home page'}
        image={attachment}
      /> */}
      <Home data={data} />
    </Layout>
  );
};

export default index;

index.getInitialProps = async () => {
  api.contents.getByKey('home', async (error, res) => {
    let content = {};
    if (res) { content = res.data; }
    const imgUrl = await this.getImageUrl(content);

    api.selections.getByKey('home', (err, response) => {
      let selection = {};
      if (response) { selection = response.data; }
      const data = { content, selection, loaded: true, imgUrl };
      return { data };
    });
  });
};
