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
    //completeBtn -> হ্যাঁ or প্রেরণ করুন or সম্পন্ন করুন
     getCompleteBtn2(completeBtnSelector, text){
        commonpageelement.getCompleteBtn(completeBtnSelector).contains(text).click({force: true}) 
        cy.wait(2000)
     }

     getsaveBtn(selector){
        commonpageelement.getsaveBtn(selector).click({force: true})
        cy.wait(1000)
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
        cy.wait(1000)
     }


     ///paginator method

     getPaginator(){
        commonpageelement.getPaginatorArrow().click()
        cy.wait(500)
        commonpageelement.getPaginatorValue().contains('100').click()
        cy.wait(500)
     }

   //// অনুমোদনের জন্য প্রেরণ
   SentForApproval(SentForApprovalObject,commonSelectOrobject){

        commonpageelement.sendForApprovalEmployeeField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(SentForApprovalObject['employeeName']).click({force: true})
        cy.wait(1000)
        this.getSendBtn(commonSelectOrobject['send'])
        this.getCompleteBtn2(commonSelectOrobject['completeBtn'], SentForApprovalObject['completebtnName'])
        cy.wait(1000)

   }

   ///NotificationIcon
   checkNotificationIcon(){
    commonpageelement.checkNotificationIcon().click({force: true})
    cy.wait(1000)
   }


}