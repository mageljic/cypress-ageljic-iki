describe('Preuzimanje rasporeda sati za za studij informatologije', () => {

  it('student pronalazi odsjek i preuzima raspored sati', () => {

    cy.viewport(1920, 1080)
      
    cy.visit('https://www.ffos.unios.hr/')

    cy.contains('Odsjeci i katedre')
    .realHover()

    cy.contains('Odsjek za informacijske znanosti')
    .should('be.visible')
    .click()

    cy.contains('Raspored sati')
    .scrollIntoView()

    cy.contains('Raspored sati')
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('Raspored sati')
    .click()

    cy.contains('Informatologija, Nakladništvo i Informacijske tehnologije')
    .invoke('attr', 'href')
    .then((href) => {
    cy.request(href)
      .its('status')
      .should('eq', 200)
  })

  })

})