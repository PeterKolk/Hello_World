sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("HelloWorld.HelloWorld.controller.RuleSetGroup", {
		onInit : function () {
			var oViewModel = new JSONModel({
				unit: "Entries"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("RULESETGROUPNAME", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("RuleSetGroup");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);	
			
			
		},
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ruleSet", {
				ruleSetGroupID: oItem.getBindingContext("dq_app").getPath().substr(1)
			});
		}

	});
});