// import _ from 'lodash';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

import React, { Component } from 'react';

import { api } from '../../serverServices';
import { withWindowResize } from '../hoc';
import { Rating } from '../common';
import MailChimpForm from './MailChimpForm';

const contactoFooter = (
  <div className="contact">
    <p className="app_footer-title">CONTACTO</p>
    <p>914 415 645 | 654 633 778 | 673 608 997 (WhatsApp)</p>
    <p className="direction">C/ Espronceda 27, 1ºC – 28003 Madrid</p>
    <p className="mail"><a href="mailto:pedidos@cocholate.es">pedidos@cocholate.es</a></p>

  </div>
);

const imgFooter = (
  <div className="app_footer-img">
    <img className="confianza-online" src="/images/confianza-online.svg" alt="Confianza online" />
    <div>
      <img className="paypal-white" src="/images/paypal-white.svg" alt="PayPal" />
      <img className="pago-seguro" src="/images/pago-seguro-ok.png" alt="Pago seguro" />
    </div>
  </div>
);

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avg: 0,
      total: 0,
      loading: true,
      legal: ''
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    api.ratings.avg((error, res) => {
      if (res) {
        const { total, avg } = res.data;

        this.setState({ avg, total, loading: false });
      }

      this.setState({ loading: false });
    });

    api.contents.getByKey('privacy-first', (error, res) => {
      if (res) {
        const legal = res.data;

        this.setState({ legal });
      }
    });
  }

  render() {
    const { avg, total, loading, legal } = this.state;
    const { screen } = this.props;

    return (
      <footer className="app_footer">
        <section className="flex_box">

          <div className="left">

            <div>
              <div className="logo">
                <Link to="/">
                  <img src="/images/logo.svg" alt="Cocholate" />
                </Link>
              </div>

              <div className="valuation">
                {
                  !loading && (
                    <Rating
                      readonly
                      medium
                      initialRating={avg}
                    />
                  )
                }
                <p>{total} valoraciones.</p>
              </div>
            </div>

            <p className="blog"><a href="https://blog.cocholate.es/" target="_blank" rel="noopener noreferrer">Visita nuestro blog</a></p>

            {
              screen !== 'xs' && contactoFooter
            }

            <div className="app_footer-social">
              <a href="https://www.facebook.com/Cocholate.es/" target="_blank" rel="noopener noreferrer"><span className="facebook" /></a>
              <a href="https://twitter.com/cocholateD" target="_blank" rel="noopener noreferrer"><span className="twitter" /></a>
              <a href="https://www.instagram.com/regalosbebecocholate/" target="_blank" rel="noopener noreferrer"><span className="instagram" /></a>
              <a href="https://www.pinterest.com/cocholated/" target="_blank" rel="noopener noreferrer"><span className="pinterest" /></a>
            </div>
          </div>

          <div className="right">

            <div className="app_footer-legal">
              <p className="app_footer-title">INFORMACIÓN DE COMPRA</p>
              <p>
                <Link to="/legal/refunds">
                  Envío y devoluciones
                </Link>
              </p>
              <p>
                <Link to="/legal/terms-and-conditions">
                  Términos y condiciones
                </Link>
              </p>
              <p>
                <Link to="/legal/cookies">
                  Política de Cookies
                </Link>
              </p>
            </div>

            <div className="app_footer-mailchimp">
              <MailChimpForm legal={legal} />
            </div>

            {
              screen !== 'xs' && imgFooter
            }

          </div>

          {
            screen === 'xs' && contactoFooter
          }

          {
            screen === 'xs' && imgFooter
          }

        </section>
      </footer>
    );
  }
}

export default withWindowResize(Footer);
