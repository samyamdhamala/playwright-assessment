/**
 * BoardPage
 * ----------
 * Page Object representing the project board after login.
 * Responsible for opening projects and validating cards, columns, and tags.
 */

const { expect } = require("@playwright/test");

class BoardPage {
  constructor(page) {
    this.page = page;
  }

  async openProject(projectName) {
    // select project dynamically using role+name and confirm
    await this.page
      .getByRole("button", { name: new RegExp(`^${projectName}`, "i") })
      .click();
  
    await expect(
      this.page
        .getByRole("banner")
        .getByRole("heading", { name: projectName })
    ).toBeVisible();
  }

  async expectCardInColumnWithTags(columnName, cardTitle, tags) {
    // Find column by heading
    const columnHeading = this.page.getByRole("heading", {
      name: columnName,
    });
    const column = columnHeading.locator("xpath=..");

    // Find card title (text may be wrapped in UI)
    const title = column.getByText(cardTitle).first();
    await expect(title).toBeVisible({ timeout: 10000 });

    // Go up to card container
    const card = title.locator("xpath=ancestor::div[1]");

    // Verify tags within the same card
    for (const tag of tags) {
         await expect(card.locator("span", { hasText: tag }).first()).toBeVisible();
    }
  }
}

module.exports = { BoardPage };
