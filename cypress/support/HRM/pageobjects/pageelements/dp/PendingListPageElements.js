
/// <reference types="cypress" />
const or = require('../../../locators/dp_locators.json');
export default class PendingListPageElements{
    
    approvalCommentField(){
        return cy.get(or.pendingList.comment)
    }

    searchField(){
        return cy.get(or.pendingList.searchByName)
    }

    viewFileField(){
        return cy.get(or.pendingList.viewFile)
    }

    closeBtnField(){
        return cy.get(or.pendingList.closeBtn)
    }
}