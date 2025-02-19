/// <reference types="cypress" />
/*import data from '../../fixtures/example.json'*/

let carId = 0;

describe('Auth in beforeEach hook', () => {
    beforeEach(() => {
        let userBody = {
            "email": "olhakyrychenko21+testUser1@gmail.com",
            "password": "Italia@mechta82",
            "remember": false
        };
        cy.api('POST', '/api/auth/signin', userBody).then((response) => {
            cy.log(JSON.stringify(response));
            cy.log(JSON.stringify(response.headers['set-cookie']))

            const sidCookie = response.headers['set-cookie'][0];
            const sidValue = sidCookie.split(';')[0].split('=')[1];

            cy.setCookie('sid', sidValue);
        })
    })

    it('Add a car BMW 5', () => {
        let carBody = {
            "carBrandId": 2,
            "carModelId": 7,
            "mileage": 17
        }
        cy.api('POST', '/api/cars', carBody).then((response) => {
            cy.log(JSON.stringify(response));
            carId = response.body.data.id;
            expect(response.status).to.eq(201);
        })
    })

    it ('Get car by specific brand  [GET /cars/brands/id]', () => {
        cy.api('GET', '/api/cars/brands/2').its('status').should('eq', 200)})
  

    it('Add a car Ford Mondeo', () => {
        let carBody = {
            "carBrandId": 3,
            "carModelId": 14,
            "mileage": 18
        }
        cy.api('POST', '/api/cars', carBody).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(201);
        })
    })
    
    it('Get car by specific model [GET /cars/models/id]', () => {
        cy.api('GET', '/api/cars/models/14').its('status').should('eq', 200)})

    

    it('Add a car Porsche Panamera', () => {
        let carBody = {
            "carBrandId": 4,
            "carModelId": 18,
            "mileage": 19
        }
        cy.api('POST', '/api/cars', carBody).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(201);
        })
    })



    it('Get all user cars [GET /cars]', () =>{
        cy.api('GET', '/api/cars').its('status').should('eq', 200);
         })   



    it('Change BMW car to Audi TT [PUT /api/cars/id]', () =>{
    let carBody = {
        "carBrandId": 1,
        "carModelId": 1,
        "mileage": 1212112
    }
       cy.api('PUT', `/api/cars/${carId}`, carBody).then((response) => {
        cy.log(JSON.stringify(response));
        expect(response.status).to.eq(200);
        })
})

    it('Get car by specific model [GET /cars/models/id]', () => {
    cy.api('GET', '/api/cars/models/1').its('status').should('eq', 200)})




   it('Delete Audi TT car [DELETE /api/cars/id]', () =>{
        
        cy.api('DELETE', `/api/cars/${carId}`).then((response) => {
        cy.log(JSON.stringify(response));
        expect(response.status).to.eq(200);
            })
    })
})
