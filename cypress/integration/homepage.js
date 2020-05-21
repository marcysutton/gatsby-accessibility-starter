beforeEach(() => {
    cy.visit('http://localhost:8000')
    cy.injectAxe()
})

it('Has no detectable accessibility violations on load', () => {
    // Test the page at initial load
    cy.checkA11y()
})