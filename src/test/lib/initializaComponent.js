

sap.ui.define([
    'sap/ui/model/reource/ResourceModel'
], function( ResourceModel ) {
    'use strict';
    return {
        init: function( component ) {
            let i18nModel = new ResourceModel({
                bundle: sap.ui.getCore().getLibraryResourceBundle("test.lib")
            });
            component.setModel( i18nModel, "i18n-reuse" )
        }
    }
});