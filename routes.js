const routes= require('next-routes');

module.exports= routes()
    .add( '/blog' , 'postPage' )
    .add( '/blog/:slug' , 'postPage' )