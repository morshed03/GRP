/// <reference types="cypress" />

    import CommonPageActions from '../../../support/HRM/pageobjects/pageactions/common/CommonPageActions'
    import JoiningPageActions from '../../../support/HRM/pageobjects/pageactions/joining/JoiningPageActions'
    const or = require('../../../support/HRM/locators/joining_locators.json')
    const common = require('../../../support/HRM/locators/common_locators.json')

    const commonPage = new CommonPageActions()
    const joiningPage = new JoiningPageActions()

    before(()=>{

        cy.fixture('JoiningTestDataSQA').then((data)=>{

            globalThis.data = data

        })

    })

    beforeEach(()=>{

        cy.visit(Cypress.env('url'))
        //loginPage.navigateToURL()


    })

describe("Working Recruitment and joining module",()=>{

    //নিয়োগ ও যোগদান সংক্রান্ত তথ্যাবলি সংরক্ষণ  এবং কর্মকর্তা কর্মচারী কে অনুমোদনের জন্য পাঠানো
    it("TC_1. PE: Preservation of recruitment and joining information and sending to the officer staff for approval ",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        
        //নিয়োগ ও যোগদান
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.recruitmentJoining)

        //যোগদান ও অনুমোদন
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.joinAndApprove)
        
        //যোগদান
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.joining,data.leftNavMenu.joiningSubMenu.joining)
    
        ///নিয়োগ ও যোগদান সংক্রান্ত তথ্যাবলি
        joiningPage.joiningInformationDetails(data.joiningDetails.joining1)

        /// সংরক্ষণ ও পরবর্তী পদক্ষেপ 
        commonPage.getsaveBtn(common.GlobalLocator.completeBtn)


        //অনুমোদনের জন্য প্রেরণ
       commonPage.SentForApproval(
        data.joiningDetails.SentForApproval,
        common.GlobalLocator
    )           

    })

})

/////অনুমোদন করা
describe("Working Recruitment and joining module For Approved",()=>{

    //নিয়োগ ও যোগদান  কর্মকর্তা কর্মচারী কে অনুমোদন করা
    it("TC_1. PE: Approve the recruitment and joining officer staff ",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        
        //নিয়োগ ও যোগদান
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.recruitmentJoining)

        //যোগদান ও অনুমোদন
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.joinAndApprove)
        
        //অপেক্ষমাণ তালিকা
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.pendingList,data.leftNavMenu.joiningSubMenu.pendingList)  
        
        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.joiningDetails.joining1['nameBn']
        )

        /// Edit Btn
        commonPage.getEditBtn(common.GlobalLocator.editBtn)

        commonPage.getScroll('bottom')

        /// সংরক্ষণ ও পরবর্তী পদক্ষেপ
        commonPage.getsaveBtn(common.GlobalLocator.completeBtn)
 
        ///অনুমোদন
        commonPage.getApprovalBtn(common.pendingList.approvalBtn)
        commonPage.getCommentField(data.pendingList.comment)
        commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn)
        commonPage.getCompleteBtn(common.pendingList.completeBtn)


        //ইতিহাস
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.pendingList.historyTab)
        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.joiningDetails.joining1['nameBn']
        )

    })

})

////অননুমোদন  করা
describe("Working Recruitment and joining module For Unauthorized",()=>{

    //নিয়োগ ও যোগদান  কর্মকর্তা কর্মচারী কে অননুমোদন  করা
    it("TC_1. PE: Unauthorized the recruitment and joining officer staff ",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        
        //নিয়োগ ও যোগদান
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.recruitmentJoining)

        //যোগদান ও অনুমোদন
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.joinAndApprove)
        
        //অপেক্ষমাণ তালিকা
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.pendingList,data.leftNavMenu.joiningSubMenu.pendingList)  
        
        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.joiningDetails.joining1['nameBn']
        )

        /// Edit Btn
        commonPage.getEditBtn(common.GlobalLocator.editBtn)

        commonPage.getScroll('bottom')

        /// সংরক্ষণ ও পরবর্তী পদক্ষেপ
        commonPage.getsaveBtn(common.GlobalLocator.completeBtn)
 
        ///অননুমোদন 
        commonPage.getUnauthorizedBtn(common.pendingList.unauthorizedBtn3)
        commonPage.getCommentField(data.pendingList.comment)
        commonPage.getUnauthorizedBtn(common.GlobalLocator.unauthorizedBtn1)
        commonPage.getCompleteBtn(common.pendingList.completeBtn)


        //ইতিহাস
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.pendingList.historyTab)
        //Search Employee 
        commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.joiningDetails.joining1['nameBn']
        )

    })

})


////প্রতিবেদন
describe.only("Working Recruitment and joining module For Reports",()=>{

    //নিয়োগ ও যোগদান  যোগদানকৃত কর্মচারীর তালিকা
    it("TC_1. PE: Recruitment and Joining List of joined employees Reports ",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
        
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        
        //নিয়োগ ও যোগদান
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.recruitmentJoining)

        //প্রতিবেদন
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.reports)
        
        //যোগদানকৃত কর্মচারীর তালিকা
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.joinedEmployees,data.leftNavMenu.joiningSubMenu.joinedEmployees)  
        
        commonPage.getSearchBtn(common.GlobalLocator.searchBtn3)

         //Search Employee 
         commonPage.getSearchListWithSelectorByName(
            common.GlobalLocator['searchByName'],
            data.joiningDetails.joining1['nameBn']
        )

        
    })

})


afterEach(() => {
    cy.logout(common.logoutPage.logoutDropdownBtn2,common.logoutPage.logoutBtn2)
})