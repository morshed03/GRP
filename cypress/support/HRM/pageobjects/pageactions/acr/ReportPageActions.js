/// <reference types="cypress" />

import  ReportPageElements from '../../pageelements/acr/ReportPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class ReportPageActions{

    constructor(){

        globalThis.reportPageElement = new ReportPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

      //আবেদনকৃত এসিআর সমূহের তালিকা
    
    checkAppliedACRDetails(name){
        
        cy.get("mat-card-content:visible tr td:nth-child(1)").each(($el,index, $list)=> {

            let employeeNameText = $el.text()
            if(employeeNameText.includes(name)){
                cy.get("mat-card-content:visible tr td:nth-child(1)").eq(index).next().next().next().click()
            }
        })
        cy.wait(2000)

     }
} 