module.exports = angular.module("skeleton:sections", [
  require("./dashboard/dashboard").name,
  require("./status/status").name,
  require("./home/home").name,
  require("./settings/settings").name
]);