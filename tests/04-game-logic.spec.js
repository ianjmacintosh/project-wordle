/*
- Import the `checkGuess` function from `/src/game-helpers.js`, and use it to validate each of the user's guesses
- When rendering the letters in the `Guess` component, apply the letter's `status` to the `cell` element.
- "Empty" guess slots should have the same markup as before: `<span class="cell"></span>`.
*/

// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('');
})
test.skip("Import the `checkGuess` function from `/src/game-helpers.js`, and use it to validate each of the user's guesses", () => { })

test.skip("When rendering the letters in the `Guess` component, apply the letter's `status` to the `cell` element.", async ({ page }) => {

    // TODO: Implement this. It's kind of nutty now, and also what if a student has a string of "XXXXX" for an answer?
    let answer = undefined

    // TODO: Make this more robust. Now it relies on the only console info being the answer in the default format
    page.on("console", async (msg) => {
        if (msg.type() === "info") {
            answer = await msg.args()[0].jsonValue()
        }
    })

    await page.goto('');

    await expect(typeof answer).toBe("string")

    // Guess should have >=1 correct, >=1 misplaced, >=1 incorrect
    let i = 0

    // Correct char:
    let guess = answer.charAt(i);

    // Misplaced char:
    while (answer.charAt(i) === answer.charAt(i + 1)) i += 1
    guess += answer.charAt(i)

    // Incorrect char:



});

test('"Empty" guess slots should have the same markup as before: `<span class="cell"></span>`.', async ({ page }) => {
    const emptyGuessSlots = await page.locator(".cell")

    await expect(emptyGuessSlots).toHaveCount(30)

    // Get all matching elements
    const allCells = await emptyGuessSlots.all()

    // Check each element has exactly "cell" as its class attribute
    for (const cell of allCells) {
        await expect(cell).toHaveAttribute('class', 'cell')
    }
})
