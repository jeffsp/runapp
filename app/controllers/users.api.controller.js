runapp.controller('AppCtrl',['$scope', '$http', function($scope, $http) {
    console.log('Controller start');

    var refresh = function() {
        $http.get('/api/users').success(function(response) {
            console.log('Controller received the users list');
            $scope.user_list = response;
        });
    };

    refresh();

    $scope.addUser = function() {
        console.log('addUser():');
        console.log($scope.user);
        $http.post('/api/users', $scope.user).success(function(response) {
            console.log(response);
            refresh();
        });
    }

    $scope.remove = function (id) {
        console.log('removing ' + id);
        $http.delete('/api/users/' + id).success(function(response) {
            refresh();
        });
    }

    $scope.edit = function(id) {
        console.log(id);
        $http.get('/api/users/' + id).success(function(response) {
            $scope.user = response;
        });
    };

    $scope.update = function() {
        console.log($scope.user._id);
        $http.put('/api/users/' + $scope.user._id, $scope.user).success(function(response) {
            refresh();
        })
    };

    $scope.deselect = function() {
        $scope.user = "";
    }

}]);
