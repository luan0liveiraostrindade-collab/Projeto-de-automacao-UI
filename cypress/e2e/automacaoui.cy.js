describe('Funcionalidade: login', () => {

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







});