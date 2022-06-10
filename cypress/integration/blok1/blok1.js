import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

const username = Cypress.env('username')
const password = Cypress.env('password')


Given("user starts at {string} page",
    (url) => {
    cy.visit(url)
    })

When("user enters username in the username field",
    () => {
    cy.get('#ego_user')
        .type(username)
    })

And("enters password in the password field",
    () => {
    cy.get('#ego_secret')
        .type(password)
    })

And("clicks an orange button below named {string}",
    (prihlasit) => {
    cy.contains(prihlasit)
        .click()
    })

Then("user should be signed in",
    () => {
    cy.get('.header-navigation-inner')
        .should('contain', username)
    })

And("button {string} should be available",
    (napisat) => {
    cy.contains(napisat)
        expect(napisat).to.exist
    })



When("user clicks hyperlink {string} in the top right corner",
    (odhlasit) => {
    cy.contains(odhlasit)
        .click()
    })

Then("user is signed out and redirected to {string}",
    (homepage) => {
    cy.url()
        .should("be.equal", homepage)
    })

And("button {string} is available",
    (prompt) => {
    cy.contains(prompt)
        expect(prompt).to.exist
    })


