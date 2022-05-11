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
    cy.get('select')
      .invoke('val')
      .should('eq', 'text-curie-001')
  })
})