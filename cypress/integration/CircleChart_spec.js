describe('Circle Chart', () => {
    const baseUrl = 'http://localhost:3000/'

  
    beforeEach(() => {
      cy.visit(baseUrl)
      cy.get("#0").click().wait(500);
    })

    it('Should display the title of the doughnut chart on the course dashboard', () => {
      cy.get('.CircleChart_chartContainer__3qVJK').within(() => {
        cy.get('h2').should('have.text', 'Activities in Course')
      })
    })

    it('Should display a canvas tag for a doughnut chart on the course dashboard', () => {
      cy.get('.CircleChart_chartContainer__3qVJK').within(() => {
        cy.get('canvas').should('be.visible')
      })
    })

    it('Should display the title of the doughnut chart on the module dashboard', () => {
      cy.get('.Navbar_module__1s80_').within(() => {
        cy.get('#0').click()
      })
      cy.get('.CircleChart_chartContainer__3qVJK').within(() => {
        cy.get('h2').should('have.text', 'Activities in Course')
      })
    })

    it('Should display the title of the doughnut chart on the module dashboard', () => {
      cy.get('.Navbar_module__1s80_').within(() => {
        cy.get('#0').click()
      })
      cy.get('.CircleChart_chartContainer__3qVJK').within(() => {
        cy.get('canvas').should('be.visible')
      })
    })
  })
  