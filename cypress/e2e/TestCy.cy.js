describe('Prueba b�sica con Cypress', () => {
  it('Visita la p�gina y verifica el t�tulo', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })

  it('Interact�a con un bot�n', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-btn').click()
    cy.get('.action-btn').should('have.class', 'clicked')
  })
})
