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
        joiningPageElement.nameBnField().type(joiningObject['nameBn']).should('have.value', joiningObject['nameBn'])
        cy.wait(1000)

         //কর্মচারীর নাম (ইংরেজি) *
         joiningPageElement.employeeNameEnField().type(joiningObject['employeeNameEn']).should('have.value', joiningObject['employeeNameEn'])
         cy.wait(1000)

         // জন্ম তারিখ *
         joiningPageElement.dateOfBirthField().click({force: true})
         cy.wait(1000)
 
          //Date Arrow click
          commonpageelement.getCalendarArrowField().click({force: true})
          cy.wait(1000)

          //Calender Previous Btn
          commonpageelement.getPreviousBtnField().click({force: true})
          cy.wait(1000)

          //dateOfBirthyy
          commonpageelement.getYYMMDDField().contains(joiningObject['dateOfBirthYY']).click({force: true})
          cy.wait(1000)
  
          //dateOfBirthmm
          commonpageelement.getYYMMDDField().contains(joiningObject['dateOfBirthMM']).click({force: true})
          cy.wait(1000)
  
          //dateOfBirthdd
          commonpageelement.getYYMMDDField().contains(joiningObject['dateOfBirthDD']).click({force: true})
          cy.wait(1000)

          //মোবাইল *
          joiningPageElement.mobileNoField().type(joiningObject['mobileNo']).should('have.value', joiningObject['mobileNo'])

          //ইমেইল *
          joiningPageElement.emailField().type(joiningObject['email']).should('have.value', joiningObject['email'])

          //নিয়োগের ধরন *

          joiningPageElement.recruitmentTypeOidField().click({force: true})
          cy.wait(1000)
          commonpageelement.DropdownItem().contains(joiningObject['recruitmentTypeOid']).click({force: true})
          cy.wait(1000)

          //নিয়োগকারী কর্তৃপক্ষ *
          joiningPageElement.recruitmentAuthorityOidField().click({force: true})
          cy.wait(1000)
          commonpageelement.DropdownItem().contains(joiningObject['recruitmentAuthorityOid']).click({force: true})
          cy.wait(1000)

          //গেজেটেড/ ননগেজেটেড/ অন্যান্য *
          joiningPageElement.rankTypeField().click({force: true})
          cy.wait(1000)
          commonpageelement.DropdownItem().contains(joiningObject['rankType']).click({force: true})
          cy.wait(1000)

          ///ক্যাডার/নন-ক্যাডার/চুক্তিভিত্তিক *
          joiningPageElement.employmentTypeOidField().click({force: true})
          cy.wait(1000)
          commonpageelement.DropdownItem().contains(joiningObject['employmentTypeOid']).click({force: true})
          cy.wait(1000)

          //চাকরিতে যোগদানের তারিখ *
          joiningPageElement.joiningDateField().click({force: true})
          cy.wait(1000)
 
          //Date Arrow click
          commonpageelement.getCalendarArrowField().click({force: true})
          cy.wait(1000)

          //joiningDateyy
          commonpageelement.getYYMMDDField().contains(joiningObject['joiningDateYY']).click({force: true})
          cy.wait(1000)
  
          //joiningDatemm
          commonpageelement.getYYMMDDField().contains(joiningObject['joiningDateMM']).click({force: true})
          cy.wait(1000)
  
          //joiningDatedd
          commonpageelement.getYYMMDDField().contains(joiningObject['joiningDateDD']).click({force: true})
          cy.wait(1000)

          ///শাখা *

          joiningPageElement.branchField().click({force: true})
          cy.wait(1000)
          commonpageelement.DropdownItem().contains(joiningObject['branch']).click({force: true})
          cy.wait(1000)

          ///পদ (শুন্য) *
          joiningPageElement.positionField().click({force: true})
          cy.wait(1000)
          commonpageelement.DropdownItem().contains(joiningObject['position']).click({force: true})
          cy.wait(1000)

           //বর্তমান পদে যোগদানের তারিখ *
           joiningPageElement.joiningDateForPostField().click({force: true})
           cy.wait(1000)
  
           //Date Arrow click
           commonpageelement.getCalendarArrowField().click({force: true})
           cy.wait(1000)
 
           //joining date current position yy
           commonpageelement.getYYMMDDField().contains(joiningObject['joiningDateForPostYY']).click({force: true})
           cy.wait(1000)
   
           //joining date current position mm
           commonpageelement.getYYMMDDField().contains(joiningObject['joiningDateForPostMM']).click({force: true})
           cy.wait(1000)
   
           //joining date current position dd
           commonpageelement.getYYMMDDField().contains(joiningObject['joiningDateForPostDD']).click({force: true})
           cy.wait(1000)

    }

}