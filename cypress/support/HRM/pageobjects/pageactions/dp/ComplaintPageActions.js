/// <reference types="cypress" />

import ComplaintPageElements from '../../../pageobjects/pageelements/dp/ComplaintPageElements'
import CommonPageElements from '../../../pageobjects/pageelements/common/CommonPageElements'
export default class ComplaintPageActions{

    constructor(){

        globalThis.complaintpageelement = new ComplaintPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    addComplaintBtn(selector){
        commonpageelement.addBtn(selector).click({force: true})
    }


    openEmployeeSelectAfterNext(branchName,employeeName,nextStepSelector){
        complaintpageelement.branchTypeField().click()
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(branchName).click({force: true})
        cy.wait(1000)
        complaintpageelement.employeeTypeField().click()
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(employeeName).click({force: true})
        cy.wait(1000)
        commonpageelement.getnextStepBtn(nextStepSelector).click({force: true})
        // cy.contains("পরবর্তী পদক্ষেপ").click({force: true})
        cy.wait(1000)

    }

    ////General-Info
    
    addGeneralInfoDetails(complaintType,complaintBasis,complaintTitle,allegationNo,dpAuthorityDesignate,allegationDescription2,generalSaveBtnSelector){
        complaintpageelement.complainTypeField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(complaintType).click({force: true})

        complaintpageelement.complaintBasisField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(complaintBasis).click({force: true})

        complaintpageelement.complaintTitleField().type(complaintTitle).should('have.value', complaintTitle)
        cy.wait(1000)
        complaintpageelement.allegationDateField().click({force: true})
        cy.wait(1000)

        complaintpageelement.complaintDateField().click({force: true})
        cy.wait(1000)
        complaintpageelement.allegationNoField().type(allegationNo).should('have.value', allegationNo)
        cy.wait(1000)
        complaintpageelement.dPAuthorityDesignateField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(dpAuthorityDesignate).click({force: true})
        cy.wait(1000)
        complaintpageelement.allegationDescription2Field().type(allegationDescription2).should('have.value', allegationDescription2)
        cy.wait(1000)
       commonpageelement.getsaveBtn(generalSaveBtnSelector).click({force: true})
       cy.wait(3000)
    }

   viewComplaintBtn(selector){
    commonpageelement.getviewBtn(selector).click({force: true})
    cy.wait(3000)
   }

   orderTabBtn(){
    complaintpageelement.orderTabField().click({force: true})
    cy.wait(3000)
   }

   addOrderInfoDetails(orderType,orderDetails,actionDetails,punishmentNature,punishmentType,addBtnSelector,attachmentType,selectAttchment,desc,saveBtn2Selector,orderSaveBtnSelector){
    complaintpageelement.orderDateField().click({force: true})
    cy.wait(1000)
    complaintpageelement.selectorderDateField().click({force: true})
    cy.wait(1000)

    complaintpageelement.orderTypeField().click({force: true})
    cy.wait(1000)
    commonpageelement.DropdownItem().contains(orderType).click({force: true})
    cy.wait(1000)
    complaintpageelement.orderDetailsField().type(orderDetails).should('have.value', orderDetails)
    cy.wait(1000)
    complaintpageelement.actionDetailsField().type(actionDetails).should('have.value', actionDetails)
    cy.wait(1000)
    complaintpageelement.punishmentNatureField().click({force: true})
    cy.wait(1000)
    commonpageelement.DropdownItem().contains(punishmentNature).click({force: true})
    cy.wait(1000)
    complaintpageelement.punishmentTypeField().click({force: true})
    cy.wait(1000)
    commonpageelement.DropdownItem().contains(punishmentType).click({force: true})
    cy.wait(1000)
   
    //attachment(সংযুক্তি)
    commonpageelement.addBtn(addBtnSelector).click({force: true})
    cy.wait(1000)

    commonpageelement.attachementTypeField().type(attachmentType).should('have.value', attachmentType)
    cy.wait(1000)
    commonpageelement.DropdownItem().contains(selectAttchment).click({force: true})
    cy.wait(1000)
    commonpageelement.attachementDescField().type(desc).should('have.value', desc)
    cy.wait(1000)
    const fileName = 'test.jpeg'
    commonpageelement.attachementUploadField().attachFile(fileName)
    cy.wait(1000)
    commonpageelement.getsaveBtn(saveBtn2Selector).click({force: true})
    cy.wait(1000)
    commonpageelement.getsaveBtn(orderSaveBtnSelector).click({force: true})
    cy.wait(3000)
   }

   orderEditBtn(selector){
    commonpageelement.getEditBtn(selector).click({force: true})
    cy.wait(2000)
   }
  
   ordernextStepBtn(selector){
    commonpageelement.getnextStepBtn(selector).click({force: true})
    cy.wait(2000)
    }

    employeeForApproved(employeeName,sendBtnSelector,completeBtnSelector){
        complaintpageelement.selectEmployeeForApprovedField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(employeeName).click({force: true})
        cy.wait(1000)
        commonpageelement.getSendBtn(sendBtnSelector).click({force: true})
        cy.wait(3000)
        commonpageelement.getCompleteBtn(completeBtnSelector).click({force: true})
        cy.wait(3000)

    }




}