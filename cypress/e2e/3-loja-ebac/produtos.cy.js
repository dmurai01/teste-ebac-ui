///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        //cy.visit('produtos')
        produtosPage.visitarUrl()
    });

   /* it('Deve selecionar um produto da lista', () => {
        cy.get('.name')
            //.first()
            //.eq(4)
            .contains('Gym')
            .click()

        cy.get('.product_title').should('contain', 'Gym')    
    });*/

    it('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutoLista('Aether Gym Pant')
       
    });

    it.only('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Kratos Gym Pant')
        cy.get('.product_title').should('contain', 'Kratos Gym Pant')
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });

});