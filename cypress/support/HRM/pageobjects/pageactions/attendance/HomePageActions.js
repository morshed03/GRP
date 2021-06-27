/// <reference types="cypress" />

import HomePageElements from '../../../pageobjects/pageelements/attendance/HomePageElements'
import CommonPageElements from '../../../pageobjects/pageelements/common/CommonPageElements'
import CommonPageActions from '../../../pageobjects/pageactions/common/CommonPageActions'
export default class HomePageActions{

    constructor(){

        globalThis.homepageelement = new HomePageElements()
        globalThis.commonpageelement = new CommonPageElements()
        globalThis.commonPageAction = new CommonPageActions()
    }

    ///সন্ধান করুন বাটন
    searchBtnField(){
        homepageelement.searchBtnField().click({force: true})
    }

    ///শিফটের তালিকা
    shiftDetails(shiftObject){
        ////নাম
        homepageelement.nameField().type(shiftObject['name']).should('have.value', shiftObject['name'])
        cy.wait(1000)

         ////প্রবেশের সময়
         homepageelement.entryTimeHHField().type(shiftObject['entryTimeHH'])
         cy.wait(1000)

        homepageelement.entryTimeMMField().type(shiftObject['entryTimeMM'])
        cy.wait(1000)

         ////প্রস্থানের সময়
         homepageelement.departureTimeHHField().type(shiftObject['departureTimeHH'])
         cy.wait(1000)

        homepageelement.departureTimeMMField().type(shiftObject['departureTimeMM'])
        cy.wait(1000)

        ///অনুগ্রহ প্রবেশ (মিনিট)
        homepageelement.graceInPeriodField().type(shiftObject['graceInPeriod']).should('have.value', shiftObject['graceInPeriod'])
        cy.wait(1000)

        ///অনুগ্রহ প্রস্থান (মিনিট)
        homepageelement.graceOutPeriodField().type(shiftObject['graceOutPeriod']).should('have.value', shiftObject['graceOutPeriod'])
        cy.wait(1000)


        ///হইতে
        homepageelement.startDate().click({force: true})
        cy.wait(1000)

        commonPageAction.DateYYMMDetails(shiftObject['startDateYY'],shiftObject['startDateMM'],shiftObject['startDateDD'])

        ///পর্যন্ত
        homepageelement.endDate().click({force: true})
        cy.wait(1000)
        commonPageAction.DateYYMMDetails(shiftObject['endDateYY'],shiftObject['endDateMM'],shiftObject['endDateDD'])


    }


    addShiftNewDetails(shiftObject){
  
           ////প্রবেশের সময়
           homepageelement.entryTimeHHField().type(shiftObject['entryTimeHH'])
           cy.wait(1000)
  
          homepageelement.entryTimeMMField().type(shiftObject['entryTimeMM'])
          cy.wait(1000)
  
           ////প্রস্থানের সময়
           homepageelement.departureTimeHHField().type(shiftObject['departureTimeHH'])
           cy.wait(1000)
  
          homepageelement.departureTimeMMField().type(shiftObject['departureTimeMM'])
          cy.wait(1000)
  
          ///অনুগ্রহ প্রবেশ (মিনিট)
          homepageelement.graceInPeriodField().type(shiftObject['graceInPeriod']).should('have.value', shiftObject['graceInPeriod'])
          cy.wait(1000)
  
          ///অনুগ্রহ প্রস্থান (মিনিট)
          homepageelement.graceOutPeriodField().type(shiftObject['graceOutPeriod']).should('have.value', shiftObject['graceOutPeriod'])
          cy.wait(1000)
  
  
          ///হইতে
          homepageelement.startDate().click({force: true})
          cy.wait(1000)
  
          commonPageAction.DateYYMMDetails(shiftObject['startDateYY'],shiftObject['startDateMM'],shiftObject['startDateDD'])
  
          ///পর্যন্ত
          homepageelement.endDate().click({force: true})
          cy.wait(1000)
          commonPageAction.DateYYMMDetails(shiftObject['endDateYY'],shiftObject['endDateMM'],shiftObject['endDateDD'])
    }



    shiftDateTimeChangeDetails(shiftObject){
        ////প্রবেশের সময়
        homepageelement.entryTimeHHField().type(shiftObject['entryTimeHH'])
        cy.wait(1000)

        homepageelement.entryTimeMMField().type(shiftObject['entryTimeMM'])
        cy.wait(1000)

        ////প্রস্থানের সময়
        homepageelement.departureTimeHHField().type(shiftObject['departureTimeHH'])
        cy.wait(1000)

        homepageelement.departureTimeMMField().type(shiftObject['departureTimeMM'])
        cy.wait(1000)

         ///হইতে
         homepageelement.startDate().click({force: true})
         cy.wait(1000)
 
         commonPageAction.DateYYMMDetails(shiftObject['startDateYY'],shiftObject['startDateMM'],shiftObject['startDateDD'])
 
         ///পর্যন্ত
         homepageelement.endDate().click({force: true})
         cy.wait(1000)
         commonPageAction.DateYYMMDetails(shiftObject['endDateYY'],shiftObject['endDateMM'],shiftObject['endDateDD'])
 
    }

   ///Table Row click Add Btn
    SearchPersonRowAddBtn(name){
        
        cy.get("mat-card-content:visible tr td:nth-child(1)").each(($el,index, $list)=> {

            let employeeNameText = $el.text()
            if(employeeNameText.includes(name)){

             //  cy.get("mat-card-content:visible tr td:nth-child(1)").eq(index).last().find("td.mat-cell button:visible:eq(1)").click({force: true})
                cy.get('td.mat-cell button:visible:eq(1)').click({force: true})
            }
        })
        cy.wait(2000)

     } 


     // check box click by name (checkbox last)
    addParticipantDetails(name){
        
        cy.get("mat-card-content:visible tr td:nth-child(1)").each(($el,index, $list)=> {

            let employeeNameText = $el.text()
            if(employeeNameText.includes(name)){
                cy.get("mat-card-content:visible tr td:nth-child(1)").eq(index).last().find(".mat-checkbox-layout .mat-checkbox-inner-container").click()
            }
        })
        cy.wait(2000)

     }

      // check box click by name (checkbox)
    attendanceAbsenseParticipantDetails(name){
        
        cy.get("mat-card-content:visible tr td:nth-child(2)").each(($el,index, $list)=> {
            
            let employeeNameText = $el.text()
            if(employeeNameText.includes(name)){
                cy.get("mat-card-content:visible tr td:nth-child(2)").eq(index).next().next().find(".mat-checkbox-layout .mat-checkbox-inner-container").click()
            }
        })
        cy.wait(2000)

     }


     ////Attendance EntryTime -Departure Time set 

    SetAttendanceEntryDepartureTime(attendanceObject){

         ////প্রবেশের সময়
         homepageelement.attendanceEntryTimeHHField().type(attendanceObject['entryTimeHH'])
         cy.wait(1000)

        homepageelement.attendanceEntryTimeMMField().type(attendanceObject['entryTimeMM'])
        cy.wait(1000)

         ////প্রস্থানের সময়
         homepageelement.attendanceDepartureTimeHHField().type(attendanceObject['departureTimeHH'])
         cy.wait(1000)

        homepageelement.attendanceDepartureTimeMMField().type(attendanceObject['departureTimeMM'])
        cy.wait(1000)

     }

     ////বহিঃ স্টেশন কার্য
    attendanceExternalStationField(attendanceObject){
        homepageelement.attendanceExternalStationField().type(attendanceObject['externalStation'])
        cy.wait(1000)
    }

    ////OverTime
    setOvertime(attendanceObject){
        homepageelement.setOvertime().type(attendanceObject['overTime'])
    }


}