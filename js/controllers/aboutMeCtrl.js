angular
    .module('learning')
    .controller('learningCtrl', ['$scope','learningService', function($scope, learningService){
        $scope.items = learningService.get();
    }]);