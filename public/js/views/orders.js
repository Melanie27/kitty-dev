var OrdersView = Backbone.View.extend({
	template: Handlebars.compile(
		'<h1>Collection of Kittys</h1>' +
		'{{#each models}}' +
		'<img src="photos/kittys/{{attributes.imagepath}}" class="img-polaroid" />' +
		'{{/each}}'
	),

	render: function() {
		this.$el.html(this.template(this.collection));
		return this;
	}

});