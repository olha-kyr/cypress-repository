///<reference types="cypress" />
import HomePageQauto2 from "../../../pages/HomePageQauto2";
import SignInFormQauto2 from "../../../forms/SignInFormQauto2";
import GaragePageQauto2 from "../../../pages/GaragePageQauto2";
import AddCarFormQauto2 from "../../../forms/AddCarFormQauto2";

describe('add a car form default state', () => {
    beforeEach(() => { 
        HomePageQauto2.openQauto2();
        HomePageQauto2.openSignInForm2();          
    })

it('successful login + add car default state', () => {

    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();

    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    GaragePageQauto2.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');
    cy.get('.close').children().contains('×');
    cy.get('.form-group').children().contains('Brand');
    AddCarFormQauto2.brandField.select(0).contains('Audi');
    cy.get('.form-group').children().contains('Model');
    AddCarFormQauto2.modelField.select(0).contains('TT');
    cy.get('.form-group').children().contains('Mileage');
    cy.get('.form-group').children().should('have.class', 'input-group');
    cy.get('.input-group-text').contains('km');
    cy.get('.input-group-text').should('have.css', 'background-color', 'rgb(233, 236, 239)');
    AddCarFormQauto2.addButton.children().contains('Add');
    AddCarFormQauto2.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto2.addButton.children().contains('Add').should('have.css', 'background-color', 'rgb(2, 117, 216)');
    AddCarFormQauto2.addButton.children().contains('Add').should('have.css', 'opacity', '0.65');
    AddCarFormQauto2.cancelButton.contains('Cancel');
    AddCarFormQauto2.cancelButton.should('be.visible');
    AddCarFormQauto2.cancelButton.should('have.css', 'color', 'rgb(33, 37, 41)');
});});


describe('add a car default state + press cancel', () => {
    beforeEach(() => { 
        HomePageQauto2.openQauto2();
        HomePageQauto2.openSignInForm2();           
    });

it('press cancel button', () => {

    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();

    GaragePageQauto2.clickAddCarButton(); 
    cy.get('h4').should('have.text', 'Add a car');
    AddCarFormQauto2.cancelButton.contains('Cancel').click();
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
});});



describe('add a car default state + press cross icon', () => {
    beforeEach(() => { 
        HomePageQauto2.openQauto2();
        HomePageQauto2.openSignInForm2();             
    });

it('press cross icon button', () => {

    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();
   
    GaragePageQauto2.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');
    cy.get('.close').children().contains('×').click();
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
        
});});


describe('add a car default state + drop-down lists', () => {
    beforeEach(() => { 
        HomePageQauto2.openQauto2();
        HomePageQauto2.openSignInForm2();            
    })

it('brand drop-down list in default state', () => {

    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();

    GaragePageQauto2.clickAddCarButton(); 
    cy.get('h4').should('have.text', 'Add a car');
    AddCarFormQauto2.brandField.select(0).contains('Audi');
    AddCarFormQauto2.brandField.select(1).contains('BMW');
    AddCarFormQauto2.brandField.select(2).contains('Ford');
    AddCarFormQauto2.brandField.select(3).contains('Porsche');
    AddCarFormQauto2.brandField.select(4).contains('Fiat');

});

it('addcarmodel drop-down list in default state', () =>{

    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();

    GaragePageQauto2.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');
    AddCarFormQauto2.modelField.select(0).contains('TT');
    AddCarFormQauto2.modelField.select(1).contains('R8');
    AddCarFormQauto2.modelField.select(2).contains('Q7');
    AddCarFormQauto2.modelField.select(3).contains('A6');
    AddCarFormQauto2.modelField.select(4).contains('A8');

});});


describe('default car is added', () => {
    beforeEach(() => { 
        HomePageQauto2.openQauto2();
        HomePageQauto2.openSignInForm2();             
    })

it('car is added without drop-down selections', () => {

    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();   

    GaragePageQauto2.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');    
    AddCarFormQauto2.mileAgeField.focus();

    
    cy.get('.btn-primary').should('be.disabled');
    AddCarFormQauto2.cancelButton.contains('Cancel');
    AddCarFormQauto2.cancelButton.should('be.visible');
    AddCarFormQauto2.mileAgeField.type(1);
    cy.wait(2000);
    AddCarFormQauto2.addButton.children().contains('Add').click();
    

    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
    cy.get('.car-group').children().should('have.text', 'Audi TT');
    cy.get('.car-logo_img').should('have.attr', 'src','https://qauto2.forstudy.space/public/images/brands/audi.png');
    cy.get('.btn-success').contains('Add fuel expense'); 

    });

it('car is added via brand drop-down', () =>{

    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();

    GaragePageQauto2.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');
    AddCarFormQauto2.brandField.select(2).contains('Ford');
    AddCarFormQauto2.modelField.contains('Fiesta');
    AddCarFormQauto2.mileAgeField.focus();
      
    AddCarFormQauto2.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto2.cancelButton.contains('Cancel').should('not.be.disabled');
    AddCarFormQauto2.mileAgeField.type(21);
    cy.wait(2000);
    AddCarFormQauto2.addButton.contains('Add').should('not.be.disabled');
    AddCarFormQauto2.addButton.children().contains('Add').click();
    
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
    cy.get('.btn-success').contains('Add fuel expense'); 
    
    });
    
it('car is added via brand + model drop-downs', () =>{

    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();

    GaragePageQauto2.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');


    AddCarFormQauto2.brandField.select(3).contains('Porsche');
    AddCarFormQauto2.modelField.select(1).contains('Cayenne');
    AddCarFormQauto2.mileAgeField.focus();

    AddCarFormQauto2.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto2.cancelButton.contains('Cancel').should('not.be.disabled');
    AddCarFormQauto2.mileAgeField.type(3);
    AddCarFormQauto2.addButton.children().contains('Add').should('not.be.disabled');
    AddCarFormQauto2.addButton.children().contains('Add').click();
    
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
    cy.get('.btn-success').contains('Add fuel expense'); 
    
    });});


describe('car is not added', () => {
        beforeEach(() => { 
        HomePageQauto2.openQauto2();
        HomePageQauto2.openSignInForm2();                 
        })
    
it('car is not added + mileage cost is required', () =>{

    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();  

    GaragePageQauto2.clickAddCarButton();
    AddCarFormQauto2.mileAgeField.focus();
    AddCarFormQauto2.mileAgeField.blur();
          
    AddCarFormQauto2.verifyFieldErrorByText('Mileage cost required');
    cy.get('.invalid-feedback').children().should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddCarFormQauto2.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto2.cancelButton.contains('Cancel').should('not.be.disabled');    
           
    });

it('car can be added + mileage cost is required', () =>{

    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();  

    GaragePageQauto2.clickAddCarButton();
    AddCarFormQauto2.mileAgeField.focus();
    AddCarFormQauto2.mileAgeField.blur();
              
    AddCarFormQauto2.verifyFieldErrorByText('Mileage cost required');
    cy.get('.invalid-feedback').children().should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddCarFormQauto2.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto2.cancelButton.contains('Cancel').should('not.be.disabled');
    
    AddCarFormQauto2.mileAgeField.focus();
    AddCarFormQauto2.verifyFieldErrorByText('Mileage cost required');
    cy.get('.invalid-feedback').children().should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddCarFormQauto2.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto2.cancelButton.contains('Cancel').should('not.be.disabled');
    
    AddCarFormQauto2.mileAgeField.type(4);
    AddCarFormQauto2.addButton.children().contains('Add').should('not.be.disabled');
               
});});