/// <reference types="cypress" />

import CommonPageActions from '../../../support/HRM/pageobjects/pageactions/common/CommonPageActions'
import LeaveBalanceAdjustmentPageActions from '../../../support/HRM/pageobjects/pageactions/leave/LeaveBalanceAdjustmentPageActions'
import ReplacementPageActions from '../../../support/HRM/pageobjects/pageactions/leave/ReplacementPageActions'
import ApplicationAndLeaveHistoryPageActions from '../../../support/HRM/pageobjects/pageactions/leave/ApplicationAndLeaveHistoryPageActions'
import OfficeTrainingPageActions from '../../../support/HRM/pageobjects/pageactions/training/OfficeTrainingPageActions'
import InvitationAndNominationPageActions from '../../../support/HRM/pageobjects/pageactions/training/InvitationAndNominationPageActions'
const or = require('../../../support/HRM/locators/leave_locators.json');
const common = require('../../../support/HRM/locators/common_locators.json');

    const commonPage = new CommonPageActions()
    const LeaveBalanceAdjustmentPage = new LeaveBalanceAdjustmentPageActions()
    const replacementPageActions = new  ReplacementPageActions()
    const  ApplicationAndLeaveHistoryPage= new ApplicationAndLeaveHistoryPageActions()
    const officeTrainingPage = new OfficeTrainingPageActions()
    const invitationAndNominationPage = new InvitationAndNominationPageActions()
    before(()=>{

        cy.fixture('LeaveTestDataSQA').then((data)=>{

            globalThis.data = data
        })
    })

    beforeEach(()=>{
        cy.visit(Cypress.env('url'))
        //loginPage.navigateToURL()
    })
   
///অর্জিত ছুটি (পূর্ণ গড় বেতন)
describe("Working Leave module Earned leave (full average salary)",()=>{

    //ছুটির জন্য আবেদন ও অনুমোদনের জন্য পাঠানো

    //ছুটির হিসাব সমন্বয়

    it("TC_1. PE: Holiday account adjustment ",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //ছুটি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
        //ছুটির হিসাব সমন্বয়
        commonPage.getLeftNavMenu(or.leftNavmenuItems.leaveBalanceAdjustment, data.leftNavMenu.leaveSubMenu.leaveBalanceAdjustment)
        //Search by  কর্মকর্তা/ কর্মচারীর নাম 
        commonPage.getSearchListWithSelectorByName(common.GlobalLocator.searchByName,data.leaveBalanceAdjustment.employeeName)
        //individual Add Btn
        commonPage.addBtn(common.GlobalLocator.individualAddBtn)
        //গড় বেতন
        commonPage.getTabBtn(or.leaveBalanceAdjustment.individualAddBtn.averageSalary.tabBtn, data.leaveBalanceAdjustment.individualAddBtn.averageSalary.tabBtn)
        ///অর্জিত ছুটি (পূর্ণ গড় বেতন) , ছুটির সংখ্যা
        LeaveBalanceAdjustmentPage.leaveTypenamewithLeaveNumber( 
            data.leaveBalanceAdjustment.individualAddBtn.averageSalary.leaveTypeName,
            data.leaveBalanceAdjustment.individualAddBtn.averageSalary.numberOfHolidays)
        
        //সংরক্ষণ করুন
        commonPage.getsaveBtn(common.GlobalLocator.saveBtn2)

        })

       // প্রতিকল্প
    it("TC_2. PE: Replacement ",()=>{
            cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
            
            commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
            //ছুটি
            commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
            //প্রতিকল্প 
            commonPage.getLeftNavMenu(or.leftNavmenuItems.replacement, data.leftNavMenu.leaveSubMenu.replacement)
            //প্রশাসন Branch dropdown
            replacementPageActions.branchSearch(data.replacement.branchName, common.GlobalLocator.saveBtn)
            ///already added প্রতিকল্পবিহীন কর্মচারীর if not add comment clear
            ///প্রতিকল্পবিহীন কর্মচারীর Assign
            ///প্রতিকল্পবিহীন কর্মচারীর search
            commonPage.getSearchListWithSelectorByName(
                or.replacement.substituteEmployeeSearchByName,
                data.replacement.substituteEmployeeSearchByName)
            ///individual Add Btn
            commonPage.addBtn(or.replacement.individualAddBtn)
            
            replacementPageActions.substituteEmployeeDetails(
                data.replacement.replacement1.branchName1,
                data.replacement.replacement1.employeename1,
                data.replacement.replacement2.branchName2,
                data.replacement.replacement2.employeeName2,
                common.GlobalLocator.saveBtn2
                )
           
            
            })

     // আবেদন ও ছুটির ইতিহাস
     it("TC_3. PE: Application and leave history ",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //ছুটি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
        
         ///আবেদন ও ছুটির ইতিহাস
         commonPage.getLeftNavMenu(or.leftNavmenuItems.applicationAndLeaveHistory, data.leftNavMenu.leaveSubMenu.applicationAndLeaveHistory)
  
         ///আবেদন panel
         commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.applicationAndLeaveHistory.application.applicationPanel)
 
         ///অর্জিত ছুটি (পূর্ণ গড় বেতন) Search
         commonPage.getSearchListWithSelectorByName(
             or.applicationAndLeaveHistory.application.leaveSearchByName,
             data.applicationAndLeaveHistory.application.leaveSearchByName
         )
 
         ///Send Btn
         commonPage.getSendBtn(or.applicationAndLeaveHistory.application.applicationSendBtn)
 
         /// আবেদন পত্র  details
 
         ///Start date EndDate change korte hobe /// always  
         ApplicationAndLeaveHistoryPage.applicationFormDetails(
             data.applicationAndLeaveHistory.application.form.reasonForApplication,
             data.applicationAndLeaveHistory.application.form.startyy,
             data.applicationAndLeaveHistory.application.form.startmm,
             data.applicationAndLeaveHistory.application.form.startdd,
             data.applicationAndLeaveHistory.application.form.endyy,
             data.applicationAndLeaveHistory.application.form.endmm,
             data.applicationAndLeaveHistory.application.form.enddd,
             data.applicationAndLeaveHistory.application.form.logicBehindLeave,
             data.applicationAndLeaveHistory.application.form.locationWhileInLeave
         )
 
         //সংযুক্তি
         commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.attachment.tabName)
        
         //ADD Btn
         commonPage.addBtn(common.GlobalLocator.addBtn)
 
         officeTrainingPage.attachmentUploadDetails(
             data.applicationAndLeaveHistory.attachment.file,
             data.applicationAndLeaveHistory.attachment.desc,
             common.GlobalLocator.saveBtn2
             )
 
         cy.wait(2000)    
 
         //আবেদন পত্র
         commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.application.leaveApplicationTab)
 
         //পরবর্তী পদক্ষেপ
         commonPage.getsaveBtn(common.GlobalLocator.saveBtn)
 
         //অনিক রায়, ব্যবহারকারী
         //অনুমোদনের জন্য প্রেরণ
         invitationAndNominationPage.SentForApproval(
         data.applicationAndLeaveHistory.application.sentforApproval.employee,
         common.GlobalLocator.send,
         common.GlobalLocator.completeBtn,
         data.applicationAndLeaveHistory.application.sentforApproval.completeBtn
         )

        cy.wait(2000)  
 
        ///ছুটির ইতিহাস panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.applicationAndLeaveHistory.application.leaveHistoryPanel)

        ///অর্জিত ছুটি (পূর্ণ গড় বেতন) Search
        commonPage.getSearchListWithSelectorByName(
            or.applicationAndLeaveHistory.leavehistory.leaveSearchByName,
            data.applicationAndLeaveHistory.application.leaveSearchByName
        )

        //view Btn  ///discuss eq(3) use  
        commonPage.getviewBtn(or.applicationAndLeaveHistory.leavehistory.viewBtn)

        //আবেদনপত্রের লগ tab
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.application.applicationLog)
        
        //সংযুক্তি tab
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.application.attachmentTab)

        //আবেদন পত্র
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.application.leaveApplicationTab)

        commonpageelement.getScroll('bottom')
        //cancel btn
        commonPage.getCancelBtn(common.GlobalLocator.cancelBtn3) 
        
    })

  
    //Approval ছুটির  আবেদন অনুমোদন করবে
    it("TC_4. PE: Will approve leave application ",()=>{
        cy.login(data.validLoginCredentials.anik.username,data.validLoginCredentials.anik.password);
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //ছুটি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
        
        //অপেক্ষমাণ তালিকা
        commonPage.getLeftNavMenu(or.leftNavmenuItems.pendingList, data.leftNavMenu.leaveSubMenu.pendingList)

        //Search by  কর্মকর্তা/ কর্মচারীর নাম 
        commonPage.getSearchListWithSelectorByName(common.GlobalLocator.searchByName,data.leaveBalanceAdjustment.employeeName)

         //Edit Btn
        commonPage.getEditBtn(common.GlobalLocator.editBtn)

         //পরবর্তী পদক্ষেপ
         commonPage.getsaveBtn(common.GlobalLocator.saveBtn)


         ///অনুমোদন 
        commonPage.getApprovalBtn(common.pendingList.approvalBtn)
        commonPage.getCommentField(data.pendingList.comment)
        commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn)
        commonPage.getCompleteBtn(common.pendingList.completeBtn)

    })

 //ছুটির মেয়াদ বাড়ে বা কমে অনুমোদনের জন্য পাঠানো
 it("TC_5. PE: Extension or reduction of leave sent for approval ",()=>{
    cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
    
    commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
    //ছুটি
    commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
    
    ///আবেদন ও ছুটির ইতিহাস
    commonPage.getLeftNavMenu(or.leftNavmenuItems.applicationAndLeaveHistory, data.leftNavMenu.leaveSubMenu.applicationAndLeaveHistory)
  
    ///ছুটির ইতিহাস panel
    commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.applicationAndLeaveHistory.application.leaveHistoryPanel)

    //অনুমোদিত tab
    commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.application.approved)

      ///অর্জিত ছুটি (পূর্ণ গড় বেতন) Search
    commonPage.getSearchListWithSelectorByName(
        or.applicationAndLeaveHistory.leavehistory.leaveSearchByName,
        data.applicationAndLeaveHistory.application.leaveSearchByName
    )

    //Edit Btn
    commonPage.getEditBtn(common.GlobalLocator.editBtn)

    commonpageelement.getScroll('bottom')

    ///Start date EndDate change korte hobe /// always  
    ApplicationAndLeaveHistoryPage.endDateChange(
        data.applicationAndLeaveHistory.dateChange.endyy,
        data.applicationAndLeaveHistory.dateChange.endmm,
        data.applicationAndLeaveHistory.dateChange.enddd
    )


    //পরবর্তী পদক্ষেপ
    commonPage.getsaveBtn(common.GlobalLocator.saveBtn)

    //অনিক রায়, ব্যবহারকারী
    //অনুমোদনের জন্য প্রেরণ
    invitationAndNominationPage.SentForApproval(
    data.applicationAndLeaveHistory.application.sentforApproval.employee,
    common.GlobalLocator.send,
    common.GlobalLocator.completeBtn,
    data.applicationAndLeaveHistory.application.sentforApproval.completeBtn
    )
})

  //অপেক্ষমাণ তালিকা
  //Approval ছুটির মেয়াদ বাড়ে বা কমে দিয়ে ছুটির  আবেদন অনুমোদন করবে 
  it("TC_6. PE: Will approve the leave application by increasing or decreasing the leave period ",()=>{
    cy.login(data.validLoginCredentials.anik.username,data.validLoginCredentials.anik.password);
    
    commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
    //ছুটি
    commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
    
    //অপেক্ষমাণ তালিকা
    commonPage.getLeftNavMenu(or.leftNavmenuItems.pendingList, data.leftNavMenu.leaveSubMenu.pendingList)

    cy.wait(2000)
    //Search by  কর্মকর্তা/ কর্মচারীর নাম 
    commonPage.getSearchListWithSelectorByName(common.GlobalLocator.searchByName,data.leaveBalanceAdjustment.employeeName)

     //Edit Btn
    commonPage.getEditBtn(common.GlobalLocator.editBtn)

     //পরবর্তী পদক্ষেপ
     commonPage.getsaveBtn(common.GlobalLocator.saveBtn)


     ///অনুমোদন 
    commonPage.getApprovalBtn(common.pendingList.approvalBtn)
    commonPage.getCommentField(data.pendingList.comment)
    commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn)
    commonPage.getCompleteBtn(common.pendingList.completeBtn)

})

})
///অর্জিত ছুটি (পূর্ণ গড় বেতন) validation

describe("Earned leave validation", ()=> {

    //ছুটির হিসাব সমন্বয় ভোগকৃত দিন আবেদন ও ছুটির ইতিহাস  ভোগকৃত দিন সমান কিনা
      it("validation Day of leave",()=> {
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //ছুটি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
        
        ///আবেদন ও ছুটির ইতিহাস
        commonPage.getLeftNavMenu(or.leftNavmenuItems.applicationAndLeaveHistory, data.leftNavMenu.leaveSubMenu.applicationAndLeaveHistory)
  
        ///আবেদন panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.applicationAndLeaveHistory.application.applicationPanel)

        ///অর্জিত ছুটি (পূর্ণ গড় বেতন) Search
        commonPage.getSearchListWithSelectorByName(
            or.applicationAndLeaveHistory.application.leaveSearchByName,
            data.applicationAndLeaveHistory.application.leaveSearchByName
        )

        ///
        LeaveBalanceAdjustmentPage.checkDayofLeave(
            data.leaveBalanceAdjustment.individualAddBtn.averageSalary.leaveTypeName,
            data.leaveBalanceAdjustment.individualAddBtn.averageSalary.numberOfHolidays)
      })
})


///নৈমিত্তিক ছুটি validation

describe("casual leave validation", ()=> {

    //ছুটির হিসাব সমন্বয় ভোগকৃত দিন আবেদন ও ছুটির ইতিহাস  ভোগকৃত দিন সমান কিনা
      it("validation Day of leave",()=> {
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //ছুটি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
        
        ///আবেদন ও ছুটির ইতিহাস
        commonPage.getLeftNavMenu(or.leftNavmenuItems.applicationAndLeaveHistory, data.leftNavMenu.leaveSubMenu.applicationAndLeaveHistory)
  
        ///আবেদন panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.applicationAndLeaveHistory.application.applicationPanel)

        ///নৈমিত্তিক ছুটি Search
        commonPage.getSearchListWithSelectorByName(
            or.applicationAndLeaveHistory.application.leaveSearchByName,
            data.applicationAndLeaveHistory.application.leaveSearchByName
        )

        ///নৈমিত্তিক ছুটি ,ছুটির সংখ্যা
        LeaveBalanceAdjustmentPage.checkDayofLeave(
            data.leaveBalanceAdjustment.individualAddBtn.ownSalary.leaveTypeName,
            data.leaveBalanceAdjustment.individualAddBtn.ownSalary.numberOfHolidays)
      })

      it("Date Validation casual Leave", ()=> {
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //ছুটি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
        
         ///আবেদন ও ছুটির ইতিহাস
         commonPage.getLeftNavMenu(or.leftNavmenuItems.applicationAndLeaveHistory, data.leftNavMenu.leaveSubMenu.applicationAndLeaveHistory)
  
         ///আবেদন panel
         commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.applicationAndLeaveHistory.application.applicationPanel)
 
         ///নৈমিত্তিক ছুটি Search
         commonPage.getSearchListWithSelectorByName(
             or.applicationAndLeaveHistory.application.leaveSearchByName,
             data.applicationAndLeaveHistory.application.casualLeaveSearchByName
         )
 
         ///Send Btn
         commonPage.getSendBtn(or.applicationAndLeaveHistory.application.applicationSendBtn)
 
         
         //
         ///check ছুটির মেয়াদ (দিন)
         ApplicationAndLeaveHistoryPage.casualLeaveDateValidation(
             
            data.DateValidation.startmm,
            data.DateValidation.startdd,
            data.DateValidation.startyy,
            data.DateValidation.endmm,
            data.DateValidation.enddd,
            data.DateValidation.endyy,
            data.DateValidation.leaveDuration

        )
        
      })
})




///নৈমিত্তিক ছুটি
describe.only("Working Leave module Casual leave",()=>{

    //ছুটির জন্য আবেদন ও অনুমোদনের জন্য পাঠানো

    //ছুটির হিসাব সমন্বয়

    it("TC_1. PE: Holiday account adjustment ",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //ছুটি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
        //ছুটির হিসাব সমন্বয়
        commonPage.getLeftNavMenu(or.leftNavmenuItems.leaveBalanceAdjustment, data.leftNavMenu.leaveSubMenu.leaveBalanceAdjustment)
        //Search by  কর্মকর্তা/ কর্মচারীর নাম 
        commonPage.getSearchListWithSelectorByName(common.GlobalLocator.searchByName,data.leaveBalanceAdjustment.employeeName)
        //individual Add Btn
        commonPage.addBtn(common.GlobalLocator.individualAddBtn)
        
        //নিজ বেতন
        //commonPage.getTabBtn(or.leaveBalanceAdjustment.individualAddBtn.averageSalary.tabBtn, data.leaveBalanceAdjustment.individualAddBtn.ownSalary.tabBtn)
        
        ///নৈমিত্তিক ছুটি, ছুটির সংখ্যা
        LeaveBalanceAdjustmentPage.leaveTypenamewithLeaveNumber( 
            data.leaveBalanceAdjustment.individualAddBtn.ownSalary.leaveTypeName,
            data.leaveBalanceAdjustment.individualAddBtn.ownSalary.numberOfHolidays)
        
        //সংরক্ষণ করুন
        commonPage.getsaveBtn(common.GlobalLocator.saveBtn2)

        })

       // প্রতিকল্প
    it.skip("TC_2. PE: Replacement ",()=>{
            cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
            
            commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
            //ছুটি
            commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
            //প্রতিকল্প 
            commonPage.getLeftNavMenu(or.leftNavmenuItems.replacement, data.leftNavMenu.leaveSubMenu.replacement)
            //প্রশাসন Branch dropdown
            replacementPageActions.branchSearch(data.replacement.branchName, common.GlobalLocator.saveBtn)
            ///already added প্রতিকল্পবিহীন কর্মচারীর if not add comment clear
            ///প্রতিকল্পবিহীন কর্মচারীর Assign
            ///প্রতিকল্পবিহীন কর্মচারীর search
            commonPage.getSearchListWithSelectorByName(
                or.replacement.substituteEmployeeSearchByName,
                data.replacement.substituteEmployeeSearchByName)
            ///individual Add Btn
            commonPage.addBtn(or.replacement.individualAddBtn)
            
            replacementPageActions.substituteEmployeeDetails(
                data.replacement.replacement1.branchName1,
                data.replacement.replacement1.employeename1,
                data.replacement.replacement2.branchName2,
                data.replacement.replacement2.employeeName2,
                common.GlobalLocator.saveBtn2
                )
           
            
            })

     // আবেদন ও ছুটির ইতিহাস
     it("TC_3. PE: Application and leave history ",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //ছুটি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
        
         ///আবেদন ও ছুটির ইতিহাস
         commonPage.getLeftNavMenu(or.leftNavmenuItems.applicationAndLeaveHistory, data.leftNavMenu.leaveSubMenu.applicationAndLeaveHistory)
  
         ///আবেদন panel
         commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.applicationAndLeaveHistory.application.applicationPanel)
 
         ///নৈমিত্তিক ছুটি Search
         commonPage.getSearchListWithSelectorByName(
             or.applicationAndLeaveHistory.application.leaveSearchByName,
             data.applicationAndLeaveHistory.application.casualLeaveSearchByName
         )
 
         ///Send Btn
         commonPage.getSendBtn(or.applicationAndLeaveHistory.application.applicationSendBtn)
 
         /// আবেদন পত্র  details
         ///**** */
         ///Start date EndDate change korte hobe /// always  
         ApplicationAndLeaveHistoryPage.casualLeaveApplicationFormDetails(
             data.applicationAndLeaveHistory.application.form.reasonForApplication,
             data.applicationAndLeaveHistory.application.form.startyy,
             data.applicationAndLeaveHistory.application.form.startmm,
             data.applicationAndLeaveHistory.application.form.startdd,
             data.applicationAndLeaveHistory.application.form.endyy,
             data.applicationAndLeaveHistory.application.form.endmm,
             data.applicationAndLeaveHistory.application.form.enddd,
             data.applicationAndLeaveHistory.application.form.stationLeaveStartDateyy,
             data.applicationAndLeaveHistory.application.form.stationLeaveStartDatemm,
             data.applicationAndLeaveHistory.application.form.stationLeaveStartDatedd,
             data.applicationAndLeaveHistory.application.form.stationLeaveEndDateyy,
             data.applicationAndLeaveHistory.application.form.stationLeaveEndDatemm,
             data.applicationAndLeaveHistory.application.form.stationLeaveEndDatedd,
             data.applicationAndLeaveHistory.application.form.logicBehindLeave,
             data.applicationAndLeaveHistory.application.form.locationWhileInLeave
         )
 
         //সংযুক্তি
         commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.attachment.tabName)
        
         //ADD Btn
         commonPage.addBtn(common.GlobalLocator.addBtn)
 
         officeTrainingPage.attachmentUploadDetails(
             data.applicationAndLeaveHistory.attachment.file,
             data.applicationAndLeaveHistory.attachment.desc,
             common.GlobalLocator.saveBtn2
            )
 
         cy.wait(2000)    
 
         //আবেদন পত্র
         commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.application.leaveApplicationTab)
 
         //পরবর্তী পদক্ষেপ
         commonPage.getsaveBtn(common.GlobalLocator.saveBtn)
 
         //অনিক রায়, ব্যবহারকারী
         //অনুমোদনের জন্য প্রেরণ
         invitationAndNominationPage.SentForApproval(
         data.applicationAndLeaveHistory.application.sentforApproval.employee,
         common.GlobalLocator.send,
         common.GlobalLocator.completeBtn,
         data.applicationAndLeaveHistory.application.sentforApproval.completeBtn
         )

        cy.wait(2000)  
 
        ///ছুটির ইতিহাস panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.applicationAndLeaveHistory.application.leaveHistoryPanel)

        ///নৈমিত্তিক ছুটি Search
        commonPage.getSearchListWithSelectorByName(
            or.applicationAndLeaveHistory.leavehistory.leaveSearchByName,
            data.applicationAndLeaveHistory.application.casualLeaveSearchByName
        )

        //view Btn  ///discuss eq(3) use  
        commonPage.getviewBtn(or.applicationAndLeaveHistory.leavehistory.viewBtn)

        //আবেদনপত্রের লগ tab
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.application.applicationLog)
        
        //সংযুক্তি tab
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.application.attachmentTab)

        //আবেদন পত্র
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.application.leaveApplicationTab)

        //cancel btn
        commonPage.getCancelBtn(common.GlobalLocator.cancelBtn3) 
        
    })

  
    //Approval ছুটির  আবেদন অনুমোদন করবে
    it("TC_4. PE: Will approve leave application ",()=>{
        cy.login(data.validLoginCredentials.anik.username,data.validLoginCredentials.anik.password);
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //ছুটি
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
        
        //অপেক্ষমাণ তালিকা
        commonPage.getLeftNavMenu(or.leftNavmenuItems.pendingList, data.leftNavMenu.leaveSubMenu.pendingList)

        //Search by  কর্মকর্তা/ কর্মচারীর নাম 
        commonPage.getSearchListWithSelectorByName(common.GlobalLocator.searchByName,data.leaveBalanceAdjustment.employeeName)

         //Edit Btn
        commonPage.getEditBtn(common.GlobalLocator.editBtn)

         //পরবর্তী পদক্ষেপ
         commonPage.getsaveBtn(common.GlobalLocator.saveBtn)


         ///অনুমোদন 
        commonPage.getApprovalBtn(common.pendingList.approvalBtn)
        commonPage.getCommentField(data.pendingList.comment)
        commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn)
        commonPage.getCompleteBtn(common.pendingList.completeBtn)

    })

 //ছুটির মেয়াদ বাড়ে বা কমে অনুমোদনের জন্য পাঠানো
 it("TC_5. PE: Extension or reduction of leave sent for approval ",()=>{
    cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
    
    commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
    //ছুটি
    commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
    
    ///আবেদন ও ছুটির ইতিহাস
    commonPage.getLeftNavMenu(or.leftNavmenuItems.applicationAndLeaveHistory, data.leftNavMenu.leaveSubMenu.applicationAndLeaveHistory)
  
    ///ছুটির ইতিহাস panel
    commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.applicationAndLeaveHistory.application.leaveHistoryPanel)

    //অনুমোদিত tab
    commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.applicationAndLeaveHistory.application.approved)

      ///নৈমিত্তিক ছুটি Search
    commonPage.getSearchListWithSelectorByName(
        or.applicationAndLeaveHistory.leavehistory.leaveSearchByName,
        data.applicationAndLeaveHistory.application.casualLeaveSearchByName
    )

    //Edit Btn
    commonPage.getEditBtn(common.GlobalLocator.editBtn)

    ///Start date EndDate change korte hobe /// always  
    ApplicationAndLeaveHistoryPage.endDateChange(
        data.applicationAndLeaveHistory.dateChange.endyy,
        data.applicationAndLeaveHistory.dateChange.endmm,
        data.applicationAndLeaveHistory.dateChange.enddd
    )

    commonPage.getScroll('bottom')
    //পরবর্তী পদক্ষেপ
    commonPage.getsaveBtn(common.GlobalLocator.saveBtn)

    //অনিক রায়, ব্যবহারকারী
    //অনুমোদনের জন্য প্রেরণ
    invitationAndNominationPage.SentForApproval(
    data.applicationAndLeaveHistory.application.sentforApproval.employee,
    common.GlobalLocator.send,
    common.GlobalLocator.completeBtn,
    data.applicationAndLeaveHistory.application.sentforApproval.completeBtn
    )
})

  //অপেক্ষমাণ তালিকা
  //Approval ছুটির মেয়াদ বাড়ে বা কমে দিয়ে ছুটির  আবেদন অনুমোদন করবে 
  it("TC_6. PE: Will approve the leave application by increasing or decreasing the leave period ",()=>{
    cy.login(data.validLoginCredentials.anik.username,data.validLoginCredentials.anik.password);
    
    commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
    //ছুটি
    commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.leave)
    
    //অপেক্ষমাণ তালিকা
    commonPage.getLeftNavMenu(or.leftNavmenuItems.pendingList, data.leftNavMenu.leaveSubMenu.pendingList)

    cy.wait(2000)
    //Search by  কর্মকর্তা/ কর্মচারীর নাম 
    commonPage.getSearchListWithSelectorByName(common.GlobalLocator.searchByName,data.leaveBalanceAdjustment.employeeName)

     //Edit Btn
    commonPage.getEditBtn(common.GlobalLocator.editBtn)

     //পরবর্তী পদক্ষেপ
     commonPage.getsaveBtn(common.GlobalLocator.saveBtn)


     ///অনুমোদন 
    commonPage.getApprovalBtn(common.pendingList.approvalBtn)
    commonPage.getCommentField(data.pendingList.comment)
    commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn)
    commonPage.getCompleteBtn(common.pendingList.completeBtn)

    })

})


afterEach(() => {
    cy.logout(common.logoutPage.logoutDropdownBtn2,common.logoutPage.logoutBtn2)
})