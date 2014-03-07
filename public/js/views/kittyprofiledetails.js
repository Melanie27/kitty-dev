var KittyProfileDetails = Backbone.View.extend({
	template: Handlebars.compile (
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<p><span class="label">{{description}}</span></p>' +
		'<img src="photos/kittys/{{imagepath}}" class="img-polaroid" />' +
		'</div>'
	),

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},

	render: function () {
		//this.$el.html(this.template(this.model.attributes));
		//this.$el.html(this.template(this.options));
		return this;
	}
});