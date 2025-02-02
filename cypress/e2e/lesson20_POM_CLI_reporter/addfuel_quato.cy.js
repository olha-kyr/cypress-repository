///<reference types="cypress" />
import HomePageQauto from "../../../pages/HomePageQauto";
import SignInFormQauto from "../../../forms/SignInFormQauto";
import GaragePageQauto from "../../../pages/GaragePageQauto";
import AddExpenseFormQauto from "../../../forms/AddExpenseFormQauto";
import AddCarFormQauto from "../../../forms/AddCarFormQauto";


describe('preconditions - add a car', () => {
    beforeEach(() => { 
        HomePageQauto.openQauto();
        HomePageQauto.openSignInForm();          
    })

it('car is added', () =>{
        
    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();
    
    GaragePageQauto.clickAddCarButton();
    cy.get('h4').should('have.text', 'Add a car');
    
    
    AddCarFormQauto.brandField.select(3).contains('Porsche');
    AddCarFormQauto.modelField.select(1).contains('Cayenne');
    AddCarFormQauto.mileAgeField.focus();
    
    AddCarFormQauto.addButton.children().contains('Add').should('be.disabled');
    AddCarFormQauto.cancelButton.should('not.be.disabled');
    AddCarFormQauto.mileAgeField.type(3);
    AddCarFormQauto.addButton.children().contains('Add').should('not.be.disabled');
    AddCarFormQauto.addButton.children().contains('Add').click();
        
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
    GaragePageQauto.addFuelExpenseButton.contains('Add fuel expense'); 
        
    });});


describe('fuel is not added', () => {
        beforeEach(() => { 
            HomePageQauto.openQauto();
            HomePageQauto.openSignInForm();   
})
    
it('fuel is not added + mileage error', () =>{
    
    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();
               
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
        
    GaragePageQauto.addFuelExpenseButton.contains('Add fuel expense').click();
    GaragePageQauto.headerAddExpense;
    AddExpenseFormQauto.vechileField.select(0).contains('Porsche Cayenne');
    AddExpenseFormQauto.addButton.should('be.disabled');
    
    AddExpenseFormQauto.numberOfLitersField.type(1);
    AddExpenseFormQauto.totalCostField.type(1);
    AddExpenseFormQauto.addButton.click(); 
    AddExpenseFormQauto.wrongMileAgeErrorMessage;
    AddExpenseFormQauto.addButton.should('not.be.disabled');
    
    AddExpenseFormQauto.cancelButton.click();
    
});

it('fuel is not added + liters required error', () =>{
    
    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();
               
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    GaragePageQauto.addFuelExpenseButton.contains('Add fuel expense').click();
    GaragePageQauto.headerAddExpense;
        
    AddExpenseFormQauto.numberOfLitersField.focus();
    AddExpenseFormQauto.numberOfLitersField.blur();
    AddExpenseFormQauto.verifyFieldErrorByText('Liters required');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto.numberOfLitersField.should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto.addButton.should('be.disabled');

    AddExpenseFormQauto.cancelButton.click();
    
});

it('fuel is not added + total cost required error', () =>{
    
    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();
               
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    GaragePageQauto.addFuelExpenseButton.contains('Add fuel expense').click();
    GaragePageQauto.headerAddExpense;
        
    AddExpenseFormQauto.totalCostField.focus();
    AddExpenseFormQauto.totalCostField.blur();
    AddExpenseFormQauto.verifyFieldErrorByText('Total cost required');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto.totalCostField.should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto.addButton.should('be.disabled');

    cy.get('.close').children().contains('×').click();
});

it('fuel is not added + liters required + total cost required errors', () =>{
    
    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();
               
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    GaragePageQauto.addFuelExpenseButton.contains('Add fuel expense').click();
    GaragePageQauto.headerAddExpense;
        
    
    AddExpenseFormQauto.numberOfLitersField.focus();
    AddExpenseFormQauto.numberOfLitersField.blur();
    AddExpenseFormQauto.numberOfLitersField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    AddExpenseFormQauto.verifyFieldErrorByText('Liters required');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto.addButton.should('be.disabled'); 
    
    AddExpenseFormQauto.totalCostField.focus();
    AddExpenseFormQauto.totalCostField.blur();
    AddExpenseFormQauto.totalCostField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    AddExpenseFormQauto.verifyFieldErrorByText('Total cost required');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto.addButton.should('be.disabled'); 

    cy.get('.close').children().contains('×').click();

});});   


describe('fuel expense is added', () => {
    beforeEach(() => { 
        HomePageQauto.openQauto();
        HomePageQauto.openSignInForm();   
    })

it('add fuel expense with default values', () =>{
    
    SignInFormQauto.enterEmail('olhakyrychenko21+testUser1@gmail.com');
    SignInFormQauto.enterPassword('Italia@mechta82');
    SignInFormQauto.submitForm();
       
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    GaragePageQauto.addFuelExpenseButton.contains('Add fuel expense').click();
    GaragePageQauto.headerAddExpense;

    AddExpenseFormQauto.vechileField.select(0).contains('Porsche Cayenne');
    AddExpenseFormQauto.addButton.should('be.disabled');
    AddExpenseFormQauto.cancelButton.should('not.be.disabled');
    AddExpenseFormQauto.mileAgeField.type(1);
    AddExpenseFormQauto.numberOfLitersField.type(1);
    AddExpenseFormQauto.addButton.should('be.disabled');
    AddExpenseFormQauto.totalCostField.type(1);
    AddExpenseFormQauto.addButton.should('not.be.disabled');
    AddExpenseFormQauto.addButton.click();          
    cy.get('h1').contains('Fuel expenses');    
                
});});