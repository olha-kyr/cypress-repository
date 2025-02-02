///<reference types="cypress" />

import HomePageQauto2 from "../../pages/HomePageQauto2";
import SignInFormQauto2 from "../../forms/SignInFormQauto2";

describe('test Login Form', () => {
    beforeEach(() => { 
        HomePageQauto2.openQauto2();
        HomePageQauto2.openSignInForm2();
            
    })

it('successful login', () => {

cy.login(Cypress.env('QAUTO2_USER_EMAIL'), Cypress.env('QAUTO2_USER_PASSWORD'));  

//SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
//SignInFormQauto2.enterPassword('Italia@mechta1');
SignInFormQauto2.submitForm();

cy.url().should('contain', '/garage');
cy.get('h1').should('have.text', 'Garage');

});

});