var runapp = angular.module('runapp', []);

runapp.controller('AppCtrl',['$scope', '$http', function($scope, $http) {
    console.log('Controller start');

    $http.get('/users').success(function(response) {
        console.log('Controller received the users list');
        $scope.user_list = response;
    });
}]);
