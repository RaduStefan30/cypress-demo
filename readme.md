# SauceDemo E2E (Cypress + TypeScript)

End-to-end UI tests for https://www.saucedemo.com/ written with Cypress 13.x and TypeScript.

## Stack
- Node 22 LTS
- Yarn
- Cypress 13.x (E2E)
- TypeScript
- Page Objects + custom commands
- GitHub Actions CI

## Getting started
1. **Install Node 22 LTS** and **Yarn**.
2. Clone this repo, then install deps:
   ```bash
   yarn

3. (Optional) Create `cypress.env.json` to override credentials:

   ```json
   {
     "validUsername": "standard_user",
     "validPassword": "secret_sauce",
     "lockedUsername": "locked_out_user"
   }
   ```

## Run tests locally

* **Open runner (GUI):**

  ```bash
  yarn cy:open
  ```
* **Headless (default browser):**

  ```bash
  yarn test
  ```

## Test cases covered

1. **Invalid auth** (locked account) → asserts expected error text.
2. **Valid auth** → user lands on Products page.
3. **Sorting** on Products → verifies A→Z, Z→A, Price low→high, high→low.
4. **Checkout** → adds a specific item, completes flow, asserts “Thank you for your order”.

## Structure

```
cypress/
  e2e/                # test specs
  fixtures/           # test data
  pages/              # Page Objects (Login, Products, Cart, Checkout...)
  support/            # custom commands + bootstrap
```
