import { expect, Locator, Page } from "@playwright/test";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { routes } from "../constants/routes";

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

  async goto() {
    await this.page.goto(routes.dashboard);
  }

  async verifyDashboardLoaded() {
    console.log("Current URL:", this.page.url());
    console.log("Page title:", await this.page.title());

    await expect(this.page).toHaveURL(/dashboard/);
  }
}
