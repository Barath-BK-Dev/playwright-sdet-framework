import { expect, Locator, Page } from "@playwright/test";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeading: Locator;

  readonly sidebar: Sidebar;
  readonly header: Header;

  constructor(page: Page) {
    this.page = page;

    this.dashboardHeading = page.getByRole("heading", {
      name: "Dashboard",
    });

    this.sidebar = new Sidebar(page);
    this.header = new Header(page);
  }

  async verifyDashboardLoaded() {
    await expect(this.dashboardHeading).toBeVisible();
  }
}
