import React from 'react';
import _get from 'lodash/get';

import { api, getImageUrl } from '../serverServices';
import { Home, Layout } from '../components';
import { SEO } from '../components/common';

const DEFAULT_SEO = {
  title: `Canastillas y cestas regalo bebé | Regalos 
    personalizados recién nacidos - Cocholate Decoración S.L.`,
  desc: `Canastillas y cestas regalo personalizadas para bebé, 
    regalos para recién nacidos y para la familia, cesta gemelar, 
    cuadros nombre, detalles bordados,...y mucho más`,
  img: {}
};

const HomePage = (data) => {
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
      <Home data={data} />
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
