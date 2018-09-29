

context('Now Found page', () => {

  const itemId = 'someCustomId'

  it('should load 404 page', () => {
    cy.server()
    cy.route('/phones.json').as('getPhones')
    cy.visit(`/${itemId}`)
    cy.wait('@getPhones')
    cy.location('pathname')
      .should('eq', '/404')
  })

  it('should contain data', () => {
    cy.get('[data-cy=not-found-title]').should('have.length', 1)
    cy.get('[data-cy=not-found-title]').should('contain', 'Page not found, sorry')
  })

  it('should be able return home', () => {
    cy.get('[data-cy=home-button]').should('have.length', 1)
    cy.get('[data-cy=home-button]').should('have.attr', 'href', '/')
    cy.get('[data-cy=home-button]').click()

    cy.location('pathname')
      .should('eq', '/')
  })


})