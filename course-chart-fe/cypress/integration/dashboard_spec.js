context('Dashboard View', () => {
  const baseUrl = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Has a title', () => {
    cy.get('h1').should('have.text', 'Course Chart')
  })
})
