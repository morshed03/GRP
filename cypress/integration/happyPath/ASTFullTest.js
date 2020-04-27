/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'
import LeftNavMenu from '../../support/AST/pageObjects/LeftNavMenu'


describe('AST module Smoke Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('ASTTestData').then(function(ast)
      {
        this.ast = ast
      })
      /*
      cy.fixture('PRCTestData').then(function(prc)
      {
        this.prc = prc
      })
      */
      cy.visit(Cypress.env('url'))
    })
/*
    // Before all IT Logout
    afterEach(function()
    {
      cy.logout()
    })
*/
    //Create page object
    const dashboardPage = new DashboardPage()
    const leftNavMenu = new LeftNavMenu()

    //Material Receive as Store Keeper
    it.only('Material Receive TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getOdersMenu().click().should('have.text', 'অর্ডার সমূহ')
        
    })
})