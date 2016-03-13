$(function () {
	'use strict';

	app.mvc.views.NewView = Backbone.View.extend({
		el: '#container',
		events : {
		},
		initialize: function (options) {
            this.id = options.id;
            this.version = options.version;
			this.render();
		},
		render: function () {
			app.mvc.views.codemagicView = new app.mvc.views.CodemagicView({id:this.id, version:this.version});
			return this;
		}
	});
});
