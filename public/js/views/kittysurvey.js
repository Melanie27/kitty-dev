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
		'<p><span class="label">{{#each answers}}<li>{{answers}}</li>{{/each}}</span></p>' +
		
			

		'</div>'
	),

	render: function () {
		this.$el.html(this.template(this.options));
		return this;
	}

});