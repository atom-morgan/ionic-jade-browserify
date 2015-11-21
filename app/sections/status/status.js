module.exports = angular.module('controllers.status', [])
.controller("StatusCtrl", function($scope) {
  console.log("Status Ctrl!");
})
.config(function($stateProvider) {
  $stateProvider.state("dashboard.status", {
    url: "/status",
    views: {
      "dashboard-status": {
        template: require("./status.jade"),
        controller: "StatusCtrl"
      }
    }
  });
});