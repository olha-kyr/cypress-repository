class AddExpenseFormQauto {

    get vechileField() {
    return cy.get('#addExpenseCar');
    }
    
    get mileAgeField() {
    return cy.get('#addExpenseMileage');
    }
        
    get numberOfLitersField() {
        return cy.get('#addExpenseLiters');
        }
          
    get totalCostField() {
        return cy.get('#addExpenseTotalCost');
        }

    get addButton(){
    return cy.get('.justify-content-end').children().contains('Add');
    }
    
    get cancelButton(){
    return cy.get('.btn-secondary').contains('Cancel');
    }
    

    get wrongMileAgeErrorMessage() {
        return cy.contains('.alert-danger', 'First expense mileage must not be less or equal to car initial mileage. Car initial mileage is');
    }

    verifyFieldErrorByText(text){
    cy.contains('.invalid-feedback p', text);
    }
    
    
    submitAddExpenseForm(){
    this.addButton.click();
    }
    
    cancelAddExpenseForm(){
    this.cancelButton.click();
    }
    }
    
            
    export default new AddExpenseFormQauto();