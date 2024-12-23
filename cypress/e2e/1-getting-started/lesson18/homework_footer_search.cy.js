///<reference types="cypress" />

describe('footer social media', () => {
    beforeEach(() => { 
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
            
    })    

it('first', () => {
        cy.get('.socials_icon').first();
    }); 

it ('by index', () => {
        cy.get('.socials_icon').eq(1);
    });

it ('by index', () => {
        cy.get('.socials_icon').eq(2);
    });

    it ('by index', () => {
        cy.get('.socials_icon').eq(3);
    });

it('last', () => {
        cy.get('.socials_icon').last();
    });
});


    describe('footer links', () => {
        beforeEach(() => { 
            cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
                
        })  

it ('link contains in get', () => {
        cy.get('#contactsSection').contains('ithillel.ua');
    });

    
it ('contains in get', () => {
        //cy.get('#contactsSection').contains('support@ithillel.ua');
        cy.contains('.h4', 'support@ithillel.ua');
    });
});