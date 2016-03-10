define([
   'angular',
   'angular-ui-router',
   'ng-dialog'
], function(angular) {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.project', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/projects/project.tpl.html',
            controller: 'ProjectCtrl as project',
            resolve: {
              data: function(DataService) {
                return DataService.getAllProject();
              }
            }
          }
        }
      });
  }

  /**
   * @name  ProjectCtrl
   * @description Controller
   */
  function ProjectCtrl(data, ngDialog) {
    var project = this;
    project.data = data.data;

    project.openDialog = function(content) {
      ngDialog.open({template: content, plain: true});
    };
  }

  angular.module('projects', ['ngDialog'])
    .config(config)
    .controller('ProjectCtrl', ProjectCtrl);
});
