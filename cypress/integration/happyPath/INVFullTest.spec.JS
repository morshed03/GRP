/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'
import LeftNavMenu from '../../support/INV/pageObjects/LeftNavMenu'
import ItemRequisitionPage from '../../support/INV/pageObjects/ItemRequisitionPage'


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
/*
    // Before all It Logout
    afterEach(function()
    {
      cy.logout()
    })
*/
    //Create page object
    const dashboardPage = new DashboardPage()
    const leftNavMenu = new LeftNavMenu()
    const itemRequisitionPage = new ItemRequisitionPage()

    //
    it.only('TC_01. User: Create Entitlement Item Requisition.',function() 
    {
        cy.login(this.inv.UserID, this.inv.UserPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ব্যবহারকারী').click()
        cy.wait(1000)

        leftNavMenu.getItemRequisition().should('include.text', 'মালামালের চাহিদাপত্র').click()
        cy.wait(3000)

        itemRequisitionPage.getItemRequisitionButton().should('include.text', 'মালামালের চাহিদাপত্র').click()   //মালামালের চাহিদাপত্র button
        cy.wait(2000)

        itemRequisitionPage.getItemsButton().should('include.text', 'দ্রব্যাদি').click()    //দ্রব্যাদি button
        cy.wait(2000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'আইটেম অনুসন্ধান')
        itemRequisitionPage.getCategoryTypeDropDown().click()                               //ক্যাটাগরি টাইপ drop-down
        itemRequisitionPage.getDropDownItems().contains(this.inv.CategoryType).click()
        cy.wait(1000)

    })
    it('TC_02. User: Create General Item Requisition.',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)
    })
    it('TC_03. User: Create Project Item Requisition.',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)
    })
})