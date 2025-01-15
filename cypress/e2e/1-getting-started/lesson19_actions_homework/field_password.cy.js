///<reference types="cypress" />

describe('field password', () => {
    beforeEach(() => { 
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
           
    })

it('password required + border color is red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('sggdgdg');
    cy.get('#signupEmail').click().type('testemail@gmail.com');
    cy.get('#signupPassword').click();
    cy.get('#signupRepeatPassword').click();

    cy.get('.invalid-feedback').children().contains('Password required');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(92, 179, 253)');
    }); 

it('password less than 8 symbols + border color is red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('sggdgdg');
    cy.get('#signupEmail').click().type('testemail@gmail.com');
    cy.get('#signupPassword').click().type('1234567');
    cy.get('#signupRepeatPassword').click();
    
    cy.get('.invalid-feedback').children().contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(92, 179, 253)');
    }); 

it('password more than 15 symbols + border color is red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('sggdgdg');
    cy.get('#signupEmail').click().type('testemail@gmail.com');
    cy.get('#signupPassword').click().type('1Qqwertyuiopasdf');
    cy.get('#signupRepeatPassword').click();
        
    cy.get('.invalid-feedback').children().contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(92, 179, 253)');
    }); 
                
it('password has incorrect format + border color is red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('sggdgdg');
    cy.get('#signupEmail').click().type('testemail@gmail.com');
    cy.get('#signupPassword').click().type('1QQ');
    cy.get('#signupRepeatPassword').click();
            
    cy.get('.invalid-feedback').children().contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(92, 179, 253)');
    }); 

it('password has correct format + border color is NOT red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('sggdgdg');
    cy.get('#signupEmail').click().type('testemail@gmail.com');
    cy.get('#signupPassword').click().type('1Qqwerty');
    cy.get('#signupRepeatPassword').click();
                
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(206, 212, 218)');
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(92, 179, 253)');
    });               
});