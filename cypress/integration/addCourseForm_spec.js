describe('Add Course Form', () => {
    const baseUrl = 'http://localhost:3000/'
    const coursesApi = 'https://course-chart-be.herokuapp.com/courses'

    beforeEach(() => {
      cy.intercept('GET', coursesApi, { fixture: 'courses-api' })
        .visit(baseUrl)
        .get('.addCourse').click().wait(500)
    })

    it('Should change the url to the course form page', () => {
      cy.url().should('include', '/addCourseForm')
    })

    it('Should have inputs and labels on the form', () => {
      cy.get('.CourseForm_container__1ON1N').within(() => {
        cy.get('label').should('contain', 'Institution Name')
          .get('input[id=institution]').should('be.visible')
          .get('label').should('contain', 'Credit Hours')
          .get('input[id=course]').should('be.visible')
          .get('label').should('contain', 'Course Name')
          .get('select[id=hours]').should('be.visible')
          .get('label').should('contain', 'Course Length in Weeks')
          .get('select[id=length]').should('be.visible')
    })
  })

    it('Should be able to enter information into the inputs', () => {
      cy.get('input[id=institution]').type('Turing')
        .get('input[id=course]').type('Module 1')
        .get('select[id=hours]').select('1 Credit')
        .get('select[id=length]').select('4 Weeks')
    })

    it.skip('Should be able to create a new course', () => {
      // cy.intercept('POST', coursesApi, {
      //   body: JSON.stringify({
      //     name: "Course 1 (test)",
      //     institution: "Turing",
      //     creditHours: 1,
      //     length: 4,
      //     goal: "11-12 hours"
      //   }),
      //   headers: {'Content-Type': 'application/json'}
      // }).as('new-course')

      // cy.fixture('new-course.json')
      //   .then(data => {
      //     cy.intercept('POST', coursesApi, {
      //       body: data.data,
      //       headers: {'Content-Type': 'application/json'}
      //     })
      //   })

      cy.intercept('POST', 'courses')
      cy.intercept('GET', 'courses/3', { fixture: 'new-course' })
      cy.intercept('GET', coursesApi, { fixture: 'new-course-navbar' })
      cy.get('input[id=institution]').type('Turing')
        .get('input[id=course]').type('Course 1 (test)')
        .get('select[id=hours]').select('1 Credit')
        .get('select[id=length]').select('4 Weeks')
        .get('button').should('have.text', '+ Add Course')
        .get('button').click()
        // .wait('@new-course').should('have.property', 'response')
        // .get('@new-course').its('request.body').should('deep.equal',
        //   {
        //     "name":"Course 1 (test)",
        //     "institution":"Turing",
        //     "creditHours":1,
        //     "length":4,
        //     "goal":"11-12 hours"
        //   }
        // )
    })
})
