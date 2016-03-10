define([
  'angular',
  'angular-ui-router',
  'common/services/dataService'
], function(angular) {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.activities', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/activities/activities.tpl.html',
            controller: 'ActivitiesCtrl as activities',
            resolve: {
              data: function(DataService) {
                return DataService.getValidActivities();
              }
            }
          }
        }
      });
  }

  /**
   * @name  ActivitiesCtrl
   * @description Controller
   */
  function ActivitiesCtrl(data) {
    var activities = this;
    activities.data = data.data;
  }

  angular.module('activities', [])
    .config(config)
    .controller('ActivitiesCtrl', ActivitiesCtrl);
});
