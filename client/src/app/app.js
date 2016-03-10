define([
    'angular',
    'angular-ui-router',
    'backand',
    'template',
    './home/home',
    './projects/projects',
    './activities/activities',
    './bibliographies/bibliographies',
    'common/header',
    'common/footer',
    'common/filters/uppercase',
    'common/directives/version',
    'common/interceptors/httpInterceptor',
    'common/services/dataService'
], function(angular) {
  'use strict';

  function config(BackandProvider, $stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    BackandProvider.setAnonymousToken('6e79cec1-db94-455e-b1bb-6d6205d39f40');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderCtrl as header'
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterCtrl'
          }
        }
      });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl laoded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ui.router',
      'backand',
      'home',
      'projects',
      'activities',
      'bibliographies',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.directives.version',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.0.0');
});
