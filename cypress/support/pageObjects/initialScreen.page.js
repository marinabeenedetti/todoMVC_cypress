const elements = require('../elements/initialScreen.elements').ELEMENTS
const doneItem = require('../elements/initialScreen.elements').ITENS
const filterItem = require('../elements/initialScreen.elements').FILTERS


class initialScreen {
    inputText(data) {
        cy.get(elements.inputToDo).type(data).type('{enter}')
    }

    validateInput(text) {
        cy.get(elements.inputToDo)
            .should('have.attr', 'placeholder')
            .and('include', text)
    }

    validateCount(number) {
        cy.get(filterItem.counter)
            .find('strong')
            .should('have.text', number)
    }
    validadeSizeTodo(number) {
        cy.get(doneItem.itensList)
            .should('have.length', number)
    }

    doneItem() {
        cy.get(doneItem.buttonDone)
            .first()
            .click()
    }

    filterItem(menu) {
        cy.get(filterItem.filterToDo)
            .contains(menu)
            .and('be.visible')
            .click()
    }

    deleteItem() {
        cy.get(doneItem.itensList)
            .first()
            .find('button')
            .invoke('show')
            .click()
    }
}

export default new initialScreen();