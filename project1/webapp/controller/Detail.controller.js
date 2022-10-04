sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller, History, UIComponent) {
        "use strict";

        return Controller.extend("sap.sync.project1.controller.Detail", {

            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);

            },
            // _onObjectMatched: function (oEvent) {
            //     this.getView().bindElement({
            //         path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
            //         model: "invoice"
            //     });
            // },

            getRouter : function () {
                return UIComponent.getRouterFor(this);
            },

            onNavBack: function () {

                var oHistory, sPreviousHash;
    
                oHistory = History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();
    
                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.getRouter().navTo("RouteView1", {}, true /*no history*/);
                }
            },



        });
    });