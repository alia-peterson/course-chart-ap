describe('Add Module Form', () => {
    const baseUrl = 'http://localhost:3000/'
    const coursesApi = 'https://course-chart-be.herokuapp.com/courses'
  
    beforeEach(() => {
      cy
      .intercept('POST', coursesApi, { fixture: 'add-module' })
      .visit(baseUrl)
      .get("#0").click().wait(500);
      cy
      .get('.Navbar_addCourse__20rr5').within(() => {
        cy
        .get('a').click()
      })
      .url().should('include', '/addCourseForm')
    })
})