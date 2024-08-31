import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://letstesttogether.com/store/index.php?rt=account/subscriber');
  await page.getByRole('heading', { name: 'Become a newsletter subscriber' }).click();
  await page.getByLabel('First Name:').click();
  await page.getByLabel('First Name:').fill('Test');
  await page.getByLabel('Last Name:').click();
  await page.getByLabel('Last Name:').fill('Tes');
  await page.getByLabel('E-Mail:').click();
  await page.getByLabel('E-Mail:').fill('xyz@email.com');
  await page.getByLabel('Enter code:').click();
  await page.getByLabel('Enter code:').fill('eqwe3');
  await page.getByRole('button', { name: ' Continue' }).click();
  await page.getByText('Human verification has failed').click({
    button: 'right'
  });
  await page.getByText('Human verification has failed').click();
  await expect(page.locator('#SubscriberFrm')).toContainText('Human verification has failed! Please try agan.');
});