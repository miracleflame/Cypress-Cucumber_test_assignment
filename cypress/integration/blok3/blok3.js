import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

const username = Cypress.env('username')
const password = Cypress.env('password')

const getIframeDocument = () => {
  return cy
  .get('iframe[id="mail_composer_body_ifr"]')
  .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap)
}


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


When("user clicks button {string}",
    (napisat) => {
    cy.contains(napisat)
        .click()
    })

And("populates Komu: field with {string}",
    (contact) => {
    cy.get('#smart_input_to')
        .type(contact)
    })

And("populates Predmet: field with {string}",
    (subject) => {
    cy.get('#subject_input').type(subject)
    })

And("populates Body of the message with {string}",
    (message) => {
    getIframeBody().type(message)
    })

And("clicks Pridať prílohu button to upload {string} attachment",
    (file) => {
    cy.get('#mc_attachments_add').attachFile(file)
    })

And("clicks button {string}",
    (send) => {
    cy.get('#qa_email_send_bottom')
        .should('contain', send)
        .click()
    })

Then("message with subject {string} is sent and found in Odoslané folder",
    (subject) => {
    cy.get('.icon-sent')
        .click()
    cy.get('.list-row[onmousedown="UI.DND.mouseDown(event,4, 1); return false;"]')
        .should('contain', subject)
    })

And("it should have the attachment icon beside",
    () => {
    cy.get('.icon-sent')
        .click()
    cy.get('.list-row[onmousedown="UI.DND.mouseDown(event,4, 1); return false;"] > .list-attachment')
        .should("have.class", "icon-attachment")
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