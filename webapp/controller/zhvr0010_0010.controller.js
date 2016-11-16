jQuery.sap.registerModulePath("zhyi0010", "/zhyi0010"); 
jQuery.sap.require("zhyi0010.commons.zhyi0010_0010_commons");

jQuery.sap.includeStyleSheet('/zhyi0010/css/zhyi0010_0010.css');

sap.ui.define([
	"sap/ui/core/mvc/Controller",
		'sap/m/Button',
		'sap/m/Dialog',
		'sap/m/MessageToast',
		'sap/m/Text',
		'sap/m/TextArea',
		'sap/ui/layout/HorizontalLayout',
		'sap/ui/layout/VerticalLayout',
	"zhyi0010/commons/zhyi0010_0010_commons"
], function(Controller, Button, Dialog, MessageToast, Text, TextArea, HorizontalLayout, VerticalLayout, commons) {
	"use strict";

var locale = sap.ui.getCore().getConfiguration().getLanguage();
/*var oBundle = new sap.ui.model.resource.ResourceModel({

      bundleUrl: "/zhyi0010/i18n/i18n.properties",

      locale: locale

  });
*/  
  var oBundle = jQuery.sap.resources({url : "/zhyi0010/i18n/i18n.properties", locale: locale});
    sap.ui.getCore().setModel(oBundle, "i18n");


/*var path = jQuery.sap.getModulePath("yourComponent", "/zhyi0010/images/hoimi.jpg");
var image = $("#yourImageid");
image.attr("src", path);
*/
var img = new sap.m.Image({
   src : "/zhyi0010/images/hoimi.jpg"
});

	jQuery.sap.log.setLevel(jQuery.sap.log.Level.ERROR);

	jQuery.sap.log.warning("This should never have happened!");
	
	var sText = oBundle.getText("appTitle");
	
	jQuery.sap.log.error("appTitle : " + sText);
	
	return Controller.extend("zhvr0010.controller.zhvr0010_0010", {

		onApproveDialog: function () {
			var dialog = new Dialog({
				title: 'Confirm',
				type: 'Message',
				content: new Text({ text: 'Are you sure you want to submit your shopping cart?' }),
				beginButton: new Button({
					text: 'Submit',
					press: function () {
						MessageToast.show('Submit pressed!');
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
 
			dialog.open();
		},
 
		onRejectDialog: function () {
			var dialog = new Dialog({
				title: 'Reject',
				type: 'Message',
				content: [
					new Text({ text: 'Are you sure you want to reject your shopping cart?' }),
					new TextArea('rejectDialogTextarea', {
						width: '100%',
						placeholder: 'Add note (optional)'
					})
				],
				beginButton: new Button({
					text: 'Reject',
					press: function () {
						var sText = sap.ui.getCore().byId('rejectDialogTextarea').getValue();
						MessageToast.show('Note is: ' + sText);
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
 
			dialog.open();
		},
 
		onSubmitDialog: function () {
			var dialog = new Dialog({
				title: 'Confirm',
				type: 'Message',
				content: [
					new Text({ text: 'Are you sure you want to submit your shopping cart?' }),
					new TextArea('submitDialogTextarea', {
						liveChange: function(oEvent) {
							var sText = oEvent.getParameter('value');
							var parent = oEvent.getSource().getParent();
 
							parent.getBeginButton().setEnabled(sText.length > 0);
						},
						width: '100%',
						placeholder: 'Add note (required)'
					})
				],
				beginButton: new Button({
					text: 'Submit',
					enabled: false,
					press: function () {
						var sText = sap.ui.getCore().byId('submitDialogTextarea').getValue();
						MessageToast.show('Note is: ' + sText);
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
 
			dialog.open();
		},
 
		onConfirmDialog: function () {
			var dialog = new Dialog({
				title: 'Confirm',
				type: 'Message',
				content: [
					new HorizontalLayout({
						content: [
							new VerticalLayout({
								width: '120px',
								content: [
									new Text({ text: 'Type: ' }),
									new Text({ text: 'Delivery:' }),
									new Text({ text: 'Items count: ' })
								]
							}),
							new VerticalLayout({
								content: [
									new Text({ text: 'Shopping Cart' }),
									new Text({ text: 'Jun 26, 2013' }),
									new Text({ text: '2' })
								]
							})
						]
					}),
					new TextArea('confirmDialogTextarea', {
						width: '100%',
						placeholder: 'Add note (optional)'
					})
				],
				beginButton: new Button({
					text: 'Submit',
					press: function () {
						var sText = sap.ui.getCore().byId('confirmDialogTextarea').getValue();
						MessageToast.show('Note is: ' + sText);
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'Cancel',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
 
			dialog.open();
		}
	});
});