import initialScreen from '../support/pageObjects/initialScreen.page'

describe('Concluir item na lista de Todo', () => {

    beforeEach(() => {
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]
        todoItens.forEach(function (item, indice, array) {
            initialScreen.inputText(item)
        })
    })
    it('Concluir o primeiro item da lista', () => {
        initialScreen.doneItem()
    })


})