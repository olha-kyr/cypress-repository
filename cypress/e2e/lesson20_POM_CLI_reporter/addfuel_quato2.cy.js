///<reference types="cypress" />
import HomePageQauto2 from "../../../pages/HomePageQauto2";
import SignInFormQauto2 from "../../../forms/SignInFormQauto2";
import GaragePageQauto2 from "../../../pages/GaragePageQauto2";
import AddExpenseFormQauto2 from "../../../forms/AddExpenseFormQauto2";
import AddCarFormQauto2 from "../../../forms/AddCarFormQauto2";


describe('preconditions - add a car', () => {
    beforeEach(() => { 
        HomePageQauto2.openQauto2();
        HomePageQauto2.openSignInForm2();          
    })

it('car is added', () =>{
        
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


describe('fuel is not added', () => {
        beforeEach(() => { 
            HomePageQauto2.openQauto2();
            HomePageQauto2.openSignInForm2();   
})
    
it('fuel is not added + mileage error', () =>{
    
    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();
               
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');
        
    GaragePageQauto2.addFuelExpenseButton.contains('Add fuel expense').click();
    GaragePageQauto2.headerAddExpense;
    AddExpenseFormQauto2.vechileField.select(0).contains('Porsche Cayenne');
    AddExpenseFormQauto2.addButton.should('be.disabled');
    
    AddExpenseFormQauto2.numberOfLitersField.type(1);
    AddExpenseFormQauto2.totalCostField.type(1);
    AddExpenseFormQauto2.addButton.click(); 
    AddExpenseFormQauto2.wrongMileAgeErrorMessage;
    AddExpenseFormQauto2.addButton.should('not.be.disabled');
    
    AddExpenseFormQauto2.cancelButton.click();
    
});

it('fuel is not added + liters required error', () =>{
    
    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();
               
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    GaragePageQauto2.addFuelExpenseButton.contains('Add fuel expense').click();
    GaragePageQauto2.headerAddExpense;
        
    AddExpenseFormQauto2.numberOfLitersField.focus();
    AddExpenseFormQauto2.numberOfLitersField.blur();
    AddExpenseFormQauto2.verifyFieldErrorByText('Liters required');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto2.numberOfLitersField.should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto2.addButton.should('be.disabled');

    AddExpenseFormQauto2.cancelButton.click();
    
});

it('fuel is not added + total cost required error', () =>{
    
    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();
               
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    GaragePageQauto2.addFuelExpenseButton.contains('Add fuel expense').click();
    GaragePageQauto2.headerAddExpense;
        
    AddExpenseFormQauto2.totalCostField.focus();
    AddExpenseFormQauto2.totalCostField.blur();
    AddExpenseFormQauto2.verifyFieldErrorByText('Total cost required');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto2.totalCostField.should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto2.addButton.should('be.disabled');

    cy.get('.close').children().contains('×').click();
});

it('fuel is not added + liters required + total cost required errors', () =>{
    
    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();
               
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    GaragePageQauto2.addFuelExpenseButton.contains('Add fuel expense').click();
    GaragePageQauto2.headerAddExpense;
        
    
    AddExpenseFormQauto2.numberOfLitersField.focus();
    AddExpenseFormQauto2.numberOfLitersField.blur();
    AddExpenseFormQauto2.numberOfLitersField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    AddExpenseFormQauto2.verifyFieldErrorByText('Liters required');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto2.addButton.should('be.disabled'); 
    
    AddExpenseFormQauto2.totalCostField.focus();
    AddExpenseFormQauto2.totalCostField.blur();
    AddExpenseFormQauto2.totalCostField.should('have.css', 'border-color', 'rgb(220, 53, 69)');
    AddExpenseFormQauto2.verifyFieldErrorByText('Total cost required');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)'); 
    AddExpenseFormQauto2.addButton.should('be.disabled'); 

    cy.get('.close').children().contains('×').click();

});});   


describe('fuel expense is added', () => {
    beforeEach(() => { 
        HomePageQauto2.openQauto2();
        HomePageQauto2.openSignInForm2();   
    })

it('add fuel expense with default values', () =>{
    
    SignInFormQauto2.enterEmail('olhakyrychenko21+User1@gmail.com');
    SignInFormQauto2.enterPassword('Italia@mechta1');
    SignInFormQauto2.submitForm();
       
    cy.url().should('contain', '/garage');
    cy.get('h1').should('have.text', 'Garage');

    GaragePageQauto2.addFuelExpenseButton.contains('Add fuel expense').click();
    GaragePageQauto2.headerAddExpense;

    AddExpenseFormQauto2.vechileField.select(0).contains('Porsche Cayenne');
    AddExpenseFormQauto2.addButton.should('be.disabled');
    AddExpenseFormQauto2.cancelButton.should('not.be.disabled');
    AddExpenseFormQauto2.mileAgeField.type(1);
    AddExpenseFormQauto2.numberOfLitersField.type(1);
    AddExpenseFormQauto2.addButton.should('be.disabled');
    AddExpenseFormQauto2.totalCostField.type(1);
    AddExpenseFormQauto2.addButton.should('not.be.disabled');
    AddExpenseFormQauto2.addButton.click();          
    cy.get('h1').contains('Fuel expenses');    
                
});});