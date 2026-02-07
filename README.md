# Playwright Data-Driven Project Board Tests

This repository contains a **Playwright-based automated test suite written in JavaScript** that validates a demo project board application using **data-driven testing**.  
All test scenarios are driven from JSON files to minimize code duplication and improve scalability.

---


## 🔗 Demo Application

- **URL:** https://animated-gingersnap-8cf7f2.netlify.app/
- **Username:** admin
- **Password:** password123

---

## 📁 Project Structure

```text
.
├── data/
│   ├── webCases.json        # Web test scenarios
│   ├── mobileCases.json     # Mobile test scenarios
|   ├── marketingCases.json  # Maketing test scenarios (future expansion)
│
├── pages/
│   ├── login.page.js        # Login page actions and assertions
│   ├── board.page.js        # Project board interactions and validations
│
├── project.test.js          # Data-driven test runner
├── playwright.config.js
|── README.md
```

## ▶️ How to Run the Tests

### Prerequisites
- Node.js (v16 or later)
- npm

### Install Dependencies
```bash
npm install
npx playwright install
```

### Run All Tests
```bash
npx playwright test
```

### Run All Tests in Headed Mode
```bash
npx playwright test --headed
```

### Run All Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run All Tests in a specific browser
```bash
npx playwright test --project=chromium
```

### View Test Report
```bash
npx playwright show-report
```
---
## ✅ Acceptance Criteria Coverage

- ✔ Written in **JavaScript**
- ✔ Uses **Playwright**
- ✔ Fully **data-driven** using external JSON
- ✔ Login automation implemented
- ✔ Validates all required Web and Mobile test cases
- ✔ Clean, maintainable Page Object Model structure
---

## 👤 Author

**Samyam Dhamala**  
QA / Automation Engineer  
