/// <reference types="cypress" />
import ApplicationAndLeaveHistoryPageElements from '../../pageelements/leave/ApplicationAndLeaveHistoryPageElements'
import CommonPageElements from '../../pageelements/common/CommonPageElements'
export default class ApplicationAndLeaveHistoryPageActions{

    constructor(){

        globalThis.applicationAndLeaveHistoryPageElement = new ApplicationAndLeaveHistoryPageElements()
        globalThis.commonpageelement = new CommonPageElements()
    }

    applicationFormDetails(
       reasonForApplication,
       startyy,
       startmm,
       startdd,
       endyy,
       endmm,
       enddd,
       logicBehindLeave,
       locationWhileInLeave
    ){
        applicationAndLeaveHistoryPageElement.reasonForApplicationField().click()
        cy.wait(1000)
        commonpageelement.DropdownItem().contains(reasonForApplication).click({force: true})
        cy.wait(1000)


       
        applicationAndLeaveHistoryPageElement.leaveStartDateField().click({force: true})
        cy.wait(1000)

         //Date Arrow click
         commonpageelement.getCalendarArrowField().click({force: true})
         cy.wait(1000)
         
         //startyy
         commonpageelement.getYYMMDDField().contains(startyy).click({force: true})
         cy.wait(1000)
 
         //startmm
         commonpageelement.getYYMMDDField().contains(startmm).click({force: true})
         cy.wait(1000)
 
         //startdd
         commonpageelement.getYYMMDDField().contains(startdd).click({force: true})
         cy.wait(1000)

        applicationAndLeaveHistoryPageElement.leaveEndDateField().click({force: true})
        cy.wait(1000)

        //Date Arrow click
        commonpageelement.getCalendarArrowField().click({force: true})
        cy.wait(1000)
        
        //endYY
        commonpageelement.getYYMMDDField().contains(endyy).click({force: true})
        cy.wait(1000)

        //endmm
        commonpageelement.getYYMMDDField().contains(endmm).click({force: true})
        cy.wait(1000)

        //enddd
        commonpageelement.getYYMMDDField().contains(enddd).click({force: true})
        cy.wait(1000)

        applicationAndLeaveHistoryPageElement.logicBehindLeaveField().type(logicBehindLeave).should('have.value', logicBehindLeave)
        cy.wait(1000)

        applicationAndLeaveHistoryPageElement.locationWhileInLeaveField().type(locationWhileInLeave).should('have.value', locationWhileInLeave)
        cy.wait(1000)

    }

    //// নৈমিত্তিক ছুটি 
    
    casualLeaveApplicationFormDetails(
        reasonForApplication,
        startyy,
        startmm,
        startdd,
        endyy,
        endmm,
        enddd,
        stationLeaveStartDateyy,
        stationLeaveStartDatemm,
        stationLeaveStartDatedd,
        stationLeaveEndDateyy,
        stationLeaveEndDatemm,
        stationLeaveEndDatedd,
        logicBehindLeave,
        locationWhileInLeave
     ){
         applicationAndLeaveHistoryPageElement.reasonForApplicationField().click()
         cy.wait(1000)
         commonpageelement.DropdownItem().contains(reasonForApplication).click({force: true})
         cy.wait(1000)
 
 
        
         applicationAndLeaveHistoryPageElement.leaveStartDateField().click({force: true})
         cy.wait(1000)
 
          //Date Arrow click
          commonpageelement.getCalendarArrowField().click({force: true})
          cy.wait(1000)
          
          //startyy
          commonpageelement.getYYMMDDField().contains(startyy).click({force: true})
          cy.wait(1000)
  
          //startmm
          commonpageelement.getYYMMDDField().contains(startmm).click({force: true})
          cy.wait(1000)
  
          //startdd
          commonpageelement.getYYMMDDField().contains(startdd).click({force: true})
          cy.wait(1000)
 
         applicationAndLeaveHistoryPageElement.leaveEndDateField().click({force: true})
         cy.wait(1000)
 
         //Date Arrow click
         commonpageelement.getCalendarArrowField().click({force: true})
         cy.wait(1000)
         
         //endYY
         commonpageelement.getYYMMDDField().contains(endyy).click({force: true})
         cy.wait(1000)
 
         //endmm
         commonpageelement.getYYMMDDField().contains(endmm).click({force: true})
         cy.wait(1000)
 
         //enddd
         commonpageelement.getYYMMDDField().contains(enddd).click({force: true})
         cy.wait(1000)
 
         applicationAndLeaveHistoryPageElement.logicBehindLeaveField().type(logicBehindLeave).should('have.value', logicBehindLeave)
         cy.wait(1000)
 
         applicationAndLeaveHistoryPageElement.locationWhileInLeaveField().type(locationWhileInLeave).should('have.value', locationWhileInLeave)
         cy.wait(1000)
         
         ///radio button click
         applicationAndLeaveHistoryPageElement.leavingWorkplaceRadioField().click({force: true})
         cy.wait(1000)
        

         /*
         ///stationLeaveStartDate
         applicationAndLeaveHistoryPageElement.stationLeaveStartDateField().click({force: true})
         //Date Arrow click
         commonpageelement.getCalendarArrowField().click({force: true})
         cy.wait(1000)
         //endYY
         commonpageelement.getYYMMDDField().contains(stationLeaveStartDateyy).click({force: true})
         cy.wait(1000)
  
         //endmm
         commonpageelement.getYYMMDDField().contains(stationLeaveStartDatemm).click({force: true})
         cy.wait(1000)
  
         //enddd
         commonpageelement.getYYMMDDField().contains(stationLeaveStartDatedd).click({force: true})
         cy.wait(1000)

         ///stationLeaveEndDate
         applicationAndLeaveHistoryPageElement.stationLeaveEndDateField().click({force: true})
         //Date Arrow click
         commonpageelement.getCalendarArrowField().click({force: true})
         cy.wait(1000)
         //endYY
         commonpageelement.getYYMMDDField().contains(stationLeaveEndDateyy).click({force: true})
         cy.wait(1000)
  
         //endmm
         commonpageelement.getYYMMDDField().contains(stationLeaveEndDatemm).click({force: true})
         cy.wait(1000)
  
         //enddd
         commonpageelement.getYYMMDDField().contains(stationLeaveEndDatedd).click({force: true})
         cy.wait(1000)

         */

     }
    
    endDateChange(
        endyy,
        endmm,
        enddd
    ){
        applicationAndLeaveHistoryPageElement.leaveEndDateField().click({force: true})
        cy.wait(1000)

        //Date Arrow click
        commonpageelement.getCalendarArrowField().click({force: true})
        cy.wait(1000)
        
        //endYY
        commonpageelement.getYYMMDDField().contains(endyy).click({force: true})
        cy.wait(1000)

        //endmm
        commonpageelement.getYYMMDDField().contains(endmm).click({force: true})
        cy.wait(1000)

        //enddd
        commonpageelement.getYYMMDDField().contains(enddd).click({force: true})
        cy.wait(1000)
    }



    casualLeaveDateValidation(
             
        startmm,
        startdd,
        startyy,
        endmm,
        enddd,
        endyy,
        leaveDuration
    ){

        applicationAndLeaveHistoryPageElement.leaveStartDateField().click({force: true})
        cy.wait(1000)

         //Date Arrow click
         commonpageelement.getCalendarArrowField().click({force: true})
         cy.wait(1000)
         
         //startyy
         commonpageelement.getYYMMDDField().contains(startyy).click({force: true})
         cy.wait(1000)
 
         //startmm
         commonpageelement.getYYMMDDField().contains(startmm).click({force: true})
         cy.wait(1000)
 
         //startdd
         commonpageelement.getYYMMDDField().contains(startdd).click({force: true})
         cy.wait(1000)

        applicationAndLeaveHistoryPageElement.leaveEndDateField().click({force: true})
        cy.wait(1000)

        //Date Arrow click
        commonpageelement.getCalendarArrowField().click({force: true})
        cy.wait(1000)
        
        //endYY
        commonpageelement.getYYMMDDField().contains(endyy).click({force: true})
        cy.wait(1000)

        //endmm
        commonpageelement.getYYMMDDField().contains(endmm).click({force: true})
        cy.wait(1000)

        //enddd
        commonpageelement.getYYMMDDField().contains(enddd).click({force: true})
        cy.wait(1000)

        ///check ছুটির মেয়াদ (দিন)
        applicationAndLeaveHistoryPageElement.leaveDurationField().contains(leaveDuration).should('have.value', leaveDuration)

    }

    //applicationAndLeaveHistoryPageElement.leaveDurationField()

}