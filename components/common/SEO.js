// import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const defaults = {
  description: '',
  image: 'https://s3.eu-west-3.amazonaws.com/test-flaix/public/original/logo.png',
  url: 'boilerplate.com'
};

const SEO = (props) => {
  const { description = '', image = '' } = props;
  const { title = '' } = props;
  //   title = title ? `${title} - Flaix FM` : 'Flaix FM';
  let url = '';
  if (typeof window === 'object') url = window.location.href;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title || title}</title>
      <meta name="description" content={description || defaults.description} />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description || defaults.description} />
      <meta itemProp="image" content={image || defaults.image} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || defaults.description} />
      <meta property="og:image" content={image || defaults.image} />
      <meta property="og:url" content={url || defaults.url} />
      <meta property="og:type" content="website" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || defaults.description} />
      <meta name="twitter:image" content={image || defaults.image} />
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
