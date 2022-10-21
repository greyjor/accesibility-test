/// <reference types="cypress" />

describe('Validate accessibility TodoMVC application', () => {
  
    

  it('should log any accessibility failures', () => {

    cy.visit('https://todomvc.com/examples/react/#/');
    // Cypress-Axe library
    cy.injectAxe();
    // command cy.checkA11y or cy.checkAccessibility, scan your page for any accessibility failures
    cy.checkA11y();
  })

  
})
