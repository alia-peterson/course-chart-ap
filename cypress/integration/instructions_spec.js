context('Instructions Page', () => {
  const baseUrl = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Goes to an istructions page when the instructions button in the sidebar is clicked', () => {
    cy
    .get('.instructions').click()
    .url().should('include', '/instructions')
  })

  it('Gives an overview of the site and how to use it', () => {
    cy
    .get('.instructions').click()
    .url().should('include', '/instructions')
    .get('h1').should('contain', 'Instructions')
    .get('p').should('contain', 'CourseChart is used to track and visualize the tasks assigned to students and an estimate of the time needed to complete them.')
    .get('.general').should('have.text', 'To use CourseChart:' )
    .get('ul').children('li')
  })

})