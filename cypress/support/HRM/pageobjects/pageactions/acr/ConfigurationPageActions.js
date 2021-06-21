/// <reference types="cypress" />

import ConfigurationPageElements from '../../pageelements/acr/ConfigurationPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class ConfigurationPageActions{

    constructor(){

        globalThis.configurationpageelement = new ConfigurationPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    branchNameAndSearch(
        configurationObject,
        searchBtn2Selector
        ){
            configurationpageelement.branchField().click({force: true})
            cy.wait(1000)
            commonpageelement.DropdownItem().contains(configurationObject['branchName']).click({force: true})
            cy.wait(1000)
            commonpageelement.getSearchBtn(searchBtn2Selector['searchBtn2']).click({force: true})
            cy.wait(2000)
        }

    /////Select ACR Person
        addACRPersonDetails(name){
        
            cy.get("mat-card-content:visible tr td:nth-child(2)").each(($el,index, $list)=> {
    
                let employeeNameText = $el.text()
                if(employeeNameText.includes(name)){
                    cy.get("mat-card-content:visible tr td:nth-child(2)").eq(index).prev().find(".mat-checkbox-layout .mat-checkbox-inner-container").click()
                }
            })
            cy.wait(2000)
    
         }    

}