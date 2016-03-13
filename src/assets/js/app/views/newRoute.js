$(function () {
	'use strict';

	app.mvc.views.NewView = Backbone.View.extend({
		el: '#container',
		events : {
		},
		initialize: function (options) {
            this.id = options.id;
			this.render();
		},
		render: function () {
			app.mvc.views.codemagicView = new app.mvc.views.CodemagicView({id:this.id});
			return this;
		}
	});
});
