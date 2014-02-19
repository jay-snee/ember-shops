// Shops

Shops.Shop = DS.Model.extend({
	name: DS.attr('string'),
	address: DS.attr('string'),
	products: DS.hasMany('product', { async: true })
})


// Fixture data
Shops.Shop.FIXTURES = [
	{
		id: 1, 
		name: "Bob's Meat Shop",
		address: "1 The High Street",
		products: [1, 2, 3]
	},
	{
		id: 2, 
		name: "Jim's Jam Shop",
		address: "2 The High Street",
		products: [4, 5]
	},
	{
		id: 3, 
		name: "Sally's Surf Shop",
		address: "3 The High Street",
		products: [6, 7, 8, 9]
	}
	]


// Products

Shops.Product = DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string'),
	price: DS.attr('string'),
	shop: DS.belongsTo('shop')
})

// Fixture data

Shops.Product.FIXTURES = [
	{
		id: 1, 
		shop: 1, 
		name: "Pork Pies",
		description: "The porkyest pies in town! 100% meat, 100% pastry, guaranteed.",
		price: "1.50"
	},
	{
		id: 2, 
		shop: 1, 
		name: "Mince Pies",
		description: "These pies are made with only the finest mince and lard.",
		price: "2.50"
	},
	{
		id: 3, 
		shop: 1, 
		name: "Steak Pies",
		description: "We raised the meat for these pies in our own back garden. Gertrude will be missed.",
		price: "3.50"
	},
	{
		id: 4, 
		shop: 2, 
		name: "Jam",
		description: "Strawberries, Raspberries and Snozberries, all together in a single gooey substance.",
		price: "1.00"
	},
	{
		id: 5, 
		shop: 2, 
		name: "Chutney",
		description: "We grow all the ingredients for this ourselves. We are the Chutney Farmers.",
		price: "2.50"
	},
	{
		id: 6, 
		shop: 3, 
		name: "Wet Suit",
		description: "Like a drysuit, but wetter.",
		price: "35.50"
	},
	{
		id: 7, 
		shop: 3, 
		name: "Long Board",
		description: "16 feet of pure board. Longest in town!",
		price: "212.50"
	},
	{
		id: 8, 
		shop: 3, 
		name: "Surf Board",
		description: "Standard surf board, because the surf's always up 250 miles from the sea.",
		price: "112.50"
	},
	{
		id: 9, 
		shop: 3, 
		name: "Kite Board",
		description: "Tired of having to paddle your board around? Let nature do the work!",
		price: "75.50"
	}

];