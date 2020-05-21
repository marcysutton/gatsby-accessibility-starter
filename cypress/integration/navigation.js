beforeEach(() => {
    cy.visit('http://localhost:8000')
})

it('has an accessible menu', () => {
    const menuButton = cy.get('[data-test-id="menu"] button')
    menuButton.focus()
    menuButton.type('{enter}')

    menuButton.should('have.attr', 'aria-expanded', 'true')
    cy.focused().should('have.attr', 'role', 'menu')
})