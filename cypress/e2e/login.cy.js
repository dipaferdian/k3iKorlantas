/// <reference types="cypress" />

describe('Login', () => {


  before(() => {

    // Visit the login page
    cy.visit(`${Cypress.env('BASE_URL')}/login`);

    console.log(`${Cypress.env('BASE_URL')}/login`)

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

  })

  it.skip('should create a login with username and password', () => {

    // Fill in the username field
    cy.get('input[name="username"]').type(Cypress.env('USERNAME'));

    // Fill in the password field
    cy.get('input[name="password"]').type(Cypress.env('PASSWORD'));

    // Submit the form
    cy.get('button[type="submit"]').click();

    // cy.getCookie('ci_session').then((cookie) => {
    //   // save cookie until we need it

    //   cy.setCookie(cookie.name, cookie.value)
    // })

  });
});