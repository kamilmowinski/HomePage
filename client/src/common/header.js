define([
  'angular',
  'ng-cookies'
], function(angular) {
  'use strict';

  function headerCtrl($log, $cookies) {
    /*jshint validthis:true */
    var header = this;
    $log.debug('Header loaded');

    header.changeLanguage = function() {
      if($cookies.language === 'english') {
        $cookies.language = 'polish';
      } else {
        $cookies.language = 'english';
      }
    };
  }

  angular.module('common.header', ['ngCookies'])
    .controller('HeaderCtrl', headerCtrl);
});
