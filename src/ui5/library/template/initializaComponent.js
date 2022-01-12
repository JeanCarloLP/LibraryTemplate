

sap.ui.define([
    'sap/ui/model/reource/ResourceModel'
], function( ResourceModel ) {
    'use strict';
    return {
        init: function( component ) {
            let i18nModel = new ResourceModel({
                bundle: sap.ui.getCore().getLibraryResourceBundle("ui5.library.template")
            });
            component.setModel( i18nModel, "i18n-reuse" )
        }
    }
});