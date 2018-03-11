var app = angular.module('basicApp', []);
app.controller('homeController', function ($scope) {
   $scope.uname = "demouser";
    $scope.testMe = function () {
        $scope.uname += "123";
    };
});