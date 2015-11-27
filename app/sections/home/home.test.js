describe("HomeCtrl", function() {
  var $controller, $scope, HomeCtrl;

  beforeEach(module("skeleton"));

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
  }));

  it("should set its title to 'Home'", function() {
    HomeCtrl = $controller("HomeCtrl", { $scope: $scope });

    expect(HomeCtrl.title).toEqual("Home");
  });
});
