import { Locator, Page } from "@playwright/test";

export class Sidebar {
  readonly page: Page;
  readonly adminMenu: Locator;
  readonly pimMenu: Locator;
  readonly leaveMenu: Locator;
  readonly recruitmentMenu: Locator;
  readonly dashboardMenu: Locator;

  constructor(page: Page) {
    this.page = page;

    this.adminMenu = page.getByText("Admin", { exact: true });
    this.pimMenu = page.getByText("PIM", { exact: true });
    this.leaveMenu = page.getByText("Leave", { exact: true });
    this.recruitmentMenu = page.getByText("Recruitment", {
      exact: true,
    });
    this.dashboardMenu = page.getByText("Dashboard", {
      exact: true,
    });
  }

  async goToDashboard() {
    await this.dashboardMenu.click();
  }

  async goToAdmin() {
    await this.adminMenu.click();
  }

  async goToPIM() {
    await this.pimMenu.click();
  }

  async goToLeave() {
    await this.leaveMenu.click();
  }

  async goToRecruitment() {
    await this.recruitmentMenu.click();
  }
}
