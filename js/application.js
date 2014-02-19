// initialise the application
window.Shops = Ember.Application.create({
	LOG_TRANSITIONS: true
});

// let the app know we want to use the fixtures adapter
// instead of the REST adapter
Shops.ApplicationAdapter = DS.FixtureAdapter.extend();
