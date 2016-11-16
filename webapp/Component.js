sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"zhvr0010/model/zhvr0010_0010.model"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("zhvr0010.Component", {

		metadata: {
			dependencies : {
                                    libs : ["sap.ui.commons"],
                                    components : []
                                },
            manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});