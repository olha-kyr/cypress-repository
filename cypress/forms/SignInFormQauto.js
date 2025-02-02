class SignInFormQauto {
    get emailField() {
        return cy.get('#signinEmail');
                }
        
    get passwordField() {
        return cy.get('#signinPassword');
            }
            
    get loginButton() {
        return cy.get('.modal-footer .btn-primary');
            }
                
    enterEmail(email){
        this.emailField.type(email);
        }
        
    enterPassword(password){
        this.passwordField.type(password);
        }
          
    submitForm(){
        this.loginButton.click();
        }
        
    }

export default new SignInFormQauto();



