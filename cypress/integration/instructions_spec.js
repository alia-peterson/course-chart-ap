context('Add Module Form', () => {
  const baseUrl = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Goes to an istructions page when the link in the sidebar is clicked', () => {
    // cy.get('.sidebar').get('.instructions-link').click()
    // cy.url().should('include', '/instructions')
  })

  it('Gives an overview of the site and how to use it', () => {
    // cy.get('h1').should('have.text', 'Instructions')
    // .get(p).should('include', 'CourseChart is used to track and visualize the tasks assigned to students and an estimate of the time needed to complete them.')
    // .get('.general').should('have.text', 'To use CourseChart:' )
    // .get('ul').children('li')
  })

})