import { test as setup } from "@playwright/test";
import { loginAs } from "../utils/auth";

const authFile = "auth/admin.json";

setup("authenticate as admin", async ({ page }) => {
  await loginAs(page, "admin");

  await page.waitForURL("**/dashboard/**");

  await page.context().storageState({
    path: authFile,
  });
});
