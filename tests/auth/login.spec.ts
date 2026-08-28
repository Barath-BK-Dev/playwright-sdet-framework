import { test } from "../../fixtures/base.fixture";
import { users } from "../../test-data/users";

test("Use can login Succesfully", async ({ loginPage, dashboardPage }) => {
  await loginPage.goto();
  await loginPage.login(users.admin.username, users.admin.password);
  await dashboardPage.verifyDashboardLoaded();
});
