var KittySurveyQuestion = Backbone.View.extend ({

	template: Handlebars.compile (
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<p><span class="label">{{question}}</span></p>' +

		'{{#each answers}}<li><input type="radio" name="{{this}}" value="{{this}}"> {{this}}</li>{{/each}}' +

		'<button type="button" class="btn btn-danger">Next</button>' +
		'</div>'
	),

	initialize: function () {
		this.listenTo(this.model, "change", this.render);
	},

	render: function () {
		this.$el.html(this.template(this.model.attributes));
		//return this allows us to chain function calls
		return this;
	}

});