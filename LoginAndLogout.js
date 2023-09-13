import { Selector, t } from 'testcafe';

fixture('FaceGenie AMS School - Login')
  .page('https://facegenie-ams-school.web.app/');

test('Successful Login and Actions', async (t) => {
  // Type email and password, then click the login button
  await t
    .maximizeWindow()
    .typeText('#email', 'testbams@gmail.com')
    .typeText('#password', 'facegenie')
    .click('.MuiButton-containedPrimary.MuiButton-fullWidth');

  // Wait for the overlay to disappear (adjust timeout if needed)
  const overlay = Selector('.MuiDialog-container');
  await t.expect(overlay.exists).notOk({ timeout: 10000 });

  // Click the "Dashboard" link within the overlay directly based on its text content
  await t.click(Selector('span.MuiTypography-body1.MuiListItemText-primary').withText('Dashboard'));
  await t.click(Selector('span.MuiTypography-body1.MuiListItemText-primary').withText('Attendance Logs'));
  await t.click(Selector('span.MuiTypography-body1.MuiListItemText-primary').withText('Analytics and Reports'));
  await t.click(Selector('span.MuiTypography-body1.MuiListItemText-primary').withText('Manage Student'));
  await t.click(Selector('span.MuiTypography-body1.MuiListItemText-primary').withText('Manage Licenses'));
  await t.click(Selector('span.MuiTypography-body1.MuiListItemText-primary').withText('Manage Sync'));
  await t.click(Selector('span.MuiTypography-body1.MuiListItemText-primary').withText('Setting'));


  // Click the "Log Out" link
  const logoutLink = Selector('.MuiTypography-body1.MuiListItemText-primary').withText('Log Out');
  await t.click(logoutLink);
  await t.wait(5000)


  // Click the "Ok" button
  const okButton = Selector('.MuiButton-textPrimary.MuiButton-textSizeMedium').withText('Ok');
  await t.click(okButton);
  await t.wait(5000)
});
