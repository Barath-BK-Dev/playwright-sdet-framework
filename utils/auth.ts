import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../test-data/users";
import { Role } from "../constants/roles";

export async function loginAs(page: Page, role: Role) {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  switch (role) {
    case "admin":
      await loginPage.login(users.admin.username, users.admin.password);
      break;

    default:
      throw new Error(`Unsupported role: ${role}`);
  }
}
