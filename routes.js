const routes = require('next-routes');

module.exports = routes()
  .add('/blog/:id', 'blog/[id]')

  // LOGIN
  .add('/login-to', 'login-to')
  .add('/forgot-password', 'forgot-password')
  .add('/reset-password/:token', 'reset-password/[token]')

  // MI CUENTA
  .add('/my-account', 'my-account')
  .add('/addresses', 'addresses')
  .add('/profile', 'profile')

  // ORDERS
  .add('/orders', 'orders')
  .add('/orders/:id', 'orders/[id]')
  .add('/favourites', 'favourites')

  // CHECKOUT
  .add('/checkout', 'checkout')
  .add('/budget-checkout', 'budget-checkout')

  .add('/landing/:key', 'landing/[key]')
  .add('/legal/:key', 'legal/[key]')

  // BÚSQUEDA
  .add('/search/:key', 'search/[key]')
  .add('/budget/:price', 'budget/[price]')

  .add('/404', 'pageNotFound')

  .add('/comparador-de-productos/:name', 'comparador-de-productos/[name]')

  // CATEGORIAS / PRODUCTOS
  .add('/:product', '[product]')
  .add('/:product/:index', '[product]/[index]');
