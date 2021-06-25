/// <reference types="cypress" />

import CommonPageActions from '../../../support/HRM/pageobjects/pageactions/common/CommonPageActions'
import HomePageActions from '../../../support/HRM/pageobjects/pageactions/attendance/HomePageActions'
const or = require('../../../support/HRM/locators/attendance_locators.json')
const common = require('../../../support/HRM/locators/common_locators.json')

    const commonPage = new CommonPageActions()
    const homePage = new HomePageActions()


    before(()=>{

        cy.fixture('AttendanceTestDataSQA').then((data)=>{

            globalThis.data = data

        })

    })

    beforeEach(()=>{

        cy.visit(Cypress.env('url'))
        //loginPage.navigateToURL()


    })

///হোম  > ADD শিফট
describe("Working Attendance module Add Shift",()=>{
    
    it("TC_1. PE: Working Attendance module Add Shift",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
 
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)

        //উপস্থিতি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.attendance)
        //হোম
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.home,data.leftNavMenu.attendanceSubMenu.home)
        
        //শিফট( শিফট, শিফট অর্পণ, ওভারটাইম, স্বহাজিরা ) - Panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.home.shiftPanel)

        ///সন্ধান করুন
        homePage.searchBtnField()

        //AddBtn 
        commonPage.addBtn(common.GlobalLocator.addBtn)

        //শিফটের তালিকা
        homePage.shiftDetails(data.home.shift)

        //সংরক্ষণ করুন
        commonPage.getsaveBtn(common.GlobalLocator.saveBtn2)

         //completeBtn -> সম্পন্ন করুন
        commonPage.getCompleteBtn2(common.GlobalLocator.completeBtn,  data.home.completeBtnName)
    })

    it("TC_2. PE: Working Attendance module add new month Shift Date and Time",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
 
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)

        //উপস্থিতি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.attendance)
        //হোম
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.home,data.leftNavMenu.attendanceSubMenu.home)
        
        //শিফট( শিফট, শিফট অর্পণ, ওভারটাইম, স্বহাজিরা ) - Panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.home.shiftPanel)

        ///সন্ধান করুন
       homePage.searchBtnField()

     //Search Shift name 
        commonPage.getSearchListWithSelectorByName(
                common.GlobalLocator['searchByName'],
               data.home.shift['name']
        )
 
      //Table Raw Add Btn 
       homePage.SearchPersonRowAddBtn(data.home.shift['name'])

        //Search Shift name 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName2'],
           data.home.shift['name']
        )


        //add Btn
        commonPage.addBtn(common.GlobalLocator.addBtn2)

        //শিফটের তালিকা
        homePage.addShiftNewDetails(data.home.shift.newShift)

        // সংরক্ষণ করুন
        commonPage.getsaveBtn(common.GlobalLocator.saveBtn2)

        // completeBtn -> সম্পন্ন করুন
        commonPage.getCompleteBtn2(common.GlobalLocator.completeBtn,  data.home.completeBtnName)
 
    })
})

describe.skip("Working Attendance module Edit Shift Date and Time", ()=> {
    it("TC_1. PE: Working Attendance module Edit Shift Date and Time",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
 
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)

        //উপস্থিতি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.attendance)
        //হোম
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.home,data.leftNavMenu.attendanceSubMenu.home)
        
        //শিফট( শিফট, শিফট অর্পণ, ওভারটাইম, স্বহাজিরা ) - Panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.home.shiftPanel)

        ///সন্ধান করুন
       homePage.searchBtnField()

     //Search Shift name 
        commonPage.getSearchListWithSelectorByName(
                common.GlobalLocator['searchByName'],
               data.home.shift['name']
        )
 
        // need to discuss 
       homePage.SearchPersonRowAddBtn(data.home.shift['name'])

        //Search Shift name 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName2'],
           data.home.shift['name']
        )

        /// Edit Btn
        commonPage.getEditBtn(common.GlobalLocator['editBtn2'])


        //শিফটের তালিকা
        homePage.shiftDateTimeChangeDetails(data.home.shift.dateTimeChnage)

        // সংরক্ষণ করুন
        commonPage.getsaveBtn(common.GlobalLocator.saveBtn2)

        // completeBtn -> সম্পন্ন করুন
        commonPage.getCompleteBtn2(common.GlobalLocator.completeBtn,  data.home.completeBtnName)
 
    })
})

//শিফট অর্পণ
describe.skip("Working Attendance module Shift delivery", ()=> {
    it("TC_1. PE: Working Attendance module Shift delivery",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
 
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)

        //উপস্থিতি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.attendance)
        //হোম
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.home,data.leftNavMenu.attendanceSubMenu.home)
        
        //শিফট( শিফট, শিফট অর্পণ, ওভারটাইম, স্বহাজিরা ) - Panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.home.shiftPanel)

         
        //শিফট অর্পণ
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.home.shiftDelivaryTab)
        
        ///সন্ধান করুন
       homePage.searchBtnField()

       //Search Shift name 
       commonPage.getSearchListWithSelectorByName(
                common.GlobalLocator['searchByName'],
               data.home.shiftDelivary['person1']
        )

        //check checkbox Person
        commonPage.addParticipantDetails(
            data.home.shiftDelivary['person1']
        )

        //Search Shift name 
       commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.home.shiftDelivary['person2']
        )

        //check checkbox Person
        commonPage.addParticipantDetails(
            data.home.shiftDelivary['person2']
        )
 
        // সংরক্ষণ করুন
        commonPage.getsaveBtn(or.shiftDelivary.shiftDelivaryBtn)

        //তথ্য সংযুক্ত করুন
        homePage.shiftDelivaryDetails(data.shiftDelivary)

         // সংরক্ষণ করুন
        ommonPage.getsaveBtn(common.GlobalLocator.saveBtn3)


    })
})


//ওভারটাইম
describe.skip("Working Attendance module Overtime", ()=> {
    it("TC_1. PE: Working Attendance module Overtime",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
 
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)

        //উপস্থিতি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.attendance)
        //হোম
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.home,data.leftNavMenu.attendanceSubMenu.home)
        
        //শিফট( শিফট, শিফট অর্পণ, ওভারটাইম, স্বহাজিরা ) - Panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.home.shiftPanel)

        //ওভারটাইম
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.home.overTimeTab)
        
        ///সন্ধান করুন
       homePage.searchBtnField()

       //Search Shift name 
       commonPage.getSearchListWithSelectorByName(
                common.GlobalLocator['searchByName'],
               data.home.shiftDelivary['person1']
        )

        //check checkbox Person
        commonPage.addParticipantDetailsCheckboxLast(
            data.home.shiftDelivary['person1']
        )

        //Search Shift name 
       commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.home.shiftDelivary['person2']
        )

        //check checkbox Person
        commonPage.addParticipantDetailsCheckboxLast(
            data.home.shiftDelivary['person2']
        )

         // সংরক্ষণ করুন
        ommonPage.getsaveBtn(common.GlobalLocator.searchBtn)

    })
})

///স্বহাজিরা 
describe.skip("Working Attendance module Companions", ()=> {
    it("TC_1. PE: Working Attendance module Companions",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
 
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)

        //উপস্থিতি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.attendance)
        //হোম
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.home,data.leftNavMenu.attendanceSubMenu.home)
        
        //শিফট( শিফট, শিফট অর্পণ, ওভারটাইম, স্বহাজিরা ) - Panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.home.shiftPanel)

        //স্বহাজিরা
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.home.companionsTab)
        
        ///সন্ধান করুন
       homePage.searchBtnField()


       //Search Shift name 
       commonPage.getSearchListWithSelectorByName(
                common.GlobalLocator['searchByName'],
               data.home.shiftDelivary['person1']
        )

        //check checkbox Person
        commonPage.addParticipantDetailsCheckboxLast(
            data.home.shiftDelivary['person1']
        )

        //Search Shift name 
       commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.home.shiftDelivary['person2']
        )

        //check checkbox Person
        commonPage.addParticipantDetailsCheckboxLast(
            data.home.shiftDelivary['person2']
        )

         // সংরক্ষণ করুন
        ommonPage.getsaveBtn(common.GlobalLocator.searchBtn)
        
    })
})

/// অনুমোদনের জন্য প্রেরণ
describe.skip("Working Attendance module sent for approval", ()=> {
    it("TC_1. PE: Working Attendance module sent for approval",()=>{
        cy.login(data.validLoginCredentials.morshed.username,data.validLoginCredentials.morshed.password)
 
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)

        //উপস্থিতি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.attendance)
        //হোম
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.home,data.leftNavMenu.attendanceSubMenu.home)
        
        //উপস্থিতি ( দৈনিক উপস্থিতি ) - Panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.home.attendancePanel)

        ///সন্ধান করুন
       homePage.searchBtnField()

        //Person-1
       //Search Shift name 
       commonPage.getSearchListWithSelectorByName(
                common.GlobalLocator['searchByName'],
                data.home.attendance['person1']
        )

        //Person-1
        //check checkboxfirst (Attendance Panel)
        commonPage.addParticipantDetails(
            data.home.attendance['person1']
        )

        //Person-2
        //Search Shift name 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.home.attendance['person2']
        )

        //Person-2
        //check checkboxfirst (Attendance Panel)
        commonPage.addParticipantDetails(
            data.home.attendance['person2']
        )
        //Person-2
        //Set entry time Departure Time
        homePage.SetAttendanceEntryDepartureTime(data.home.attendance.person2TimeOrStation)
       
        //Person-3
        //Search Shift name 
       commonPage.getSearchListWithSelectorByName(
        common.GlobalLocator['searchByName'],
        data.home.attendance['person3']
        )

        //Person-3
        //check checkboxfirst (Attendance Panel)
        commonPage.addParticipantDetails(
            data.home.attendance['person3']
        )

        //person-3 Absense (checkbox)
        homePage.attendanceAbsenseParticipantDetails(data.home.attendance['person3'])

        //Person-4
       //Search Shift name 
       commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.home.attendance['person4']
        )

        //Person-4
        //check checkboxfirst (Attendance Panel)
        commonPage.addParticipantDetails(
            data.home.attendance['person4']
        )

        //Person-4
        //বহিঃ স্টেশন কার্য
        homePage.attendanceExternalStationField(data.home.attendance.person4TimeOrStation)


    // সংরক্ষণ করুন
        commonPage.getsaveBtn(common.GlobalLocator.searchBtn)


    /////ADD Btn তথ্য সংযুক্ত করুন (অফিস ত্যাগের সময়,অবগত সহকর্মীর নাম)
    //// add kortee hobe 

    //সংরক্ষণ করুন 

     
    ////অনুমোদনের জন্য প্রেরণ

    // পরবর্তী পদক্ষেপ
       commonPage.getsaveBtn(common.GlobalLocator.nextStepBtn2)
      
    //অনুমোদনের জন্য প্রেরণ
    commonPage.SentForApproval(
            data.home.SentForApproval, //json e name add korte hobe
            common.GlobalLocator
        )
        
    })
})



afterEach(() => {
    cy.logout(common.logoutPage.logoutDropdownBtn2,common.logoutPage.logoutBtn2)
})