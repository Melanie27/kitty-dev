var SurveyView = Backbone.View.extend({
	
	template: Handlebars.compile(
		'<ul>' +
		'{{#each questions}}<li>{{this}}</li>{{/each}}' +
		'</ul>'
	),

	initialize: function () {
		this.listenTo(this.collection, "change", this.render);
	},

	render: function() {
		this.$el.html(this.template(this.collection));
		return this;
	}

});