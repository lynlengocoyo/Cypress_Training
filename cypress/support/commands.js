// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')


require('cypress-iframe');

/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

import 'cypress-file-upload'


//Cypress.Commands.add('ClickLinkText', (eleText)=>{


   // cy.get('a').contains(eleText).click()

	//})


   // Cypress.Commands.add('customHandleIFrame', function(locatorFrame) {
        
        
      //  return cy.get(locatorFrame)
         //        .its('0.contentDocument.body')
        //         .should('be.visible')
       //          .then(cy.wrap)

    //})


    Cypress.Commands.add('verifyElementText', (selector, expectedText)=>{
    


        cy.get(selector).then((ele) => {

           expect(ele.text()).to.equal(expectedText)



        } )

})
