/**
 * Created by John on 17/10/2015.
 */
describe("Hello world", function() {
    var element;
    var $scope;
    beforeEach(inject(function ($compile, $rootScope) {
        $scope = $rootScope;
        element = angular.element("<div>{{2 + 2}}</div>");
        element = $compile(element)($rootScope) //Compile the element then invoke it in the scope as it returns a function
    }))

    it("should equal 4", function () {
        $scope.$digest();
        expect(element.html()).toBe("4");
    })
})