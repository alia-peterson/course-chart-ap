context('Navigation Bar', () => {
  const baseUrl = 'http://localhost:3000/'
  const coursesApi = 'https://course-chart-be.herokuapp.com/courses'

  beforeEach(() => {
    cy.intercept('GET', coursesApi, { fixture: 'courses-api' })
    cy.visit(baseUrl).wait(300)
  })

  it('Has a navigation bar with course and module buttons', () => {
    cy.get('nav').find('img').should('be.visible')
      .get('nav').find('h1').should('have.text', 'CourseChart')
      .get('nav').find('a').eq(0).should('have.text', 'How It Works')
      .get('nav').find('a').eq(1).should('have.text', 'Nursing 101')
      .get('nav').find('a').eq(2).should('have.text', 'Foundations of Nursing')
      .get('nav').find('a').eq(3).should('have.text', '+ Add New Course')
      .get('nav').find('a').eq(4).should('have.text', 'Contact the Devs')
  })

  it('Should change url path to selected course dashboard page', () => {
    cy.get('nav').find('a[id=1]').click()
      .url().should('include', 'courseDashboard')
  })

  it('Should change url path to selected add course form page', () => {
    cy.wait(1000)
      .get('nav').find('a').eq(3).click()
      .url().should('include', 'addCourseForm')
  })

  it('Should change url path to selected moduleDashboard page', () => {
    cy.get('nav').find('a[id=1]').click().wait(500)
      .get('nav').find('a[id=0]:last').click()
      .url().should('include', 'moduleDashboard')
  })

  it('Should change url path to selected addModuleForm page', () => {
    cy.get('nav').find('a[id=1]').click().wait(500)
      .get('nav').find('a').contains('+ Add New Module').click()
      .url().should('include', 'addModuleForm')
  })
})


context('Course Dashboard View', () => {
  const baseUrl = 'http://localhost:3000/'
  const coursesApi = 'https://course-chart-be.herokuapp.com/courses'
  const course1Api = 'https://course-chart-be.herokuapp.com/courses/1'

  beforeEach(() => {
    cy.intercept('DELETE', course1Api, {
      message: "Course deleted successfully",
      status: 200
    })
    cy.intercept('GET', coursesApi, { fixture: 'courses-api' })
    cy.visit(baseUrl).wait(300)
  })

  it('Should display a heading on course dashboard', () => {
    cy.get("#1").click().wait(500);
    cy.get('.dashboard_courseHeader__2IdVU').within(() => {
      cy.get('h1').should('contain', 'Foundations of Nursing')
        .get('p').should('contain', 'Colorado Nursing College')
        .get('p').should('contain', 'Credit Hours:')
        .get('h2').should('contain', '3')
        .get('p').should('contain', 'Length:')
        .get('h2').should('contain', '8 Weeks')
    })
  })

  it('Should have three charts on the course dashboard', () => {
    cy.get("#1").click().wait(500);
    cy.get('.dashboard_courseGraphs__fddFH').find('canvas').should('have.length', 2)
    cy.get('.HorizontalChart_container__2v6ne').should('be.visible')
  })

  it('Should have a button and be able to delete the course', () => {
    cy.get("#0").click().wait(500);
    cy.get('button').should('have.text', 'Delete Course')
    cy.get('button').click()
  })
})

context('Module Dashboard View', () => {
  const baseUrl = 'http://localhost:3000/'
  const coursesApi = 'https://course-chart-be.herokuapp.com/courses'
  const module1Api = 'https://course-chart-be.herokuapp.com/modules/1'

  beforeEach(() => {
    cy.intercept('DELETE', module1Api, {
      message: "Course deleted successfully",
      status: 200
    })
    cy.intercept('GET', coursesApi, { fixture: 'courses-api' })
    cy.visit(baseUrl).wait(300)
  })

  it('Should have two visuals on the module dashboard', () => {
    cy.get('nav').find('a[id=1]').click().wait(500)
      .get('nav').find('a[id=0]:last').click()
      .get('canvas').should('be.visible')
      .get('.HorizontalChart_container__2v6ne').should('be.visible')
  })

  it.skip('Should display the information specific to each activity', () => {
    cy.get('nav').find('a[id=1]').click().wait(500)
    .get('nav').find('a[id=0]:last').click().wait(500)
    .get('p').should('contain', '107')
    .get('p').should('contain', 'pages')
  })
})

