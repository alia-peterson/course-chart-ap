describe('Add Course Form', () => {
    const baseUrl = 'http://localhost:3000/'
    const coursesApi = 'https://course-chart-be.herokuapp.com/courses'
  
    beforeEach(() => {
      cy
      .intercept('POST', coursesApi, { fixture: 'add-course' })
      .visit(baseUrl)
      .get(".addCourse").click().wait(500);
      cy
      .url().should('include', '/addCourseForm')
    })

    it.only('Should have inputs and labels on the form', () => {
      cy
      .get('.CourseForm_container__1ON1N').within(() => {
      cy
      .get('label').should('contain', 'Institution Name')
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
      cy
      .get('input[id=institution]').type('Turing')
      .get('input[id=course]').type('Module 1')
      .get('select[id=hours]').select('1 Credit')
      .get('select[id=length]').select('4 Weeks')
    })

    it('Should be able to create a new course', () => {
      cy
      .get('input[id=institution]').type('Turing')
      .get('input[id=course]').type('Module 1')
      .get('select[id=hours]').select('1 Credit')
      .get('select[id=length]').select('4 Weeks')
      .get('button').should('have.text', 'Submit')
      .get('button').click()
    })
  
})