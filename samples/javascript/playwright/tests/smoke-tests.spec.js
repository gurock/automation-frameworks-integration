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
  test('should allow me to add todo items', async ({ page }, testInfo) => {
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

  test('should clear text input field when an item is added', async ({ page }, testInfo) => {
    // Test covering requirements
    testInfo.annotations.push({ type: 'testrail_case_field', description: "refs:TR-2" });

    // Create one todo item.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "1. Create todo item" });
    await page.locator('.new-todo').fill(TODO_ITEMS[0]);
    await page.locator('.new-todo').press('Enter');

    // Check that input is empty.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "2. Verify todo item input is empty" });
    await expect(page.locator('.new-todo')).toBeEmpty();
    await checkNumberOfTodosInLocalStorage(page, 1);
  });

  test('should append new items to the bottom of the list', async ({ page }, testInfo) => {
    // Test covering requirements
    testInfo.annotations.push({ type: 'testrail_case_field', description: "refs:TR-3,TR-4" });

    // Create 3 items.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "1. Create 3 todo items" });
    await createDefaultTodos(page);

    // Check test using different methods.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "2. Check all items individually" });
    await expect(page.locator('.todo-count')).toHaveText('3 items left');
    await expect(page.locator('.todo-count')).toContainText('3');
    await expect(page.locator('.todo-count')).toHaveText(/3/);

    // Check all items in one call.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "3. Check all items at once" });
    await expect(page.locator('.view label')).toHaveText(TODO_ITEMS);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });
});

test.describe('Mark all as completed', () => {
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test.afterEach(async ({ page }) => {
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test('should allow me to mark all items as completed', async ({ page }, testInfo) => {
    // Test covering requirements
    testInfo.annotations.push({ type: 'testrail_case_field', description: "refs:TR-5" });
    // Known bugs affecting test
    testInfo.annotations.push({ type: 'testrail_result_field', description: "defects:TR-31" });

    // Complete all todos.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "1. Complete all todo items" });
    await page.locator('.toggle-all').check();

    // Ensure all todos have 'completed' class.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "2. Verify all todos are complete" });
    await expect(page.locator('.todo-list li')).toHaveClass(['complete', 'complete', 'complete']);
    await checkNumberOfCompletedTodosInLocalStorage(page, 3);
  });

  test('should allow me to clear the complete state of all items', async ({ page }, testInfo) => {
    // Test covering requirements
    testInfo.annotations.push({ type: 'testrail_case_field', description: "refs:TR-6" });

    // Check and then immediately uncheck.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "1. Check and uncheck todo" });
    await page.locator('.toggle-all').check();
    await page.locator('.toggle-all').uncheck();

    // Should be no completed classes.
    testInfo.annotations.push({ type: 'testrail_result_comment', description: "2. Verify todo is not checked" });
    await expect(page.locator('.todo-list li')).toHaveClass(['', '', '']);
  });
});

async function createDefaultTodos(page) {
  for (const item of TODO_ITEMS) {
    await page.locator('.new-todo').fill(item);
    await page.locator('.new-todo').press('Enter');
  }
}

/**
 * @param {import('@playwright/test').Page} page
 * @param {number} expected
 */
 async function checkNumberOfTodosInLocalStorage(page, expected) {
  return await page.waitForFunction(e => {
    return JSON.parse(localStorage['react-todos']).length === e;
  }, expected);
}

/**
 * @param {import('@playwright/test').Page} page
 * @param {number} expected
 */
 async function checkNumberOfCompletedTodosInLocalStorage(page, expected) {
  return await page.waitForFunction(e => {
    return JSON.parse(localStorage['react-todos']).filter(i => i.completed).length === e;
  }, expected);
}

/**
 * @param {import('@playwright/test').Page} page
 * @param {string} title
 */
async function checkTodosInLocalStorage(page, title) {
  return await page.waitForFunction(t => {
    return JSON.parse(localStorage['react-todos']).map(i => i.title).includes(t);
  }, title);
}
