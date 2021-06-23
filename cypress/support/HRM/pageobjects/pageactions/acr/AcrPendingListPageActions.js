/// <reference types="cypress" />

import  AcrPendingListPageElements from '../../pageelements/acr/AcrPendingListPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class AcrPendingListPageActions{

    constructor(){

        globalThis.acrPendingpageelement = new AcrPendingListPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    acrYearDetails(pendingListObject,globalLocatorObject){
        acrPendingpageelement.acrYearField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(pendingListObject['acrYear']).click({force: true})
        cy.wait(1000)
        commonpageelement.getSearchBtn(globalLocatorObject['searchBtn2']).click({force: true})
        cy.wait(2000)
    }
}    
