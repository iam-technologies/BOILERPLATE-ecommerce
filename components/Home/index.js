import React, { Fragment, useEffect, useState } from 'react';
import _get from 'lodash/get';

import ProductList from '../product/ProductList';
// import { api, getImageUrl } from '../../serverServices';
import Carousel from './Carousel';
import { MobileHeader, Instagram } from '../common';
import Grid from './Grid';
import PriceSlider from './PriceSlider';

const Home = ({ content, selection, imgUrl = '', loaded, screen = 'm' }) => {
  const [show, setshow] = useState(false);

  useEffect(() => {
    setshow(loaded);
  }, [loaded]);

  const carouselItems = _get(content, 'slider', []);
  const grid = _get(content, 'grid', []);
  const desc = _get(selection, 'desc.es', '');
  const products = _get(selection, 'products', []);
  const seoHeading = _get(content, 'seoHeading.es', '');
  const seoText = _get(content, 'seoText.es', '');

  return (
    <section className={`app-home animation_opacity${show ? '-remove' : ''}`}>
      <MobileHeader home logo />
      {(screen === 'xs')
        ? <div className="app-home_hero" style={{ backgroundImage: `url(${imgUrl})` }} />
        : <Carousel items={carouselItems} />}
      <PriceSlider />
      <Grid items={grid} />
      {screen !== 'xs' && (
        <Fragment>
          <ProductList title={desc} items={products} />
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

// class Home extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { showHome: false };
//   }

//   componentDidUpdate(prevProps) {
//     const { loaded } = this.props;
//     if (prevProps.loaded !== loaded) {
//       this.setState({ showHome: true });
//     }
//   }

//   render() {
//     const { showHome } = this.state;
//     const { screen, content, selection, imgUrl = '' } = this.props;

//     return (
//       <section className={`app-home animation_opacity${showHome ? '-remove' : ''}`}>
//         <MobileHeader home logo />

//         {
//           (screen !== 'xs')
//           && <Carousel items={_get(content, 'slider', [])} />
//         }

//         {
//           (screen === 'xs')
//           && <div className="app-home_hero" style={{ backgroundImage: `url(${imgUrl})` }} />
//         }

//         <PriceSlider />

//         <Grid items={_get(content, 'grid', [])} />

//         {
//           screen !== 'xs' && (
//             <Fragment>
//               {/* <ProductList
//                 title={_get(selection, 'desc.es', '')}
//                 items={_get(selection, 'products', [])}
//               /> */}

//               <Instagram />
//               <div className="app-home-info app-home-more_info">
//                 <div
//                   dangerouslySetInnerHTML={{ __html: _get(content, 'seoHeading.es', '') }}
//                 />
//                 <div
//                   dangerouslySetInnerHTML={{ __html: _get(content, 'seoText.es', '') }}
//                 />
//               </div>
//             </Fragment>
//           )
//         }

//       </section>
//     );
//   }
// }

export default Home;
