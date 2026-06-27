/// <reference types="cypress" />

describe('Funcionalidade: Catálogo de livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html');
    });

    it('Deve adicionar o primeiro livro à cesta', () => {
        cy.get('.btn-primary').first().click();

        cy.get('#cart-count').should('contain', '1');
    });

    it('Deve adicionar todos os livros à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true });

        cy.get('#cart-count').should('not.contain', '0');
    });

    it('Deve adicionar o último livro à cesta', () => {
        cy.get('.btn-primary').last().click();

        cy.get('#cart-count').should('contain', '1');
    });

    it('Deve adicionar o terceiro livro à cesta', () => {
        cy.get('.btn-primary').eq(2).click();

        cy.get('#cart-count').should('contain', '1');
    });

    it('Deve adicionar o quinto livro e exibir a mensagem correta', () => {
        cy.get('.btn-primary').eq(4).click();

        cy.get('#global-alert-container')
            .should('be.visible')
            .and('contain', 'A Metamorfose');
    });

    it('Deve abrir os detalhes do livro ao clicar no título', () => {
        cy.contains('Dom Casmurro').click();

        cy.url().should('include', 'book-details.html');
    });

    it('Deve adicionar o livro à cesta pela página de detalhes', () => {
        cy.contains('Dom Casmurro').click();

        cy.get('#add-to-cart-btn').click();

        cy.get('#alert-container')
            .should('be.visible')
            .and('contain', 'Livro adicionado à cesta com sucesso!');
           
        });

    it('Deve conseguir remover o livro da cesta', () => {

        cy.get(':nth-child(2) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click();
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('#clear-cart-btn').click();
        cy.get('#alert-container').should('contain', 'Cesta limpa com sucesso!');
    });        
    

    // Caminho Feliz

});