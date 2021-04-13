describe('Dashboard View', () => {
    const baseUrl = 'http://localhost:3000/'
  
    beforeEach(() => {
      cy.visit(baseUrl)
    })
  
    it('Has a canvas', () => {
      cy.get('canvas')
    })

    it('Has a button for Lessons Objects', () => {
      cy.get('button').eq(0).contains('Lessons Objects')
    })

    it('Has a button for Quizzes', () => {
      cy.get('button').eq(1).contains('Quizzes')
    })

    it('Has a button for Writings', () => {
      cy.get('button').eq(2).contains('Writings')
    })

    it('Has a button for Readings', () => {
      cy.get('button').eq(3).contains('Readings')
    })

    it('Has a button for Videos', () => {
      cy.get('button').eq(4).contains('Videos')
    })

    it('Has a button for Discussion Boards', () => {
      cy.get('button').eq(5).contains('Discussion Boards')
    })
})