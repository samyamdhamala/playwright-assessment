const { test } = require("@playwright/test");

const webCases = require("./data/webCases.json");
const mobileCases = require("./data/mobileCases.json");

const { LoginPage } = require("./pages/login.page");
const { BoardPage } = require("./pages/board.page");

const cases = [...webCases, ...mobileCases];

test.describe("Data Driven Project Board Tests", () => {
  for (const c of cases) {
    test(`${c.id} - ${c.task}`, async ({ page }) => {
      const login = new LoginPage(page);
      const board = new BoardPage(page);

      await login.open();
      await login.signIn();

      await board.openProject(c.project);
      await board.expectCardInColumnWithTags(
        c.column,
        c.task,
        c.tags
      );
    });
  }
});
