import initialScreen from '../support/pageObjects/initialScreen.page'

describe('Regressivo Todo App', () => {
    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        });
        it('Validar a area label de imput de dados', () => {
            initialScreen.validateInput('What needs to be done?')
        });

    })
    context('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
        });
        it('Adicionar mais de um item na lista', () => {
            var todoItens = ["Maça", "Banana", "Cenoura"]
            todoItens.forEach(function (item, indice, array) {
                initialScreen.inputText(item)
            })
            initialScreen.validateCount(3)
        });
    })
    context('Validar a conclusão de itens', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Cenoura"]
            todoItens.forEach(function (item, indice, array) {
                initialScreen.inputText(item)
            })
        })
        it('Concluir o primeiro item da lista', () => {
            initialScreen.doneItem()
            initialScreen.validateCount(2)
        })


    })
    context('Validar o fitro da aplicação', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Cenoura"]
            todoItens.forEach(function (item, indice, array) {
                initialScreen.inputText(item)

                initialScreen.doneItem()
            })
        })
        it('Filtrar itens ativos', () => {
            initialScreen.filterItem("Active")
            initialScreen.validadeSizeTodo(2)
        })
        it('Filtrar itens concluidos', () => {
            initialScreen.filterItem("Completed")
            initialScreen.validadeSizeTodo(1)
        })

    })
    context('Validar a remoção de itens', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Cenoura"]
            todoItens.forEach(function (item, indice, array) {
                initialScreen.inputText(item)
            })
        })


        it('Deletar item da lista', () => {
            initialScreen.deleteItem()
            initialScreen.validadeSizeTodo(2)
        })

    })
})