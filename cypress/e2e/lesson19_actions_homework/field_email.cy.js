describe('field email', () => {
    beforeEach(() => { 
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
            
    })

it('email is empty + border color is red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('sggdgdg');
    cy.get('#signupEmail').click();
    cy.get('#signupPassword').click();
    cy.get('.invalid-feedback').children().contains('Email required');

    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(92, 179, 253)');

}); 

it('email is incorrect + border color is red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('sggdgdg');
    cy.get('#signupEmail').click().type('fddf@1.');
    cy.get('#signupPassword').click();
    cy.get('.invalid-feedback').children().contains('Email is incorrect');

    cy.get('.invalid-feedback').should('have.css', 'color', 'rgb(220, 53, 69)');
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(92, 179, 253)');
    
}); 

it('email is correct + border color is NOT red', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestame');
    cy.get('#signupLastName').click().type('FirsttestLN');
    cy.get('#signupEmail').click().type('test01@gmail.com');
    cy.get('#signupPassword').click();
                
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(206, 212, 218)');
    cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(92, 179, 253)');
        
}); 
    });