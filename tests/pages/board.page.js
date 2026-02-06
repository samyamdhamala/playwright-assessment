const { expect } = require("@playwright/test");

class BoardPage {
  constructor(page) {
    this.page = page;
  }

  async openProject(projectName) {
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

    // Find card title (NOT exact — UI wraps text)
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
