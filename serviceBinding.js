function initModel() {
	var sUrl = "/BA1_HANA_WX52EX/NNROOT/Z85_Local_Development/WX52EX/monitoring.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}