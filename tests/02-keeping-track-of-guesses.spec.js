// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('');
})
test.skip(`A new component should be created, to render previous guesses.`, () => { })

test('When the user submits their guess, that value should be rendered within this new component.', async ({ page }) => {
    const input = page.locator("input")
    const results = page.locator(".guess-results")
    await input.fill("ABCDE")
    await input.press("Enter")

    await input.fill("FOUR")
    await input.press("Enter")

    await input.fill("GUESS")
    await input.press("Enter")

    await expect(results).toContainText("ABCDE")
    await expect(results).toContainText("GUESS")
    await expect(results).not.toContainText("FOUR")
});

test(`There should be no key warnings in the console!`, async ({ page }) => {
    const keyWarnings = []

    page.on("console", (msg) => {
        if (msg.type() === "error" && msg.text().includes("key")) {
            keyWarnings.push(msg.text())
        }
    })

    const input = page.locator("input")

    await input.fill("ABCDE")
    await input.press("Enter");

    await input.fill("SCRUM")
    await input.press("Enter");

    expect(keyWarnings).toHaveLength(0)
})
