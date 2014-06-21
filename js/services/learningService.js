var frictionless = frictionless || {};
frictionless.github = frictionless.github || {};
frictionless.github.io = frictionless.github.io || {};
frictionless.github.io.services = frictionless.github.io.services || {};
frictionless.github.io.services.LearningService = function() {
    this.topics = [
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
};

frictionless.github.io.services.LearningService.get = function(){
    return this.topics;
};