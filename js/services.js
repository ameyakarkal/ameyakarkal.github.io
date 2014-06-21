angular
    .module('frictionless.github.io.services',[])
    .factory('learningService', function(){
        return new frictionless.github.io.services.LearningService()
    });