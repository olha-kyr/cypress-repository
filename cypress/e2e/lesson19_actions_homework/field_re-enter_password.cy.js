///<reference types="cypress" />

describe('field re-enter password', () => {
    beforeEach(() => { 
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
            
    })

it('re-enter password is blank + border color is red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('sggdgdg');
    cy.get('#signupEmail').click().type('testemail@gmail.com');
    cy.get('#signupPassword').click().type('1Qqwerty');
    cy.get('#signupRepeatPassword').click();
    cy.get('#signupPassword').click();
    cy.get('.invalid-feedback').children().contains('Re-enter password required');

    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });  
                
it('passwords do not match + border color is red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('sggdgdg');
    cy.get('#signupEmail').click().type('testemail@gmail.com');
    cy.get('#signupPassword').click().type('1Qqwerty');
    cy.get('#signupRepeatPassword').click().type('1QqwertY');
    cy.get('.invalid-feedback').children().contains('Passwords do not match');
        
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');

});  

});