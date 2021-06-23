/// <reference types="cypress" />

import ConfigurationPageElements from '../../pageelements/training/ConfigurationPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class ConfigurationPageActions{

    constructor(){

        globalThis.configurationpageelement = new ConfigurationPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    ///প্রতিষ্ঠান
    organizationDetails(organizationNameBn,organizationNameEn,country,address,phone,email,sessionType,description,saveBtnSelector,completeBtnSelector){
     
        configurationpageelement.organizationNameBnField().type(organizationNameBn).should('have.value', organizationNameBn)
        cy.wait(1000)

        configurationpageelement.organizationNameEnField().type(organizationNameEn).should('have.value', organizationNameEn)
        cy.wait(1000)

        configurationpageelement.countryField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(country).click({force: true})
        cy.wait(1000)

        configurationpageelement.addressField().type(address).should('have.value', address)
        cy.wait(1000)

        configurationpageelement.phoneField().type(phone).should('have.value', phone)
        cy.wait(1000)

        configurationpageelement.emailField().type(email).should('have.value', email)
        cy.wait(1000)

        configurationpageelement.sessionTypeField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(sessionType).click({force: true})
        cy.wait(1000)

        configurationpageelement.descriptionField().type(description).should('have.value', description)
        cy.wait(1000)

        //saveBtn
        commonpageelement.getsaveBtn(saveBtnSelector).click({force: true})
        cy.wait(1000)
        //সম্পন্ন করুন
        commonpageelement.getCompleteBtn(completeBtnSelector).click({force: true})
        cy.wait(1000)
    }


    ///প্রশিক্ষণের ধরন
    trainingTypeDetails(trainingTypeBn,trainingTypeEn,saveBtnSelector,completeBtnSelector){
        configurationpageelement.trainingTypeBnField().type(trainingTypeBn).should('have.value', trainingTypeBn)
        cy.wait(1000)

        configurationpageelement.trainingTypeEnField().type(trainingTypeEn).should('have.value', trainingTypeEn)
        cy.wait(1000)

        //saveBtn
        commonpageelement.getsaveBtn(saveBtnSelector).click({force: true})
        cy.wait(1000)
        //সম্পন্ন করুন
        commonpageelement.getCompleteBtn(completeBtnSelector).click({force: true})
        cy.wait(1000)
    } 

    ///দক্ষতা সমূহ

    skillDetails(skillBn,skillEn,saveBtnSelector,completeBtnSelector){
        configurationpageelement.skillBnField().type(skillBn).should('have.value', skillBn)
        cy.wait(1000)
        configurationpageelement.skillEnField().type(skillEn).should('have.value', skillEn)
        cy.wait(1000)
        //saveBtn
        commonpageelement.getsaveBtn(saveBtnSelector).click({force: true})
        cy.wait(1000)
        //সম্পন্ন করুন
        commonpageelement.getCompleteBtn(completeBtnSelector).click({force: true})
        cy.wait(1000)
    }

    ///প্রশিক্ষণের ধরনে অন্তর্গত দক্ষতা সমূহ

    skillsInherentTrainingTypeDetails(trainingType,skillSearch,editBtnSelector,saveBtnSelector){
        commonpageelement.getScroll('bottom')
        configurationpageelement.trainingTypeField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(trainingType).click({force: true})
        cy.wait(1000)


        //editBtn
        commonpageelement.getEditBtn(editBtnSelector).click({force: true})

        configurationpageelement.skillSearchField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(skillSearch).click({force: true})
        cy.wait(1000)

        //saveBtn
        commonpageelement.getsaveBtn(saveBtnSelector).click({force: true})
        }
}