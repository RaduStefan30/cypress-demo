export class ProductsPage {
    private nameSel = '[data-test="inventory-item-name"], .inventory_item_name'
    private priceSel = '[data-test="inventory-item-price"], .inventory_item_price'

    expectOnPage() {
        cy.location('pathname', { timeout: 20000 }).should('include', '/inventory')
        this.sortControl().should('be.visible')
        cy.get(this.nameSel).should('have.length.greaterThan', 0)
    }

    private sortControl() {
        return cy.get(
            '[data-test="product_sort_container"], #product_sort_container, .product_sort_container',
            { timeout: 15000 }
        )
    }

    sortBy(value: 'az' | 'za' | 'lohi' | 'hilo') {
        this.sortControl().scrollIntoView().should('be.enabled').select(value)
    }

    getProductNames(): Cypress.Chainable<string[]> {
        return cy.get(this.nameSel).then($els =>
            Array.from($els, el => (el.textContent || '').trim())
        )
    }

    getProductPrices(): Cypress.Chainable<number[]> {
        return cy.get(this.priceSel).then($els =>
            Array.from($els, el => parseFloat((el.textContent || '').replace('$', '')))
        )
    }

    addToCartByName(name: string) {
        cy.contains(this.nameSel, name)
            .parents('[data-test="inventory-item"], .inventory_item')
            .within(() => {
                cy.get('button[data-test^="add-to-cart"], button')
                    .contains(/add to cart/i)
                    .click()
            })
    }
}
