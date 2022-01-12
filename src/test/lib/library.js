sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/library'
], function( JQuery ) {
    'use strict';
    sap.ui.getCore().initLibrary({
        name: "test.lib",
        version: "1.0.0",
        dependencies: ["sap.ui.core"],
        types: [],
        interfaces: [],
        controls: [],
        elements: []
    });

    return sap.ui.library.template
});