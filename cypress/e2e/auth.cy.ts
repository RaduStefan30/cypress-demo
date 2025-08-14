import users from "../fixtures/users.json";
import constants from "../fixtures/constants.json";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

const login = new LoginPage();
const products = new ProductsPage();

describe("Authentication", () => {
    it("Test case 1: shows expected error for a non-valid user (locked account)", () => {
        login.visit();
        login.loginAs(users.locked.username, users.locked.password);
        login.expectErrorContains(constants.messages.lockedOut);
    });

    it("Test case 2: logs in successfully with a valid user", () => {
        login.visit();
        login.loginAs(users.valid.username, users.valid.password);
        products.expectOnPage();
    });
});
