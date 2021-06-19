/// <reference types="cypress" />

import RewardsApplicationPageElements from '../../../pageelements/awardsAndpublications/awards/RewardsApplicationPageElements'
import CommonPageElements from '../../../pageelements/common/CommonPageElements'
export default class RewardsApplicationPageActions{

    constructor(){

        globalThis.rewardsApplication = new RewardsApplicationPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    ///পুরস্কার ( আবেদন)
    rewardsApplicationDetails(awardsTitleData,awardsTypeData,awardsGivenByData,awardsTagData,awardsDescData,fileTypeData,awardsfileAddSelector,awardsdraftSelector){
            
            rewardsApplication.awardsTitleField().type(awardsTitleData).should('have.value', awardsTitleData)
            cy.wait(1000) 

            rewardsApplication.awardsTypeField().click({force: true})
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(awardsTypeData).click({force: true})
            cy.wait(1000)

            rewardsApplication.awardsreceiveDateField().click({force: true})
            cy.wait(1000)
            commonpageelement.getCurrentDate().click({force: true})
            cy.wait(1000)

            rewardsApplication.awardsGivenByField().type(awardsGivenByData).should('have.value', awardsGivenByData)
            cy.wait(1000) 

            rewardsApplication.awardsnationalField().click({force: true})
            cy.wait(1000)

            rewardsApplication.awardsTagField().click()
            cy.wait(1000)
            rewardsApplication.awardsDescField().click()
            cy.wait(1000)
            
            rewardsApplication.awardsTagField().click()
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(awardsTagData).click({force: true})
            cy.wait(1000)

            rewardsApplication.awardsDescField().type(awardsDescData).should('have.value', awardsDescData)
            cy.wait(1000)

            commonpageelement.addBtn(awardsfileAddSelector).click({force: true})

            rewardsApplication.fileTypeField().click({force: true})
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(fileTypeData).click({force: true})
            cy.wait(1000)

            const fileName = 'a.pdf'
            commonpageelement.attachementUploadField().attachFile(fileName)
            cy.wait(1000)

            //saveBtn
            commonpageelement.getsaveBtn(awardsdraftSelector).click({force: true})
            cy.wait(1000)

        }

    SentForApproval(employee,send2Selector,completeBtnSelector,completebtnName){
            rewardsApplication.employeeField().click({force: true})
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(employee).click({force: true})
            cy.wait(1000)

            //প্রেরণ করুন 
            commonpageelement.getSendBtn(send2Selector).click({force: true})
            cy.wait(1000)
            //প্রেরণ
            commonpageelement.getCompleteBtn(completeBtnSelector).contains(completebtnName).click({force: true}) 
            cy.wait(1000)

    }


}