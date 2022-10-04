sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("sap.sync.project1.controller.View1", {
            onInit: function () {

                var sampleData = {
                    orders : [
                        {
                            orderNum : "0001", roomNum : 101, orderStatus : "준비 완료"
                        },
                        {
                            orderNum : "0002", roomNum : 101, orderStatus : "전달 완료"
                        },
                        {
                            orderNum : "0003", roomNum : 101, orderStatus : "준비 중"
                        },
                    ]
                };

                var oModel = new JSONModel(sampleData);
                this.getView().setModel(oModel);

            },

            getPage : function() {
                return this.byId("dynamicPageId");
            },

            onToggleFooter: function () {
                this.getPage().setShowFooter(!this.getPage().getShowFooter());
            },

            onGenericTagPress: function (oEvent) {
                var oView = this.getView(),
                    oSourceControl = oEvent.getSource();
                if (!this._pPopover) {
                    this._pPopover = Fragment.load({
                        id: oView.getId(),
                        name: "sap.sync.project1.view.Card"
                    }).then(function (oPopover) {
                        oView.addDependent(oPopover);
                        return oPopover;
                    });
                }
    
                this._pPopover.then(function (oPopover) {
                    oPopover.openBy(oSourceControl);
                });
            },

            onCheckOrder : function (oEvent) {

                var oItem = oEvent.getSource();
                var oRouter = this.getOwnerComponent().getRouter();
			    oRouter.navTo("detail");
            },


        });
    });
