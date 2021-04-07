/// <reference types="Cypress" />

import CommonObjects from '../pageObjects/CommonObjects'

//Constructor
const element = new CommonObjects()

class CommonPageActions
{
    
    Confirmed(Header, Yes)
    {
        element.ConfirmModalTitle().should('contain.text', Header)
        cy.wait(500)

        element.YesButton().should('contain.text', Yes).click()
        cy.wait(5000)
    }

    PageFirstHeader(HeaderText)
    {
        element.PageHeader().should('have.text', HeaderText)
    }
}
export default CommonPageActions;