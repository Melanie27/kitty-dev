var KittyQuestions = Backbone.Collection.extend({
	model: KittySurvey,
	url: '/questions'

});