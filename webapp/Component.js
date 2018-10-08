sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "HelloWorld/HelloWorld/controller/HelloDialog"
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
			var oData = {
            recipient : {
               name : "World"
            	}
        	};
        	var oModel = new JSONModel(oData);
        	this.setModel(oModel);
        	var i18nModel = new ResourceModel({
            	bundleName: "HelloWorld.HelloWorld.i18n.i18n"
        	});
         this.setModel(i18nModel, "i18n");
         
         // set dialog
			this._helloDialog = new Dialog(this.getRootControl());
		},


		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
		}
	});
});