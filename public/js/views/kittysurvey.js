var KittySurveyQuestion = Backbone.View.extend ({
	/*render: function () {
		var markup = '<div>' +
		'<h1>' + this.options.name + '</h1>' +
		'<h2>' + this.options.question + '</h2>' +
		'</div>';

		this.$el.html(markup);
		return this;

	}*/

	template: Handlebars.compile (
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<p><span class="label">{{question}}</span></p>' +
		'{{#each answers}} <a href="#"><li>{{this}} </li></a>{{/each}} ' +
			

		'</div>'
	),

	render: function () {
		this.$el.html(this.template(this.options));
		//return this allows us to chain function calls
		return this;
	}

});