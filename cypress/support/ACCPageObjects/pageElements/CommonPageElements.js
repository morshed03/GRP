/// <reference types="Cypress" />

const or = require("../AccLocators.json")


class CommonObjects
{
    //নিশ্চিতকরণ Modal
    ConfirmModalTitle()  //Modal title নিশ্চিতকরণ
    {
        return cy.get(or.ConfirmModal.ModalTitle)
    }
    YesButton()  //হ্যাঁ
    {
        return cy.get(or.ConfirmModal.YesButton)
    }
    NoButton()  //  না
    {
        return cy.get(or.ConfirmModal.NoButton)
    }

    //Common drop-down items
    DropdownItem()  //Drop-down
    {
        return cy.get(or.GlobalLocator.DropDownItems)
    }

    //Page main header
    PageHeader()  //Page Header (Main)
    {
        return cy.get(or.GlobalLocator.PageHeader)
    }
    
}
export default CommonObjects;