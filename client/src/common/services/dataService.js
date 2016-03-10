define([
  'angular',
  'backand'
], function(angular) {
  'use strict';

  function dataService($http, Backand) {
    return {
      get: function() {
        return ['some', 'data'];
      },

      getAllProject: function() {
        return $http({
          method: 'GET',
          url: Backand.getApiUrl() + '/1/query/data/GetAllProjects',
          params: {
            parameters: {
              language: 'polish'
            }
          }
        });
      },

      getValidActivities: function() {
        return $http({
          method: 'GET',
          url: Backand.getApiUrl() + '/1/query/data/GetAllActivities',
          params: {
            parameters: {}
          }
        });
      },

      getAllBibliographies: function() {
        return $http ({
          method: 'GET',
          url: Backand.getApiUrl() + '/1/query/data/GetAllReference',
          params: {
            parameters: {}
          }
        });
      }
    };
  }

  angular.module('common.services.data', [])
    .factory('DataService', ['$http','Backand', dataService]);
});
