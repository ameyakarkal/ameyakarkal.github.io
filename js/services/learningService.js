angular.module('learning')
        .factory('learningService', [function() {
                var topics = [
                    {
                        _id: 1,
                        title: 'Angular'
                    },
                    {
                        _id: 2,
                        title: 'Distributed Systems'
                    },
                    {
                        _id: 3,
                        title: 'Mobile Development using ionic framework'
                    },
                    {
                        _id: 4,
                        title: 'Advanced Topics in ASP.NET MVC'
                    }
                ];

                return {
                    get: function() {
                        return topics;
                    }
                };
            }]);