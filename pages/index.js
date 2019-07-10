import React, { Fragment } from 'react';
import _get from 'lodash/get';

import { api, getImageUrl } from '../serverServices';

import { Home } from '../components';
import Footer from '../components/Footer';

import { SEO } from '../components/common';

const DEFAULT_SEO = {
  title: 'Canastillas y cestas regalo bebé | Regalos personalizados recién nacidos - Cocholate Decoración S.L.',
  desc: 'Canastillas y cestas regalo personalizadas para bebé, regalos para recién nacidos y para la familia, cesta gemelar, cuadros nombre, detalles bordados,...y mucho más',
  img: {}
};

<<<<<<< HEAD
const Home = ({ data }) => {
  console.log('data: ', data);
=======
const HomePage = ({ data }) => {
>>>>>>> 88e256131c9094dfcc12d1ba1549ece8025f06da
  const title = _get(data, 'content.seoTitle.es', DEFAULT_SEO.title);
  const desc = _get(data, 'content.seoDesc.es', DEFAULT_SEO.desc);
  const attachment = _get(data, 'content.seoImg.attachment', DEFAULT_SEO.img);

  return (
    <Fragment>
      <SEO
        title={title}
        description={desc}
        image={attachment}
      />
      <Home data={data} />
      <Footer />
    </Fragment>

  );
};

HomePage.getInitialProps = async () => {
  api.contents.getByKey('home', async (error, res) => {
    console.log('res: ', res);
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

export default HomePage;
