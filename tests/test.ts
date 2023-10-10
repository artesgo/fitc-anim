import { test, expect } from '@playwright/test';
import { assert } from './utils';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	assert(page, 'test', "It wasn't suppose to be...");
	await expect(page.getByRole("button", { name: "Go Next" })).toBeVisible();
	await page.getByTestId("tester").click();
	assert(page, 'dead', "Resurrecting the dead (form)");
	await page.getByTestId("tester").click();
	await page.getByTestId("tester").click();
	await page.getByTestId("tester").click();
	await page.getByTestId("tester").click();
});
