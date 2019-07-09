import React from 'react';
import _get from 'lodash/get';

import { api, getImageUrl } from '../serverServices';

import { Home as HomeComp } from '../components';
import { SEO } from '../components/common';

import Layout from '../components/Layout';

const DEFAULT_SEO = {
  title: 'Canastillas y cestas regalo bebé | Regalos personalizados recién nacidos - Cocholate Decoración S.L.',
  desc: 'Canastillas y cestas regalo personalizadas para bebé, regalos para recién nacidos y para la familia, cesta gemelar, cuadros nombre, detalles bordados,...y mucho más',
  img: {}
};

const Home = ({ data }) => {
  const title = _get(data, 'content.seoTitle.es', DEFAULT_SEO.title);
  const desc = _get(data, 'content.seoDesc.es', DEFAULT_SEO.desc);
  const attachment = _get(data, 'content.seoImg.attachment', DEFAULT_SEO.img);

  return (
    <Layout>
      <SEO
        title={title}
        description={desc}
        image={attachment}
      />
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
