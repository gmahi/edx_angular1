var app = angular.module("app", [])
    .controller("mainController", ["$scope", function($scope){

        $scope.title = "Home";
        $scope.reName = function(newName){
            $scope.title = newName;
        }


    }] )