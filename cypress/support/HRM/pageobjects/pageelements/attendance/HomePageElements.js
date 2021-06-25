
/// <reference types="cypress" />
const or = require('../../../locators/attendance_locators.json')
const common = require('../../../locators/common_locators.json')
export default class HomePageElements{

    //সন্ধান করুন বাটন
    searchBtnField(){
        return cy.get(common.GlobalLocator.searchBtn3)
    }

    ///শিফট

    //নাম
    nameField(){
        return cy.get(or.shift.name)
    }

    //প্রবেশের সময় HH
    entryTimeHHField(){
        return cy.get(or.shift.entryTimeHH)
    }

    //প্রবেশের সময় MM
    entryTimeMMField(){
        return cy.get(or.shift.entryTimeMM)
    }

    //প্রস্থানের সময় HH
    departureTimeHHField(){
        return cy.get(or.shift.departureTimeHH)
    }

    //প্রস্থানের সময় MM
    departureTimeMMField(){
        return cy.get(or.shift.departureTimeMM)
    }

    ///অনুগ্রহ প্রবেশ (মিনিট) 
    graceInPeriodField(){
        return cy.get(or.shift.graceInPeriod)
    }

    ///অনুগ্রহ প্রস্থান (মিনিট)  
    graceOutPeriodField(){
        return cy.get(or.shift.graceOutPeriod)
    }

    ///হইতে 
    startDate(){
        return cy.get(or.shift.startDate)
    }

    ///পর্যন্ত
    endDate(){
        return cy.get(or.shift.endDate)
    }

    ///শিফট অর্পণ

    //শিফট অর্পণ করুন
 

    ///ওভারটাইম

    ///স্বহাজিরা

    ///উপস্থিতি ( দৈনিক উপস্থিতি ) 
    //প্রবেশের সময় HH
    attendanceEntryTimeHHField(){
        return cy.get(or.attendance.entryTimeHH)
    }

    //প্রবেশের সময় MM
    attendanceEntryTimeMMField(){
        return cy.get(or.attendance.entryTimeMM)
    }

    //প্রস্থানের সময় HH
    attendanceDepartureTimeHHField(){
        return cy.get(or.attendance.departureTimeHH)
    }

    //প্রস্থানের সময় MM
    attendanceDepartureTimeMMField(){
        return cy.get(or.attendance.departureTimeMM)
    }

    ///বহিঃ স্টেশন কার্য
    attendanceExternalStationField(){
        return cy.get(or.attendance.externalStation)
    }
    

}