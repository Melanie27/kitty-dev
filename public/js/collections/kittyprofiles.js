var KittyProfiles = Backbone.Collection.extend({
	comparator: 'name',
	model: KittyProfile,
	url: '/profiles'
});