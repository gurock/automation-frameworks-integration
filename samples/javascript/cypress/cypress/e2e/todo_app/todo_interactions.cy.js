/// <reference types="cypress" />

describe('[interactions] Todo app list with a checked task', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()
  })

  it('can filter for uncompleted tasks', () => {
    cy.contains('Active').click()
    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Walk the dog')
    cy.contains('Pay electric bill').should('not.exist')
  })

  it('can filter for completed tasks', () => {
    cy.contains('Completed').click()
    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Pay electric bill')

    cy.contains('Walk the dog').should('not.exist')
  })

  it('can delete all completed tasks', () => {
    cy.contains('Clear completed').click()
    cy.get('.todo-list li')
      .should('have.length', 2)
      .should('not.have.text', 'Pay electric bill')
    cy.contains('Clear completed').should('not.exist')
  })
})
