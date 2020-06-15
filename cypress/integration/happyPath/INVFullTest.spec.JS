/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'


describe('INV Module Regression Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('INVTestDataSQA').then(function(inv)
      {
        this.inv = inv
      })
      
      cy.visit(Cypress.env('url'))
    })

    // Before all It Logout
    afterEach(function()
    {
      cy.logout()
    })

    //Create page object
    const dashboardPage = new DashboardPage()
 

    //নতুন ঘোষণা যোগ করুন
    it('TC_01. PE: Create Requisition Declaration.',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)
    })
})