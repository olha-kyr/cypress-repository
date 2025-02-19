///<reference types="cypress" />
import HomePageQauto from "../../pages/HomePageQauto";
import SignInFormQauto from "../../forms/SignInFormQauto";

describe('Intercept', () => {
    beforeEach(() => { 
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
        HomePageQauto.openQauto();
        HomePageQauto.openSignInForm();
    })

it('Successful login and go to profile', () => {
     
    cy.intercept('GET', '**/profile').as('myProfile');
    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();

    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
    cy.get('[routerlink="profile"]').click();

    
    cy.url().should('contain', '/profile');

    
    cy.wait('@myProfile').its('response.statusCode').should('eq', 200);

    });
    

it.only('Change response in profile', () => {
     let profile = {
        "status": "ok",
        "data": {
            "userId": 166119,
            "photoFilename": "user-1734871044382.jpg",
            "name": "Polar",
            "lastName": "Bearo"
        }
    }

    cy.intercept('GET', '**/profile', profile);
    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();

    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
    
    cy.get('[routerlink="profile"]').click();
    
    cy.url().should('contain', '/profile');
    cy.get('.display-4').contains('Polar Bearo');
    
        });

});



