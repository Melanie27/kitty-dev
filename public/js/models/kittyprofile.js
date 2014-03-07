var KittyProfile = Backbone.Model.extend({
	urlRoot: '/profiles', 
	defaults: {
		name: 'Colonel Meow',
		description: 'test',
		imagepath: 'ColonelMeow-Cat.jpg'

	}

});