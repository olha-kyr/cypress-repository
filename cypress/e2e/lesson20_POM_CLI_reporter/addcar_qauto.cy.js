///<reference types="cypress" />
import HomePageQauto from "../../../pages/HomePageQauto";
import SignInFormQauto from "../../../forms/SignInFormQauto";
import GaragePageQauto from "../../../pages/GaragePageQauto";
import AddCarFormQauto from "../../../forms/AddCarFormQauto";

describe('add a car form default state', () => {
    beforeEach(() => { 
        HomePageQauto.openQauto();
        HomePageQauto.openSignInForm();          
    })

it.only('successful login + add car default state', () => {

    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    cy.wait(2000);
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();

    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    GaragePageQauto.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');
    cy.get('.close').children().contains('×');
    cy.get('.form-group').children().contains('Brand');
    AddCarFormQauto.brandField.select(0).contains('Audi');
    cy.get('.form-group').children().contains('Model');
    AddCarFormQauto.modelField.select(0).contains('TT');
    cy.get('.form-group').children().contains('Mileage');
    cy.get('.form-group').children().should('have.class', 'input-group');
    cy.get('.input-group-text').contains('km');
    cy.get('.input-group-text').should('have.css', 'background-color', 'rgb(233, 236, 239)');
    AddCarFormQauto.addButton.children().contains('Add');
    AddCarFormQauto.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto.addButton.children().contains('Add').should('have.css', 'background-color', 'rgb(2, 117, 216)');
    AddCarFormQauto.addButton.children().contains('Add').should('have.css', 'opacity', '0.65');
    AddCarFormQauto.cancelButton.contains('Cancel');
    AddCarFormQauto.cancelButton.should('be.visible');
    AddCarFormQauto.cancelButton.should('have.css', 'color', 'rgb(33, 37, 41)');
});});


describe('add a car default state + press cancel', () => {
    beforeEach(() => { 
        HomePageQauto.openQauto();
        HomePageQauto.openSignInForm();           
    });

it('press cancel button', () => {

    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();

    GaragePageQauto.clickAddCarButton(); 
    cy.get('h4').should('have.text', 'Add a car');
    AddCarFormQauto.cancelButton.contains('Cancel').click();
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
});});



describe('add a car default state + press cross icon', () => {
    beforeEach(() => { 
        HomePageQauto.openQauto();
        HomePageQauto.openSignInForm();           
    });

it('press cross icon button', () => {

    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();
   
    GaragePageQauto.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');
    cy.get('.close').children().contains('×').click();
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
        
});});


describe('add a car default state + drop-down lists', () => {
    beforeEach(() => { 
        HomePageQauto.openQauto();
        HomePageQauto.openSignInForm();           
    })

it('brand drop-down list in default state', () => {

    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();

    GaragePageQauto.clickAddCarButton(); 
    cy.get('h4').should('have.text', 'Add a car');
    AddCarFormQautocy.brandField.select(0).contains('Audi');
    AddCarFormQautocy.brandField.select(1).contains('BMW');
    AddCarFormQautocy.brandField.select(2).contains('Ford');
    AddCarFormQautocy.brandField.select(3).contains('Porsche');
    AddCarFormQautocy.brandField.select(4).contains('Fiat');

});

it('addcarmodel drop-down list in default state', () =>{

    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();

    GaragePageQauto.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');
    AddCarFormQautocy.modelField.select(0).contains('TT');
    AddCarFormQautocy.modelField.select(1).contains('R8');
    AddCarFormQautocy.modelField.select(2).contains('Q7');
    AddCarFormQautocy.modelField.select(3).contains('A6');
    AddCarFormQautocy.modelField.select(4).contains('A8');

});});


describe('default car is added', () => {
    beforeEach(() => { 
        HomePageQauto.openQauto();
        HomePageQauto.openSignInForm();           
    })

it('car is added without drop-down selections', () => {

    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();   

    GaragePageQauto.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');    
    AddCarFormQauto.mileAgeField.focus();

    
    cy.get('.btn-primary').should('be.disabled');
    AddCarFormQauto.cancelButton.contains('Cancel');
    AddCarFormQauto.cancelButton.should('be.visible');
    AddCarFormQauto.mileAgeField.type(1);
    cy.wait(2000);
    AddCarFormQauto.addButton.children().contains('Add').click();
    

    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
    cy.get('.car-group').children().should('have.text', 'Audi TT');
    cy.get('.car-logo_img').should('have.attr', 'src','https://qauto.forstudy.space/public/images/brands/audi.png');
    cy.get('.btn-success').contains('Add fuel expense'); 

    });

it('car is added via brand drop-down', () =>{

    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();

    GaragePageQauto.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');
    AddCarFormQauto.brandField.select(2).contains('Ford');
    AddCarFormQauto.modelField.contains('Fiesta');
    AddCarFormQauto.mileAgeField.focus();
      
    AddCarFormQauto.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto.cancelButton.contains('Cancel').should('not.be.disabled');
    AddCarFormQauto.mileAgeField.type(21);
    cy.wait(2000);
    AddCarFormQauto.addButton.contains('Add').should('not.be.disabled');
    AddCarFormQauto.addButton.children().contains('Add').click();
    
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
    cy.get('.btn-success').contains('Add fuel expense'); 
    
    });
    
it('car is added via brand + model drop-downs', () =>{

    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();

    GaragePageQauto.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');


    AddCarFormQauto.brandField.select(3).contains('Porsche');
    AddCarFormQauto.modelField.select(1).contains('Cayenne');
    AddCarFormQauto.mileAgeField.focus();

    AddCarFormQauto.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto.cancelButton.contains('Cancel').should('not.be.disabled');
    AddCarFormQauto.mileAgeField.type(3);
    AddCarFormQauto.addButton.children().contains('Add').should('not.be.disabled');
    AddCarFormQauto.addButton.children().contains('Add').click();
    
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
    cy.get('.btn-success').contains('Add fuel expense'); 
    
    });});


describe('car is not added', () => {
        beforeEach(() => { 
            HomePageQauto.openQauto();
            HomePageQauto.openSignInForm();               
        })
    
it('car is not added + mileage cost is required', () =>{

    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();  

    GaragePageQauto.clickAddCarButton();
    AddCarFormQauto.mileAgeField.focus();
    AddCarFormQauto.mileAgeField.blur();
     
    AddCarFormQauto.verifyFieldErrorByText('Mileage cost required');
    cy.get('.invalid-feedback').children().should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddCarFormQauto.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto.cancelButton.contains('Cancel').should('not.be.disabled');    
           
    });

it.only('car can be added + mileage cost is required', () =>{

    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();  

    GaragePageQauto.clickAddCarButton();
    AddCarFormQauto.mileAgeField.focus();
    AddCarFormQauto.mileAgeField.blur();
              
    AddCarFormQauto.verifyFieldErrorByText('Mileage cost required');
    cy.get('.invalid-feedback').children().should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddCarFormQauto.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto.cancelButton.contains('Cancel').should('not.be.disabled');

    AddCarFormQauto.mileAgeField.focus();
    AddCarFormQauto.verifyFieldErrorByText('Mileage cost required');
    cy.get('.invalid-feedback').children().should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddCarFormQauto.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto.cancelButton.contains('Cancel').should('not.be.disabled');

    AddCarFormQauto.mileAgeField.type(4);
    AddCarFormQauto.addButton.children().contains('Add').should('not.be.disabled');
               
});});
    