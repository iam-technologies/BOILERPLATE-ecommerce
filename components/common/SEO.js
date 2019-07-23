import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const defaultSeo = {
  siteName: 'Cocholate',
  title: `Canastillas y cestas regalo bebé | Regalos 
    personalizados recién nacidos - Cocholate Decoración S.L.`,
  desc: `Canastillas y cestas regalo personalizadas para bebé, 
    regalos para recién nacidos y para la familia, cesta gemelar, 
    cuadros nombre, detalles bordados,...y mucho más`,
  img: '',
  content: '',
  type: 'website',
  rootUrl: 'www.cocholate.es',
  path: '/'
};

const SEO = (props) => {
  const {
    title = defaultSeo.title,
    description = defaultSeo.desc,
    image = defaultSeo.img,
    path = defaultSeo.path
  } = props;

  const url = defaultSeo.rootUrl + path;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title}</title>
      <meta name="description" content={description} />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={defaultSeo.siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={defaultSeo.type} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />

    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default SEO;
