describe('Circle Chart', () => {
    const baseUrl = 'http://localhost:3000/'

    beforeEach(() => {
      cy.visit(baseUrl)
      cy.get("#0").click().wait(500);
    })
    
    it('Should display a canvas tag for a doughnut chart on the course dashboard', () => {
      cy.get('.dashboard_donut__b2-t6').within(() => {
        cy.get('canvas').should('be.visible')
      })
    })

    it('Should have an aria label on chart in course dashboard for accessibilty', () => {
      cy.get('.dashboard_donut__b2-t6').within(() => {
        cy.get('.dashboard_chartContainer__2OkxP').invoke('attr', 'aria-label').should('contain', 'A color coded doughnut chart for the activities in a Course')
      })
    })

    it('Should display a canvas tag for a doughnut chart on the module dashboard', () => {
      cy.get('nav').find('a').eq(3).click()
      cy.get('.dashboard_donut__b2-t6').within(() => {
        cy.get('canvas').should('be.visible')
      })
    })
    
    it('Should have an aria label on chart in module dashboard for accessibilty', () => {
      cy.get('nav').find('a').eq(3).click()
      cy.get('.moduleDashboard_donut__2_Scj').within(() => {
        cy.get('.dashboard_chartContainer__2OkxP').invoke('attr', 'aria-label').should('contain', 'A color coded doughnut chart for the activities in a Module')
    })
  })
  })
  