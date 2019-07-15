import _get from 'lodash/get';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';

import { imgServices } from '../../../serverServices';
import { urlUtils } from '../../../utils';

export default class Carousel extends Component {
  getSlide(elem) {
    const imgUrl = _get(elem, 'imgUrl', '');
    const btnText = _get(elem, 'btnText.es', '');
    const linkUrl = _get(elem, 'linkUrl', '');

    const link = linkUrl ? urlUtils.urlToPathLink(linkUrl) : '';

    if (!imgUrl) return null;
    const imgPath = imgUrl.split('.');
    const imgFormat = imgPath.pop();
    const imgFallback = `${imgPath.join('.')}.jpg`;

    return (
      <div className="carousel_home">
        <picture>
          {imgFormat == 'webp' && <source srcSet={imgServices.getUrl(imgUrl)} type="image/webp" />}
          <img src={imgServices.getUrl(imgFallback)} alt={imgUrl} />
        </picture>
        {
          (link && btnText)
          && (
          <Link
            to={link}
          >
            <a className="carousel_btn">
              {btnText}
            </a>
          </Link>
          )
        }
      </div>
    );
  }

  render() {
    const { items } = this.props;

    if (items.length < 1) return null;

    const images = items.map(elem => ({ renderItem: this.getSlide.bind(this, elem) }));

    return (
      <ImageGallery
        autoPlay
        disableArrowKeys
        items={images}
        showFullscreenButton={false}
        showNav={false}
        showPlayButton={false}
        showThumbnails={false}
        slideDuration={1200}
        slideInterval={6000}
        useTranslate3D={false}
      />
    );
  }
}
