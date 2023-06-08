/// <reference types="cypress" />


before(() => {
  cy.loginSession()
  cy.url().should('include', '/dashboard')
})

describe('Verify filter petugas', () => {

  it('switch to satelite map type', () => {

    cy.get('.leaflet-control-layers-toggle').realHover();

    cy.get('.leaflet-control-layers-base').then(() => {
      cy.get('label').contains(' Google Map Satelite').click({ force: true })
    })

    cy.get('label').contains('Petugas').click()

    cy.filterPetugas()

    cy.get('input[data-nama="Metro Jaya"]').click()

    cy.window().then((win) => {
      const element = win.document.querySelector('#myModalPoldaPetugasDisplay > div > div > div.modal-header.bg-primary > button')

      cy.get(element).click()
    });

  })

})