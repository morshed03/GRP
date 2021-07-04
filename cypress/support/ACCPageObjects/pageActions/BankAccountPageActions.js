/// <reference types="Cypress" />

import BankAccountPage from '../pageElements/BankAccountPage'
import CommonObjects from '../pageElements/CommonPageElements'

//Constructor
const element = new BankAccountPage()
const commonObjects = new CommonObjects()

class BankAccountPageActions
{
    ClickCreatePlusButton()  //Create plus button
    {
        element.CreatePlusButton().click()
        cy.wait(3000)
    }
    
    AddBankAccountDetails(accountType, economicCode, bankName, branchName, accountTitle, accountNumber, routingNumber, IBANNumber, SwiftCode, SignatoryNumber)
    {
        element.BankAccountTypeField().click()
        cy.wait(1000)
        commonObjects.DropdownItem().contains(accountType).click()
        cy.wait(1000)

        element.EconomicCodeField().click()
        cy.wait(1000)
        commonObjects.DropdownItem().contains(economicCode).click()
        cy.wait(1000)

        element.BankNameField().type(bankName).should('have.value', bankName)
        cy.wait(1000)

        element.BranchNameField().type(branchName).should('have.value', branchName)
        cy.wait(1000)

        element.AccountTitleField().type(accountTitle).should('have.value', accountTitle)
        cy.wait(1000)

        element.AccountNumberField().type(accountNumber).should('have.value', accountNumber)
        cy.wait(1000)

        element.RoutingNumberField().type(routingNumber).should('have.value', routingNumber)
        cy.wait(1000)

        element.IBANNumberField().type(IBANNumber).should('have.value', IBANNumber)
        cy.wait(1000)

        element.SwiftCodeField().type(SwiftCode).should('have.value', SwiftCode)
        cy.wait(1000)

        //element.SignatoryNumberField().clear().type(SignatoryNumber).should('have.value', SignatoryNumber)
        element.SignatoryNumberField().should('have.value', SignatoryNumber)
        cy.wait(1000)

        element.SubmitButton().should('contain.text', 'দাখিল করুন').click()
        cy.wait(1000)
    }
    
}
export default BankAccountPageActions;