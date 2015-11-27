module.exports = angular.module("controllers.dashboard", [])
.controller("DashboardCtrl", function() {
  var vm = this;
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state("dashboard", {
    url: "/dashboard",
    abstract: true,
    template: require("./dashboard.jade")
  });

  $urlRouterProvider.otherwise("/dashboard/home");
});
