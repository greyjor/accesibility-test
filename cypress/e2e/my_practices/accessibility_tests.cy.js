/// <reference types="cypress" />

describe('Validate accessibility TodoMVC application', () => {
  
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/#/');
    // Cypress-Axe library
    cy.injectAxe();
  });
    

  it('should log any accessibility failures', () => {
    // command cy.checkA11y or cy.checkAccessibility, scan your page for any accessibility failures
    cy.checkA11y();
  })

  it('should exclude specific elements on the page', () => {
    // exclude elements of a page from being tested
    cy.checkA11y({ exclude: ['.source-links > :nth-child(1)'] });  
  });
  
  it('should only test specific element on the page', () => {
    // indicates only the element that you want to test
    cy.checkA11y('.source-links > :nth-child(1)');
  });

  it('should only include rules with serious impacts', () => {
    //Includes only the elements for which the impact is serious
    cy.checkA11y(null, { includedImpacts: ['serious'] });
  });
  
  it('should exclude specific accessibility rules', () => {
    //exclude accessibility rule "region"
    cy.checkA11y(null, {
      rules: {
        'region': { enabled: false },
      },
    });
  });

  
})
