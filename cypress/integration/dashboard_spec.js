context('Dashboard View', () => {
  const baseUrl = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Has a navigation bar with course and module buttons', () => {
    cy.get('nav').find('img').should('be.visible')
      .get('nav').find('h1').should('have.text', 'CourseChart')
      .get('nav').find('a').eq(0).should('have.text', 'All Course Dashboard')
      .get('nav').find('a').eq(1).should('have.text', 'Foundations of Nursing')
      .get('nav').find('a').eq(2).should('have.text', 'All Modules')
      .get('nav').find('a').eq(3).should('have.text', 'Module 1')
      .get('nav').find('a').eq(11).should('have.text', '+ Add New Module')
      .get('nav').find('a').eq(12).should('have.text', '+ Add New Course')
      .get('nav').find('a').eq(13).should('have.text', 'Instructions')
      .get('nav').find('a').eq(14).should('have.text', 'About Site')
  })

  it('Should change url path to selected courseDashboard page', () => {
    cy.get('nav').find('a').eq(1).click()
      .url().should('include', 'courseDashboard')
  })

  it('Should change url path to selected moduleDashboard page', () => {
    cy.get('nav').find('a').eq(2).click({ force: true })
      .url().should('include', 'moduleDashboard')
  })

  it('Should change url path to selected addModuleForm page', () => {
    cy.get('nav').find('a').eq(11).click({ force: true })
      .url().should('include', 'addModuleForm')
  })

  it('Should change url path to selected addCourseForm page', () => {
    cy.get('nav').find('a').eq(12).click()
      .url().should('include', 'addCourseForm')
  })
})
