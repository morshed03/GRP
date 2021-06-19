
/// <reference types="cypress" />
const or = require('../../../locators/training_locators.json');
export default class ConfigurationPageElements{
    
    ///প্রতিষ্ঠান

    organizationNameBnField(){
        return cy.get(or.configuration.organization.organizationNameBn)
    }

    organizationNameEnField(){
        return cy.get(or.configuration.organization.organizationNameEn)
    }

    countryField(){
        return cy.get(or.configuration.organization.country)
    }

    addressField(){
        return cy.get(or.configuration.organization.address)
    }

    phoneField(){
        return cy.get(or.configuration.organization.phone)
    }

    emailField(){
        return cy.get(or.configuration.organization.email)
    }

    sessionTypeField(){
        return cy.get(or.configuration.organization.sessionType)
    }
  
    descriptionField(){
        return cy.get(or.configuration.organization.description)
    }

    ///প্রশিক্ষণের ধরন
    
    trainingTypeBnField(){
        return cy.get(or.configuration.trainingType.trainingTypeBn)
    }
    trainingTypeEnField(){
        return cy.get(or.configuration.trainingType.trainingTypeEn)
    }

    ///দক্ষতা সমূহ
    skillBnField(){
     return cy.get(or.configuration.Skills.skillBn)
    }

    skillEnField(){
     return cy.get(or.configuration.Skills.skillEn)
    }

    ///প্রশিক্ষণের ধরনে অন্তর্গত দক্ষতা সমূহ
    
    trainingTypeField(){
     return cy.get(or.configuration.trainingType.skillsInherentTrainingType.trainingType)
    }

    skillSearchField(){
     return cy.get(or.configuration.trainingType.skillsInherentTrainingType.skillSearch)
    }

  

}