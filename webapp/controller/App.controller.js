sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("cadaxo.appobject-page-dusan.controller.App", {
		gotoLinkedin: function(oEvent) {
			window.open("https://www.linkedin.com/in/dusansacha/"); // eslint-disable-line sap-no-hardcoded-url
		},
		gotoCadaxo: function(oEvent) {
			window.open("http://www.cadaxo.com");	// eslint-disable-line sap-no-hardcoded-url
		},
		gotoTwitter: function(oEvent) {
			window.open("https://twitter.com/sacha_dusan");	// eslint-disable-line sap-no-hardcoded-url
		},
		gotoGithub: function(oEvent) {
			window.open("https://github.com/cadaxo/object-page-dusan");	// eslint-disable-line sap-no-hardcoded-url
		}			
	});
});