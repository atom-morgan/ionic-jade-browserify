describe("Dashboard", function() {
  it("should default to Home", function() {
    browser.get("http://localhost:8100/#/");

    expect(browser.getCurrentUrl()).to.eventually.equal("http://localhost:8100/#/dashboard/home");
  });
});
