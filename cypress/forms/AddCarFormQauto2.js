class AddCarFormQauto2 {

    get brandField() {
    return cy.get('#addCarBrand');
    }
    
    get modelField() {
    return cy.get('#addCarModel');
    }
    
    get mileAgeField() {
    return cy.get('#addCarMileage');
    }
        
    get addButton(){
    return cy.get('.justify-content-end');
    }
    
    get cancelButton(){
    return cy.get('.btn-secondary');
    }
    
    verifyFieldErrorByText(text){
    cy.contains('.invalid-feedback', text);
    }
    
    
    submitAddCarForm(){
    this.addButton.click();
    }
    
    cancelForm(){
        this.cancelButton.click();
    }
    }
    
            
    export default new AddCarFormQauto2();