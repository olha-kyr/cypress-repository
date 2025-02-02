///<reference types="cypress" />
import HomePageQauto from "../../pages/HomePageQauto";
import SignInFormQauto from "../../forms/SignInFormQauto";

describe('test Login Form', () => {
    beforeEach(() => { 
        HomePageQauto.openQauto();
        HomePageQauto.openSignInForm();
    })

it('successful login', () => {

    cy.login(Cypress.env('QAUTO_USER_EMAIL'), Cypress.env('QAUTO_USER_PASSWORD'));    
    //SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    //SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();

    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    });
});