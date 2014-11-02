"use strict";

require.config({
    paths: {
        jquery: '../../lib/jquery-1.7.min',
        qunit: '../../lib/qunit'
    },
    shim: {
       quint: {
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
    ['jquery', 'qunit', './dataViewTest'],
    function($, QUnit) {
        alert(123);
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);