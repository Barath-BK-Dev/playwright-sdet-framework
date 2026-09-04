import { routes } from "../../constants/routes";
import { test, expect } from "../../fixtures/base.fixture";

test("admin can access Admin module @smoke @regression", async ({ page }) => {
  await page.goto(routes.adminUsers);

  await expect(page.getByText("System Users", { exact: true })).toBeVisible();
});
