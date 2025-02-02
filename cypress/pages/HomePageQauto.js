import BasePageQauto from "./BasePageQauto";

class HomePageQauto extends BasePageQauto{
    get SignInButtonQauto(){
        return cy.get('.header_signin');
    }

    openSignInForm() {
        this.SignInButtonQauto.click();
    }

    openQauto(){
        super.openQauto('https://guest:welcome2qauto@qauto.forstudy.space');
    }
}

export default new HomePageQauto();