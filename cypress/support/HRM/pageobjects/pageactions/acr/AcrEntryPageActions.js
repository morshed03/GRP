/// <reference types="cypress" />

import AcrEntryPageElements from '../../pageelements/acr/AcrEntryPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class AcrEntryPageActions{

    constructor(){

        globalThis.acrEntrypageelement = new AcrEntryPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    AcrApplicationFormDetails(acrApplicationObject){
        
        //এসিআর বৎসর *
        acrEntrypageelement.acrYearField().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(acrApplicationObject['acrYear']).click({force: true})
        cy.wait(1000)


        ////অনুবেদনকারীর নিকট জমা প্রদানের তারিখ *

        acrEntrypageelement.dateOfSubmissionToRIODateField().click({force: true})
        cy.wait(1000)

         //Date Arrow click
         commonpageelement.getCalendarArrowField().click({force: true})
         cy.wait(1000)
         
         //startyy
         commonpageelement.getYYMMDDField().contains(acrApplicationObject['dateOfSubmissionToRIO_YY']).click({force: true})
         cy.wait(1000)
 
         //startmm
         commonpageelement.getYYMMDDField().contains(acrApplicationObject['dateOfSubmissionToRIO_MM']).click({force: true})
         cy.wait(1000)
 
         //startdd
         commonpageelement.getYYMMDDField().contains(acrApplicationObject['dateOfSubmissionToRIO_DD']).click({force: true})
         cy.wait(1000)

         // ডোসিয়ার পূরণকৃত ফর্ম প্রাপ্তির তারিখ *

         acrEntrypageelement.receivingDateOfCompletedFormByDOCRDateField().click({force: true})
         cy.wait(1000)
 
          //Date Arrow click
          commonpageelement.getCalendarArrowField().click({force: true})
          cy.wait(1000)
          
          //startyy
          commonpageelement.getYYMMDDField().contains(acrApplicationObject['receivingDateOfCompletedFormByDOCR_YY']).click({force: true})
          cy.wait(1000)
  
          //startmm
          commonpageelement.getYYMMDDField().contains(acrApplicationObject['receivingDateOfCompletedFormByDOCR_MM']).click({force: true})
          cy.wait(1000)
  
          //startdd
          commonpageelement.getYYMMDDField().contains(acrApplicationObject['receivingDateOfCompletedFormByDOCR_DD']).click({force: true})
          cy.wait(1000)

          ///অনুবেদনকারী প্রদত্ত নম্বর *
          acrEntrypageelement.numberGivenByRIOField().type(acrApplicationObject['numberGivenByRIO']).should('have.value', acrApplicationObject['numberGivenByRIO'])
          cy.wait(1000)

          //প্রতিস্বাক্ষরকারী প্রদত্ত নম্বর *
          acrEntrypageelement.numberGivenByCSOField().type(acrApplicationObject['numberGivenByCSO']).should('have.value', acrApplicationObject['numberGivenByCSO'])
          cy.wait(1000)

    }

    attachmentUploadDetails(attachmentObject){
        commonpageelement.attachementType2Field().click({force: true})
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(attachmentObject['attchmentType']).click({force: true})
        cy.wait(1000)
        commonpageelement.attachementDescField().type(attachmentObject['desc']).should('have.value', attachmentObject['desc'])
        cy.wait(1000)
        const fileName = 'test.jpeg'
        commonpageelement.attachementUploadField().attachFile(fileName)
        cy.wait(1000)

    }
     

}