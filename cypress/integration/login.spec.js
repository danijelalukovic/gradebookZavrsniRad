/// <reference types="Cypress" />

import { authLogin } from '../page_objects/loginObject';
import { header } from '../page_objects/headerObject';
import { addProfessor } from '../page_objects/addProfessor';
import { addGradebook } from '../page_objects/addGradebook';

const faker = require('faker');

let userData = {
    
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    image: faker.image.avatar()
}

describe('Intercept login', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.url().should("contains", 'gradebook.vivifyideas')
        cy.intercept(
            'POST', 
            'https://gradebook-api.vivifyideas.com/api/login'
        ).as('sucessfullLogin')
        cy.visit('/login')
        authLogin.login('danijela715627@example.com', '123456789a')
        cy.wait('@sucessfullLogin').then((interception) => {
            console.log('evo ga interception', interception)
            expect(interception.response.statusCode).to.eq(200)
            expect(interception.response.body).to.be.a('Object')
        })
    })

    it('Add professor', () => {
        cy.intercept(
            'POST',
            'https://gradebook-api.vivifyideas.com/api/professors/create'
        ).as('sucessfulladd')
        header.addProfesor
        .should('be.visible')
        .and('have.css', 'padding-right', '8px')
        .click()
        addProfessor.add(userData.name, userData.lastname, userData.image)
        cy.wait('@sucessfulladd').then((interception) => {
            console.log('evo ga professor', interception)
            expect(interception.response.statusCode).to.eq(200)
        })
    })

    it('Add gradebook', () => {
        cy.intercept(
            'POST',
            'https://gradebook-api.vivifyideas.com/api/gradebooks/store'
        ).as('sucessfulladded')
        header.addGradebook
        .should('be.visible')
        .and('have.css', 'padding-right', '8px')
        .click()
        // addGradebook.add(userData.name)
        // cy.wait('@sucessfulladded').then((interception) => {
        //     console.log('evo ga gradebook', interception)
        //     expect(interception.response.statusCode).to.eq(200)
        // })
    })

})


