

context('Detail page', () => {

  const response = { data: null, current: null }
  const itemId = 'qwe'

  it('should load page and major data', () => {
    cy.server()
    cy.route('/phones.json').as('getPhones')
    cy.visit(`/${itemId}`)
    cy.wait('@getPhones').then(xhr => {
      response.data = xhr.response.body
      response.current = response.data.find(item => item.id === itemId)
    })
  })

  it('should contain loaded data', () => {

    cy.get('[data-cy=detail-container]').should('have.length', 1)
    cy.get('[data-cy=detail-img]').should('have.attr', 'src', response.current.image)
    cy.get('[data-cy=phone-list-item-title]').find('h3').should('contain', response.current.title)
    cy.get('[data-cy=phone-list-item-description]').find('p').should('contain', response.current.description)
    cy.get('[data-cy=phone-list-item-price]').should('contain', `$${response.current.price}`)
  })

  it('should be able return home', () => {
    cy.get('[data-cy=home-button]').should('have.length', 1)
    cy.get('[data-cy=home-button]').should('have.attr', 'href', '/')
    cy.get('[data-cy=home-button]').click()

    cy.location('pathname')
      .should('eq', '/')
  })


})