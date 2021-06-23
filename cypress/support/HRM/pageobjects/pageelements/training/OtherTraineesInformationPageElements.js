
/// <reference types="cypress" />
const or = require('../../../locators/training_locators.json');
export default class OtherTraineesInformationPageElements{
    
    ///অন্যান্য প্রশিক্ষণার্থীর তথ্য

    nameBnField(){
        return cy.get(or.otherTraineesInformation.nameBn)
    }

    nameEnField(){
        return cy.get(or.otherTraineesInformation.nameEn)
    }

    officeField(){
        return cy.get(or.otherTraineesInformation.office)
    }

    branchField(){
        return cy.get(or.otherTraineesInformation.branch)
    }

    titleField(){
        return cy.get(or.otherTraineesInformation.title)
    }

    phoneField(){
        return cy.get(or.otherTraineesInformation.phone)
    }

    emailField(){
        return cy.get(or.otherTraineesInformation.email)
    }
}