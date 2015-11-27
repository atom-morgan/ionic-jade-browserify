describe("SettingsCtrl", function() {
  var $controller, $scope, SettingsCtrl;

  beforeEach(module("skeleton"));

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
  }));

  it("should set its title to 'Settings'", function() {
    SettingsCtrl = $controller("SettingsCtrl", { $scope: $scope });

    expect(SettingsCtrl.title).toEqual("Settings");
  });
});
