sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"HelloWorld/HelloWorld/model/formatter"
], function (Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("HelloWorld.HelloWorld.controller.InvoiceList", {
		formatter: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}

	});
});