describe('Circle Chart', () => {
    const baseUrl = 'http://localhost:3000/'

    beforeEach(() => {
      cy.visit(baseUrl)
      cy.get("#1").click().wait(500);
    })

    it.only('Should display doughnut chart', () => {

    })

    it('Should display the title of the doughnut chart on the course dashboard', () => {
      cy.get('.dashboard_chartContainer__2OkxP').within(() => {
        cy.get('h2').should('contain', 'Activities in Course')
      })
    })

    it('Should display a canvas tag for a doughnut chart on the course dashboard', () => {
      cy.get('.dashboard_chartContainer__2OkxP').within(() => {
        cy.get('canvas').should('be.visible')
      })
    })

    it('Should display the title of the doughnut chart on the module dashboard', () => {
      cy.get('.Navbar_module__1s80_').within(() => {
        cy.get('#1').click()
      })
      cy.get('.dashboard_chartContainer__2OkxP').within(() => {
        cy.get('h2').should('contain', 'Activities in Course')
      })
    })

    it('Should display the title of the doughnut chart on the module dashboard', () => {
      cy.get('.Navbar_module__1s80_').within(() => {
        cy.get('#0').click()
      })
      cy.get('.dashboard_chartContainer__2OkxP').within(() => {
        cy.get('canvas').should('be.visible')
      })
    })
  })
  