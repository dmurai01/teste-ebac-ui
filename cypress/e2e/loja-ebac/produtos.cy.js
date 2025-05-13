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

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Kratos Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        let qtd = 3

        produtosPage.buscarProduto(produto)
        produtosPage.addProdutoCarrinho('L', 'Purple', 3)

        cy.get('.woocommerce-message').should('contain', qtd + ' × “' + produto + '” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho, 
                dados[1].cor,
                dados[1].quantidade)

            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
    });

});