class produtosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.name')
            .contains(nomeProduto)
            .click()
    }

    visitarProduto() {
        //cy.get('.search > .tbay-search-form > ')

    }

    addProdutoCarrinho() {

    }

}

export default new produtosPage()