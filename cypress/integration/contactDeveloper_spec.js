describe('Dashboard View', () => {
    const baseUrl = 'http://localhost:3000/'
  
    beforeEach(() => {
      cy.visit(baseUrl)
      cy.get('.contact').click()
    })
  
    it('Should have a page title matching the url', () => {
      cy.get('h2').contains('Meet the Developers')
    })

    it('Should contain all of the developers names', () => {
        cy.get('h3').should('have.length', '6')
        cy.get('h3').eq(0).contains('Gus Cunningham')
    })

    it('Should contain an image for all developers', () => {
        
    })

    it('Should contain a Github link for all developers', () => {
        
    })

    it('Should contain a LinkedIn link for all developers', () => {

    })

})