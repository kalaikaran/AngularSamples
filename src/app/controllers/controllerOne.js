var app = angular.module("main",[]);
app.controller("contollerOne", ["$scope",function($scope){


    $scope.displayFirstName = function(){
        $scope.isFirstName = true;
        $scope.firstName = "John";
    }
    $scope.hideFirstName = function(){
        var topic = "person";
        $scope.isFirstName = false;
    }
    $scope.displayLastName = function(){
        $scope.isLastName = true;
        $scope.lastName = "Smith";
    }
    $scope.displayAge = function(){
        $scope.isAge = true;
        $scope.age = 26;
    }


}]);