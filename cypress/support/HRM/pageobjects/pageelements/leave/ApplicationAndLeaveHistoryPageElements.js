
/// <reference types="cypress" />
const or = require('../../../locators/leave_locators.json');
export default class ApplicationAndLeaveHistoryPageElements{
     
    ////Application Form 
    
    reasonForApplicationField(){
        return cy.get(or.applicationAndLeaveHistory.application.form.reasonForApplication)
    }

    leaveStartDateField(){
        return cy.get(or.applicationAndLeaveHistory.application.form.leaveStartDate)
    }

    leaveEndDateField(){
        return cy.get(or.applicationAndLeaveHistory.application.form.leaveEndDate)
    }

    logicBehindLeaveField(){
        return cy.get(or.applicationAndLeaveHistory.application.form.logicBehindLeave)
    }

    locationWhileInLeaveField(){
        return cy.get(or.applicationAndLeaveHistory.application.form.locationWhileInLeave)
    }

    // নৈমিত্তিক ছুটি 
    ///radioField
    leavingWorkplaceRadioField(){
        return cy.get(or.applicationAndLeaveHistory.application.form.leavingWorkplace)
    }

    stationLeaveStartDateField(){
        return cy.get(or.applicationAndLeaveHistory.application.form.stationLeaveStartDate)
    }

    stationLeaveEndDateField(){
        return cy.get(or.applicationAndLeaveHistory.application.form.stationLeaveEndDate)
    }

    ///dateValidation
    leaveDurationField(){
        return cy.get(or.dateValidation.leaveDuration)
    }

}