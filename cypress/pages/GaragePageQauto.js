class GaragePage {


get addCarButton(){
return cy.get('.justify-content-between');

    }

get headerAddExpense(){
    return cy.get('.modal-title').contains('Add an expense');
}


get addFuelExpenseButton(){
    return cy.get('.btn-success');
}

clickAddCarButton(){
this.addCarButton.children().contains('Add car').click();
    }
}


export default new GaragePage(); 