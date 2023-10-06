import initialScreen from '../support/pageObjects/initialScreen.page'

describe('Deletar item após a adição de itens', () => {

    beforeEach(() => {
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]
        todoItens.forEach(function (item, indice, array) {
            initialScreen.inputText(item)
        })
    })


    it('Deletar item da lista', () => {
        initialScreen.deleteItem()
    })

})