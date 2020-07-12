/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'
import LeftNavMenu from '../../support/INV/pageObjects/LeftNavMenu'
import ItemRequisitionPage from '../../support/INV/pageObjects/ItemRequisitionPage'
import ItemRequisition_PendingApprovalPage from '../../support/INV/pageObjects/ItemRequisition_PendingApprovalPage'
import IssueItem_StoreKeepingPage from '../../support/INV/pageObjects/IssueItem_StoreKeepingPage'
import ReturnPage from '../../support/INV/pageObjects/ReturnPage'
import DirectStocksInPage from '../../support/INV/pageObjects/DirectStocksInPage'
import DirectStocksOutPage from '../../support/INV/pageObjects/DirectStocksOutPage'
import PhysicalInventoryAuditPage from '../../support/INV/pageObjects/PhysicalInventoryAuditPage'


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
    const returnPage = new ReturnPage()
    const directStocksInPage = new DirectStocksInPage()
    const directStocksOutPage = new DirectStocksOutPage()
    const physicalInventoryAuditPage = new PhysicalInventoryAuditPage()

    //INV user: Create Requisition
    it('TC_01. User: Create General Item Requisition.',function() 
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
    it('TC_. User: Verify the Item Requisition is Issued.',function() 
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
    //Issued Item Return
    it('TC_. Store Keeper: Issued Item Return.',function() 
    {
        cy.login(this.inv.StoreKeeperID, this.inv.StoreKeeperPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getReturnMenu().should('include.text', 'ফেরৎ').click()
        cy.wait(3000)

        returnPage.getPageTitle().should('include.text', 'ফেরতকৃত দ্রব্যাদি')
        returnPage.getReceiveIssuedItemsButton().should('include.text', 'ইস্যু করা আইটেম গ্রহণ করুন').click()
        cy.wait(2500)

        returnPage.getStoreField().should('include.text', 'নির্বাচন করুন').click()        //স্টোর
        itemRequisitionPage.getDropDownItems().contains(this.inv.StoreName).click()
        cy.wait(1000)
        returnPage.getEmployeeNameField().should('include.text', 'নির্বাচন করুন').click()        //স্টোর
        itemRequisitionPage.getDropDownItems().contains(this.inv.UserName).click()
        cy.wait(1000)
        returnPage.getSearchButton().should('include.text', 'অনুসন্ধান').click()

        itemRequisitionListPage.getCardRows().each(($el, index, $list) =>     //Select the desired রিকুইজিশন রেফারেন্স নং
        {
          const textReference = $el.find('td').text()
          if(textReference.includes(this.inv.RequisitionReferenceNo))                    
          {
            $el.find('td input[type="number"]').type('1')
          }
        })
      cy.wait(1500)
    })
    //Direct Purchase (DP) flow **********************************************************
    //Direct Purchase Requisition
    it('TC_. Store Keeper: Create Direct Purchase Requisition.',function() 
    {
        cy.login(this.inv.StoreKeeperID, this.inv.StoreKeeperPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('স্টক ব্যবস্থাপনা').click()
        cy.wait(1000)
        leftNavMenu.getDirectStocksInMenu().should('include.text', 'সরাসরি স্টক ইন').click()
        cy.wait(3000)

        itemRequisitionListPage.getPageTitle().should('include.text', 'সরাসরি স্টক ইন')
        directStocksInPage.getAddNewDI().should('include.text', 'নতুন যোগ করুন').click()   //নতুন যোগ করুন
        cy.wait(2000)

        returnPage.getPageTitle().should('include.text', 'সরাসরি স্টক ইন')
        directStocksInPage.getStoreField().click()
        itemRequisitionPage.getDropDownItems().contains(this.inv.StoreName).click()
        cy.wait(1000)
        directStocksInPage.getReferenceNoField().should('have.attr', 'id', 'refNo').clear().type(this.inv.DIReferenceNo).should('have.value', this.inv.DIReferenceNo)
        cy.wait(1000)
        directStocksInPage.getMemoNoField().should('have.attr', 'name', 'memoNo').type(this.inv.DIMemoNo).should('have.value', this.inv.DIMemoNo)
        cy.wait(1000)
        directStocksInPage.getRemarkField().should('have.attr', 'name', 'remarks').type(this.inv.DIRemarks).should('have.value', this.inv.DIRemarks)
        cy.wait(1000)
        directStocksInPage.getAddNewButton().should('include.text', 'নতুন যোগ করুন').click()
        cy.wait(2000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'আইটেম নির্বাচন করুন')
        directStocksInPage.getCategoryField().click()                               //ক্যাটাগরি টাইপ drop-down
        itemRequisitionPage.getDropDownItems().contains(this.inv.CategoryType).click()
        cy.wait(1000)
        directStocksInPage.getItemGroupField().click()                               //ক্যাটাগরি টাইপ drop-down
        itemRequisitionPage.getDropDownItems().contains(this.inv.ItemName).click()
        cy.wait(2000)

        directStocksInPage.getSelectItem().contains(this.inv.ItemDescription).click()
        cy.wait(2000)

        directStocksInPage.getQuantityField().should('have.attr', 'name', 'detailQuantity').type(this.inv.DIQuantity).should('have.value', this.inv.DIQuantity)
        cy.wait(1000)
        directStocksInPage.getPriceField().should('have.attr', 'name', 'price').type(this.inv.DIPrice).should('have.value', this.inv.DIPrice)
        cy.wait(1000)
        directStocksInPage.getAddButton().should('include.text', 'যুক্ত করুন').click()
        cy.wait(1000)
        directStocksInPage.getCloseButton().should('include.text', 'বন্ধ করুন').click()
        cy.wait(2000)
        
        directStocksInPage.getAttachmentsButton().click()       //সংযুক্তিসমূহ
        const fileName = 'TestFile.pdf';
        directStocksInPage.getSelectFileButton().attachFile(fileName);      //File Upload
        cy.wait(1000)
        directStocksInPage.getFileAddButton().should('include.text', 'Add').click()
        cy.wait(4000)
        directStocksInPage.getSaveSendButton().should('include.text', 'সংরক্ষণ ও প্রেরণ করুন').click()
        cy.wait(6000)
    })
    //Approval DI
    it('TC_. Store Admin: Direct Purchase Approval.',function() 
    {
        cy.login(this.inv.StoreAdminID, this.inv.StoreAdminPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getDirectStocksIn_PendingApproval().should('include.text', 'সরাসরি স্টক ইন').click()
        cy.wait(3000)

        itemRequisitionListPage.getPageTitle().should('include.text', 'অপেক্ষমান সরাসরি স্টক ইন')
        itemRequisitionListPage.getCardRows().each(($el, index, $list) =>     //Select the desired রিকুইজিশন রেফারেন্স নং
        {
          const textReference = $el.find('td').text()
          if(textReference.includes(this.inv.DIReferenceNo))                    
          {
            $el.find('td button.btn-outline-info').click()
          }
        })
        cy.wait(2000)

        returnPage.getPageTitle().should('include.text', 'সরাসরি স্টক ইন')
        itemRequisitionListPage.getProcessButton().click()
        cy.wait(3000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'অনুমোদন প্রক্রিয়া')
        itemRequisitionListPage.getRequisitionCommentField().should('have.attr', 'placeholder', 'মন্তব্য').type(this.inv.RequisitionComment).should('have.value', this.inv.RequisitionComment)
        cy.wait(1000)

        itemRequisitionListPage.getApprovalButton().should('include.text', 'অনুমোদন করুন').click()
        cy.wait(2000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'নিশ্চিত করুন')
        itemRequisitionListPage.getYesButton().should('include.text', 'হ্যাঁ').click()
        //cy.wait(2000)

        //itemRequisitionPage.getPopUpCardHeader().should('include.text', 'অনুরোধ নিশ্চিতকরণ')
        //itemRequisitionListPage.getSaveButton().should('include.text', 'সংরক্ষন করুন').click()
        cy.wait(6000)
    })

    //Direct Stock Out flow ************************************************************
    //Direct Stock Out Requisition
    it('TC_. Store Keeper: Create Direct Stock Out Requisition.',function() 
    {
        cy.login(this.inv.StoreKeeperID, this.inv.StoreKeeperPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('স্টক ব্যবস্থাপনা').click()
        cy.wait(1000)
        leftNavMenu.getDirectStocksOutMenu().should('include.text', 'সরাসরি স্টক আউট').click()
        cy.wait(3000)

        itemRequisitionListPage.getPageTitle().should('include.text', 'ডাইরেক্ট স্টক আউট')
        directStocksInPage.getAddNewDI().should('include.text', 'নতুন যোগ করুন').click()   //নতুন যোগ করুন
        cy.wait(2000)

        returnPage.getPageTitle().should('include.text', 'ডাইরেক্ট স্টক আউট')
        directStocksInPage.getReferenceNoField().should('have.attr', 'id', 'refNo').clear().type(this.inv.DOReferenceNo).should('have.value', this.inv.DOReferenceNo)
        cy.wait(1000)
        directStocksOutPage.getIssueToField().should('have.attr', 'name', 'issuedTo').click() //যাকে ইস্যু করা হয়েছে
        cy.wait(1000)
        itemRequisitionPage.getDropDownItems().contains(this.inv.IssueTo).click()
        cy.wait(1000)
        directStocksInPage.getStoreField().click()        //স্টোর
        itemRequisitionPage.getDropDownItems().contains(this.inv.StoreName).click()
        cy.wait(1000)
        //directStocksInPage.getRemarkField().should('have.attr', 'name', 'remarks').type(this.inv.DIRemarks).should('have.value', this.inv.DIRemarks)
        //cy.wait(1000)
        directStocksOutPage.getAddNewButton().should('include.text', 'নতুন যোগ করুন').click()
        cy.wait(2000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'আইটেম নির্বাচন করুন')
        directStocksInPage.getCategoryField().click()                               //ক্যাটাগরি টাইপ drop-down
        itemRequisitionPage.getDropDownItems().contains(this.inv.CategoryType).click()
        cy.wait(1000)
        directStocksInPage.getItemGroupField().click()                               //ক্যাটাগরি টাইপ drop-down
        itemRequisitionPage.getDropDownItems().contains(this.inv.ItemName).click()
        cy.wait(2000)

        directStocksInPage.getSelectItem().contains(this.inv.ItemDescription).click()
        cy.wait(2000)

        directStocksOutPage.getDOQuantityField().first().clear().type(this.inv.DOQuantity).should('have.value', this.inv.DOQuantity)
        cy.wait(1000)
        directStocksOutPage.getSaveButton().should('include.text', 'দাখিল করুন').click()
        cy.wait(2000)

        directStocksInPage.getAddButton().should('include.text', 'যুক্ত করুন').click()
        cy.wait(1000)
        directStocksInPage.getCloseButton().should('include.text', 'বন্ধ করুন').click()
        cy.wait(2000)
        
        directStocksInPage.getSaveSendButton().should('include.text', 'সংরক্ষণ ও প্রেরণ করুন').click()
        cy.wait(6000)
    })
    //Approval DO
    it('TC_. Store Admin: Direct Stock Out Approval.',function() 
    {
        cy.login(this.inv.StoreAdminID, this.inv.StoreAdminPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getDirectStocksOut_PendingApproval().should('include.text', 'সরাসরি স্টক আউট').click()
        cy.wait(3000)

        //itemRequisitionListPage.getPageTitle().should('include.text', 'অপেক্ষমান সরাসরি স্টক আউট')
        itemRequisitionListPage.getCardRows().each(($el, index, $list) =>     //Select the desired রিকুইজিশন রেফারেন্স নং
        {
          const textReference = $el.find('td').text()
          if(textReference.includes(this.inv.DOReferenceNo))                    
          {
            $el.find('td button.btn-outline-info').click()
          }
        })
        cy.wait(2500)

        returnPage.getPageTitle().should('include.text', 'ডাইরেক্ট স্টক আউট')
        itemRequisitionListPage.getProcessButton().click()
        cy.wait(3000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'অনুমোদন প্রক্রিয়া')
        itemRequisitionListPage.getRequisitionCommentField().should('have.attr', 'placeholder', 'মন্তব্য').type(this.inv.RequisitionComment).should('have.value', this.inv.RequisitionComment)
        cy.wait(1000)

        itemRequisitionListPage.getApprovalButton().should('include.text', 'অনুমোদন করুন').click()
        cy.wait(2000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'নিশ্চিত করুন')
        itemRequisitionListPage.getYesButton().should('include.text', 'হ্যাঁ').click()
        //cy.wait(2000)

        //itemRequisitionPage.getPopUpCardHeader().should('include.text', 'অনুরোধ নিশ্চিতকরণ')
        //itemRequisitionListPage.getSaveButton().should('include.text', 'সংরক্ষন করুন').click()
        cy.wait(6000)
    })

    //Physical Inventory/Audit flow ************************************************************
    //Physical Inventory / Audit Requisition
    it.only('TC_. Store Keeper: Create Physical Inventory Audit Requisition.',function() 
    {
        cy.login(this.inv.StoreKeeperID, this.inv.StoreKeeperPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ফিজিক্যাল ইনভেন্টরি').click()
        cy.wait(1000)
        leftNavMenu.getInventoryAuditMenu().should('include.text', 'ইনভেন্টরি অডিট').click()
        cy.wait(3000)

        returnPage.getPageTitle().should('include.text', 'ফিজিক্যাল ইনভেন্টরি')
        physicalInventoryAuditPage.getAddNewButton().should('include.text', 'নতুন যোগ করুন').click()   //নতুন যোগ করুন
        cy.wait(2000)

        //returnPage.getPageTitle().should('include.text', 'ফিজিক্যাল ইনভেন্টরি')
        physicalInventoryAuditPage.getStoreField().should('have.attr', 'name', 'storeName').click()        //স্টোর
        itemRequisitionPage.getDropDownItems().contains(this.inv.StoreName).click()
        cy.wait(1000)
        physicalInventoryAuditPage.getReferenceNoField().should('have.attr', 'placeholder', 'Reference No.').clear().type(this.inv.FIReferenceNo).should('have.value', this.inv.FIReferenceNo)
        cy.wait(1000)
        physicalInventoryAuditPage.getRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').type(this.inv.FIRemark).should('have.value', this.inv.FIRemark)
        cy.wait(1000)
        physicalInventoryAuditPage.getLoadCurrentStockButton().should('include.text', 'বর্তমান স্টক লোড করুন').click()
        cy.wait(1500)
        
        physicalInventoryAuditPage.getSaveButton().should('include.text', 'সংরক্ষন করুন').click()
        cy.wait(6000)
    })
    //Approval DO
    it('TC_. Store Admin: Direct Stock Out Approval.',function() 
    {
        cy.login(this.inv.StoreAdminID, this.inv.StoreAdminPassword)

        dashboardPage.getINVAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getDirectStocksOut_PendingApproval().should('include.text', 'সরাসরি স্টক আউট').click()
        cy.wait(3000)

        //itemRequisitionListPage.getPageTitle().should('include.text', 'অপেক্ষমান সরাসরি স্টক আউট')
        itemRequisitionListPage.getCardRows().each(($el, index, $list) =>     //Select the desired রিকুইজিশন রেফারেন্স নং
        {
          const textReference = $el.find('td').text()
          if(textReference.includes(this.inv.DOReferenceNo))                    
          {
            $el.find('td button.btn-outline-info').click()
          }
        })
        cy.wait(2500)

        returnPage.getPageTitle().should('include.text', 'ডাইরেক্ট স্টক আউট')
        itemRequisitionListPage.getProcessButton().click()
        cy.wait(3000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'অনুমোদন প্রক্রিয়া')
        itemRequisitionListPage.getRequisitionCommentField().should('have.attr', 'placeholder', 'মন্তব্য').type(this.inv.RequisitionComment).should('have.value', this.inv.RequisitionComment)
        cy.wait(1000)

        itemRequisitionListPage.getApprovalButton().should('include.text', 'অনুমোদন করুন').click()
        cy.wait(2000)

        itemRequisitionPage.getPopUpCardHeader().should('include.text', 'নিশ্চিত করুন')
        itemRequisitionListPage.getYesButton().should('include.text', 'হ্যাঁ').click()
        //cy.wait(2000)

        //itemRequisitionPage.getPopUpCardHeader().should('include.text', 'অনুরোধ নিশ্চিতকরণ')
        //itemRequisitionListPage.getSaveButton().should('include.text', 'সংরক্ষন করুন').click()
        cy.wait(6000)
    })
})