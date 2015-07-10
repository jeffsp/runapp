var runapp = angular.module('runapp', []);

runapp.controller('AppCtrl',['$scope', '$http', function($scope, $http) {
    console.log('Controller start');

    var refresh = function() {
        $http.get('/users').success(function(response) {
            console.log('Controller received the users list');
            $scope.user_list = response;
        });
    };

    refresh();

    $scope.addUser = function() {
        console.log('addUser()' + $scope.user);
        $http.post('/users', $scope.user).success(function(response) {
            console.log(response);
            refresh();
        });
    }

}]);
