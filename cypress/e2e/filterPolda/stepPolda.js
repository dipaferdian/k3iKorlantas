
class stepPolda {

  static call() {

    describe('Verify filter polda', () => {

      before(() => {
        cy.loginSession()
        cy.url().should('include', '/dashboard')
      })
      
      it('uncheck filter', () => {

        cy.get('button[id="poldaFilterModal"]').click({ force: true })

      })

    })
  }
}

export default stepPolda