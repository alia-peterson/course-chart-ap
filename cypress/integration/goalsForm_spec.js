context('Goals Form', () => {
    const baseUrl = 'http://localhost:3000/'
  
    beforeEach(() => {
      cy.visit(baseUrl)
    })
  
    it('Has a title', () => {
      cy.get('h3').should('have.text', 'Goals/Recommended Stats per task')
    })
  })
  