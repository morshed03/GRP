/// <reference types="cypress" />

import JoiningPageElements from '../../pageelements/joining/JoiningPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class JoiningPageActions{

    constructor(){

        globalThis.joiningPageElement = new JoiningPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }


    joiningInformationDetails(joiningObject){

        //কর্মচারীর নাম (বাংলা
        joiningPageElement. nameBnField()().type().should('have.value', )
        cy.wait(1000)

         //কর্মচারীর নাম (ইংরেজি) *
         joiningPageElement. employeeNameEnField()().type().should('have.value', )
         cy.wait(1000)

         // জন্ম তারিখ *
         joiningPageElement. dateOfBirthField().click({force: true})
         cy.wait(1000)
 
          //Date Arrow click
          commonpageelement.getCalendarArrowField().click({force: true})
          cy.wait(1000)

          //Calender Previous Btn
          commonpageelement.getPreviousBtnField().click({force: true})
          cy.wait(1000)

          //dateOfBirthyy
          commonpageelement.getYYMMDDField().contains().click({force: true})
          cy.wait(1000)
  
          //dateOfBirthmm
          commonpageelement.getYYMMDDField().contains().click({force: true})
          cy.wait(1000)
  
          //dateOfBirthdd
          commonpageelement.getYYMMDDField().contains().click({force: true})
          cy.wait(1000)


        // configurationpageelement.sessionTypeField().click({force: true})
        // cy.wait(1000)
        // commonpageelement.DropdownItem().contains(sessionType).click({force: true})
        // cy.wait(1000)
         
    }

}