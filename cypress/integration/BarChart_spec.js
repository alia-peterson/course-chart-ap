describe('Dashboard View', () => {
  const baseUrl = 'http://localhost:3000/'
  const coursesApi = 'https://course-chart-be.herokuapp.com/courses'
  const course1Api = 'https://course-chart-be.herokuapp.com/courses/1'
  
  beforeEach(() => {
    cy.intercept('GET', coursesApi, { fixture: 'courses-api' })
    cy.intercept('GET', course1Api, { fixture: 'course1-api' })
    cy.visit(baseUrl)
    cy.get('#1').click()
  })
  
    it('Has a canvas', () => {
      cy.get('.barChart').within(() => {
        cy.get('canvas')
      })
    })

    it('Has a button for Readings (understand)', () => {
      cy.get('.barChart').within(() => {
        cy.get('button').eq(0).contains('Readings (understand)')
      })
    })

    it('Has a button for Readings (study guide)', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(1).contains('Readings (study guide)')
      })
    })

    it('Has a button for Writings (research)', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(2).contains('Writings (research)')
      })
    })

    it('Has a button for Writings (reflection)', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(3).contains('Writings (reflection)')
      })
    })

    it('Has a button for Lessons Objects (matching/multiple choice)', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(4).contains('Lessons Objects (matching/multiple choice)')
      })
    })

    it('Has a button for Lessons Objects (case study)', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(5).contains('Lessons Objects (case study)')
      })
    })

    it('Has a button for Lecture', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(6).contains('Lecture')
      })
    })

    it('Has a button for Videos', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(7).contains('Videos')
      })
    })

    it('Has a button for Websites', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(8).contains('Websites')
      })
    })

    it('Has a button for Discussion Boards', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(9).contains('Discussion Boards')
      })
    })

    it('Has a button for Quizzes', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(10).contains('Quizzes')
      })
    })

    it('Has a button for Exams', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(11).contains('Exams')
      })
    })

    it('Has a button for Self Assessments', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(12).contains('Self Assessments')
      })
    })

    it('Has a button for Miscellaneous', () => {
      cy.get('.barChart').within(() => {
      cy.get('button').eq(13).contains('Miscellaneous')
      })
    })
})