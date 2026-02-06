const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await expect(
      this.page.getByRole("heading", { name: "Project Board Login" })
    ).toBeVisible();
  }

  async signIn() {
    await this.page.getByLabel("Username").fill("admin");
    await this.page.getByLabel("Password").fill("password123");
    await this.page.getByRole("button", { name: "Sign in" }).click();

    // Unique confirmation after login
    await expect(this.page.getByText("Projects", { exact: true })).toBeVisible();
  }
}

module.exports = { LoginPage };
