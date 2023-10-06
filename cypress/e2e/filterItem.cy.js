import initialScreen from '../support/pageObjects/initialScreen.page'

describe('Filtrar item após a adição de itens', () => {

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
  })

  it('Filtrar itens concluidos', () => {
  })

})