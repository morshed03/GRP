/// <reference types="cypress" />

import ComplaintPageActions from '../../../support/HRM/pageobjects/pageactions/dp/ComplaintPageActions'
import PendingListPageActions from '../../../support/HRM/pageobjects/pageactions/dp/PendingListPageActions'
import CommonPageActions from '../../../support/HRM/pageobjects/pageactions/common/CommonPageActions'
const or = require('../../../support/HRM/locators/dp_locators.json')
const common = require('../../../support/HRM/locators/common_locators.json')

    const commonPage = new CommonPageActions()
    const complaintPage = new ComplaintPageActions()
    const pendinglistPage = new PendingListPageActions()
    before(()=>{

        cy.fixture('DPTestDataSQA').then((data)=>{

            globalThis.data = data

        })

    })

    beforeEach(()=>{

        cy.visit(Cypress.env('url'))
        //loginPage.navigateToURL()


    })

describe("Working DP module",()=>{

    //নতুন অভিযোগ ,আদেশনামা, সংযুক্তি তালিকা ফর্ম সাবমিট এবং কর্মকর্তা কর্মচারী কে অনুমোদনের জন্য পাঠানো
    it("TC_1. PE: new complaint, Order and attachment form submit then Employee Sent for Approval ",()=>{
        cy.login(data.validLoginCredentials.morshed.username,data.validLoginCredentials.morshed.password);
        
         
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.dp)
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.Complaint,data.leftNavMenu.dpSubMenu.complaint)
    
        commonPage.addBtn(common.GlobalLocator.addBtn)
        complaintPage.openEmployeeSelectAfterNext(data.complaintPage.branch.name, data.complaintPage.employee.name,common.GlobalLocator.nextStepBtn)
       
        //(সাধারণ তথ্য)
        complaintPage.addComplaintBtn(common.GlobalLocator.addBtn)
      
        complaintPage.addGeneralInfoDetails(data.complaintPage.generalInfo.complaintType,
                    data.complaintPage.generalInfo.complaintBasis,
                    data.complaintPage.generalInfo.complaintTitle,
                    data.complaintPage.generalInfo.allegationNo,
                    data.complaintPage.generalInfo.dpAuthorityDesignate,
                    data.complaintPage.generalInfo.allegationDescription2,
                    or.complaintPage.complaintGeneralInfo.generalSaveBtn
            )

        complaintPage.viewComplaintBtn(common.GlobalLocator.viewBtn)

        //(আদেশনামা & সংযুক্তি তালিকা)
        complaintPage.orderTabBtn()
        commonPage.addBtn(or.complaintPage.order.orderAddBtn)
        complaintPage.addOrderInfoDetails(
                                          data.complaintPage.orderInfo.orderType,
                                          data.complaintPage.orderInfo.orderDetails,
                                          data.complaintPage.orderInfo.actionDetails,
                                          data.complaintPage.orderInfo.punishmentNature,
                                          data.complaintPage.orderInfo.punishmentType,
                                          or.complaintPage.order.attachment.addBtn,
                                          data.complaintPage.attachment.attachmentType,
                                          data.complaintPage.attachment.selectAttchment,
                                          data.complaintPage.attachment.desc,
                                          common.GlobalLocator.saveBtn2,
                                          or.complaintPage.order.orderInfo.orderSavaBtn
                                          )
        
        complaintPage.orderEditBtn(or.complaintPage.order.orderEdit.editBtn)
        complaintPage.ordernextStepBtn(or.complaintPage.order.orderEdit.orderNextStepBtn)



    //Sent for approval(অনুমোদনের জন্য পাঠানো)
       complaintPage.employeeForApproved(
           data.complaintPage.orderEdit.selectEmployeeForApproved,
           or.complaintPage.order.orderEdit.sendBtn,
           common.GlobalLocator.completeBtn)             

    })
 
    // অথরিটি কে দিয়ে কর্মচারী কে অনুমোদিত করা
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

    afterEach(() => {
        cy.logout(common.logoutPage.logoutDropdownBtn2,common.logoutPage.logoutBtn2)
    })

})