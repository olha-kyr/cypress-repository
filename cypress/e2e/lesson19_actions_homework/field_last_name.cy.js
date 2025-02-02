describe('field last name', () => {
    beforeEach(() => { 
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
          
    })

it('last name is empty + border color is red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click();
    cy.get('#signupEmail').click();
    cy.get('.invalid-feedback').children().contains('Last name required');

    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(92, 179, 253)');
}); 

it('last name is invalid with not English symbols', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('123456789');
    cy.get('#signupEmail').click();
    cy.get('.invalid-feedback').children().contains('Last name is invalid');

    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(92, 179, 253)');
}); 

it('last name is invalid with space', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('dfgfg dgdggf');
    cy.get('#signupEmail').click();
    cy.get('.invalid-feedback').children().contains('Last name is invalid');

    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(92, 179, 253)');
}); 

it('wrong lenght in last name with one value + name is invalid', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('1');
    cy.get('#signupEmail').click();
    cy.get('.invalid-feedback').children().contains('Last name is invalid');
    cy.get('.invalid-feedback').children().contains('Last name has to be from 2 to 20 characters long');  

    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(92, 179, 253)');
        });  
        
it('wrong lenght in last name with 21 values', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('qwertyuiopasdfghjklzc');
    cy.get('#signupEmail').click();
    cy.get('.invalid-feedback').children().contains('Last name has to be from 2 to 20 characters long'); 

    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
        });
        
it('correct 2 symbols in last name are valid + border color is NOT red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').type('uo');
    cy.get('#signupEmail').click();

    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(206, 212, 218)');
}); 

it('correct 20 symbols in last name are valid + border color is NOT red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('uoqwerouiopasdfghjko');
    cy.get('#signupEmail').click();

    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(206, 212, 218)');
}); 
});