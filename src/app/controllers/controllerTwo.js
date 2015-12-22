/**
 * Created by kalaikarank on 12/22/15.
 */
app.controller("controllerTwo", ["$scope", "$http",function($scope, $http){

    $scope.showDetail = function(){
        $http.get("common/countries.json")
            .success(function(resData){
                $scope.countriesDetails = resData;
            })
            .error(function(errorData){
                $scope.error = errorData;
            });
    }


}]);