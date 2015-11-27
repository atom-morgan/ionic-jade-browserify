module.exports = angular.module('controllers.settings', [])
.controller("SettingsCtrl", function() {
  var vm = this;
  vm.title = "Settings";
})
.config(function($stateProvider) {
  $stateProvider.state("dashboard.settings", {
    url: "/settings",
    views: {
      "dashboard-settings": {
        template: require("./settings.jade"),
        controller: "SettingsCtrl as vm"
      }
    }
  });
});
