var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: [
    "app/**/*.e2e.js"
  ],
  onPrepare: function() {
    expect = chai.expect;
  }
};
