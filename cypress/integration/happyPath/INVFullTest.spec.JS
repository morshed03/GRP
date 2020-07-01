/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'
import LeftNavMenu from '../../support/INV/pageObjects/LeftNavMenu'
import ItemRequisitionPage from '../../support/INV/pageObjects/ItemRequisitionPage'
import ItemRequisition_PendingApprovalPage from '../../support/INV/pageObjects/ItemRequisition_PendingApprovalPage'
import IssueItem_StoreKeepingPage from '../../support/INV/pageObjects/IssueItem_StoreKeepingPage'


describe('INV Module Regression Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('INVTestDataSQA').then(function(inv)
      {
        this.inv = inv
      })
      
      cy.visit(Cypress.env('url'))
    })
/*
    // Before all It Logout
    afterEach(function()
    {
      cy.logout()
    })
*/
    //Create page object
    const dashboardPage = new DashboardPage()
    const leftNavMenu = new LeftNavMenu()
    const itemRequisitionPage = new ItemRequisitionPage()
    const itemRequisitionListPage = new ItemRequisition_PendingApprovalPage()
    const issueItemPage = new IssueItem_StoreKeepingPage()

    //INV user: Create Requisition
    it('TC_01. User: Create Entitlement Item Requisition.',function() 
    {
        cy.login(this.inv.UserID, this.inv.UserPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ব্যবহারকারী').click()
        cy.wait(1000)
        leftNavMenu.getItemRequisition().should('include.text', 'মালামালের চাহিদাপত্র').click()
        cy.wait(3000)

        itemRequisitionListPage.getPageTitle().should('include.text', 'মালামালের চাহিদাপত্র')
        itemRequisitionPage.getItemRequisitionButton().should('include.text', 'মালামালের চাহিদাপত্র').click()   //মালামালের চাহিদাপত্র button
        cy.wait(2000)

        itemRequisitionPage.getRequisitionReferenceNoField().should('have.attr', 'placeholder', 'Please type requisition ref no here').clear().type(this.inv.RequisitionReferenceNo).should('have.value', this.inv.RequisitionReferenceNo)
        cy.wait(1000)

        itemRequisitionPage.getItemsButton().should('include.text', 'দ্রব্যাদি').click()    //দ্রব্যাদি button
        cy.wait(2000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'আইটেম অনুসন্ধান')
        itemRequisitionPage.getCategoryTypeDropDown().click()                               //ক্যাটাগরি টাইপ drop-down
        itemRequisitionPage.getDropDownItems().contains(this.inv.CategoryType).click()
        cy.wait(1000)
        itemRequisitionPage.getItemNameSearchField().should('not.have.attr', 'placeholder', 'আইটেম নাম লিখুন ').type(this.inv.ItemName).should('have.value', this.inv.ItemName)
        cy.wait(1000)
        itemRequisitionPage.getItemNameSearchButton().should('include.text', 'অনুসন্ধান').click()
        cy.wait(1000)

        itemRequisitionPage.getFeaturesPlusIcon().click()
        cy.wait(1000)
        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'বৈশিষ্ট্য বাছাই করুন')
        itemRequisitionPage.getFeaturesNameDropDown().click()
        itemRequisitionPage.getDropDownItems().contains(this.inv.FeaturesName).click()
        cy.wait(1000)
        itemRequisitionPage.getFeaturesValueDropDown().click()
        itemRequisitionPage.getValueDropDownItems().contains(this.inv.FeaturesValue).click()
        cy.wait(1000)
        itemRequisitionPage.getFeaturesAddPlusButton().click()
        cy.wait(1000)
        itemRequisitionPage.getSubmitButton().should('include.text', 'দাখিল করুন').click()
        cy.wait(1000)

        itemRequisitionPage.getQuantityField().first().type(this.inv.ItemRequisitionQuantity).should('have.value', this.inv.ItemRequisitionQuantity)
        cy.wait(2000)
        itemRequisitionPage.getItemAddPlusButton().first().click()
        cy.wait(2000)
        itemRequisitionPage.getModalCloseButton().should('include.text', 'বন্ধ করুন').click()
        cy.wait(1000)

        itemRequisitionPage.getSaveSendButton().should('include.text', 'সংরক্ষণ ও প্রেরণ করুন').click()
        cy.wait(6000)
    })

    //Requisition Approval
    it('TC_. Store Admin: Approval the Item Requisition.',function() 
    {
        cy.login(this.inv.StoreAdminID, this.inv.StoreAdminPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getItemRequisition_PendingApproval().should('include.text', 'মালামালের চাহিদাপত্র').click()
        cy.wait(3000)

        itemRequisitionListPage.getPageTitle().should('include.text', 'অপেক্ষমান মালামালের চাহিদাপত্র')
        
        itemRequisitionListPage.getCardRows().each(($el, index, $list) =>     //Select the desired রিকুইজিশন রেফারেন্স নং
        {
          const textReference = $el.find('td').text()
          if(textReference.includes(this.inv.RequisitionReferenceNo))                    
          {
            $el.find('td button.btn-outline-info').click()
          }
        })
        cy.wait(2000)

        itemRequisitionListPage.getProcessButton().click()
        cy.wait(3000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'অনুমোদন প্রক্রিয়া')
        itemRequisitionListPage.getRequisitionCommentField().should('have.attr', 'placeholder', 'মন্তব্য').type(this.inv.RequisitionComment).should('have.value', this.inv.RequisitionComment)
        cy.wait(1000)

        itemRequisitionListPage.getApprovalButton().should('include.text', 'অনুমোদন করুন').click()
        cy.wait(2000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'নিশ্চিত করুন')
        itemRequisitionListPage.getYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(2000)

        //itemRequisitionPage.getPopUpCardHeader().should('include.text', 'অনুরোধ নিশ্চিতকরণ')
        itemRequisitionListPage.getSaveButton().should('include.text', 'সংরক্ষন করুন').click()
        cy.wait(6000)
    })

    //Store Keeping Issue the requisition
    it('TC_. Store Keeper: Issue the Approval Item Requisition.',function() 
    {
        cy.login(this.inv.StoreKeeperID, this.inv.StoreKeeperPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('স্টোর কিপিং').click()
        cy.wait(1000)
        leftNavMenu.getIssueItem_StoreKeeping().should('include.text', 'ইস্যু আইটেম').click()
        cy.wait(4000)

        itemRequisitionListPage.getPageTitle().should('include.text', 'জারিকৃত নয়')
        
        //issueItemPage.getSearchField().should('have.attr', 'placeholder', 'নাম দ্বারা অনুসন্ধান করুন ').type(this.inv.UserName)
        //cy.wait(1000)

        itemRequisitionListPage.getCardRows().each(($el, index, $list) =>     //Select the desired রিকুইজিশন রেফারেন্স নং
        {
          const textReference = $el.find('td').text()
          if(textReference.includes(this.inv.RequisitionReferenceNo))                    
          {
            $el.find('td button.btn-outline-info').click()
          }
        })
        cy.wait(2000)

        issueItemPage.getPageTitle().should('include.text', 'ইস্যু আইটেম')
        issueItemPage.getIssueItemButton().should('include.text', 'ইস্যু আইটেম').click()
        cy.wait(2000)

        issueItemPage.getPopUpTitle().should('include.text', 'দ্রব্য ইস্যু')
        issueItemPage.getIssueIButton().should('include.text', 'ইস্যু').click()
        cy.wait(6000)
    })
    //Verify the requisition item is issued
    it('TC_0. User: Verify the Entitlement Item Requisition is Issued.',function() 
    {
        cy.login(this.inv.UserID, this.inv.UserPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ব্যবহারকারী').click()
        cy.wait(1000)
        leftNavMenu.getItemRequisition().should('include.text', 'মালামালের চাহিদাপত্র').click()
        cy.wait(3000)

        itemRequisitionListPage.getPageTitle().should('include.text', 'মালামালের চাহিদাপত্র')
        itemRequisitionPage.getTabMenus().contains('ইস্যুকৃত').click()   //মালামালের চাহিদাপত্র button
        cy.wait(2500)

        cy.get('tr td:nth-child(1)').each(($e1, index, $list) => 
        {
          const ReqNoText = $e1.text()
          if(ReqNoText.includes(this.inv.RequisitionReferenceNo))
          {
              cy.get('tr td:nth-child(1)').eq(index).next().next().next().next().then(function(ItemReq)
              {
                  const ReqText = ItemReq.text()
                  expect(ReqText).to.equal('ইস্যুকৃত')
              })
          }
      })
      cy.wait(1500)
    })
})