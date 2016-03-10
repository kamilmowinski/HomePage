define([
  'angular',
  'angular-ui-router',
  'common/services/dataService',
  'FileSaver'
], function(angular) {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.bibliographies', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/bibliographies/bibliographies.tpl.html',
            controller: 'BibliographiesCtrl as bibliographies',
            resolve: {
              data: function(DataService) {
                return DataService.getAllBibliographies();
              }
            }
          }
        }
      });
  }

  /**
   * @name  BibliographiesCtrl
   * @description Controller
   */
  function BibliographiesCtrl(data) {
    var bibliographies = this;
    bibliographies.data = data.data;

    bibliographies.download = function(content) {
      var blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      saveAs(blob, 'bibtex.tex');
    };
  }

  angular.module('bibliographies', [])
    .config(config)
    .controller('BibliographiesCtrl', BibliographiesCtrl);
});
