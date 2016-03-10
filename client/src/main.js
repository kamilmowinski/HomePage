/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'angular': './vendor/angular/angular',
        'angular-ui-router': './vendor/angular-ui-router/release/angular-ui-router.min',
        'domReady': './vendor/domReady/domReady',
        'backand': './vendor/angularbknd-sdk/dist/backand.min',
        'template': '/tmp/templates',
        'ng-dialog': './vendor/ng-dialog/js/ngDialog.min',
        'FileSaver': './vendor/FileSaver/FileSaver.min',
        'ng-cookies': './vendor/angular-cookies/angular-cookies.min'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'ng-cookies': {
            deps: ['angular']
        },
        'backand': {
            deps: ['angular']
        },
        'template': {
            deps: ['angular']
        }
    },

    deps: [
        'src/bootstrap.js'
    ]
});