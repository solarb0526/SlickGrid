"use strict";

require.config({
    paths: {
        jquery: '../../lib/jquery-1.7.min',
        QUnit: '../../lib/qunit-1.11.0',
        slickCore: '../../slick.core',
        slickDataView: '../../slick.dataview'
    },
    shim: {
        QUnit: {
           exports: 'QUnit',
           init: function() {
               QUnit.config.autoload = false;
               QUnit.config.autostart = false;
           }
       }
    }
});

// require the unit tests.
require(
    ['jquery', 'QUnit'],
    function($, QUnit) {
        require(['slickCore', 'slickDataView', './dataViewTest'], function(){
            // start QUnit.
            QUnit.load();
            QUnit.start();
        });
    }
);