/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker';

describe('Funcionalidade: cadastro', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });


    it('Deve fazer cadastro com sucessso', () => {

        const fullName = faker.person.fullName();
        const email = `${fullName.replace(/\s+/g, '').toLowerCase()}@gmail.com`;
        const password = faker.internet.password();

        cy.get('#name').type(fullName);
        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#confirm-password').type(password);
        cy.get('#terms-agreement').click();
        cy.get('#register-btn').click();
        cy.get('#alert-container').should('contain', 'Conta criada com sucesso! Fazendo login...');
    });

    //Caminho Feliz

    //Exemplos de testes de erro 

    it('Não deve fazer cadastro sem preencher o campo nome', () => {

        const email = faker.internet.email();
        const password = faker.internet.password();

        cy.get('#email').type(email);
        cy.get('#password').type(password);
        cy.get('#confirm-password').type(password);
        cy.get('#terms-agreement').click();
        cy.get('#register-btn').click();
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres');
    });

    it('Não deve fazer cadastro sem preencher o campo email', () => {

        const fullName = faker.person.fullName();
        const password = faker.internet.password();

        cy.get('#name').type(fullName);
        cy.get('#password').type(password);
        cy.get('#confirm-password').type(password);
        cy.get('#terms-agreement').click();
        cy.get('#register-btn').click();
        cy.get('#register-form > :nth-child(2) > .invalid-feedback').should('contain', 'Email válido é obrigatório');
    });

});







