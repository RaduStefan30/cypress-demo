export class CartPage {
    expectOnPage() {
        cy.url().should('include', '/cart')
    }

    expectItemPresent(name: string) {
        cy.get('[data-test="inventory-item-name"], .inventory_item_name').contains(name).should('be.visible')
    }

    checkout() {
        cy.get('[data-test="checkout"]').click()
    }
}