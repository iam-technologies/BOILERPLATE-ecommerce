import _get from 'lodash/get';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

import { imgServices } from '../../../serverServices';
import { urlUtils } from '../../../utils';

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.getGrid = this.getGrid.bind(this);
  }

  getGrid(items) {
    return items.map((item, index) => {
      const color = _get(item, 'color', '#B6CFD4');
      const imgUrl = _get(item, 'imgUrl', '');
      const text = _get(item, 'text.es', '');
      const target = _get(item, 'link.target', false);
      const url = _get(item, 'link.url', '#');

      const link = target ? url : urlUtils.urlToPathLink(url);

      const background = imgUrl ? `url(${imgServices.getUrl(imgUrl)})` : color;

      if (target) {
        return (
          <a
            key={item.id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="categories_link"
            style={{ background }}
          >
            <p>{text}</p>
          </a>
        );
      }

      return (
        <Link
          key={item.id}
          to={link}
        >
          <a
            className="categories_link"
            style={{ background }}
          >
            <p>{text}</p>
          </a>
        </Link>
      );
    });
  }

  render() {
    const { items } = this.props;

    if (items.length < 1) return null;

    const grid = this.getGrid(items);

    return (
      <div className={`home_categories home_categories_${items.length}`}>
        { grid }
      </div>
    );
  }
}
