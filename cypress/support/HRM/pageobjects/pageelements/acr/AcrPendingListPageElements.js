/// <reference types="cypress" />
const or = require('../../../locators/acr_locators.json');
export default class AcrPendingListPageElements{
 
    acrYearField(){
        return cy.get(or.acrPendingList.acrYear)
    }

}