// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('');
})
test.skip(`Create a new component.`, () => { })

test('This component should render a `<form>` tag, including a label and a text input.', async ({ page }) => {
  await expect(page.locator("form")).toBeAttached();
  await expect(page.locator("form label")).toBeAttached();
  await expect(page.locator("form input[type=text]")).toBeAttached();
});

test.skip(`The text input should be controlled by React state.`, () => { });

test.describe(`When the form is submitted`, () => {
  test(`The entered value should be logged to the console (for now).`, async ({ page }) => {
    const msgPromise = page.waitForEvent("console")

    const input = page.locator("input")
    await input.fill("ABCDE")
    await input.press("Enter");

    let consoleMessage = await msgPromise;

    expect(consoleMessage.text()).toContain("ABCDE")
  })

  test(`The input should be reset to an empty string.`, async ({ page }) => {
    const input = page.locator("input")
    await input.fill("FGHIJ")
    await input.press("Enter");

    await expect(input).toHaveValue('')
  })
})

test(`**The user's input should be converted to ALL UPPERCASE.** No lower-case letters allowed.`, async ({ page }) => {
  const msgPromise = page.waitForEvent("console")

  const input = page.locator("input")
  await input.fill("stork")
  await input.press("Enter");

  let consoleMessage = await msgPromise;

  expect(consoleMessage.text()).toContain("STORK")
})
test(`The input should have a minimum and maximum length of 5.`, async ({ page }) => {
  // TODO: Bind to the submit event on the form element.
  // This test assumes if the field is empty, the value was accepted!
  const input = page.locator("input")
  await input.fill("FOUR")
  await input.press("Enter");

  await expect(input).not.toHaveValue("");

  await input.fill("MORETHANFIVE")
  await input.press("Enter");

  await expect(input).not.toHaveValue("");
})
