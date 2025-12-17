// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('');
})

test.skip('Create a new `Guess` component. 6 instances should be rendered at all times, no matter how many guesses have been submitted.', () => { })

test('The `Guess` component should render 5 spans, each with the class of `cell`.', async ({ page }) => {
    const cells = page.locator("span.cell")

    await expect(cells).toHaveCount(30)
});

test('Each cell should contain a letter, if the `Guess` instance has been given a value. If not, the cell should be blank.', async ({ page }) => {
    const cells = page.locator("span.cell")

    await expect(cells.first()).toHaveText("")

    const input = page.locator("input")
    await input.fill("ABCDE")
    await input.press("Enter")

    await expect(cells.first()).toHaveText("A")
});

test.skip('Use the `NUM_OF_GUESSES_ALLOWED` constant, when needed.', () => { })

test("No `key` warnings in the console.", async ({ page }) => {
    const keyWarnings = []

    page.on("console", (msg) => {
        if (msg.type() === "error" && msg.text().includes("key")) {
            keyWarnings.push(msg.text())
        }
    })

    const input = page.locator("input")

    await input.fill("ABCDE")
    await input.press("Enter")

    await input.fill("KEYUP")
    await input.press("Enter")

    await input.fill("TOOLONG")
    await input.press("Enter")

    await input.fill("KEYUP")
    await input.press("Enter")

    await input.fill("FAIL")
    await input.press("Enter")

    expect(keyWarnings).toHaveLength(0)
})
