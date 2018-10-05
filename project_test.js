describe('Demo Project Classic Agile', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  it('Scenario1 (uid:9943a6d5-bc1f-4e68-a7fd-dd4881576806)', function () {
    // Given step to launch the application in browser
    this.actionwords.stepToLaunchTheApplicationInBrowser();
    // Then I should see the app logo
    this.actionwords.iShouldSeeTheAppLogo();
  });

  it('Scenario2 (uid:7030aaa1-3d64-4f61-bd9d-75b136a0b0ad)', function () {
    // Given I select the channel packshot
    this.actionwords.iSelectTheChannelPackshot();
    // And I should see the Login Page
    this.actionwords.iShouldSeeTheLoginPage();
  });

  it('Scenario3 (uid:3a670ada-d86b-4ca4-9df3-09d42ca45e44)', function () {
    // Given I select the Login Option
    this.actionwords.iSelectTheLoginOption();
    // Then Enter BT ID page should be displayed
    this.actionwords.enterBTIDPageShouldBeDisplayed();
  });
});
