var runapp = angular.module('runapp', []);

runapp.controller('AppCtrl',['$scope', '$http', function($scope, $http) {
    console.log('Hello from controller');
}]);
