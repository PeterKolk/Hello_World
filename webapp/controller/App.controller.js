sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageBox, JSONModel, ResourceModel){
   "use strict";
   return Controller.extend("HelloWorld.HelloWorld.controller.App", {
      onInit : function () {
         // set data model on view
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
         var i18nModel = new ResourceModel({
            bundleName: "HelloWorld.HelloWorld.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
      },
		onShowHello : function(){
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
        	var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        	var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			jQuery.sap.require("sap.m.MessageBox");
			MessageBox.success(sMsg , {
				title: "Success",                                    // default
    			onClose: null,                                        // default
				styleClass: "",                                       // default
    			initialFocus: null,                                   // default
    			textDirection: sap.ui.core.TextDirection.Inherit 
			});
		}
	});
});