
class stepPolda {

  static call() {

    describe('Verify filter polda', () => {

      // run this before every test suites
      beforeEach(() => {
        cy.loginSession()
        cy.url().should('include', '/dashboard')
      })

      it('uncheck and check filter', () => {

        // get current document
        cy.window().then((window) => {
          const element = window.document.querySelector("#layout-wrapper > div.main-content > div > div > div.row > div > div:nth-child(1) > div > div.row > div > div.cat.poldaDisplay > div > label > span")
          
          // two times click
          element.click()
          element.click()
        })

        // cy.window().then((window) => {
        //   const element = window.document.querySelector("#poldaFilterModal > i")

        //   element.click() 
        // })
      })

    })
  }
}

export default stepPolda