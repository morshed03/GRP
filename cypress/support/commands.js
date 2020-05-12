// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

import 'cypress-file-upload';

// Import pages 
// ***********************************************
//Common page import
import LoginPage from '../support/commonPage/LoginPage'
import DashboardPage from '../support/commonPage/DashboardPage'
//PRC page import
import RequisitionDeclarationPage from '../support/PRC/pageObjects/RequisitionDeclarationPage'
//AST page import
import ReceiveGoods_StoreKeepingPage from '../support/AST/pageObjects/ReceiveGoods_StoreKeepingPage'


//-- This is the create page object --
// ***********************************************
//Common create page object 
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage() 
//PRC create page object
const requisitionDeclarationPage = new RequisitionDeclarationPage()
//AST create page object
const receiveGoodsPage = new ReceiveGoods_StoreKeepingPage()



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
    dashboardPage.getUserAvatar().click({force: true}).should('have.class', 'img-avatar')
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
Cypress.Commands.add("inspection", (element) => 
{
    receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired চালান নং on বিবরণ column
    {
        const textDescription=$el.find('td.e-rowcell[aria-label]').text()
        if(textDescription.includes(element))                    
        {
            $el.find('td button mat-icon').click()
        }
    })
})

//For visible items
Cypress.Commands.add("visibleItems", (element) => 
{
    receiveGoodsPage.getCardRowsvisible().each(($el, index, $list) =>     //Select the desired চালান নং on বিবরণ column
    {
        const textDescription=$el.find('td.e-rowcell[aria-label]').text()
        if(textDescription.includes(element))                    
        {
            $el.find('td button mat-icon').click()
        }
    })
})

//Select the desired items checkbox 
Cypress.Commands.add("selectItems", (element) => 
{
    receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired Tag No
    {
        const textAssetTagNo=$el.find('td.e-rowcell[aria-label]').text()
        if(textAssetTagNo.includes(element))                    
        {
            $el.find('.e-templatecell label span.e-icons').click()
        }
    })
})

//

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
