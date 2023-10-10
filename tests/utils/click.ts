import type { Page } from "@playwright/test";

export async function click(page: Page, id: string) {
  // this util doesn't work...
  await page.getByTestId(id).click();
}