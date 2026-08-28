import { Locator, Page } from "@playwright/test";

export class Header {
  readonly page: Page;
  readonly userDropdown: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userDropdown = page.locator(".oxd-userdropdown-tab");
  }

  async openUserMenu() {
    await this.userDropdown.click();
  }

  async logout() {
    await this.openUserMenu();

    await this.page
      .getByText("Logout", {
        exact: true,
      })
      .click();
  }
}
