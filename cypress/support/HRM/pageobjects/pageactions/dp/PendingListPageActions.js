/// <reference types="cypress" />

import PendingListPageElements from '../../../pageobjects/pageelements/dp/PendingListPageElements'
import CommonPageElements from '../../../pageobjects/pageelements/common/CommonPageElements'
export default class PendingListPageActions{

    constructor(){

        globalThis.pendinglistpageelement = new PendingListPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    editPendingListBtn(selector){
        commonpageelement.getEditBtn(selector).click({force: true})
        cy.wait(1000)
    }

    approvalCommentField(text){
        pendinglistpageelement.approvalCommentField().type(text).should('have.value', text)
        cy.wait(1000)
    }

    searchField(text){
        pendinglistpageelement.searchField().type(text).should('have.value', text)
        cy.wait(1000)
    }

    viewFileField(){
        pendinglistpageelement.viewFileField().click({force: true})
        cy.wait(1000)
    }

    closeBtnField(){
        pendinglistpageelement.closeBtnField().click({force: true})
        cy.wait(1000)
    }

}