///<reference types="cypress" />

describe('header buttons', () => {
    beforeEach(() => { 
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
            
    })

it ('header left siblings', () => {
        cy.get('.btn.header-link').eq(1);
    });

it ('header left siblings', () => {
        cy.get('.btn.header-link').eq(2);
    });

    
it ('header right find', () => {
        cy.get('.header_right').find('.header-link').contains('Guest log in');
    });

it ('header right find', () => {
        cy.get('.header_right').find('.btn').contains('Sign In');
    });
});


