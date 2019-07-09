import React, { Fragment } from 'react';
import _get from 'lodash/get';

// import ProductList from '../product/ProductList';
import Carousel from './Carousel';
import { Instagram } from '../common';
import Grid from './Grid';
import PriceSlider from './PriceSlider';

const Home = ({ content, selection, showHome, imgUrl = '', screen }) => {
  console.log('helloooo');

  return (
    <section className={`app-home animation_opacity${showHome ? '-remove' : ''}`}>
      <h1>this is the home page</h1>
      {/* <MobileHeader home logo /> */}
      {(screen !== 'xs') && <Carousel items={_get(content, 'slider', [])} />}
      {(screen === 'xs')
        && <div className="app-home_hero" style={{ backgroundImage: `url(${imgUrl})` }} />
      }
      <PriceSlider />
      <Grid items={_get(content, 'grid', [])} />
      {screen !== 'xs' && (
      <Fragment>
        {/* <ProductList
          title={_get(selection, 'desc.es', '')}
          items={_get(selection, 'products', [])}
        /> */}

        <Instagram />
        <div className="app-home-info app-home-more_info">
          <div
            dangerouslySetInnerHTML={{ __html: _get(content, 'seoHeading.es', '') }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: _get(content, 'seoText.es', '') }}
          />
        </div>
      </Fragment>
      )}
    </section>
  );
};

export default Home;
