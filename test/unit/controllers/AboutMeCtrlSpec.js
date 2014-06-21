describe('simple controller test', function() {

    var $controllerFactory;
    var scope;

    beforeEach(module("frictionless.github.io.services"));
    beforeEach(module("frictionless.github.io.controllers"));

    beforeEach(inject(function($controller, $rootScope) {
        $controllerFactory = $controller;
        scope = $rootScope.$new();
    }));

    it('sets scope', function() {
        var expectedItems = [];
        var dependencies = {
            $scope: scope, 
            learningService: {
                get: function() {
                    return expectedItems;
                }
            }
        };

        var aboutMeCtrl = $controllerFactory('aboutMeCtrl', dependencies);
        expect(aboutMeCtrl).not.toBeNull();
        expect(scope.items).toBe(expectedItems);
    });
});