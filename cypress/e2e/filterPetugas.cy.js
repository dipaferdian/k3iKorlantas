/// <reference types="cypress" />


before(() => {
  cy.loginSession()
  cy.url().should('include', '/dashboard')
})

describe('Filter Petugas', () => {

  it('switch to satelite map type', () => {

    cy.get('.leaflet-control-layers-toggle').realHover();

    cy.get('.leaflet-control-layers-base').then(() => {

      cy.get('label').contains(' Google Map Satelite').click({force: true})
    })

    cy.get('label').contains('Petugas').click()

    cy.get('#dropdownPetugas').click().then((element) => {

      cy.get('.dropdown-menu.show').then((element) =>{

        cy.get('button[id*="petugasFilterModal"]').then((element) =>{

            cy.wrap(element).contains('Status Personil').click({force: true})

            cy.contains('Selesai').click()
        })
      })
    })

    cy.get('.modal-content').then(() =>{

      cy.get('.modal-header.bg-primary').then((element) =>{
        cy.get('#myModalPetugasDisplay > div > div > div.modal-header.bg-primary > button').click()
      })
    })

    cy.get('#mapG20Dashboard').type('{plus}', { parseSpecialCharSequences: false });

    cy.get('#mapG20Dashboard > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-marker-pane').then((element) =>{
      
       cy.get('.leaflet-marker-icon.leaflet-div-icon.leaflet-zoom-animated.leaflet-interactive').then((element) =>{
          cy.contains('k3itest3').click({force: true})
       })
    })
  })

})