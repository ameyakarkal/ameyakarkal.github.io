angular.module('blogger')
        .controller('blogCtrl', ['$scope', 'blogService', function($scope, blogService) {
                $scope.title = 'Blog';
                var result = blogService.get();
                
                result.then(function(posts){
                    $scope.posts = posts;
                }, function(posts){
                    $scope.error = 'there was an error loading recent posts';
                });

            }]);