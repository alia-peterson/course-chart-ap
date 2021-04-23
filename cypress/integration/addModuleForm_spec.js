describe('Add Module Form', () => {
  const baseUrl = 'http://localhost:3000/'
  const coursesApi = 'https://course-chart-be.herokuapp.com/courses'
  const modulesApi = 'https://course-chart-be.herokuapp.com/modules'

  beforeEach(() => {
    cy.intercept('GET', coursesApi, { fixture: 'courses-api' })
      .intercept('POST', modulesApi, { fixture: 'add-module' })
      .visit(baseUrl)
      .get("#0").click().wait(500);
    cy.get('.Navbar_addCourse__20rr5').within(() => {
      cy.get('a').click()
    })
    .url().should('include', '/addModuleForm')
  })

  it('Should have a heading and course info', () => {
    cy.get('h1').should('contain', 'Add A Module')
      .get('p').should('contain', 'Course:')
  })

  it('Should have an input for the module name', () => {
    cy.get('label').should('contain', 'Module Name')
      .get('input').should('be.visible')
  })

  it('Should have labels for the module form contents', () => {
    cy.get('p').should('contain', 'TOTAL MINUTES')
      .get('p').should('contain', 'INPUT')
      .get('p').should('contain', 'TIME PER TASK')
      .get('p').should('contain', 'NOTES')
  })

  it('Should have display the labels and inputs for each activity', () => {
    cy.get('p').should('contain', 'Reading (understand)')
      .get('label').should('contain', '# of pages')
      .get('input').should('be.visible')
      .get('div').should('contain', '130 wpm; 10 pages per hour')
      .get('textarea').should('be.visible')
  })

  it('Should allow user to add information to all the inputs in this form',  () => {
    cy
      .get('input#module-name').type('Module 4')
    .get('.addModuleForm_inputStyle__3go6w').within(() => {
      cy
      .get('input[id=1]').type('{uparrow}')
      .get('textarea[id=1]').type('This is the activity notes')
    })
  })

  it.skip('Should add a new module page to the course after clicking add module button', () => {
    cy.get('button').should('have.text', 'Add Module')
      .get('input#module-name').type('Module 4')
      .get('.addModuleForm_inputStyle__3go6w').within(() => {
        cy.get('input[id=1]').type('{uparrow}')
          .get('textarea[id=1]').type('This is the activity notes')
    })
    .get('button').click()
  })

  it.skip('Should alert user and keep them at the add module form if submitted with no inputs', () => {
    cy
    .get('button').click()
    .url().should('include', '/addModuleForm')
  })
})

describe('Add module 404 Error on POST', () => {
    const baseUrl = 'http://localhost:3000/'
    const modulesApi = 'https://course-chart-be.herokuapp.com/modules'
  
    beforeEach(() => {
      cy
      .intercept('POST', modulesApi, {
        status: 404,
        message: 'Didn\'t work!'
      })
      .visit(baseUrl)
      .get("#0").click().wait(500);
      cy
      .get('.Navbar_addCourse__20rr5').within(() => {
      cy
      .get('a').click()
      })
      .url().should('include', '/addModuleForm')
    })

    it.skip('Shows an error to user if clicking add button post fails', () => {
      cy
      .get('.addModuleForm_moduleMetaData__2BWxT').within(() => {
        cy
        .get('input').type('Practice')
      })
      cy
      .get('button').click()
    })

  })

