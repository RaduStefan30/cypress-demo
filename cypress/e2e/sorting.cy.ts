import users from '../fixtures/users.json'
import { LoginPage } from '../pages/LoginPage'
import { ProductsPage } from '../pages/ProductsPage'

const login = new LoginPage()
const products = new ProductsPage()

describe('Products sorting', () => {
    beforeEach(() => {
        login.visit()
        login.loginAs(users.valid.username, users.valid.password)
        products.expectOnPage()
    })

    it('Test case 3: applies all sorting options and verifies correct order', () => {
        products.sortBy('az')
        products.getProductNames().then((names) => {
            const sorted = [...names].sort((a, b) => a.localeCompare(b))
            expect(names, 'Name A→Z').to.deep.equal(sorted)
        })

        products.sortBy('za')
        products.getProductNames().then((names) => {
            const sorted = [...names].sort((a, b) => b.localeCompare(a))
            expect(names, 'Name Z→A').to.deep.equal(sorted)
        })

        products.sortBy('lohi')
        products.getProductPrices().then((prices) => {
            const sorted = [...prices].sort((a, b) => a - b)
            expect(prices, 'Price low→high').to.deep.equal(sorted)
        })

        products.sortBy('hilo')
        products.getProductPrices().then((prices) => {
            const sorted = [...prices].sort((a, b) => b - a)
            expect(prices, 'Price high→low').to.deep.equal(sorted)
        })
    })
})