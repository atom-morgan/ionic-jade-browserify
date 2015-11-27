describe("StatusCtrl", function() {
  var $controller, $scope, StatusCtrl;

  beforeEach(module("skeleton"));

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
  }));

  it("should set its title to 'Status'", function() {
    StatusCtrl = $controller("StatusCtrl", { $scope: $scope });

    expect(StatusCtrl.title).toEqual("Status");
  });
});
