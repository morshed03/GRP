/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'
import LeftNavMenu from '../../support/hrm/pageObjects/LeftNavMenu' 

describe('HRM Module Regression Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('HRMTestDataSQA').then(function(hrm)
      {
        this.hrm = hrm
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

    //
    it('Test Name Here. TC',function() 
    {
        cy.login(this.hrm.AdminID, this.hrm.AdminPassword)

        //Select Office
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.hrm.AdminOffice).click()
        cy.wait(3000)

        dashboardPage.getHRMAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('পিএমআইএস').click()
        cy.wait(1000)
        leftNavMenu.getHomeSubMenu().should('include.text', 'হোম').click({force: true})
        cy.wait(3000)
        
    })
})