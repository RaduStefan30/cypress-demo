export class CheckoutPage {
    fill(first: string, last: string, postal: string) {
        cy.get('[data-test="firstName"]').clear().type(first)
        cy.get('[data-test="lastName"]').clear().type(last)
        cy.get('[data-test="postalCode"]').clear().type(postal)
    }

    continue() {
        cy.get('[data-test="continue"]').click()
    }

    expectOnPage() {
        cy.url().should('include', '/checkout-step-two')
    }

    expectItemPresent(name: string) {
        cy.get('[data-test="inventory-item-name"], .inventory_item_name').contains(name).should('be.visible')
    }

    finish() {
        cy.get('[data-test="finish"]').click()
    }

    expectOrderComplete() {
        cy.url().should('include', '/checkout-complete')
        cy.get('[data-test="complete-header"], .complete-header').should('contain.text', 'Thank you for your order')
    }
}