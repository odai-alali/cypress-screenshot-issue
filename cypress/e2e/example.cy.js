describe('example', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.screenshot({
      capture: "viewport",
      overwrite: true
    })
  })
})