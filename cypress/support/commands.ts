Cypress.Commands.add('getByTest', (id: string) => {
    return cy.get(`[data-test="${id}"]`)
})

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.visit('/')
    cy.getByTest('username').clear().type(username)
    cy.getByTest('password').clear().type(password, { log: false })
    cy.getByTest('login-button').click()
})

declare global {
    namespace Cypress {
        interface Chainable {
            getByTest(id: string): Chainable<JQuery<HTMLElement>>
            login(username: string, password: string): Chainable<void>
        }
    }
}

export { }