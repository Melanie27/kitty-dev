var MenuItemDetails = Backbone.View.extend({
	/*render: function () {
		var markup = '<div>' +
		'<h1>' + this.options.name + '</h1>' +
		'<p><span class="label">' + this.options.category + '</span></p>' +
		'<img src="photos/' + this.options.imagepath + '" class="img-polaroid" />' +
		'</div>';

		this.$el.html(markup);
		return this;
	}*/

	template: Handlebars.compile (
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<p><span class="label">{{category}}</span></p>' +
		'<img src="photos/kittys/{{imagepath}}" class="img-polaroid" />' +
		'</div>'
	),

	render: function () {
		this.$el.html(this.template(this.options));
		return this;
	}

});