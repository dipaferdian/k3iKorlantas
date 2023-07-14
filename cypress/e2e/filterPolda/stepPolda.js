
class stepPolda {


  static filterPolda() {
    // get current document
    cy.window().then((window) => {
      const element = window.document.querySelector("#layout-wrapper > div.main-content > div > div > div.row > div > div:nth-child(1) > div > div.row > div > div.cat.poldaDisplay > div > label > span")

      // two times click
      element.click()
      element.click()
    })
  }

  static searchPolres() {
    cy.get('input[type="search"]').type("testing");
  }

  static zoomSpecificPolda() {

    cy.get('.modal-body').contains('Korlantas').click()

    cy.window().then((window) => {

      const element = window.document.querySelector("#flyToMapFilterPolda1")
      element.click()
    })

    cy.wait(5000)
    cy.get('.leaflet-proxy.leaflet-zoom-animated').should((element) => {
      expect(element[0].attributes[1].nodeValue).to.eq('transform: translate3d(5.34738e+07px, 3.47209e+07px, 0px) scale(131072);');
    });

  }

  static call() {

    describe('Verify filter polda', () => {

      // run this before every test suites
      beforeEach(() => {
        cy.loginSession()
        cy.url().should('include', '/dashboard')
      })

      it('feature polda', () => {

        this.filterPolda()
        this.zoomSpecificPolda()
        this.searchPolres()
      })

    })
  }
}

export default stepPolda