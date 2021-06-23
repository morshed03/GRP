/// <reference types="cypress" />

import CommonPageActions from '../../../support/HRM/pageobjects/pageactions/common/CommonPageActions'
import ConfigurationPageActions from '../../../support/HRM/pageobjects/pageactions/acr/ConfigurationPageActions'
import AcrEntryPageActions from '../../../support/HRM/pageobjects/pageactions/acr/AcrEntryPageActions'
import AcrPendingListPageActions from '../../../support/HRM/pageobjects/pageactions/acr/AcrPendingListPageActions'
import ReportPageActions from '../../../support/HRM/pageobjects/pageactions/acr/ReportPageActions'
const or = require('../../../support/HRM/locators/acr_locators.json')
const common = require('../../../support/HRM/locators/common_locators.json')

    const commonPage = new CommonPageActions()
    const configurationPage = new ConfigurationPageActions()
    const acrEntryPage = new AcrEntryPageActions()
    const acrPendingListPage = new AcrPendingListPageActions()
    const reportPage = new ReportPageActions()


    before(()=>{

        cy.fixture('ACRTestDataSQA').then((data)=>{

            globalThis.data = data

        })

    })

    beforeEach(()=>{

        cy.visit(Cypress.env('url'))
        //loginPage.navigateToURL()


    })

///কনফিগারেশন  > এসিআর অন্তর্ভুক্তি > DELETE EMPLOYEE
describe("Working ACR module ACR inclusion Employee Delete ",()=>{
    
    it("TC_1. PE: ACR inclusion Delete Employee",()=>{
      cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
    
      commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
     
        //এসিআর
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.acr)
        //কনফিগারেশন
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.configuration)
        //এসিআর অন্তর্ভুক্তি
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.acrInclusion,data.leftNavMenu.acrSubMenu.acrInclusion)
    
        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator.searchByName,
            data.configuration.searchEmployee
        )

       ///Delete Employee
       commonPage.getDeleteBtn(common.GlobalLocator.deleteBtn)
       commonPage.getCompleteBtn(common.GlobalLocator.completeBtn3)

    })
})

///কনফিগারেশন  > এসিআর অন্তর্ভুক্তি  > ADD EMPLOYEE
describe("Working ACR module ACR inclusion Employee Add ",()=>{
    
    it("TC_1. PE: ACR inclusion Add Employee",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
 
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)

        //এসিআর
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.acr)
        //কনফিগারেশন
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.configuration)
        //এসিআর অন্তর্ভুক্তি
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.acrInclusion,data.leftNavMenu.acrSubMenu.acrInclusion)
        
        //AddBtn 
        commonPage.addBtn(common.GlobalLocator.addBtn)
        //branch মডিউল মেইনটেনেন্স শাখা 
        configurationPage.branchNameAndSearch(
            data.configuration,
            common.GlobalLocator
            )

        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator.searchByName,
            data.configuration.searchEmployee
        )
        /// Add ACR Person      
        configurationPage.addACRPersonDetails(data.configuration.addACR.person1)    

        //// অন্তর্ভুক্ত করুন
        commonPage.addBtn(common.GlobalLocator.completeBtn2)


    })
})

/// এসিআর এন্ট্রি > এসিআর আবেদন সংরক্ষণ,অনুমোদনের জন্য পাঠানো
describe("Working ACR module ACR Application, Save, send for approval",()=> {
    
    it("TC_1. PE: ACR Application, Save, send for approval",()=> {
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);

        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //এসিআর
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.acr)

        //এসিআর এন্ট্রি
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.acrEntry,data.leftNavMenu.acrEntry)
        
        
         //branch মডিউল মেইনটেনেন্স শাখা 
         configurationPage.branchNameAndSearch(
            data.configuration,
            common.GlobalLocator
            )

        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.configuration['searchEmployee']
        )

        //ViewBtn 
        commonPage.getviewBtn(common.GlobalLocator.viewBtn)

        //AddBtn 
        commonPage.addBtn(common.GlobalLocator.addBtn)
          
        ///এসিআর আবেদন
        acrEntryPage.AcrApplicationFormDetails(data.acrEntry.acrApplication)
        commonPage.getScroll('bottom')
      

        // সংযুক্তির তালিকা
        //ADD Btn
        commonPage.addBtn(common.GlobalLocator.addBtn)

        
        acrEntryPage.attachmentUploadDetails(data.acrEntry.attachment)
        
        //সংযুক্তি আপলোডকরণ ->সংরক্ষণ করুন
        commonPage.getsaveBtn(common.GlobalLocator.saveBtn2)
       
        //এসিআর আবেদন -> সংরক্ষণ করুন
        commonPage.getsaveBtn(common.GlobalLocator.saveBtn)
 
       //completeBtn -> হ্যাঁ
       commonPage.getCompleteBtn2(common.GlobalLocator.completeBtn2, data.acrEntry.acrApplication.completeBtn2)
     
       /// Edit Btn
       commonPage.getEditBtn(common.GlobalLocator.editBtn)
 
       commonPage.getScroll('bottom')

       // পরবর্তী পদক্ষেপ
       commonPage.getsaveBtn(common.GlobalLocator.nextStepBtn2)
      
       //অনুমোদনের জন্য প্রেরণ
       commonPage.SentForApproval(
            data.acrEntry.SentForApproval,
            common.GlobalLocator
           // data.sentforApproval.employee,
           // common.GlobalLocator.send,
           // common.GlobalLocator.completeBtn,
           // data.sentforApproval.completebtnName
        )

    })
})

/// এসিআর এন্ট্রি > এসিআর আবেদন অনুমোদন করা
describe("Working ACR module approval Approved",()=>{
    
    it("TC_1. PE: ACR Application, send for approval",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);

        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //এসিআর
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.acr)

        //অপেক্ষমাণ তালিকা
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.acrPendingList,data.leftNavMenu.acrPendingList)
    
        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.configuration['searchEmployee']
        )

        /// Edit Btn
        commonPage.getEditBtn(common.GlobalLocator.editBtn)
       
        commonPage.getScroll('bottom')
        // পরবর্তী পদক্ষেপ
        commonPage.getsaveBtn(common.GlobalLocator.nextStepBtn2)

        ///অনুমোদন 
        commonPage.getApprovalBtn(common.pendingList.approvalBtn)
        commonPage.getCommentField(data.pendingList.comment)
        commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn)
        commonPage.getCompleteBtn(common.pendingList.completeBtn)

    })
})


///এসিআর (নিজ)  
describe("Working ACR module check approved ACR OWN",()=>{
    
    it("TC_1. PE: check approved ACR in ACR OWN",()=>{
        cy.login(data.validLoginCredentials.arafat.username,data.validLoginCredentials.arafat.password);

        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //এসিআর
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.acr)

        //এসিআর (নিজ)
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.acrOwn,data.leftNavMenu.acrOwn)
    
        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.acrOwn['acrYear']
        )

    })
})


///এসিআর পেন্ডিং তালিকা 
describe("Working ACR module check approved ACR OWN",()=>{
    
    it("TC_1. PE: check approved ACR in ACR OWN",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);

        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //এসিআর
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.acr)

        //এসিআর পেন্ডিং তালিকা
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.acrPendingListSendNotification,data.leftNavMenu.acrPendingListSendNotification)
    
        //এসিআর বৎসর *
        acrPendingListPage.acrYearDetails(data.pendingList,common.GlobalLocator) 
        
        ///Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator.searchByName,
            data.pendingList.employeeName
        )

         /// Add ACR Pending Send Notification      
         configurationPage.addACRPersonDetails(data.pendingList.employeeName)   
 
        //প্রেরণ -> Send Notification
        commonPage.getsaveBtn(common.GlobalLocator.completeBtn2)


    })
})


///Check Send Notification
describe("Working ACR module check Send Notification",()=>{
    
    it("TC_1. PE: check Send Notification",()=>{
        cy.login(data.validLoginCredentials.fahmida.username,data.validLoginCredentials.fahmida.password);
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        
        //check Notification 
        commonPage.checkNotificationIcon()

    })
})

///Check Reports
describe.only("Working ACR module check Reports",()=>{
    
    //বিস্তারিত প্রতিবেদন
    it("TC_1. PE: check Detailed report",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        
         //এসিআর
         commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.acr)
         
         //প্রতিবেদন
         commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.reports)
         
         //বিস্তারিত প্রতিবেদন
         commonPage.getLeftNavSubMenu(or.leftNavmenuItems.reportsDetail,data.leftNavMenu.acrSubMenu.reportsDetail)

         //branch মডিউল মেইনটেনেন্স শাখা 
         configurationPage.branchNameAndSearch(
            data.configuration,
            common.GlobalLocator
            )

        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.configuration['searchEmployee']
        )
    })


      //গড় প্রতিবেদন
      it("TC_2. PE: check Detailed report",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        
         //এসিআর
         commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.acr)
         
         //প্রতিবেদন
         commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.reports)
         
         //গড় প্রতিবেদন
         commonPage.getLeftNavSubMenu(or.leftNavmenuItems.reportsAvg,data.leftNavMenu.acrSubMenu.reportsAvg)

        //branch মডিউল মেইনটেনেন্স শাখা 
        configurationPage.branchNameAndSearch(
            data.configuration,
            common.GlobalLocator
            )

        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.configuration['searchEmployee']
        )

        ///আবেদনকৃত এসিআর সমূহের তালিকা -> 
        reportPage.checkAppliedACRDetails(data.configuration['searchEmployee'])

        //cancel btn
        commonPage.getCancelBtn(common.GlobalLocator.cancelBtn3) 
    })

    //বিলম্বিত অনুবেদনাধীন
    it("TC_3. PE: check Delay report",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        
         //এসিআর
         commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.acr)
         
         //প্রতিবেদন
         commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.reports)
         
         //গড় প্রতিবেদন
         commonPage.getLeftNavSubMenu(or.leftNavmenuItems.reportsDelay,data.leftNavMenu.acrSubMenu.reportsDelay)

         //এসিআর বৎসর *
         acrPendingListPage.acrYearDetails(data.acrOwn,common.GlobalLocator) 

          //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.configuration['searchEmployee']
        )
    })
})

afterEach(() => {
    cy.logout(common.logoutPage.logoutDropdownBtn2,common.logoutPage.logoutBtn2)
})