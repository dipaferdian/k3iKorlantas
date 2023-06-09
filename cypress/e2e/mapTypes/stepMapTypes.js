
class stepMapTypes {

  static satelite() {

    cy.get('.leaflet-control-layers-toggle').realHover();

    cy.get('.leaflet-control-layers-base').then(() => {
      cy.get('label').contains(' Google Map Satelite').click({ force: true })
    })
  }
}

export default stepMapTypes