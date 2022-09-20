///  <reference types="cypress"/>

describe('Funcionalidade Pagina de Produtos', () => {

    beforeEach(() => {

        cy.visit('produtos')
    });

    it('Deve selecionar um  produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Arcadio Gym Short')
            .click()

    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        cy.get('[class="product-block grid"]')
            .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain',quantidade + ' × “Arcadio Gym Short” foram adicionados no seu carrinho.')

    });

    it.only('Deve adicionar produtos ao carrinho -- Usando Comando Customizado', () => {
        cy.addProdutos('Arcadio Gym Short', '32', 'Red', 2)
    });

    it('Deve adicionar produtos ao carrinho -- Usando Comando Customizado', () => {
        cy.addProdutos('Apollo Running Short', '32', 'Black', 2)
    });
});