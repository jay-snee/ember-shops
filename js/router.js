

// This is the main application routing
// Here we're setting up the route hierarchy
// and then we'll configure the routes themselves
Shops.Router.map(function() {
  this.resource('shops', function() {
    this.resource('shop', {path: ':shop_id'}, function() {
      this.resource('products', {path: 'products'}, function(){
        this.route('product', {path: ":product_id"})
      });
    });
  });
});


// This route simply picks up users
// when they hit the root url ('/') and
// transitions them to the main 'shops' route
Shops.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('shops')
  }
});


// Now we're starting to do something interesting
// - here we're setting the model property of this
// route to of the 'find' query against the store.
// As this app is using the fixture adapter it returns
// the fixtures we've added to models.js
Shops.ShopsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('shop');
  }
});


// Here we're ensuring that the products template
// get rendered into the correct outlet
// I'm not 100% on if this is the 'correct' way, but it works..
Shops.ProductsIndexRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'product' });
  }
})

Shops.ProductsProductRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'product' });
  }
});
