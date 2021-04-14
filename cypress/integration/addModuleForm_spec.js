context('Add Module Form', () => {
  const baseUrl = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Has labeled inputs for all module information', () => {
    
  })

  it('Lets user add information to all module inputs', () => {
    
  })

  it('Adds a new module page after clicking add button', () => {

  })

  it('Shows an error to user if clicking add button post fails', () => {
    cy.get('button').should('have.text', 'Add Module')
  })
})