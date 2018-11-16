sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, Device, JSONModel, ResourceModel, Dialog) {
	"use strict";

	return UIComponent.extend("HelloWorld.HelloWorld.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model

        	var i18nModel = new ResourceModel({
            	bundleName: "HelloWorld.HelloWorld.i18n.i18n"
        	});
        	this.setModel(i18nModel, "i18n");
         

		}
	});
});