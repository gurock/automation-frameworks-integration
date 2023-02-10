// @ts-check
const { test, expect } = require('@playwright/test');
const { randomUUID } = require('crypto');

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    let screenshotPath = `test-results/screenshots/screenshot-${randomUUID()}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    testInfo.annotations.push({ type: 'testrail_attachment', description: screenshotPath });
  }
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

test.describe('New Todo', () => {
  test('should allow me to add and check todo items', async ({ page }, testInfo) => {
    // Test covering requirements
    testInfo.annotations.push({ type: 'testrail_case_field', description: "refs:TR-1" });

    // Create 1st todo.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "1. Create first todo" });
    await page.locator('.new-todo').fill(TODO_ITEMS[0]);
    await page.locator('.new-todo').press('Enter');

    // Make sure the list only has one todo item.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "2. Verify todo list has 1 item" });
    await expect(page.locator('.view label')).toHaveText([
      TODO_ITEMS[0]
    ]);

    // Create 2nd todo.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "3. Create second todo" });
    await page.locator('.new-todo').fill(TODO_ITEMS[1]);
    await page.locator('.new-todo').press('Enter');

    // Make sure the list now has two todo items.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "4. Verify todo list has 2 items" });
    await expect(page.locator('.view label')).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1]
    ]);

    await checkNumberOfTodosInLocalStorage(page, 2);
  });
});

/**
 * @param {import('@playwright/test').Page} page
 * @param {number} expected
 */
 async function checkNumberOfTodosInLocalStorage(page, expected) {
  return await page.waitForFunction(e => {
    return JSON.parse(localStorage['react-todos']).length === e;
  }, expected);
}
