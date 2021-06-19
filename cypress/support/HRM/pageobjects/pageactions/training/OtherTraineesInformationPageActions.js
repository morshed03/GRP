/// <reference types="cypress" />

import OtherTraineesInformationPageElements from '../../pageelements/training/OtherTraineesInformationPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class OtherTraineesInformationPageActions{

    constructor(){

        globalThis.othertraineesinformationpageelement = new OtherTraineesInformationPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    // অন্যান্য প্রশিক্ষণার্থী ব্যবস্থাপনা
    otherTraineesInformationDetails(nameBn,nameEn,office,branch,title,phone,email,saveBtn2Selector){
        
        othertraineesinformationpageelement.nameBnField().type(nameBn).should('have.value', nameBn)
        cy.wait(1000)
        othertraineesinformationpageelement.nameEnField().type(nameEn).should('have.value', nameEn)
        cy.wait(1000)

        othertraineesinformationpageelement.officeField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(office).click({force: true})
        cy.wait(1000)

        othertraineesinformationpageelement.branchField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(branch).click({force: true})
        cy.wait(1000)

        othertraineesinformationpageelement.titleField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(title).click({force: true})
        cy.wait(1000)

        othertraineesinformationpageelement.phoneField().type(phone).should('have.value', phone)
        cy.wait(1000)
        othertraineesinformationpageelement.emailField().type(email).should('have.value', email)
        cy.wait(1000)

        //saveBtn
        commonpageelement.getsaveBtn(saveBtn2Selector).click({force: true})
        cy.wait(1000)
    }
   
}