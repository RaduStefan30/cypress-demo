export class Header {
    openCart() {
        cy.get('[data-test="shopping-cart-link"]').click()
    }

    expectCartBadge(count: number) {
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', String(count))
    }
}