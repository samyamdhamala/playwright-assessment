/**
 * Data Driven Project Board Tests
 * --------------------------------
 * Executes board validation scenarios using external JSON data.
 * Combines web and mobile test cases to avoid duplication.
 */

const { test } = require("@playwright/test");

const webCases = require("./data/webCases.json");
const mobileCases = require("./data/mobileCases.json");

const { LoginPage } = require("./pages/login.page");
const { BoardPage } = require("./pages/board.page");

const cases = [...webCases, ...mobileCases];

test.describe("Data Driven Project Board Tests", () => {
  
  // run test flow for each scenario
  for (const c of cases) {
    test(`${c.id} - ${c.task}`, async ({ page }) => {

      // initilize page objects
      const login = new LoginPage(page);
      const board = new BoardPage(page);

      //authenticate
      await login.open();
      await login.signIn();

      // validate board behaviour 
      await board.openProject(c.project);
      await board.expectCardInColumnWithTags(
        c.column,
        c.task,
        c.tags
      );
    });
  }
});
