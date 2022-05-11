describe('Fun with AI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display a header', () => {
    cy.get('h1')
      .contains('Fun with AI')
      .should('exist')
  })

  it('should have a text input field that can be typed into', () => {
    cy.get('textarea')
      .type('How to make a sandwich')
      .get('textarea')
      .contains('How to make a sandwich')
  })

  it('should have options for selecting an AI engine and a submit button', () => {
    cy.fixture('sandwich.json').as('sandwich')
      .then((json) => {
        cy.intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', json)
      })

    cy.get('textarea')
      .type('How to make a sandwich')
      .get('select')
      .invoke('val')
      .should('eq', 'text-curie-001')
      .get('select')
      .select('ada')
      .invoke('val')
      .should('eq', 'ada')
      .get('select')
      .select('text-curie-001')
      .invoke('val')
      .should('eq', 'text-curie-001')
      .get('.submit-form')
      .should('exist')
      .click()
  })

  it('should display responses from newest to oldest', () => {
    cy.fixture('sandwich.json').as('sandwich')
      .then((json) => {
        cy.intercept('POST', 'https://api.openai.com/v1/engines/text-curie-001/completions', json)
      })

    cy.fixture('poem.json').as('poem')
      .then((json) => {
        cy.intercept('POST', 'https://api.openai.com/v1/engines/ada/completions', json)
      })

    cy.get('textarea')
      .type('How to make a sandwich')
      .get('.submit-form')
      .click()
      .get('.prompt-value')
      .eq(0)
      .contains('How to make a sandwich')
      .get('textarea')
      .type('Write a poem')
      .get('select')
      .select('ada')
      .get('.submit-form')
      .click()
      .get('.prompt-value')
      .eq(0)
      .contains('Write a poem')
      .get('.prompt-value')
      .eq(1)
      .contains('How to make a sandwich')
  })
})