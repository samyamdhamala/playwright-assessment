/**
 * LoginPage
 * -----------
 * Page Object representing the authentication screen.
 * Handles navigation to the app and signing in.
 * Keeps login logic separate from test flow.
 */

const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    //app entry point navigation
    await this.page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    
    // assert login page is loaded
    await expect( 
      this.page.getByRole("heading", { name: "Project Board Login" })
    ).toBeVisible();
  }

  async signIn() {
    await this.page.getByLabel("Username").fill("admin");
    await this.page.getByLabel("Password").fill("password123");
    await this.page.getByRole("button", { name: "Sign in" }).click();

    // Check Unique confirmation to verify login sucess  
    await expect(this.page.getByText("Projects", { exact: true })).toBeVisible();
  }
}

module.exports = { LoginPage };
