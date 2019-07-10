import React, { Fragment, useEffect } from 'react';
import _get from 'lodash/get';

// import ProductList from '../product/ProductList';
import { api, getImageUrl } from '../../serverServices';
import Carousel from './Carousel';
import { MobileHeader, Instagram } from '../common';
import Grid from './Grid';
import PriceSlider from './PriceSlider';

const Home = ({ content, selection, imgUrl = '', showHome, screen }) => {
  useEffect(() => {
    api.contents.getByKey('home', async (error, res) => {
      console.log('res: ', res);
      let contenido = {};

      if (res) {
        contenido = res.data;
      }

      const _imgUrl = await getImageUrl(contenido);

      api.selections.getByKey('home', (err, response) => {
        let selecction = {};
        if (response) { selecction = response.data; }
        const data = { contenido, selecction, loaded: true, _imgUrl };
        return { data };
      });
    });
  }, []);

  const carouselItems = _get(content, 'slider', []);
  const grid = _get(content, 'grid', []);
  const desc = _get(selection, 'desc.es', '');
  const products = _get(selection, 'products', []);
  const seoHeading = _get(content, 'seoHeading.es', '');
  const seoText = _get(content, 'seoText.es', '');

  return (
    <section className={`app-home animation_opacity${showHome ? '-remove' : ''}`}>
      <h1>this is the home page</h1>
      <MobileHeader home logo />
      {(screen === 'xs')
        ? <div className="app-home_hero" style={{ backgroundImage: `url(${imgUrl})` }} />
        : <Carousel items={carouselItems} />}
      <PriceSlider />
      <Grid items={grid} />
      {screen !== 'xs' && (
        <Fragment>
          {/* <ProductList title={desc} items={products} /> */}
          <Instagram />
          <div className="app-home-info app-home-more_info">
            <div dangerouslySetInnerHTML={{ __html: seoHeading }} />
            <div dangerouslySetInnerHTML={{ __html: seoText }} />
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default Home;
