describe('Dashboard View', () => {
  const baseUrl = 'http://localhost:3000/'
  const coursesApi = 'https://course-chart-be.herokuapp.com/courses'
  const course1Api = 'https://course-chart-be.herokuapp.com/courses/1'
  
  beforeEach(() => {
    cy.intercept('GET', coursesApi, { fixture: 'courses-api' })
    cy.intercept('GET', course1Api, { fixture: 'course1-api' })
    cy.visit(baseUrl)
    cy.get('#1').click()
  })
  
    it('Should display a canvas tag for a bar chart', () => {
      cy.get('.barChart').within(() => {
        cy.get('canvas')
      })
    })

    it('Should have buttons for each each activity to change the display of the bar chart', () => {
      cy.get('.barChart').within(() => {
        cy.get('section').within(() => {
          cy.get('button').should('have.text', 'Reading (understand)')
        })
      })
    })
})