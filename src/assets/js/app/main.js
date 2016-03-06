var app = app || {};
app.mvc = app.mvc || {};
app.mvc.routes = app.mvc.routes || {};
app.mvc.views = app.mvc.views || {};
app.mvc.models = app.mvc.models || {};
app.mvc.collections = app.mvc.collections || {};
app.session = app.session || {};
app.lock = app.lock || {};

$(function () {
	'use strict';

	app.mvc.router = new app.mvc.routes.AppRouter();
	Backbone.history.start();
});
