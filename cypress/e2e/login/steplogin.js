
class stepLogin {

  static call() {

    before(() => {

      // Visit the login page
      cy.visit(`${Cypress.env('BASE_URL')}/login`);
      cy.wait(3000)

      console.log(`${Cypress.env('BASE_URL')}/login`)

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    })

    describe('Login', () => {

      it('should create a login with username and password', () => {

        // Fill in the username field
        cy.get('input[name="username"]').type(Cypress.env('ACCOUNT'));

        // Fill in the password field
        cy.get('input[name="password"]').type(Cypress.env('PASSWORD'));

        // Submit the form
        cy.get('button[type="submit"]').click();
        cy.wait(5000);

      });

    });
  }
}

export default stepLogin