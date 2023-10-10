import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export async function assert(page: Page, id: string, assertion: string) {
  await expect(page.getByTestId(id)).toContainText(assertion);
}
