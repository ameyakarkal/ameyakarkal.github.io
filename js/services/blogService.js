angular.module("blogger")
        .factory("blogService", ["$q", function($q) {

                var posts = [
                    {
                        title: 'Mapping providers for web applications',
                        description: 'While working on a project, we had a requirement to display geo-spatial data. I tried coming up with...',
                        url : 'http://frictionlesspulley.blogspot.com/2014/06/map-providers-for-applications.html'
                    }
                ];

                var getPosts = function() {
                    var deferred = $q.defer();

                    deferred.resolve(posts);

                    return deferred.promise;
                };

                return {
                    get: getPosts
                };
            }]);