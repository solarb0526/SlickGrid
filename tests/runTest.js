/**
 * Created by Administrator on 2014-11-03.
 */
"use strict";
define(function () {
    function runTest(testSrc) {
        require.config({
            paths: {
                jquery: '../../lib/jquery-1.7.min',
                QUnit: '../../lib/qunit-1.11.0',
                jqueryUI: '../../lib/jquery-ui-1.8.16.custom.min',
                jqueryEventDrag: '../../lib/jquery.event.drag-2.2',
                jquerySimulate: '../../lib/jquery.simulate',

                slickCore: '../../slick.core',
                slickDataView: '../../slick.dataview',
                slickGrid: '../../slick.grid'
            },
            shim: {
                QUnit: {
                    exports: 'QUnit',
                    init: function () {
                        QUnit.config.autoload = false;
                        QUnit.config.autostart = false;
                    }
                }
            }
        });
        require( // require the unit tests.
            ['jquery', 'QUnit'], function () {
                require(['jqueryUI', 'jqueryEventDrag', 'jquerySimulate'], function () {
                    require(['slickCore', 'slickDataView', 'slickGrid'], function () {
                        require([testSrc], function () {
                            // start QUnit.
                            QUnit.load();
                            QUnit.start();
                        });
                    });
                });
            }
        );
    }

    return runTest;
});

