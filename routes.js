const routes = require('next-routes');

module.exports = routes()
//   .add('/blog', 'postPage')
//   .add('/blog/:slug', 'postPage')

// LOGIN
  .add('/login-to', 'AsyncLoginTo')
  .add('/forgot-password', 'Account')
  .add('/reset-password/:token', 'Account')

  // MI CUENTA
  .add('/my-account', 'MyAccount')
  .add('/addresses', 'Address')
  .add('/profile', 'Profile')

  // ORDERS
  .add('/orders', 'OrderList')
  .add('/orders/:id', 'Order')
  .add('/favourites', 'Favourites')

  // CHECKOUT
  .add('/checkout', 'Checkout')
  .add('/budget-checkout', 'BudgetCheckout')

  .add('/landing/:key', 'Landing')
  .add('/legal/:key', 'Legal')

  // BÚSQUEDA
  .add('/search/:query', 'Search')
  .add('/budget/:price', 'SearchByBudget')

  .add('/404', 'Page404')

  .add('/comparador-de-productos/:name', 'CompareProducts')

  // CATEGORIAS / PRODUCTOS
  .add('/:product', 'Product')
  .add('/:product/:index', 'Product');
