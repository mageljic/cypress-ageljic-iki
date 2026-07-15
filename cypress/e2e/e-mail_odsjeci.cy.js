describe('TS-004: Provjera e-mail adresa nastavnika drugog odsjeka', () => {

  it('Svaki nastavnik ima ispravno napisan e-mail', () => {

    Cypress.on('uncaught:exception', (err) => {
  console.log(err.message);
  return false;
});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    cy.viewport(1920, 1080);

     cy.visit('https://www.ffos.unios.hr/');

    cy.contains('Odsjeci i katedre')
      .realHover();

    cy.contains('Odsjek za povijest')
      .click();

    cy.contains('Nastavnici')
      .click();

    cy.url().should('include', '/nastavnici');
  
    cy.get('li a[href*="/nastavnik/"]')
      .then(($profili) => {

        const profili = [];

        $profili.each((index, element) => {
          profili.push(element.href);
        });

      
        profili.forEach((profil) => {

          cy.visit(profil);

          cy.get('a[href^="mailto:"]')
            .should('exist')
            .invoke('attr', 'href')
            .then((href) => {

              const email = href
                .replace('mailto:', '')
                .trim();

              expect(email).to.not.be.empty;
              expect(email).to.match(emailRegex);

            });

        });

      });

  });

});