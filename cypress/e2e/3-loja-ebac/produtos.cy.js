///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.name')
            //.first()
            //.eq(4)
            .contains('Gym')
            .click()

        cy.get('.product_title').should('contain', 'Gym')    
    });

});