import BasePageQauto2 from "./BasePageQauto2";

class HomePageQauto2 extends BasePageQauto2{
    get SignInButtonQauto2(){
        return cy.get('.header_signin');
    }

    openSignInForm2() {
        this.SignInButtonQauto2.click();
    }

    openQauto2(){
        super.openQauto2('https://guest:welcome2qauto@qauto2.forstudy.space');
    }
}

export default new HomePageQauto2();