/// <reference types="cypress" />
import ReplacementPageElements from '../../pageelements/leave/ReplacementPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class ReplacementPageActions{

    constructor(){

        globalThis.replacementPage = new ReplacementPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }


    branchSearch(branchName, saveBtnSelector){
            replacementPage.branchField().click()
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(branchName).click({force: true})
            cy.wait(1000)

            //saveBtn
            commonpageelement.getsaveBtn(saveBtnSelector).click({force: true})
            cy.wait(1000)
    }

    substituteEmployeeDetails(branchName1,employeename1,branchName2,employeeName2,saveBtn2Selector){
        replacementPage.replacement1branchField().type(branchName1).should('have.value', branchName1)
        cy.wait(1000)

        replacementPage.replacement1EmployeeField().type(employeename1).should('have.value', employeename1)
        cy.wait(1000)

        replacementPage.replacement2branchField().type(branchName2).should('have.value', branchName2)
        cy.wait(1000)

        replacementPage.replacement2EmployeeField().type(employeeName2).should('have.value', employeeName2)
        cy.wait(1000)
        
        //saveBtn
        commonpageelement.getsaveBtn(saveBtn2Selector).click({force: true})
        cy.wait(1000)
        }

}