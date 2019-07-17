import _ from 'lodash';
import Link from 'next/link';
// import Dialog from 'material-ui/Dialog';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { urlUtils, dataFormat, priceCalc } from '../../../../utils';
import { imgServices } from '../../../../serverServices';
import { ButtonInput } from '../../../common';


export default class ItemCart extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.onRemove = this.onRemove.bind(this);
    this.onClosePopup = props.onClosePopup.bind(this);
    this.onAddCart = this.onAddCart.bind(this);

    this.onClose = this.onClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }

  onOpen() {
    this.setState({ open: true });
  }

  onClose() {
    this.setState({ open: false });
  }

  onAddCart() {
    const { item, onAddCart } = this.props;

    onAddCart(item);
  }

  onRemove() {
    const { index, onRemove } = this.props;

    this.onClose();

    onRemove(index);
  }

  getConfig(item) {
    const configs = dataFormat.getTextConfigCart(item);
    const numItems = configs.length;

    if (numItems <= 0) return null;

    // if (numItems <= 2) {
    return configs.map(elem => (
      <p className="text" key={elem.key}>
        {elem.value}
      </p>
    ));
    // }

    // return <p className="text">Personalizado</p>;
  }


  render() {
    const { open } = this.state;
    const { item, index, removeBtns } = this.props;

    const configs = dataFormat.getTextConfigCart(item);
    const numItems = configs.length;
    const linkTo = urlUtils.linkToEditProduct(_.get(item, 'product', {}), index);
    const price = priceCalc.get(_.get(item, 'product', {}), _.get(item, 'config', {}));
    const itemConfig = this.getConfig(item);

    return (
      <div className="item_cart_ui">
        {
          open ? (
            <Dialog
              title={null}
              actions={null}
              modal={false}
              open={open}
              onRequestClose={this.onClose}
            >
              <div className="dialog_remove_item_cart">
                <p className="dialog_title">¿Está seguro de que desea eliminar el producto del carrito?</p>

                <div className="btn_dialog">
                  <ButtonInput
                    label="CANCELAR"
                    onClick={this.onClose}
                  />

                  <ButtonInput
                    label="ACEPTAR"
                    onClick={this.onRemove}
                  />
                </div>
              </div>
            </Dialog>
          ) : null
        }

        <Link
          className="left"
          style={{ backgroundImage: `url(${imgServices.getUrl(_.get(item, 'product.img.0', ''), 'mobile_2x')})` }}
          onClick={this.onClosePopup}
          to={linkTo}
        />
        <Link
          onClick={this.onClosePopup}
          href={linkTo}
          style={{ zIndex: 1000 - index }}
        >
          <a className="center">
            <p className="title">{_.get(item, 'product.name.es')}</p>
            {numItems > 0 && <div className="personalizacion" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>{ itemConfig }</div>}
            <div className="price">
              <p className="text-expand">{ numItems > 1 ? '...' : ''}</p>
              { dataFormat.formatCurrency(price) }
            </div>
          </a>
        </Link>

        <div className="right">
          {
            !removeBtns && (
              <button
                className="btn_plus"
                onClick={this.onAddCart}
                type="button"
              />
            )
          }
          {
            !removeBtns && (
              <button
                className="btn_remove"
                onClick={this.onOpen}
                type="button"
              />
            )
          }
        </div>
      </div>
    );
  }
}


ItemCart.propTypes = {
  onClosePopup: PropTypes.func,
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAddCart: PropTypes.func.isRequired
};

ItemCart.defaultProps = { onClosePopup: () => {} };
