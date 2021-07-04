/// <reference types="Cypress" />

import LeftNavMenu from '../pageElements/LeftNavMenu'

//Constructor
const leftNavMenu = new LeftNavMenu()

class LeftNavMenuActions
{
    ManageChartOfAccounts(Text1) //হিসাব রক্ষন ব্যবস্থাপনা
    {
        cy.log(Text1)
        leftNavMenu.getDropDownMenu().should('include.text', Text1).click({force: true})
        cy.wait(1000)
    }
    BankAccountSubMenu(Text) //ব্যাংক হিসাব
    {
        leftNavMenu.getBankAccountSubMenu().should('contain.text', Text).click()
        cy.wait(1000)
    }
}
export default LeftNavMenuActions;