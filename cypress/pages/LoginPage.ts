export class LoginPage {
    visit() {
        cy.visit('/')
    }

    loginAs(username: string, password: string) {
        cy.get('[data-test="username"]').clear().type(username)
        cy.get('[data-test="password"]').clear().type(password, { log: false })
        cy.get('[data-test="login-button"]').click()
    }

    expectErrorContains(text: string) {
        cy.get('[data-test="error"], .error-message-container')
            .should('be.visible')
            .and('contain.text', text)
    }
}