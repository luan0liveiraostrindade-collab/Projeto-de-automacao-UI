/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker';

describe('Funcionalidade: login/ Massa de dados fake', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });


    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('admin@biblioteca.com')
        cy.get('#password').type('admin123')
        cy.get('#login-btn').click()
        cy.url().should('include', '/admin-dashboard.html')
        cy.contains('Painel Administrativo').should('be.visible')
    });

    //Testes de erro

    it('Não deve efetuar login sem preencher o campo email', () => {
        cy.get('#password').type('admin123')
        cy.get('#login-btn').click()
        cy.contains('Por favor, insira um email válido.').should('be.visible')
    });

    it('Não deve efetuar login sem preencher o campo senha', () => {
        cy.get('#email').type('admin@biblioteca.com')
        cy.get('#login-btn').click()
        cy.get('#password').should('have.class', 'is-invalid')
    });

    it('Não deve efetuar login ao errar o campo email', () => {
        cy.get('#email').type('admin@biblioteca')
        cy.get('#password').type('admin123')
        cy.get('#login-btn').click()
        cy.contains('Por favor, insira um email válido.').should('be.visible')

    });

    it('Não deve efetuar login ao errar o campo senha', () => {
        cy.get('#email').type('admin@biblioteca.com')
        cy.get('#password').type('123')
        cy.get('#login-btn').click()
        cy.contains('Email ou senha incorretos.').should('be.visible')
    });

    //Massa de dados fake

    it('Não deve efetuar login com credenciais aleatórias', () => {

        const usuarioFake = {
            email: faker.internet.email(),
            senha: faker.internet.password()
        };

        cy.log(`Email: ${usuarioFake.email}`);
        cy.log(`Senha: ${usuarioFake.senha}`);

        cy.get('#email').type(usuarioFake.email);
        cy.get('#password').type(usuarioFake.senha);
        cy.get('#login-btn').click();

        cy.contains('Email ou senha incorretos.')
            .should('be.visible');
    });

    it('Não deve efetuar login com email aleatório e senha válida', () => {

        const emailFake = faker.internet.email();

        cy.get('#email').type(emailFake);
        cy.get('#password').type('admin123');
        cy.get('#login-btn').click();

        cy.log(`Email utilizado: ${emailFake}`);

        cy.contains('Email ou senha incorretos.')
            .should('be.visible');
    });

});