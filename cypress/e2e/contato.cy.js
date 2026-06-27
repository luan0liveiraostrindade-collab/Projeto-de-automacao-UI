/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker';

describe('Funcionalidade: contato', () => {

    beforeEach(() => {
        cy.visit('index.html')
    });

    it('Deve enviar mensagem de contato com sucesso', () => {
        cy.get('[name="name"]').type('Luan Oliveira');
        cy.get('[name="email"]').type('luantrindade@yahoo.com.br');
        cy.get('[name="subject"]').select('Parcerias');
        cy.get('[name="message"]').type('Olá, gostaria de fazer parte da equipe!');
        cy.get('#btn-submit').click();
        cy.get('#alert-container').should('contain', 'Contato enviado com sucesso!')

    })

    //Caminho feliz

    //Exemplos de testes de erro 

    it('Não deve efetuar o login sem preencher o campo nome', () => {
        cy.get('[name="email"]').type('luantrindade@yahoo.com.br');
        cy.get('[name="subject"]').select('Parcerias');
        cy.get('[name="message"]').type('Olá, gostaria de fazer parte da equipe!');
        cy.get('#btn-submit').click();
        cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')

    })

    it('Não deve enviar efetuar login sem preencher o campo email', () => {
        cy.get('[name="name"]').type('Luan Oliveira');
        cy.get('[name="subject"]').select('Parcerias');
        cy.get('[name="message"]').type('Olá, gostaria de fazer parte da equipe!');
        cy.get('#btn-submit').click();
        cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')

    })

    it('Não deve enviar efetuar login sem o campo assuntos', () => {
        cy.get('[name="name"]').type('Luan Oliveira');
        cy.get('[name="email"]').type('luantrindade@yahoo.com.br');
        cy.get('[name="message"]').type('Olá, gostaria de fazer parte da equipe!');
        cy.get('#btn-submit').click();
        cy.get('#alert-container').should('contain', "Por favor, selecione o Assunto.")

    })

    it('Não deve enviar efetuar login sem escrever uma mensagem', () => {
        cy.get('[name="name"]').type('Luan Oliveira');
        cy.get('[name="email"]').type('luantrindade@yahoo.com.br');
        cy.get('[name="subject"]').select('Parcerias');
        cy.get('#btn-submit').click();
       cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')

    })






















}); 