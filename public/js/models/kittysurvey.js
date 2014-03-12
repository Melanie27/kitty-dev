var KittySurvey = Backbone.Model.extend({
	urlRoot: '/questions',
	defaults:{
		questions: [
		
			'Favorite Food',
			'Favorite Band',
			'Favorite Hideout',
			'Favorite Friends',
			'Favorite Celebrity'

			]

	}
});