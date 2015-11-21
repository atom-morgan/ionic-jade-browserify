module.exports = angular.module('controllers.settings', [])
.controller("SettingsCtrl", function($scope) {
  console.log("Settings Ctrl!");
})
.config(function($stateProvider) {
  $stateProvider.state("dashboard.settings", {
    url: "/settings",
    views: {
      "dashboard-settings": {
        template: require("./settings.jade"),
        controller: "SettingsCtrl"
      }
    }
  });
});