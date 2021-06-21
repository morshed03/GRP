
/// <reference types="cypress" />
const or = require('../../../locators/acr_locators.json');
const common = require('../../../locators/common_locators.json');
export default class AcrEntryPageElements{
 
     ///ACR Application

     acrYearField(){
        return cy.get(or.acrEntry.acrApplication.acrYear)
     }
     dateOfSubmissionToRIODateField(){
        return cy.get(or.acrEntry.acrApplication.dateOfSubmissionToRIO)
     }
     receivingDateOfCompletedFormByDOCRDateField(){
        return cy.get(or.acrEntry.acrApplication.receivingDateOfCompletedFormByDOCR)
     }
     numberGivenByRIOField(){
        return cy.get(or.acrEntry.acrApplication.numberGivenByRIO)
     }
     numberGivenByCSOField(){
        return cy.get(or.acrEntry.acrApplication.numberGivenByCSO)
     }

}