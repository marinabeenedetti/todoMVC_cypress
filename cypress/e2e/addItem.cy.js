
import initialScreen from '../support/pageObjects/initialScreen.page'

describe('Adicionar itens na lista de Todo', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    it('Adicionar um item na lista', () => {
        initialScreen.inputText("Marina")
    })

    it('Adicionar mais de um item na lista', () => {
        var todoItens = ["Maça", "Banana", "Cenoura"]
        todoItens.forEach(function (item, indice, array) {
            initialScreen.inputText(item)
        });
    })

})