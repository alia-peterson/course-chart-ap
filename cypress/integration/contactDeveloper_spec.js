describe('Dashboard View', () => {
  const baseUrl = 'http://localhost:3000/'
  const coursesApi = 'https://course-chart-be.herokuapp.com/courses'
  const course1Api = 'https://course-chart-be.herokuapp.com/courses/1'

  beforeEach(() => {
    cy.intercept('GET', coursesApi, { fixture: 'courses-api' })
    cy.visit(baseUrl)
    .get('nav').find('a').eq(3).click().wait(300)
  })

  it('Should have a page title matching the url', () => {
    cy.get('h2').contains('Meet the Developers')
  })

  it('Should contain all of the developers names', () => {
    cy.get('h3').should('have.length', '6')
    cy.get('h3').eq(0).contains('Gus Cunningham')
  })

  // it('Should contain an image for all developers', () => {
  //   cy.get('img').eq(3)
  //     .should('be.visible')
  //     .should('have.attr', 'alt', 'Gus Github')
  //   cy.get('img').eq(5)
  //     .should('be.visible')
  //     .should('have.attr', 'alt', 'Alice Github')
  //   cy.get('img').eq(7)
  //     .should('be.visible')
  //     .should('have.attr', 'alt', 'Ely Github')
  //   cy.get('img').eq(9)
  //     .should('be.visible')
  //     .should('have.attr', 'alt', 'Alia Github')
  //   cy.get('img').eq(11)
  //     .should('be.visible')
  //     .should('have.attr', 'alt', 'Cameron Github')
  //   cy.get('img').eq(13)
  //     .should('be.visible')
  //     .should('have.attr', 'alt', 'Lucas Github')
  // })

  // it('Should contain a Github link for all developers', () => {
  //   cy.get('a').eq(5)
  //     .contains('GitHub Profile')
  //   cy.get('a').eq(7)
  //     .contains('GitHub Profile')
  //   cy.get('a').eq(9)
  //     .contains('GitHub Profile')
  //   cy.get('a').eq(11)
  //     .contains('GitHub Profile')
  //   cy.get('a').eq(13)
  //     .contains('GitHub Profile')
  //   cy.get('a').eq(15)
  //     .contains('GitHub Profile')
  // })

  it('Should contain a LinkedIn link for all developers', () => {
    cy.get('a').eq(6)
      .contains('LinkedIn Profile')
    cy.get('a').eq(8)
      .contains('LinkedIn Profile')
    cy.get('a').eq(10)
      .contains('LinkedIn Profile')
    cy.get('a').eq(12)
      .contains('LinkedIn Profile')
    cy.get('a').eq(14)
      .contains('LinkedIn Profile')
    cy.get('a').eq(16)
      .contains('LinkedIn Profile')
  })

})