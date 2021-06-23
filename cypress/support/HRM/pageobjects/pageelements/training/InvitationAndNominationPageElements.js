
/// <reference types="cypress" />
const or = require('../../../locators/training_locators.json');
export default class InvitationAndNominationPageElements{
    
    ///আমন্ত্রণ ও মনোনয়ন

    branchField(){
        return cy.get(or.invitationAndNomination.participantSelection.branch)
    }

    positionField(){
        return cy.get(or.invitationAndNomination.participantSelection.position)
    }

    gradeField(){
        return cy.get(or.invitationAndNomination.participantSelection.grade)
    }

    employeeField(){
        return cy.get(or.sentforApproval.employee)
    }

    


}