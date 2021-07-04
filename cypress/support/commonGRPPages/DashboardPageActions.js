/// <reference types="Cypress" />

import DashboardPageElements from '../commonGRPPages/DashboardPageElements'

//Constructor
const dashboardPageElements = new DashboardPageElements()

class DashboardPageActions
{
    ClicksACC()  //clicks ACC
    {
        dashboardPageElements.getACCAvatar().click()
        cy.wait(3000)
    }
    
}
export default DashboardPageActions;