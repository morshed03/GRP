/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'
import LeftNavMenu from '../../support/ACC/pageObjects/LeftNavMenu'
import BillPage from '../../support/ACC/pageObjects/BillPage'


describe('Accounts Module Regression Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('ACCTestDataSTG').then(function(acc)
      {
        this.acc = acc
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
    const billPage = new BillPage()

    //নতুন বিল যোগ করুন
    it('TC_01. Account Officer: Create Bill',function() 
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)

        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
        cy.wait(3000)

        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ব্যয়').click({force: true})
        cy.wait(1000)
        leftNavMenu.getBillSubMenu().should('include.text', 'বিল').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'বিলের তালিকা')

        
        cy.wait(6000)
        
    })
})