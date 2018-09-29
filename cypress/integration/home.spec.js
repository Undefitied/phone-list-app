
context('Home page', () => {

  const response = { data: null }

  it('should load page and major data', () => {
    cy.server()
    cy.route('/phones.json').as('getPhones')
    cy.visit('/')
    cy.wait('@getPhones').then(xhr => {
      response.data = xhr.response.body
    })
  })

  it('should contain loaded data', () => {
    cy.get('[data-cy=phone-list-item]')
      .should('have.length', response.data.length)

    cy.get('[data-cy=phone-list-item]')
      .each(($eachEl, index) => {
        expect( $eachEl.find('[data-cy=phone-list-link]') )
          .to.have.attr('href', `/${response.data[index].id}`)

        expect( $eachEl.find('[data-cy=phone-list-item-img]') )
          .to.have.attr('src', response.data[index].image)

        expect( $eachEl.find('[data-cy=phone-list-item-title]').find('h3') )
          .to.contain(response.data[index].title)

        expect( $eachEl.find('[data-cy=phone-list-item-description]').find('p') )
          .to.contain(response.data[index].description)

        expect( $eachEl.find('[data-cy=phone-list-item-price]') )
          .to.contain('$' + response.data[index].price)
      })
  })

  it('should navigate on click', () => {
    cy.get('[data-cy=phone-list-item]').first().click()

    cy.location('pathname')
      .should('include', `/${response.data[0].id}`)
  })

})
