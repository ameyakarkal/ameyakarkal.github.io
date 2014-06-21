angular
    .module('frictionless.github.io.controllers', ['frictionless.github.io.services'])
    .controller('aboutMeCtrl', ['$scope','learningService', function($scope, learningService){
        $scope.items = learningService.get();
    }]);

