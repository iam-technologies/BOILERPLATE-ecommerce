// Config API.
export default {
  authRequire: true,
  baseUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api' : 'http://new184119.cocholate.es/api',
  cookiesCart: 604800, // 7 días
  cookiesExpires: 2592000, // 30 días
  urlImages: 'https://s3-eu-central-1.amazonaws.com/cocholate-product-images/'
};
