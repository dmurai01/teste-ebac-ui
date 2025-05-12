///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('dani_ebac@teste.com')
        cy.get('#password').type('!Teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, dani_ebac (não é dani_ebac? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {
        cy.get('#username').type('invalidoddd@teste.com')
        cy.get('#password').type('!Teste123')
        cy.get('.woocommerce-form > .button').click()
       
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('dani_ebac@teste.com')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()
       
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail dani_ebac@teste.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error > li').should('exist')
    });
})