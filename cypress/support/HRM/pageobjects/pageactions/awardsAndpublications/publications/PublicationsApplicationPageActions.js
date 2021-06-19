/// <reference types="cypress" />

import RewardsApplicationPageElements from '../../../pageelements/awardsAndpublications/awards/RewardsApplicationPageElements'
import CommonPageElements from '../../../pageelements/common/CommonPageElements'
export default class PublicationsApplicationPageActions{

    constructor(){

        globalThis.rewardsApplication = new RewardsApplicationPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    ///প্রকাশনা ( আবেদন)
    publicationsApplicationDetails(publicationsTitleData,publicationsTypeData,publicationsGivenByData,publicationsTagData,publicationsDescData,publicationsfileAddSelector,publicationsdraftSelector){
            
        rewardsApplication.awardsTitleField().type(publicationsTitleData).should('have.value', publicationsTitleData)
        cy.wait(1000) 

        rewardsApplication.awardsTypeField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(publicationsTypeData).click({force: true})
        cy.wait(1000)

        rewardsApplication.awardsreceiveDateField().click({force: true})
        cy.wait(1000)
        commonpageelement.getCurrentDate().click({force: true})
        cy.wait(1000)

        rewardsApplication.awardsGivenByField().type(publicationsGivenByData).should('have.value', publicationsGivenByData)
        cy.wait(1000) 

        rewardsApplication.awardsnationalField().click({force: true})
        cy.wait(1000)

        rewardsApplication.awardsTagField().click()
        cy.wait(1000)
        rewardsApplication.awardsDescField().click()
        cy.wait(1000)
        
        rewardsApplication.awardsTagField().click()
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(publicationsTagData).click({force: true})
        cy.wait(1000)

        rewardsApplication.awardsDescField().type(publicationsDescData).should('have.value', publicationsDescData)
        cy.wait(1000)

        commonpageelement.addBtn(publicationsfileAddSelector).click({force: true})

        const fileName = 'a.pdf'
        commonpageelement.attachementUploadField().attachFile(fileName)
        cy.wait(1000)

        //saveBtn
        commonpageelement.getsaveBtn(publicationsdraftSelector).click({force: true})
        cy.wait(1000)

    }

}