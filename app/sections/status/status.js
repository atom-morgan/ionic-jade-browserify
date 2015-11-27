module.exports = angular.module('controllers.status', [])
.controller("StatusCtrl", function() {
  var vm = this;
  vm.title = "Status";
})
.config(function($stateProvider) {
  $stateProvider.state("dashboard.status", {
    url: "/status",
    views: {
      "dashboard-status": {
        template: require("./status.jade"),
        controller: "StatusCtrl as vm"
      }
    }
  });
});
