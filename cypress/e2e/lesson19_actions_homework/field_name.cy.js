///<reference types="cypress" />

describe('field name', () => {
    beforeEach(() => { 
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
            
    })

it('name is empty + border color is red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click();
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(92, 179, 253)');
    cy.get('#signupLastName').click();
    cy.get('.invalid-feedback').children().contains('Name required');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(92, 179, 253)');

    }); 

it('name is invalid with not English symbols', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('123456789');
    cy.get('#signupLastName').click();
    cy.get('.invalid-feedback').children().contains('Name is invalid');
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    
    }); 

it('name is invalid with space', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('dfgfg dgdggf');
    cy.get('#signupLastName').click();
    cy.get('.invalid-feedback').children().contains('Name is invalid');
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
        
    }); 

it('wrong lenght in name field with one value + name is invalid', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('3');
    cy.get('#signupLastName').click();
    cy.get('.invalid-feedback').children().contains('Name is invalid');
    cy.get('.invalid-feedback').children().contains('Name has to be from 2 to 20 characters long');  
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    }); 
        
it('wrong lenght in name field with 21 values', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('qwertyuiopasdfghjklzc');
    cy.get('#signupLastName').click();
    cy.get('.invalid-feedback').children().contains('Name has to be from 2 to 20 characters long');       
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    }); 

it('correct 2 symbols in name are valid + border color is NOT red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('uo');
    cy.get('#signupLastName').click();
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(206, 212, 218)');
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(92, 179, 253)');
    }); 

it('correct 20 symbols in name are valid + border color is NOT red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('uoqwerouiopasdfghjko');
    cy.get('#signupLastName').click();
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(206, 212, 218)');
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(92, 179, 253)');
    }); 
});