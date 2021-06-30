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

    //     ///ADD সংযুক্তির তালিকা
    //     commonPage.addBtn(common.GlobalLocator.addBtn)

        


    // //Sent for approval(অনুমোদনের জন্য পাঠানো)
    //    complaintPage.employeeForApproved(
    //        data.complaintPage.orderEdit.selectEmployeeForApproved,
    //        or.complaintPage.order.orderEdit.sendBtn,
    //        common.GlobalLocator.completeBtn)             

    })
 
    // অথরিটি কে দিয়ে কর্মচারী কে অনুমোদিত করা
    /*
    it("TC_2. PE: Authority to approve the employee",() =>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)

        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.dp);
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.pendingList,data.leftNavMenu.dpSubMenu.pendingList)
        
        
        
        pendinglistPage.searchField(data.pendingList.searchEmp)
        pendinglistPage.editPendingListBtn(or.pendingList.editBtn)


        //সংযুক্তির ধরন 
        commonPage.getSearchListWithSelectorByName(
            common.pendingList.searchByName1,
            data.complaintPage.attachment.selectAttchment)
        
        //pendinglistPage.viewFileField()
        //pendinglistPage.closeBtnField()

        complaintPage.ordernextStepBtn(or.complaintPage.order.orderEdit.orderNextStepBtn)
        //অনুমোদিত করা
        commonPage.getApprovalBtn(or.pendingList.approvalBtn)
        pendinglistPage.approvalCommentField(data.pendingList.comment)
        commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn)
        commonPage.getCompleteBtn(common.GlobalLocator.completeBtn)
    })
    */

  

})

afterEach(() => {
    cy.logout(common.logoutPage.logoutDropdownBtn2,common.logoutPage.logoutBtn2)
})