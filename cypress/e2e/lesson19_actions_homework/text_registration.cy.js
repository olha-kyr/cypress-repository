///<reference types="cypress" />

describe('text Registration', () => {
    beforeEach(() => { 
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
            
    })

    it('header registration', () => {
        cy.get('.btn-primary').click();
        cy.get('.modal-title').contains('Registration');
    }); 

});