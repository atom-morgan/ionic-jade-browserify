module.exports = angular.module('controllers.home', [])
.controller("HomeCtrl", function($scope) {
  console.log("Home Ctrl!");
})
.config(function($stateProvider) {
  $stateProvider.state("dashboard.home", {
    url: "/home",
    views: {
      "dashboard-home": {
        template: require("./home.jade"),
        controller: "HomeCtrl"
      }
    }
  });
});
