describe('TS-003: Provjera e-mail adresa nastavnika Odsjeka za informacijske znanosti', () => {

  it('Svaki nastavnik ima ispravno napisan e-mail', () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    cy.viewport(1920, 1080);

    cy.visit('https://www.ffos.unios.hr/');

    cy.contains('Odsjeci i katedre')
      .realHover();

    cy.contains('Odsjek za informacijske znanosti')
      .click();

    cy.contains('Nastavnici')
      .click();

    cy.url().should('include', '/nastavnici');

    cy.get('tbody tr').should('have.length.greaterThan', 0);

    cy.get('tbody tr').each(($row) => {

      const cells = $row.find('td');

      if (cells.length < 2) return;

      const ime = Cypress.$(cells[0]).text().trim();

      const email = Cypress.$(cells[1])
        .text()
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
        .replace(/\s+/g, '')
        .trim();

     expect(email).to.not.be.empty;

expect(email).to.match(emailRegex);

    });

  });

});