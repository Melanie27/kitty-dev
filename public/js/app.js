var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails"
	},

	list: function () {
		//$('#app').html('List screen');
	},

	itemDetails: function (item) {
		$('#app').html('Menu item: ' + item);
	},

	itemForm: function () {
		$('#app').html('New item form');
	}
});

var app = new AppRouter();


var AppRouterK = Backbone.Router.extend({
	routes: {
		"kitty-profiles/": "profiles",
		"kitty-survey/:questions" : "startSurvey",
		"kitty-survey/list" : "listSurvey",
		"kitty-profiles/new" : "profileForm",
		"kitty-profiles/:profile" : "profileDetails",
		"categories/:sides" : "profileSides",
		"orders/:profile" : "orderProfile"
		

	},

	initialize: function () {
		
		//create the collection object
		this.kittyQuestions = new KittyQuestions();
		this.kittyQuestions.fetch();

		//create the model object
		this.kittySurveyModel = new KittySurvey();
		this.kittySurveyView = new KittySurveyQuestion( 
				
				{
					model: this.kittySurveyModel
				}
			);

		//this.surveyView = new SurveyView({collection: this.kittyQuestions});

		this.surveyList = new SurveyList();
		this.surveyView = new SurveyView( 
				
			{
				model: this.surveyList
			}

		);

		//keeps track of all kitty profiles
		this.kittyProfiles = new KittyProfiles();
		this.kittyProfiles.fetch();

		//keeps track of the kitty profiles that have been added
		this.orderedItems = new KittyProfiles();

		this.ordersView = new OrdersView({collection: this.orderedItems});

		this.kittyProfileModel = new KittyProfile();
		this.kittyProfileView = new KittyProfileDetails (
			{
				model: this.kittyProfileModel
			}
		);

		this.profileView = new ProfileView({collection: this.kittyProfiles});
		this.kittyProfileForm = new KittyProfileForm({model: new KittyProfile()});


		this.sidesView = new SidesView (
			{
				category: 'Entree',
				images: [
					"carrots.jpg",
					"green-beans.jpg",
					"mashed-potatoes.jpg"
				]

			}
		
		);

	},

	profiles: function () {
		//$('#app2').html('List Profiles');
		$('#app2').html(this.profileView.render().el);
	},

	profileDetails: function(profile) {
		
		this.kittyProfileView.model = this.kittyProfiles.get(profile); 
		$('#app2').html(this.kittyProfileView.render().el);	
		
	},

	orderProfile: function(profile) {
		var kittyProfile = this.kittyProfiles.get(profile); 
		this.orderedItems.add(kittyProfile);

		$('#app2').html(this.ordersView.render().el);	
	},



	profileSides: function(side) {
		this.sidesView.options.side = side;
		$('#app2').html(this.sidesView.render().el); 
	},

	profileForm: function() {
		$('#app2').html(this.kittyProfileForm.render().el);
	},

	startSurvey: function(question) {

		this.kittySurveyModel.set('id', question);
		this.kittySurveyModel.fetch();
		//$('#app2').html(this.kittySurveyView.render().el);
		
	},

	listSurvey: function () {
		$('#app2').html(this.surveyView.render().el);
		console.log('list survey');
	},

});

var app = new AppRouterK();

$(function() {
	Backbone.history.start();
});