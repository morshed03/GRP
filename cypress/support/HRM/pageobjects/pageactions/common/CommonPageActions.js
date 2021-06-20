/// <reference types="cypress" />

import CommonPageElements from '../../pageelements/common/CommonPageElements'

export default class CommonPageActions{

    constructor(){

        globalThis.commonpageelement = new CommonPageElements()
    }

    getValidationMessage(selector,text) //Validation message
    {
        commonpageelement.getValidationMessage(selector,text).should('have.text',text) 
    }

    pageWait(time){
        commonpageelement.pageWait(time)
    }

    getDashboardAvatar(selector){
        commonpageelement.getDashboardAvatar(selector).click({force: true})
        cy.wait(3000)
    }

    getLeftNavMenu(selector,text){
        commonpageelement.getLeftNavMenu(selector).contains(text).click({force: true})
        cy.wait(1000)
    }
    getLeftNavSubMenu(selector,text){
        commonpageelement.getLeftNavMenu(selector).contains(text).click({force: true})
        cy.wait(3000)
    }

    addBtn(selector){
        commonpageelement.addBtn(selector).click({force: true})
        cy.wait(1000)
    }

    getSendBtn(selector){
        commonpageelement.getSendBtn(selector).click({force: true})
        cy.wait(1000)
    }

    getEditBtn(selector){
        commonpageelement.getEditBtn(selector).click({force: true})
        cy.wait(2000)
    }

    getCheckboxCheckUncheck(selector){
        commonpageelement.getCheckboxCheckUncheck(selector).click({force: true})
        cy.wait(1000)
      }

    getviewBtn(selector){
        commonpageelement.getviewBtn(selector).click({force: true})
        cy.wait(1000)
     }

    getCancelBtn(selector){
        commonpageelement.getCancelBtn(selector).click({force: true})
        cy.wait(1000)
    }

    getDeleteBtn(selector){
        commonpageelement.deleteBtn(selector).click({force: true})
        cy.wait(1000)
    }


    ////text add
    getTabBtn(selector,text){
        commonpageelement.getTabBtn(selector).contains(text).click({force: true})
        cy.wait(1000)
    }

    getApprovalBtn(selector){
        commonpageelement.getApprovalBtn(selector).click({force: true})
        cy.wait(2000)
    }

    getCompleteBtn(completeBtnSelector){
     commonpageelement.getCompleteBtn(completeBtnSelector).click({force: true})
     cy.wait(2000)
     }

     getsaveBtn(selector){
        commonpageelement.getsaveBtn(selector).click({force: true})
        cy.wait(2000)
     }

     getSearchListByName(name){
        commonpageelement.getSearchListByName().type(name).should('have.value', name)
        cy.wait(1000)
     }

     getSearchListWithSelectorByName(selector,name){
        commonpageelement.getSearchListByName(selector).type(name).should('have.value', name)
        cy.wait(1000)
     }

     getCommentField(comment){
        commonpageelement.getCommentField().type(comment).should('have.value', comment)
        cy.wait(1000)
     }

     getScroll(selector){
        commonpageelement.getScroll(selector)
     }


     ///paginator method

     getPaginator(){
        commonpageelement.getPaginatorArrow().click()
        cy.wait(500)
        commonpageelement.getPaginatorValue().contains('100').click()
        cy.wait(500)
     }

    
    // attachementTypeField(){
    //     commonpageelement.attachementTypeField().type()
    // }

    // attachementDescField(){
    //     return cy.get(or.complaintPage.order.attachment.desc)
    // }
    // attachementUploadField(){
    //     return cy.get(or.complaintPage.order.attachment.fileUpload)
    // }
     

}