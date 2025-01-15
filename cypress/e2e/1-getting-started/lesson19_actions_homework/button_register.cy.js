describe('button register', () => {
    beforeEach(() => { 
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
            
    })

it('button register is disabled by default', () => {
    cy.get('.btn-primary').click();
    cy.get('.btn-primary').contains('Register').should('be.disabled');
    
    });

it('invalid data in name + register button is disabled', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click();
    cy.get('#signupName').type('dgd sgsgd');
    cy.get('.btn-primary').contains('Register').should('be.disabled');
    });

it('passwords do not match + register button is inactive', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Firsttestname');
    cy.get('#signupLastName').click().type('sggdgdg');
    cy.get('#signupEmail').click().type('testemail@gmail.com');
    cy.get('#signupPassword').click().type('1Qqwerty');
    cy.get('#signupRepeatPassword').click().type('1QqwertY');
    cy.get('.btn-primary').contains('Register').should('be.disabled');
    });

it.only('register button is active, user is registered', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click().type('Secondttestname');
    cy.get('#signupLastName').click().type('sggdgdgq');
    cy.get('#signupEmail').click().type(`testUser+${Date.now()}@gmail.com`);
    cy.get('#signupPassword').click().type('1Qqwertw');
    cy.get('#signupRepeatPassword').click().type('1Qqwertw');
    cy.get('.btn-primary').contains('Register').should('be.visible');
    cy.get('.btn-primary').should('have.css', 'background-color', 'rgb(2, 117, 216)');
    cy.get('.btn-primary').contains('Register').click();
    });
});