describe('Pretraživanje stranice pomoću tražilice', () => {

  it('student pretražuje stranicu pomoću tražilice', () => {

    cy.viewport(1920, 1080)
      
    cy.visit('https://www.ffos.unios.hr/')

    cy.get('input[type="search"]')
    .first()
    .type('upisi 2026')

    cy.get('input[type="search"]')
    .first()
    .type('{enter}')

      cy.contains('upisi 2026')
    .should('be.visible')

    })

})