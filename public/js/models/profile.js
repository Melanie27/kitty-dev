var ProfileList = Backbone.Model.extend({
	urlRoot: '/profiles', 
	defaults: {
		profiles: [
		"Grumpy Cat",
		"Hipster Cat",
		"Pudge Cat",
		"Lil Bub Cat"
		]
	}

});