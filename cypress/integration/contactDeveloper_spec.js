describe('Dashboard View', () => {
  const baseUrl = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('.contact').click().wait(200)
  })

  it('Should have a page title matching the url', () => {
    cy.get('h2').contains('Meet the Developers')
  })

  it('Should contain all of the developers names', () => {
    cy.get('h3').should('have.length', '6')
    cy.get('h3').eq(0).contains('Gus Cunningham')
  })

  it('Should contain an image for all developers', () => {
    cy.get('img').eq(1)
      .should('be.visible')
      .should('have.attr', 'alt', 'Gus Github')
    cy.get('img').eq(3)
      .should('be.visible')
      .should('have.attr', 'alt', 'Alice Github')
    cy.get('img').eq(5)
      .should('be.visible')
      .should('have.attr', 'alt', 'Ely Github')
    cy.get('img').eq(7)
      .should('be.visible')
      .should('have.attr', 'alt', 'Alia Github')
    cy.get('img').eq(9)
      .should('be.visible')
      .should('have.attr', 'alt', 'Cameron Github')
    cy.get('img').eq(11)
      .should('be.visible')
      .should('have.attr', 'alt', 'Lucas Github')
  })

  it('Should contain a Github link for all developers', () => {
    cy.get('a').eq(0)
      .contains('GitHub Profile')
    cy.get('a').eq(2)
      .contains('GitHub Profile')
    cy.get('a').eq(4)
      .contains('GitHub Profile')
    cy.get('a').eq(6)
      .contains('GitHub Profile')
    cy.get('a').eq(8)
      .contains('GitHub Profile')
    cy.get('a').eq(10)
      .contains('GitHub Profile')
  })

  it('Should contain a LinkedIn link for all developers', () => {
    cy.get('a').eq(1)
      .contains('LinkedIn Profile')
    cy.get('a').eq(3)
      .contains('LinkedIn Profile')
    cy.get('a').eq(5)
      .contains('LinkedIn Profile')
    cy.get('a').eq(7)
      .contains('LinkedIn Profile')
    cy.get('a').eq(9)
      .contains('LinkedIn Profile')
    cy.get('a').eq(11)
      .contains('LinkedIn Profile')
  })

})