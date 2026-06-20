describe('Funcionalidade: login', () => {

it.only('Deve fazer login com sucesso',() => {
cy.visit('localhost:3000/login.html')
cy.get('#email').type('admin@biblioteca.com')
cy.get('#password').type('admin123')
cy.get('#login-btn').click()
cy.contains('Painel Administrativo').should('be.visible')
});

it('Teste 2', () => {
    
});

it('teste 3', () => {
    
});





    
});