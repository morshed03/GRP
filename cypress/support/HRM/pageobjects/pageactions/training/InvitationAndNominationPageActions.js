/// <reference types="cypress" />

import InvitationAndNominationPageElements from '../../pageelements/training/InvitationAndNominationPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class InvitationAndNominationPageActions{

    constructor(){

        globalThis.invitationAndNominationpageelement = new InvitationAndNominationPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }
    

    participantSelectionDetails(branch,position,grade,searchBtnSelector){
         
        invitationAndNominationpageelement.branchField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(branch).click({force: true})
        cy.wait(1000)
        invitationAndNominationpageelement.positionField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(position).click({force: true})
        cy.wait(1000)
        /*
        invitationAndNominationpageelement.gradeField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(grade).click({force: true})
        cy.wait(1000)
        */
        commonpageelement.getSearchBtn(searchBtnSelector).click({force: true})
        cy.wait(1000)
    }

    SentForApproval(name,sendBtnSelector,completeBtnSelector,completebtnName){
        invitationAndNominationpageelement.employeeField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(name).click({force: true})
        cy.wait(1000)

        //sendBtn
       commonpageelement.getSendBtn(sendBtnSelector).click({force: true})
       cy.wait(1000)
       //completeBtn
       commonpageelement.getCompleteBtn(completeBtnSelector).contains(completebtnName).click({force: true}) 
       cy.wait(1000)
    }

}