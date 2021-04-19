context('Add Module Form', () => {
  const baseUrl = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Has labeled inputs for all module information', () => {
    cy.get('.Navbar_course__38dhK').click()
      .get('.Navbar_addCourse__20rr5').click()
    
    cy.url().should('include', '/addModuleForm')
      .get('h1').should('have.text', 'Add A Module')
      .get('span').should('have.text', 'Course:')
      .get('p').includes('Foundations of Nursing')
      .get('form').should('exisit')
      .get('input').should('have.length', '13' )
      .get('.addModuleForm_moduleMetaData__2BWxT').childen('label', 'input[type=text]')
        .get('.addModuleForm_formLabel__3aY8V').should('have.text', 'Module Name')
        .get('.addModuleForm_formInput__3JPT8').should('exist')

      
  })

  it('Lets user add information to all module inputs', () => {
    cy.get('.addModuleForm_formInput__3JPT8').type('Test Module')
    cy.get('')
    
  })

  it('Adds a new module page after clicking add button', () => {

  })

  it('Shows an error to user if clicking add button post fails', () => {
    cy.get('button').should('have.text', 'Add Module')
  })
})