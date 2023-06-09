import stepMapTypes from "../mapTypes/stepMapTypes"

class stepPetugas {

  static call() {

    describe('Verify filter petugas', () => {

      before(() => {
        cy.loginSession()
        cy.url().should('include', '/dashboard')
      })

      it('show pin marker petugas', () => {

        stepMapTypes.satelite()

        cy.get('label').contains('Petugas').click()

        cy.filterPetugas()

        cy.get('input[data-nama="Metro Jaya"]').click()

        cy.window().then((win) => {
          const element = win.document.querySelector('#myModalPoldaPetugasDisplay > div > div > div.modal-header.bg-primary > button')

          cy.get(element).click()
        });

      })

    })
  }

}

export default stepPetugas