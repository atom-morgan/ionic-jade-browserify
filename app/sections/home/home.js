module.exports = angular.module("controllers.home", [])
.controller("HomeCtrl", function() {
  var vm = this;
  vm.title = "Home";
})
.config(function($stateProvider) {
  $stateProvider.state("dashboard.home", {
    url: "/home",
    views: {
      "dashboard-home": {
        template: require("./home.jade"),
        controller: "HomeCtrl as vm"
      }
    }
  });
});
