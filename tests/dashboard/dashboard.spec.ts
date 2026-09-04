import { test } from "../../fixtures/base.fixture";

test("authenticated user can access dashboard @smoke @regression", async ({
  dashboardPage,
}) => {
  await dashboardPage.goto();
  await dashboardPage.verifyDashboardLoaded();
});
