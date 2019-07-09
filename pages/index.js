import React from 'react';
import _get from 'lodash/get';

import { api, imgServices } from '../serverServices';
import { webpSupport } from '../utils/browser';
import { Home as HomeComp } from '../components';
import { SEO } from '../components/common';

import Layout from '../components/Layout';


const Home = ({ data }) => {
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
      <HomeComp data={data} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  api.contents.getByKey('home', async (error, res) => {
    let content = {};

    if (res) {
      content = res.data;
    }

    const imgUrl = await getImageUrl(content);

    api.selections.getByKey('home', (err, response) => {
      let selection = {};
      if (response) { selection = response.data; }
      const data = { content, selection, loaded: true, imgUrl };
      return { data };
    });
  });
};

export default HomeComp;


async function getImageUrl(content) {
  const img = _get(content, 'slider.0.imgUrl', '');
  const imgUrl = imgServices.getUrl(img);
  const imgPath = imgUrl.split('.');
  const imgFormat = imgPath.pop();

  const webpSup = await webpSupport();
  if (imgFormat === 'webp' && !webpSup) {
    return `${imgPath.join('.')}.jpg`;
  }
  return imgUrl;
}
