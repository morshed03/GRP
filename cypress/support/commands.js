// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

import 'cypress-file-upload';

// Import page objects 
import LoginPage from '../support/commonPage/LoginPage'
import DashboardPage from '../support/commonPage/DashboardPage'
import RequisitionDeclarationPage from '../support/PRC/pageObjects/RequisitionDeclarationPage'

// https://on.cypress.io/custom-commands
// ***********************************************
//-- This is the create page object --
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage() 
const requisitionDeclarationPage = new RequisitionDeclarationPage()

// -- This is Login Method --
Cypress.Commands.add("login", (userName, password) => 
{
    loginPage.getUserNameInputBox().type(userName).should('have.value', userName)
    cy.wait(1000)
    loginPage.getPasswordInputBox().type(password).should('have.value', password)
    cy.wait(1000)
    loginPage.getEnterButton().click().should('have.text', 'প্রবেশ করুন')
    cy.wait(3000)
})

//-- This is Log Out method --  
Cypress.Commands.add("logout", () => 
{
    dashboardPage.getUserAvatar().click().should('have.class', 'img-avatar')
    dashboardPage.getExitLink().click({force: true})
    cy.wait(3000)
    loginPage.getEnterButton().should('have.text', 'প্রবেশ করুন')
    cy.wait(1000)
})

//Pagination
Cypress.Commands.add("pagination", (pageItemNo) => 
{
    requisitionDeclarationPage.getPaginationDropDownField().click()
    cy.wait(1000)        
    requisitionDeclarationPage.getPaginationDropDownFieldValue().contains(pageItemNo).click()
    cy.wait(5000)
})

//Calendar Method
Cypress.Commands.add("calendar", (year, month, day) => 
{
    requisitionDeclarationPage.getCalendarYearView().click()
    cy.wait(1000)
    requisitionDeclarationPage.getYearMonthDate().contains(year).click()
    cy.wait(1000)
    requisitionDeclarationPage.getYearMonthDate().contains(month).click()
    cy.wait(1000)
    requisitionDeclarationPage.getYearMonthDate().contains(day).click()
    cy.wait(1000)
})



//Asset Module common Methods
// ***********************************************

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
