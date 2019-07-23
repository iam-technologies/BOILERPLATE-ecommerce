import React from 'react';
import _get from 'lodash/get';

import { api, getImageUrl } from '../serverServices';
import { Home, Layout } from '../components';
import { SEO } from '../components/common';

const HomePage = ({ content = {}, selection = {}, loaded = true, imgUrl = '' }) => {
  const title = _get(content, 'seoTitle.es', '');
  const desc = _get(content, 'seoDesc.es', '');
  const attachment = _get(content, 'seoImg.attachment', '');
  const pathname = '/';

  return (
    <Layout pathname={pathname}>
      <SEO
        title={title}
        description={desc}
        image={attachment}
        path={pathname}
      />
      <Home
        content={content}
        selection={selection}
        loaded={loaded}
        imgUrl={imgUrl}
      />
    </Layout>
  );
};

HomePage.getInitialProps = async () => {
  const content = await api.contents.getByKey('home', (err, res) => {
    return res ? res.data : null;
  });

  const imgUrl = await getImageUrl(content);

  const selection = await api.selections.getByKey('home', (err, res) => {
    return res ? res.data : null;
  });

  return { content, selection, loaded: true, imgUrl };
};

export default HomePage;
