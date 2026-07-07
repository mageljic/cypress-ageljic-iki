describe('TS-002: Pretraživanje stranice pomoću tražilice', () => {

  it('student pretražuje stranicu pomoću tražilice', () => {

    cy.viewport(1920, 1080)
      
    cy.visit('https://www.ffos.unios.hr/')

    cy.get('input[type="search"]')
    .first()
    .type('upisi 2026')

    cy.get('input[type="search"]')
    .first()
    .type('{enter}')

cy.get('body').then(($body) => {

  if ($body.find('section.no-results').length > 0) {
    throw new Error('Pretraga nije vratila nijedan rezultat.')
  }

  cy.get('.alm-results-total_posts')
    .should(($span) => {
      expect(parseInt($span.text(), 10)).to.be.greaterThan(0)
    })

})
    })

})