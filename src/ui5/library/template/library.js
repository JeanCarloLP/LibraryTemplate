sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/library'
], function( JQuery ) {
    'use strict';
    sap.ui.getCore().initLibrary({
        name: "ui5.library.template",
        version: "1.0.0",
        dependencies: ["sap.ui.core"],
        types: [],
        interfaces: [],
        controls: [],
        elements: []
    });

    return ui5.library.template
});