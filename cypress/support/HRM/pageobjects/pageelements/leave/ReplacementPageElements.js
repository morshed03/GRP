
/// <reference types="cypress" />
const or = require('../../../locators/leave_locators.json');
export default class ReplacementPageElements{
     
    branchField(){
        return cy.get(or.replacement.branch)
    }

    replacement1branchField(){
        return cy.get(or.replacement.replacement1.branchName1)
    }

    replacement1EmployeeField(){
        return cy.get(or.replacement.replacement1.employeename1)
    }

    replacement2branchField(){
        return cy.get(or.replacement.replacement2.branchName2)
    }

    replacement2EmployeeField(){
        return cy.get(or.replacement.replacement2.employeeName2)
    }

}