import users from '../fixtures/users.json'
import { LoginPage } from '../pages/LoginPage'
import { ProductsPage } from '../pages/ProductsPage'
import { Header } from '../pages/Header'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'

const login = new LoginPage()
const products = new ProductsPage()
const header = new Header()
const cart = new CartPage()
const checkout = new CheckoutPage()

describe('Checkout flow', () => {
    it('Test case 4: buys an item and completes checkout', () => {
        const itemName = 'Sauce Labs Backpack'

        login.visit()
        login.loginAs(users.valid.username, users.valid.password)
        products.expectOnPage()

        products.addToCartByName(itemName)
        header.expectCartBadge(1)
        header.openCart()

        cart.expectOnPage()
        cart.expectItemPresent(itemName)
        cart.checkout()

        checkout.fill('Radu', 'QA', '400000')
        checkout.continue()

        checkout.expectOnPage()
        checkout.expectItemPresent(itemName)
        checkout.finish()

        checkout.expectOrderComplete()
    })
})