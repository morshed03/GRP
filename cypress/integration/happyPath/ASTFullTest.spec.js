/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'
import LeftNavMenu from '../../support/AST/pageObjects/LeftNavMenu'
import ReceiveGoods_StoreKeepingPage from '../../support/AST/pageObjects/ReceiveGoods_StoreKeepingPage'
import InspectionUnassigned_InspectionPage from '../../support/AST/pageObjects/InspectionUnassigned_InspectionPage'
import InspectionAssigned_InspectionPage from '../../support/AST/pageObjects/InspectionAssigned_InspectionPage'
import Inspected_PendingApprovalPage from '../../support/AST/pageObjects/Inspected_PendingApprovalPage'
import AssetTagging_StoreKeepingPage from '../../support/AST/pageObjects/AssetTagging_StoreKeepingPage'
import DirectIn_StoreKeepingPage from '../../support/AST/pageObjects/DirectIn_StoreKeepingPage'
import DirectOut_StoreKeepingPage from '../../support/AST/pageObjects/DirectOut_StoreKeepingPage'
import RequisitionPage from '../../support/AST/pageObjects/RequisitionPage'
import IssueList_StoreKeepingPage from '../../support/AST/pageObjects/IssueList_StoreKeepingPage'
import RequestReturnPage from '../../support/AST/pageObjects/RequestReturnPage'
import ReceiveTaggedItemsPage from '../../support/AST/pageObjects/ReceiveTaggedItemsPage'
import Items_MaintenancePage from '../../support/AST/pageObjects/Items_MaintenancePage'
import DisposalRequestPage from '../../support/AST/pageObjects/DisposalRequestPage'
import DisposalResultPage from '../../support/AST/pageObjects/DisposalResultPage'
import ReportsPage from '../../support/AST/pageObjects/ReportsPage'

//Import PRC data
beforeEach(function() 
{
    cy.fixture('PRCTestDataSQA').then(function(prc)
    {
        this.prc = prc
    })
}) 

describe('AST Module Regression Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('ASTTestDataSQA').then(function(ast)
      {
        this.ast = ast
      })
      /*
      cy.fixture('PRCTestDataSTG').then(function(prc)
      {
        this.prc = prc
      })
      */
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
    const receiveGoodsPage = new ReceiveGoods_StoreKeepingPage()
    const inspectionUnassignedPage = new InspectionUnassigned_InspectionPage()
    const inspectionAssignedPage = new InspectionAssigned_InspectionPage()
    const inspectedPage = new Inspected_PendingApprovalPage()
    const assetTaggingPage = new AssetTagging_StoreKeepingPage()
    const directInPage = new DirectIn_StoreKeepingPage()
    const directOutPage = new DirectOut_StoreKeepingPage()
    const requisitionPage = new RequisitionPage()
    const issueListPage = new IssueList_StoreKeepingPage()
    const requestReturnPage = new RequestReturnPage()
    const receiveTaggedItemsPage = new ReceiveTaggedItemsPage()
    const itemsMaintenancePage = new Items_MaintenancePage()
    const disposalRequestPage = new DisposalRequestPage()
    const disposalResultPage = new DisposalResultPage()
    const reportsPage = new ReportsPage()

    //Material Receive Start Here *************************************
    //Material Receive as Store Keeper
    it('Store Keeper: Material Receive. TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('স্টোর কিপিং').click()
        cy.wait(1000)
        leftNavMenu.getDropDownMenu().contains('অর্ডার সমূহ').click()
        cy.wait(1000)
        leftNavMenu.getReceiveGoodsSubMenu().contains('পণ্য গ্রহণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পারচেজ অর্ডারের তালিকা')
        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired প্রকিউরমেন্ট রেফারেন্স নং
        {
            const textReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textReferenceNo.includes(this.prc.DCPReferenceNo))                    
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)
        //receiveGoodsPage.getCardHeader().should('include.text', 'ম্যাটেরিয়াল রিসেপশন তৈরি করুন')

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'চালানের তথ্য প্রবেশ করুন')
        receiveGoodsPage.getChalanNoInputField().should('have.attr', 'placeholder', 'চালান নং').click().type(this.ast.chalanNo).should('have.value', this.ast.chalanNo)
        cy.wait(2000)
        receiveGoodsPage.getCalendarIcon().click()  //চালানের তারিখ
        cy.wait(1000)
        cy.calendar(this.ast.chalanYear, this.ast.chalanMonth, this.ast.chalanDay)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'গ্রহণ এবং ইন্সপেকশনের জন্য প্রেরণ করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()

        cy.wait(6000)
    })

    //Inspector Assign for Material Receive
    it('Store Admin: Inspector Assign for Material Receive. TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionUnassignedSubMenu().should('include.text', 'পরিদর্শক নির্ধারণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শক নির্ধারণ')
        cy.inspection(this.ast.chalanNo)  //চালান নং
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'ম্যাটেরিয়াল রিসেপশন')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'ম্যাটেরিয়াল রিসেপশন')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')
        receiveGoodsPage.getFourthCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')     //When Store is seconde index(SQA)
        
        inspectionUnassignedPage.getInspectorTypeField().should('have.attr', 'aria-label', 'পরিদর্শকের ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.InspectorType).click()
        cy.wait(2000)

        inspectionUnassignedPage.getOfficeUnitField().should('have.attr', 'aria-label', 'শাখা').click()
        cy.wait(1000)
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(2000)

        inspectionUnassignedPage.getInspectorField().should('have.attr', 'aria-label', 'পরিদর্শক').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.Inspector).click()
        cy.wait(2000)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রেরণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()

        cy.wait(6000)
    })

    //Inspector Approved the Material Receive
    it('Inspector: Inspect for Material Receive. TC',function() 
    {
        cy.login(this.ast.inspectorID, this.ast.inspectorPassword)
        /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.ast.inspectorOffice).click()
        cy.wait(3000)
        */
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionAssignedSubMenu().should('include.text', 'নির্ধারিত পরিদর্শন').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নির্ধারিত পরিদর্শন')
        cy.inspection(this.ast.chalanNo)  //চালান নং
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ইন্সপেকশনের ফলাফল সেট করুন')
       
        inspectionAssignedPage.getRemarksField().click().type(this.ast.InspectorRemarks).should('have.value', this.ast.InspectorRemarks)
        cy.wait(2000)
        /*
        const fileName = 'TestFile.pdf';
        inspectionAssignedPage.getQCReportButton().attachFile(fileName);      //File Upload
        cy.wait(4000)
        */
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'দাখিল করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        
        cy.wait(6000)  
    })

    //Store Admin Approved the Inspection for the Material Receive
    it('Store Admin: Inspection Approval for Material Receive. TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

      //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getInspectedSubMenu().should('include.text', 'পরিদর্শনকৃত').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শনকৃত')
        cy.inspection(this.ast.chalanNo)  //চালান নং
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')
        receiveGoodsPage.getSecondCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')   //When Store is seconde index (SQA)
      
        inspectedPage.getCardFooterFourthButton().should('include.text', 'অনুমোদন করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()

        cy.wait(6000)  
    })

    //ডিসিপি স্ট্যাটাস দেখুন TC will added here
    
    //Asset Tagging
    it('Store Keeper: Asset Tagging (Material Receive Asset). TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('স্টোর কিপিং').click()
        cy.wait(1000)
        leftNavMenu.getAssetTaggingSubMenu().should('include.text', 'সম্পদ ট্যাগিং').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click() //Select Store
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ট্যাগিংয়ের জন্য সম্পদের তালিকা')
        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired চালান নং
        {
            const textChalanNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textChalanNo.includes(this.ast.chalanNo))                    
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ট্যাগ')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'সম্পদ ট্যাগ')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'পণ্য সমূহ')

        assetTaggingPage.getSetTagsButton().click()
        cy.wait(3000)

        assetTaggingPage.getTagInputField().clear().type(this.ast.assetTagNo).should('have.value', this.ast.assetTagNo)
        cy.wait(1000)
        assetTaggingPage.getTagInputField2().clear().type(this.ast.assetTagNo2).should('have.value', this.ast.assetTagNo2)
        cy.wait(1000)
        assetTaggingPage.getTagInputField3().clear().type(this.ast.assetTagNo3).should('have.value', this.ast.assetTagNo3)
        cy.wait(1000)
        assetTaggingPage.getTagInputField4().clear().type(this.ast.assetTagNo4).should('have.value', this.ast.assetTagNo4)
        cy.wait(1000)
        assetTaggingPage.getTagInputField5().clear().type(this.ast.assetTagNo5).should('have.value', this.ast.assetTagNo5)
        cy.wait(1000)
        assetTaggingPage.getTagInputField6().clear().type(this.ast.assetTagNo6).should('have.value', this.ast.assetTagNo6)
        cy.wait(1000)
        assetTaggingPage.getTagInputField7().clear().type(this.ast.assetTagNo7).should('have.value', this.ast.assetTagNo7)
        cy.wait(1000)
        assetTaggingPage.getTagInputField8().clear().type(this.ast.assetTagNo8).should('have.value', this.ast.assetTagNo8)
        cy.wait(1000)
        assetTaggingPage.getTagInputField9().clear().type(this.ast.assetTagNo9).should('have.value', this.ast.assetTagNo9)
        cy.wait(1000)
        assetTaggingPage.getTagInputField10().clear().type(this.ast.assetTagNo10).should('have.value', this.ast.assetTagNo10)
        cy.wait(1000)

        assetTaggingPage.getLifeTimeInputField().type(this.ast.assetLifeTime).should('have.value', this.ast.assetLifeTime)
        cy.wait(1000)
        assetTaggingPage.getSecondLifeTimeInputField().click()
        cy.wait(2500)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'দাখিল করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()

        cy.wait(6000)
    })

    //অ্যাসেট ট্যাগিং Status TC will added here

    //Direct In Flow Start Here *******************************************
    //সরাসরি গ্রহণ as Store Keeper
    it('Store Keeper: Direct in request and send for approval. TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('স্টোর কিপিং').click()
        cy.wait(1000)
        leftNavMenu.getDirectInSubMenu().should('include.text', 'সরাসরি গ্রহণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click() //Select Store
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'বিদ্যমান সরাসরি গ্রহণ')

        //directInPage.getAddButtonFirstStore().click()     //For First Store
        directInPage.getAddButtonSecondStore().click()

        //receiveGoodsPage.getCardHeader().should('include.text', 'সরাসরি গ্রহণ তৈরি করুন')     //For First Store
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'সরাসরি গ্রহণ তৈরি করুন')

        directInPage.getReferenceNoField().should('have.attr', 'placeholder', 'রেফারেন্স নং').clear().type(this.ast.DIReferenceNo).should('have.value', this.ast.DIReferenceNo)
        cy.wait(2000)
        directInPage.getReceptionTypeField().should('have.attr', 'placeholder', 'গ্রহণের ধরণ').click().type(this.ast.DIReceptionType).should('have.value', this.ast.DIReceptionType)
        cy.wait(2000)
        directInPage.getJustificationField().should('have.attr', 'placeholder', 'ন্যায্যতা').click().type(this.ast.DIJustification).should('have.value', this.ast.DIJustification)
        cy.wait(2000)

        //directInPage.getAddItemPlusButtonForFirstStore().click()     //পণ্য যোগ করুন 
        directInPage.getAddItemPlusButtonForSecondStore().click()
        cy.wait(3000)
        
        directInPage.getItemCategoryField().should('have.attr', 'aria-label', 'ক্যাটাগরি').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemCategory).click()
        cy.wait(2000)

        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired পণ্যের নাম
        {
            const textItemName=$el.find('td.e-rowcell[aria-label]').text()
            if(textItemName.includes(this.ast.ItemGroup))                    
            {
                $el.find('td button mat-icon:eq(1)').first().click()
            }
        })
        cy.wait(3000)

        directInPage.getItemFeaturesHeader().should('include.text', 'বৈশিষ্ট্য')

        directInPage.getItemsDropDownField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemName).first().click()
        cy.wait(2000)
        directInPage.getAddFeaturesButton().should('include.text', 'বৈশিষ্ট্য যোগ করুন').click()
        cy.wait(2000)

        directInPage.getAddItemButton().click()
        cy.wait(2000)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রেরণ').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        
        cy.wait(6000)
    })

    //Inspector Assign for Direct In
    it('Store Admin: Inspector Assign for Direct In. TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionUnassignedSubMenu().should('include.text', 'পরিদর্শক নির্ধারণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শক নির্ধারণ')
        cy.inspection(this.ast.DIReferenceNo)  //রেফারেন্স নং
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'সরাসরি গ্রহণ')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'সরাসরি গ্রহণ')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')
        //receiveGoodsPage.getFourthCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')     //When Store is seconde index(SQA)
        
        inspectionUnassignedPage.getInspectorTypeField().should('have.attr', 'aria-label', 'পরিদর্শকের ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.InspectorType).click()
        cy.wait(2000)

        inspectionUnassignedPage.getOfficeUnitField().should('have.attr', 'aria-label', 'শাখা').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(2000)

        inspectionUnassignedPage.getInspectorField().should('have.attr', 'aria-label', 'পরিদর্শক').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.Inspector).click()
        cy.wait(2000)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রেরণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()

        cy.wait(6000)
    })

    //Inspector Approved the Direct In
    it('Inspector: Inspect for Direct In. TC',function() 
    {
        cy.login(this.ast.inspectorID, this.ast.inspectorPassword)
        /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.ast.inspectorOffice).click()
        cy.wait(3000)
        */
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionAssignedSubMenu().should('include.text', 'নির্ধারিত পরিদর্শন').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নির্ধারিত পরিদর্শন')
        cy.inspection(this.ast.DIReferenceNo)  //রেফারেন্স নং
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ইন্সপেকশনের ফলাফল সেট করুন')
       
        inspectionAssignedPage.getRemarksField().click().type(this.ast.InspectorRemarks).should('have.value', this.ast.InspectorRemarks)
        cy.wait(2000)
        /*
        const fileName = 'TestFile.pdf';
        inspectionAssignedPage.getQCReportButton().attachFile(fileName);      //File Upload
        cy.wait(4000)
        */
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'দাখিল করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        
        cy.wait(6000)  
    })

    //Store Admin Approved the Inspection for the Direct In
    it('Store Admin: Inspection Approval for Direct In. TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getInspectedSubMenu().should('include.text', 'পরিদর্শনকৃত').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শনকৃত')
        cy.inspection(this.ast.DIReferenceNo)  //রেফারেন্স নং
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')   //When Store is seconde index (SQA)
      
        inspectedPage.getCardFooterFourthButton().should('include.text', 'অনুমোদন করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Asset Tagging
    it('Store Keeper: Asset Tagging (Direct In Asset). TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('স্টোর কিপিং').click()
        cy.wait(1000)
        leftNavMenu.getAssetTaggingSubMenu().should('include.text', 'সম্পদ ট্যাগিং').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click() //Select Store
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ট্যাগিংয়ের জন্য সম্পদের তালিকা')
        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired রেফারেন্স নং
        {
            const textChalanNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textChalanNo.includes(this.ast.DIReferenceNo))                    
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ট্যাগ')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'সম্পদ ট্যাগ')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'পণ্য সমূহ')

        assetTaggingPage.getSetTagsButton().click()     //Set Tag Button
        cy.wait(3000)

        assetTaggingPage.getTagInputField().clear().type(this.ast.DIassetTagNo).should('have.value', this.ast.DIassetTagNo)
        cy.wait(2000)

        assetTaggingPage.getBookValueInputField().click().type(this.ast.DIassetBookValue).should('have.value', this.ast.DIassetBookValue)
        cy.wait(2000)
        assetTaggingPage.getLifeTimeInputFieldDI().type(this.ast.assetLifeTime).should('have.value', this.ast.assetLifeTime)
        cy.wait(1000)
        //assetTaggingPage.getSecondLifeTimeInputField().click()
        //cy.wait(2500)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'দাখিল করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Direct Out Flow Start Here*********************************************
    //Direct Out
    it('Store Keeper: Direct Out Request and Send for Approval . TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('স্টোর কিপিং').click()
        cy.wait(1000)
        leftNavMenu.getDirectOutSubMenu().should('include.text', 'সরাসরি প্রদান').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click() //Select Store
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'বিদ্যমান অনুরোধসমূহ')
        //directInPage.getAddButtonFirstStore().click()
        directInPage.getAddButtonSecondStore().click()      //Re-use from Direct In Page
        cy.wait(3000)

        directOutPage.getPostOfficeTypeField().should('have.attr', 'aria-label', 'ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.DOOfficePostType).click()
        cy.wait(2000)

        directOutPage.getOfficeUniteField().should('have.attr', 'aria-label', 'শাখা').click()
        cy.wait(1000)
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(2000)

        directOutPage.getPostField().should('have.attr', 'aria-label', 'পদবি').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.DOPostPerson).click()
        cy.wait(2000)

        //New Tag search pop-up code will added here
        directOutPage.getTagInputField().should('have.attr', 'placeholder', 'ট্যাগ দিন').click().type(this.ast.DIassetTagNo).should('have.value', this.ast.DIassetTagNo)
        cy.wait(2000)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'পণ্য যোগ করুন').click()   //Re-use from Receive Goods Page
        cy.wait(3000)
        receiveGoodsPage.getCardFooterFifthButton().should('include.text', 'অনুমোদনের জন্য প্রেরণ').click()   //Re-use from Receive Goods Page
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Store Admin Approved the Direct Out
    it('Store Admin: Approves Direct Out with Proper Comments. TC',function()
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

      //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getDirectOutSubMenuOfPendingApproval().should('include.text', 'সরাসরি প্রদান').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'তালিকা')
        cy.inspection(this.ast.DOPostPerson)  //Direct Out user Post
        cy.wait(3000)

        directOutPage.getDirectOutDetailsPageHeader().should('include.text', 'সরাসরি প্রদান বিস্তারিত')
        directOutPage.getDORemarksInputField().click().type(this.ast.ApprovalRemarks).should('have.value', this.ast.ApprovalRemarks)
        cy.wait(2000)

        inspectedPage.getCardFooterFifthButton().should('include.text', 'অনুমোদন করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)
        
        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Asset Requisition and Approval (self) Flow Start ***********************
    //Requisition (self) 
    it('Asset user: Add Items for (Self) Requisition. TC',function() 
    {
        cy.login(this.ast.officeAdminID, this.ast.officeAdminPassword)

      //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getRequisitionMenu().should('include.text', 'চাহিদা পত্র').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'চাহিদা পত্র')
        directInPage.getAddButtonFirstStore().click()   // Re-use from Direct In Page (চাহিদা পত্র plus button)
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'চাহিদাপত্র তৈরি করুন')
        requisitionPage.getReferenceNoField().should('have.attr', 'placeholder', 'রেফারেন্স নং').clear().type(this.ast.requisitionReferenceNo).should('have.value', this.ast.requisitionReferenceNo)
        cy.wait(2000)

        requisitionPage.getJustificationField().should('have.value', 'দাপ্তরিক কাজে ব্যবহারের জন্য')
        requisitionPage.getPurposeField().should('have.attr', 'aria-label', 'উদ্দেশ্য').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.requisitionPurpose).click()
        cy.wait(2000)

        requisitionPage.getItemsButton().should('include.text', 'পণ্য সমূহ').click()
        cy.wait(3000)

        requisitionPage.getItemsCategoryField().should('have.attr', 'aria-label', 'ক্যাটাগরি').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemCategory).click()
        cy.wait(2000)

        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired পণ্যের নাম
        {
            const textItemGroup=$el.find('td.e-rowcell[aria-label]').text()
            if(textItemGroup.includes(this.ast.ItemGroup))                    
            {
                $el.find('td button mat-icon:eq(1)').first().click()
            }
        })
        cy.wait(3000)

        directInPage.getItemFeaturesHeader().should('include.text', 'বৈশিষ্ট্য')

        directInPage.getItemsDropDownField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemName).first().click()
        cy.wait(2000)
        directInPage.getAddFeaturesButton().should('include.text', 'বৈশিষ্ট্য যোগ করুন').click()
        cy.wait(2000)

        requisitionPage.getQuantityInputBox().clear().type(this.prc.DCPItemQuantity).should('have.value', this.prc.DCPItemQuantity)
        cy.wait(1500)
        directInPage.getAddItemButton().first().click()     //Plus icon for add items
        cy.wait(2000)

        inspectedPage.getCardFooterFifthButton().should('include.text', 'প্রেরণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)
        
        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })
    //Self Requisition Approval 
    it('Store Admin: Requisition Approval of Asset User(Self) Requisition. TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

      //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getRequisitionSubMenuOfPendingApproval().should('include.text', 'চাহিদা পত্র').click()
        cy.wait(3500)

        receiveGoodsPage.getCardHeader().should('include.text', 'চাহিদা পত্র')
        cy.inspection(this.ast.DOPostPerson)    //Select গ্রাহক
        cy.wait(3000)
        
        receiveGoodsPage.getCardHeader().should('include.text', 'চাহিদা পত্র অনুমোদন')

        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired পণ্যের নাম
        {
            const textItemGroup=$el.find('td.e-rowcell[aria-label]').text()
            if(textItemGroup.includes(this.ast.ItemGroup))                    
            {
                $el.find('td button mat-icon:eq(0)').first().click()
            }
        })
        cy.wait(4000)

        requisitionPage.getUncheckDefaultItem().click({ force: true })
        requisitionPage.getUncheckDefaultItem2().click({ force: true })
        requisitionPage.getUncheckDefaultItem3().click({ force: true })
        requisitionPage.getUncheckDefaultItem4().click({ force: true })
        requisitionPage.getUncheckDefaultItem5().click({ force: true })
        requisitionPage.getUncheckDefaultItem6().click({ force: true })
        requisitionPage.getUncheckDefaultItem7().click({ force: true })
        requisitionPage.getUncheckDefaultItem8().click({ force: true })
        requisitionPage.getUncheckDefaultItem9().click({ force: true })
        requisitionPage.getUncheckDefaultItem10().click({ force: true })
        cy.wait(2000)

        cy.selectItems(this.ast.assetTagNo)
        cy.wait(1000)
        cy.selectItems(this.ast.assetTagNo2)
        cy.wait(1000)
        cy.selectItems(this.ast.assetTagNo3)
        cy.wait(1000)
        cy.selectItems(this.ast.assetTagNo4)
        cy.wait(1000)
        cy.selectItems(this.ast.assetTagNo5)
        cy.wait(1000)
        cy.selectItems(this.ast.assetTagNo6)
        cy.wait(1000)
        cy.selectItems(this.ast.assetTagNo7)
        cy.wait(1000)
        cy.selectItems(this.ast.assetTagNo8)
        cy.wait(1000)
        cy.selectItems(this.ast.assetTagNo9)
        cy.wait(1000)
        cy.selectItems(this.ast.assetTagNo10)
        cy.wait(2000)

        requisitionPage.getAddAssetButton().should('include.text', 'সম্পদ যোগ করুন').click()
        cy.wait(2000)
        
        requisitionPage.getRemarkField().click().type(this.ast.ApprovalRemarks).should('have.value', this.ast.ApprovalRemarks)
        cy.wait(2000)
        
        requisitionPage.getCardFooterSixthButton().should('include.text', 'অনুমোদন করুন').click() 
        cy.wait(2000)
        
        requisitionPage.getConfirmPopupHeader().should('include.text', 'নিশ্চিত করুন')
        requisitionPage.getCardFooterYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(2000)

        requisitionPage.getConfirmPopupHeader().should('include.text', 'অনুরোধ নিশ্চিতকরণ')
        requisitionPage.getRemarksFieldOnConfirmCard().click().type(this.ast.ApprovalRemarks)
        cy.wait(2000)

        requisitionPage.getCardFooterYesButton().should('include.text', 'সংরক্ষণ করুন').click()
        
        cy.wait(6000)
    })

    //Self Requisition Item Issue 
    it('Store Keeper: Issue Requisition Items for Asset User(Self) Requisition. TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('স্টোর কিপিং').click()
        cy.wait(1000)
        leftNavMenu.getIssueLisrSubMenu().should('include.text', 'ইস্যু').click()
        cy.wait(3500)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ইস্যু তালিকা')
        cy.inspection(this.ast.DOPostPerson)    //Select গ্রাহক
        cy.wait(3000)
        
        //receiveGoodsPage.getCardHeader().should('include.text', 'পণ্য সমূহ')
        
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'দাখিল করুন').click()
        cy.wait(2000) 
        
        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Asset Return (Request Return) Flow Start ********************************
    //Give return request with items
    it('Store Admin: Give Asset Return Request with Items (Request Return). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ফেরৎ গ্রহণ').click()
        cy.wait(1000)
        leftNavMenu.getRequestReturnSubMenu().should('include.text', 'ফেরৎ অনুরোধ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()     //Select Store
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ফেরতের জন্য অনুরোধের তালিকা')

        //directInPage.getAddButtonFirstStore().click()   //Plus button
        directInPage.getAddButtonSecondStore().click()
        cy.wait(2000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'পোস্ট / অফিস ইউনিট নির্বাচন করুন')

        directOutPage.getPostOfficeTypeField().should('have.attr', 'aria-label', 'ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.DOOfficePostType).click()
        cy.wait(2000)

        directOutPage.getOfficeUniteField().should('have.attr', 'aria-label', 'শাখা').click()
        cy.wait(1000)
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(3000)

        directOutPage.getPostField().should('have.attr', 'aria-label', 'পদবি').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.DOPostPerson).click()
        cy.wait(2000)
        
        cy.selectItems(this.ast.assetTagNo)
        cy.wait(2000)
        
        requestReturnPage.getCarrierField().should('have.attr', 'aria-label', 'বাহক').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.CarrierName).click()
        cy.wait(2000)

        receiveGoodsPage.getCalendarIcon().click()      //Approximate Date
        cy.calendar(this.ast.chalanYear, this.ast.chalanMonth, this.ast.chalanDay)

        requestReturnPage.getApproverField().should('have.attr', 'aria-label', 'অনুমোদনকারী').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ApproverName).click()
        cy.wait(2000)
        
        requestReturnPage.getCardFooterThirdButton().should('include.text', 'অনুমোদনের জন্য প্রেরণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Approver ( Assigned by store admin ) approved that return request
    it('Store Admin: Approved the Asset Return (Request Return). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getRequestApprovalSubMenu().should('include.text', 'ফেরত অনুরোধ').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'অনুরোধসমূহের তালিকা')

        cy.inspection(this.ast.DOPostPerson)   //ফেরতদাতা
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ফেরৎ')

        requestReturnPage.getApproveButton().should('include.text', 'অনুমোদন করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(1000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Receive that Asset return request, which was requested by the store admin
    it('Store Keeper: Receive that Asset Return (Request Return) which was Requested by the Store Admin. TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ফেরৎ গ্রহণ').click()
        cy.wait(1000)
        leftNavMenu.getRequestReceiveSubMenu().should('include.text', 'ফেরত গ্রহণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'অনুরোধসমূহের তালিকা')

        //cy.inspection(this.ast.DOPostPerson)   //ফেরতদাতা Here a issue now, so select the last one
        requestReturnPage.getEnterEyeButton().last().click()
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ফেরৎ')

        requestReturnPage.getReciveButton().should('include.text', 'গ্রহণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(1000)
        
        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Inspector Assign for Asset Request Return
    it('Store Admin: Inspector Assign for Asset Return (Request Return). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionUnassignedSubMenu().should('include.text', 'পরিদর্শক নির্ধারণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শক নির্ধারণ')
        cy.inspection(this.ast.ARPost)  // Post পদবি
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ফেরৎ')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'সম্পদ ফেরৎ')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')
        //receiveGoodsPage.getFourthCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')     //When Store is seconde index(SQA)
        
        inspectionUnassignedPage.getInspectorTypeField().should('have.attr', 'aria-label', 'পরিদর্শকের ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.InspectorType).click()
        cy.wait(2000)

        inspectionUnassignedPage.getOfficeUnitField().should('have.attr', 'aria-label', 'শাখা').click()
        cy.wait(1000)
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(2000)

        inspectionUnassignedPage.getInspectorField().should('have.attr', 'aria-label', 'পরিদর্শক').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.Inspector).click()
        cy.wait(2000)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রেরণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Inspector Approved Asset Request Return
    it('Inspector: Inspect for Asset Return (Request Return). TC',function() 
    {
        cy.login(this.ast.inspectorID, this.ast.inspectorPassword)
        /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.ast.inspectorOffice).click()
        cy.wait(3000)
        */
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionAssignedSubMenu().should('include.text', 'নির্ধারিত পরিদর্শন').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নির্ধারিত পরিদর্শন')
        cy.inspection(this.ast.ARPost)  //Post / পদবি
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ইন্সপেকশনের ফলাফল সেট করুন')
       
        inspectionAssignedPage.getRemarksFieldFirstStore().click().type(this.ast.InspectorRemarks).should('have.value', this.ast.InspectorRemarks)
        cy.wait(2000)
        
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'দাখিল করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Store Admin Approved the Inspection for the Asset Request Return
    it('Store Admin: Inspection Approval for Asset Return (Request Return). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getInspectedSubMenu().should('include.text', 'পরিদর্শনকৃত').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শনকৃত')
        cy.inspection(this.ast.ARPost)  // Post / পদবি
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')   //When Store is seconde index (SQA)
      
        inspectedPage.getCardFooterFourthButton().should('include.text', 'অনুমোদন করুন').click() //Reuse from ReceiveGoods Page 
    /*    cy.wait(1500)
        
        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click() 
        */
        cy.wait(6000)  
    })

    //Asset Return (Self Return) Flow Start *******************************************************************
    //Add tag and then add items, click on Send for Inspection 
    it('Store Keeper: Enter Assined Item Tag and Send for Inspection (Self Return). TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ফেরৎ গ্রহণ').click()
        cy.wait(1000)
        leftNavMenu.ReceiveTaggedItemsSubMenu().should('include.text', 'ট্যাগকৃত পণ্যসমূহ গ্রহণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()     //Select Store
        cy.wait(2000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'ট্যাগ')

        //receiveTaggedItemsPage.getTagInputFieldForFirstStore().should('have.attr', 'placeholder', 'ট্যাগ দিন').click().type(this.ast.assetTagNo2).should('have.value', this.ast.assetTagNo2)
        receiveTaggedItemsPage.getTagInputFieldForSecondStore().should('have.attr', 'placeholder', 'ট্যাগ দিন').click().type(this.ast.assetTagNo2).should('have.value', this.ast.assetTagNo2)    //For Second store
        cy.wait(2000)

        //Tag Search pop-up code will added here

        //receiveTaggedItemsPage.getCardFooterThirdButton().should('include.text', 'পণ্য যোগ করুন').click()
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'পণ্য যোগ করুন').click()      //for second store
        cy.wait(2000)
        
        //receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'পরিদর্শনের জন্য প্রেরণ করুন').click()    //Send for Inspection button
        receiveGoodsPage.getCardFooterFifthButton().should('include.text', 'পরিদর্শনের জন্য প্রেরণ করুন').click()    //for second store
        cy.wait(1500)
        
        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Inspector Assign for Asset Self Return
    it('Store Admin: Inspector Assign for Asset Return (Self Return). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionUnassignedSubMenu().should('include.text', 'পরিদর্শক নির্ধারণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শক নির্ধারণ')
        cy.inspection(this.ast.ARPost)  // Post পদবি
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ফেরৎ')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'সম্পদ ফেরৎ')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')
        //receiveGoodsPage.getFourthCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')     //When Store is seconde index(SQA)
        
        inspectionUnassignedPage.getInspectorTypeField().should('have.attr', 'aria-label', 'পরিদর্শকের ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.InspectorType).click()
        cy.wait(2000)

        inspectionUnassignedPage.getOfficeUnitField().should('have.attr', 'aria-label', 'শাখা').click()
        cy.wait(1000)
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(2000)

        inspectionUnassignedPage.getInspectorField().should('have.attr', 'aria-label', 'পরিদর্শক').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.Inspector).click()
        cy.wait(2000)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রেরণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Inspector Approved Asset Self Return
    it('Inspector: Inspect for Asset Return (Self Return). TC',function() 
    {
        cy.login(this.ast.inspectorID, this.ast.inspectorPassword)
        /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.ast.inspectorOffice).click()
        cy.wait(3000)
        */
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionAssignedSubMenu().should('include.text', 'নির্ধারিত পরিদর্শন').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নির্ধারিত পরিদর্শন')
        cy.inspection(this.ast.ARPost)  //Post / পদবি
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ইন্সপেকশনের ফলাফল সেট করুন')
       
        inspectionAssignedPage.getRemarksFieldFirstStore().click().type(this.ast.InspectorRemarks).should('have.value', this.ast.InspectorRemarks)
        cy.wait(2000)
        
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'দাখিল করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Store Admin Approved the Inspection for the Asset Self Return
    it('Store Admin: Inspection Approval for Asset Return (Self Return). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getInspectedSubMenu().should('include.text', 'পরিদর্শনকৃত').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শনকৃত')
        cy.inspection(this.ast.ARPost)  // Post / পদবি
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')   //When Store is seconde index (SQA)
      
        inspectedPage.getCardFooterFourthButton().should('include.text', 'অনুমোদন করুন').click() //Reuse from ReceiveGoods Page 
    /*    cy.wait(1500)
        
        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click() 
        */
        cy.wait(6000)  
    })

    //Asset Maintenance (Inspection) Flow Start *******************************************************************
    //Enter assined item tag number for return, click on Send for Inspection 
    it('Store Keeper: Enter Assined Item Tag and Send for Maintenance (Inspection). TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ফেরৎ গ্রহণ').click()
        cy.wait(1000)
        leftNavMenu.ReceiveTaggedItemsSubMenu().should('include.text', 'ট্যাগকৃত পণ্যসমূহ গ্রহণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()     //Select Store
        cy.wait(2000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'ট্যাগ')

        //receiveTaggedItemsPage.getTagInputFieldForFirstStore().should('have.attr', 'placeholder', 'ট্যাগ দিন').click().type(this.ast.assetTagNo2).should('have.value', this.ast.assetTagNo2)
        receiveTaggedItemsPage.getTagInputFieldForSecondStore().should('have.attr', 'placeholder', 'ট্যাগ দিন').click().type(this.ast.assetTagNo3).should('have.value', this.ast.assetTagNo3)    //For Second store
        cy.wait(2000)

        //Tag Search pop-up code will added here

        //receiveTaggedItemsPage.getCardFooterThirdButton().should('include.text', 'পণ্য যোগ করুন').click()
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'পণ্য যোগ করুন').click()      //for second store
        cy.wait(2000)
        
        //receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'পরিদর্শনের জন্য প্রেরণ করুন').click()    //Send for Inspection button
        receiveGoodsPage.getCardFooterFifthButton().should('include.text', 'পরিদর্শনের জন্য প্রেরণ করুন').click()    //for second store
        cy.wait(1500)
        
        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Inspector Assign for Asset Maintenance (Inspection)
    it('Store Admin: Inspector Assign for Asset Maintenance (Inspection). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionUnassignedSubMenu().should('include.text', 'পরিদর্শক নির্ধারণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শক নির্ধারণ')
        cy.inspection(this.ast.ARPost)  // Post পদবি
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ফেরৎ')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'সম্পদ ফেরৎ')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')
        //receiveGoodsPage.getFourthCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')     //When Store is seconde index(SQA)
        
        inspectionUnassignedPage.getInspectorTypeField().should('have.attr', 'aria-label', 'পরিদর্শকের ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.InspectorType).click()
        cy.wait(2000)

        inspectionUnassignedPage.getOfficeUnitField().should('have.attr', 'aria-label', 'শাখা').click()
        cy.wait(1000)
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(2000)

        inspectionUnassignedPage.getInspectorField().should('have.attr', 'aria-label', 'পরিদর্শক').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.Inspector).click()
        cy.wait(2000)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রেরণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Inspector rejection Asset Maintenance (Inspection)
    it('Inspector: Inspect Rejection for Asset Maintenance (Inspection). TC',function() 
    {
        cy.login(this.ast.inspectorID, this.ast.inspectorPassword)
        /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.ast.inspectorOffice).click()
        cy.wait(3000)
        */
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionAssignedSubMenu().should('include.text', 'নির্ধারিত পরিদর্শন').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নির্ধারিত পরিদর্শন')
        cy.inspection(this.ast.ARPost)  //Post / পদবি
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ইন্সপেকশনের ফলাফল সেট করুন')

        /*
        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired Tag for Uncheck
        {
            const textTagNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textTagNo.includes(this.prc.assetTagNo3))                    
            {
                $el.find('td ejs-checkbox span').click()
            }
        })  */
        inspectionAssignedPage.getAssetCheckBox().click({ force: true })
        cy.wait(2000)

        inspectionAssignedPage.getRemarksFieldFirstStore().click().type(this.ast.InspectorRemarks).should('have.value', this.ast.InspectorRemarks)
        cy.wait(2000)
        
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রত্যাখ্যান করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Store Admin Approved the Inspection for the Maintenance (Inspection)
    it('Store Admin: Reject at the inspected result for Asset Maintenance (Inspection). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

      //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getInspectedSubMenu().should('include.text', 'পরিদর্শনকৃত').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শনকৃত')
        cy.inspection(this.ast.ARPost)  // Post / পদবি
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')   //When Store is seconde index (SQA)
      
        inspectedPage.getCardFooterFourthButton().should('include.text', 'প্রত্যাখ্যান করুন').click() 
        cy.wait(3000)

        inspectedPage.getMaintenanceCost().type(this.ast.MaintenanceCost).should('have.value', this.ast.MaintenanceCost)
        cy.wait(2000)

        inspectedPage.getMaintenanceButton().should('include.text', 'রক্ষণাবেক্ষণ').click()
        cy.wait(6000)
    })

    //Maintence Committee Head Enter Remarks and Put next maintenance date for the Maintenance (Inspection)
    it('Maintence Committee Head: Enter Remarks and Put Next Maintenance Date for Asset Maintenance (Inspection). TC',function() 
    {
        cy.login(this.ast.committeeHeadID, this.ast.committeeHeadPassword)

      //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রক্ষণাবেক্ষণ').click()
        cy.wait(1000)
        leftNavMenu.getItemsSubMenuOfMaintenance().should('include.text', 'পণ্য সমূহ').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'তালিকা')
        cy.inspection(this.ast.assetTagNo3)  // Item Tag
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ফলাফল')

        itemsMaintenancePage.getMaintenanceRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.ast.MaintenanceRemarks).should('have.value', this.ast.MaintenanceRemarks)
        cy.wait(2000)

        itemsMaintenancePage.getCalendarIcon().click()
        cy.calendar(this.ast.chalanYear, this.ast.chalanMonth, this.ast.chalanDay)

        itemsMaintenancePage.getMaintenanceCostField().click().type(this.ast.MaintenanceCost)
        cy.wait(2000)

        inspectedPage.getCardFooterFifthButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000) 
    })

    //Asset Maintenance (Maintenance Request from existing store item) Flow Start ************************************
    //Create maintenance request from store's existing item 
    it('Store Keeper: Create Maintenance Request from Store Existing Item. TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রক্ষণাবেক্ষণ').click()
        cy.wait(1000)
        leftNavMenu.getRequestSubMenuOfMaintenance().should('include.text', 'অনুরোধ করুন').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()     //Select Store
        cy.wait(4000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'পণ্য সমূহ')

        cy.visibleItems(this.ast.assetTagNo)     //Select the Tag no
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click({force: true})
        
        cy.wait(6000)
    })
    //Committee Head Enter Remarks and Put next maintenance date for the (Maintenance Request from existing store item)
    it('Maintence Committee Head: Enter Remarks and Put Next Maintenance Date for Store Existing Item. TC',function() 
    {
        cy.login(this.ast.committeeHeadID, this.ast.committeeHeadPassword)

      //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রক্ষণাবেক্ষণ').click()
        cy.wait(1000)
        leftNavMenu.getItemsSubMenuOfMaintenance().should('include.text', 'পণ্য সমূহ').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'তালিকা')
        cy.inspection(this.ast.assetTagNo)  // Item Tag
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ফলাফল')

        itemsMaintenancePage.getMaintenanceRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.ast.MaintenanceRemarks).should('have.value', this.ast.MaintenanceRemarks)
        cy.wait(2000)

        itemsMaintenancePage.getCalendarIcon().click()
        cy.calendar(this.ast.chalanYear, this.ast.chalanMonth, this.ast.chalanDay)

        itemsMaintenancePage.getMaintenanceCostField().click().type(this.ast.MaintenanceCost)
        cy.wait(2000)

        inspectedPage.getCardFooterFifthButton().should('include.text', 'সংরক্ষণ করুন').click() 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000) 
    })

    //Asset Maintenance (From User Side) Flow Start ************************************************************
    //Create maintenance request from আমার অধিকৃত সম্পদসমূহ 
    it('AST User: Create Maintenance Request from My Assets. TC',function() 
    {
        cy.login(this.ast.officeAdminID, this.ast.officeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getMyAssetMenu().should('include.text', 'আমার অধিকৃত সম্পদসমূহ').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'আমার অধিকৃত সম্পদসমূহ')

        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired Asset Tag
        {
            const textReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textReferenceNo.includes(this.ast.assetTagNo4))                    
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Committee Head Enter Remarks and Put next maintenance date for the Maintenance Request from User Side
    it('Maintence Committee Head: Enter Remarks and Put Next Maintenance Date for the Maintenance Request from User Side. TC',function() 
    {
        cy.login(this.ast.committeeHeadID, this.ast.committeeHeadPassword)

      //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রক্ষণাবেক্ষণ').click()
        cy.wait(1000)
        leftNavMenu.getItemsSubMenuOfMaintenance().should('include.text', 'পণ্য সমূহ').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'তালিকা')
        cy.inspection(this.ast.assetTagNo4)  // Item Tag
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ফলাফল')

        itemsMaintenancePage.getMaintenanceRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.ast.MaintenanceRemarks).should('have.value', this.ast.MaintenanceRemarks)
        cy.wait(2000)

        itemsMaintenancePage.getCalendarIcon().click()
        cy.calendar(this.ast.chalanYear, this.ast.chalanMonth, this.ast.chalanDay)

        itemsMaintenancePage.getMaintenanceCostField().click().type(this.ast.MaintenanceCost)
        cy.wait(2000)

        inspectedPage.getCardFooterFifthButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000) 
    })


    //Disposal (From Asset Request Returned items) Flow Start ************************************************
    //Give return request with items
    it('Store Admin: Give Asset Request Return for Disposal (From Asset Request Returned items). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ফেরৎ গ্রহণ').click()
        cy.wait(1000)
        leftNavMenu.getRequestReturnSubMenu().should('include.text', 'ফেরৎ অনুরোধ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()     //Select Store
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ফেরতের জন্য অনুরোধের তালিকা')

        //directInPage.getAddButtonFirstStore().click()   //Plus button
        directInPage.getAddButtonSecondStore().click()
        cy.wait(2000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'পোস্ট / অফিস ইউনিট নির্বাচন করুন')

        directOutPage.getPostOfficeTypeField().should('have.attr', 'aria-label', 'ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.DOOfficePostType).click()
        cy.wait(2000)

        directOutPage.getOfficeUniteField().should('have.attr', 'aria-label', 'শাখা').click()
        cy.wait(1000)
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(3000)

        directOutPage.getPostField().should('have.attr', 'aria-label', 'পদবি').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.DOPostPerson).click()
        cy.wait(2000)

        cy.selectItems(this.ast.assetTagNo4)
        cy.wait(2000)
        cy.selectItems(this.ast.assetTagNo5)
        cy.wait(1500)
        cy.selectItems(this.ast.DIassetTagNo)
        cy.wait(2000)
        
        requestReturnPage.getCarrierField().should('have.attr', 'aria-label', 'বাহক').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.CarrierName).click()
        cy.wait(2000)

        receiveGoodsPage.getCalendarIcon().click()      //Approximate Date
        cy.calendar(this.ast.chalanYear, this.ast.chalanMonth, this.ast.chalanDay)

        requestReturnPage.getApproverField().should('have.attr', 'aria-label', 'অনুমোদনকারী').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ApproverName).click()
        cy.wait(2000)
        
        requestReturnPage.getCardFooterThirdButton().should('include.text', 'অনুমোদনের জন্য প্রেরণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        
        cy.wait(6000)  
    })

    //Approver (Assigned by store admin) approved that return request
    it('Store Admin: Approved the Asset Request Return for Disposal (From Asset Request Returned items). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getRequestApprovalSubMenu().should('include.text', 'ফেরত অনুরোধ').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'অনুরোধসমূহের তালিকা')

        cy.inspection(this.ast.DOPostPerson)   //ফেরতদাতা
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ফেরৎ')

        requestReturnPage.getApproveButton().should('include.text', 'অনুমোদন করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(1000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        
        cy.wait(6000)  
    })

    //Receive that Asset return request, which was requested by the store admin
    it('Store Keeper : Receive that Asset Request Return for Disposal (From Asset Request Returned items). TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ফেরৎ গ্রহণ').click()
        cy.wait(1000)
        leftNavMenu.getRequestReceiveSubMenu().should('include.text', 'ফেরত গ্রহণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'অনুরোধসমূহের তালিকা')

        //cy.inspection(this.ast.DOPostPerson)   //ফেরতদাতা dynamicaly 
        requestReturnPage.getEnterEyeButton().last().click()    //Last ফেরতদাতা
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ফেরৎ')

        requestReturnPage.getReciveButton().should('include.text', 'গ্রহণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(1000)
        
        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        
        cy.wait(6000)  
    })

    //Inspector Assign for Asset Request Return
    it('Store Admin: Inspector Assign for Disposal (From Asset Request Returned items). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionUnassignedSubMenu().should('include.text', 'পরিদর্শক নির্ধারণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শক নির্ধারণ')
        cy.inspection(this.ast.ARPost)  // Post পদবি
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ফেরৎ')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'সম্পদ ফেরৎ')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')
        //receiveGoodsPage.getFourthCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')     //When Store is seconde index(SQA)
        
        inspectionUnassignedPage.getInspectorTypeField().should('have.attr', 'aria-label', 'পরিদর্শকের ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.InspectorType).click()
        cy.wait(2000)

        inspectionUnassignedPage.getOfficeUnitField().should('have.attr', 'aria-label', 'শাখা').click()
        cy.wait(1000)
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(2000)

        inspectionUnassignedPage.getInspectorField().should('have.attr', 'aria-label', 'পরিদর্শক').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.Inspector).click()
        cy.wait(2000)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রেরণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Inspector rejection Asset Maintenance (Inspection)
    it('Inspector: Inspect Rejection for Disposal (From Asset Request Returned items). TC',function() 
    {
        cy.login(this.ast.inspectorID, this.ast.inspectorPassword)
        /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.ast.inspectorOffice).click()
        cy.wait(3000)
        */
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionAssignedSubMenu().should('include.text', 'নির্ধারিত পরিদর্শন').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নির্ধারিত পরিদর্শন')
        cy.inspection(this.ast.ARPost)  //Post / পদবি
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ইন্সপেকশনের ফলাফল সেট করুন')

        inspectionAssignedPage.getAssetCheckBox().click({ force: true })    //First Item uncheck
        cy.wait(1000)

        inspectionAssignedPage.getAssetSecondCheckBox().click({ force: true })    //Second Item uncheck
        cy.wait(1000)

        inspectionAssignedPage.getAssetThirdCheckBox().click({ force: true })    //Third Item uncheck
        cy.wait(2000)

        inspectionAssignedPage.getRemarksFieldFirstStore().click().type(this.ast.InspectorFailRemarks).should('have.value', this.ast.InspectorFailRemarks)
        cy.wait(2000)
        
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রত্যাখ্যান করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Store Admin Approved the Inspection for the Maintenance (Inspection)
    it('Store Admin: Reject at the inspected result for Disposal (From Asset Request Returned items). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getInspectedSubMenu().should('include.text', 'পরিদর্শনকৃত').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শনকৃত')
        cy.inspection(this.ast.ARPost)  // Post / পদবি
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')   //When Store is seconde index (SQA)
      
        inspectedPage.getCardFooterFourthButton().should('include.text', 'প্রত্যাখ্যান করুন').click() 
        cy.wait(3000)

        inspectedPage.getMaintenanceCost().type(this.ast.MaintenanceCost).should('have.value', this.ast.MaintenanceCost)
        cy.wait(2000)

        inspectedPage.getDisposalButton().should('include.text', 'নিষ্পত্তি').click()
        cy.wait(6000)  
    })

    //Disposal Request (From Asset Request Returned items)
    it('Store Keeper: Make Disposal Request for Asset Request Returned items. TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('নিষ্পত্তিকরণ').click()
        cy.wait(1000)
        leftNavMenu.getDisposalRequestSubMenu().should('include.text', 'নিষ্পত্তিকরণের জন্য অনুরোধ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণের জন্য অনুরোধ')

        disposalRequestPage.getJustificationField().should('have.attr', 'placeholder', 'ন্যায্যতা').click().type(this.ast.disposalJustificat).should('have.value', this.ast.disposalJustificat)
        cy.wait(2000)

        disposalRequestPage.getDisposalCommitteeNameField().should('have.attr', 'aria-label', 'কমিটির নাম').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.disposalCommitteeName).click()
        cy.wait(2000)

        disposalRequestPage.getUncheckAllItems().click({ multiple: true })    //Uncheck all items
        cy.wait(2000)

        //Selects Items
        cy.selectItems(this.ast.assetTagNo4)
        cy.wait(1000)
        cy.selectItems(this.ast.assetTagNo5)
        cy.wait(1000)
        cy.selectItems(this.ast.DIassetTagNo)
        cy.wait(1000)

        disposalRequestPage.getSendButton().should('include.text', 'প্রেরণ').click() 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Disposal Committee head (Any member of that committee can permit)
    it('Disposal Committee Member: Decision on Disposal with Disposal Type and Cost for Asset Request Returned items. TC',function() 
    {
        cy.login(this.ast.DisCommitteeMemberID, this.ast.DisCommitteeMemberPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getDecisionOnDisposalSubMenu().should('include.text', 'নিষ্পত্তিকরণ সংক্রান্ত সিদ্ধান্ত').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'অনুরোধকৃত নিষ্পত্তিকরণের তালিকা')
        cy.inspection(this.ast.disposalJustificat)  // ন্যায্যতা
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণ সংক্রান্ত সিদ্ধান্ত')
        
        disposalRequestPage.getDisposalTypeField1().click({ force: true })
        disposalRequestPage.getDropDownItem().contains(this.ast.disposalRequestType1).click()
        cy.wait(1000)
        disposalRequestPage.getDisposalCost1().clear().type(this.ast.disposalCost).should('have.value', this.ast.disposalCost)
        cy.wait(1000)
        disposalRequestPage.getDisposalRemark1().click().type(this.ast.disposalRemarks).should('have.value', this.ast.disposalRemarks)
        cy.wait(1000)

        disposalRequestPage.getDisposalTypeField2().click({ force: true })
        disposalRequestPage.getDropDownItem().contains(this.ast.disposalRequestType2).click()
        cy.wait(1000)
        disposalRequestPage.getDisposalCost2().clear().type(this.ast.disposalCost).should('have.value', this.ast.disposalCost)
        cy.wait(1000)
        disposalRequestPage.getDisposalRemark2().click().type(this.ast.disposalRemarks).should('have.value', this.ast.disposalRemarks)
        cy.wait(1000)

        disposalRequestPage.getDisposalTypeField3().click({ force: true })
        disposalRequestPage.getDropDownItem().contains(this.ast.disposalRequestType3).click()
        cy.wait(1000)
        disposalRequestPage.getDisposalCost3().clear().type(this.ast.disposalCost).should('have.value', this.ast.disposalCost)
        cy.wait(1000)
        disposalRequestPage.getDisposalRemark3().click().type(this.ast.disposalRemarks).should('have.value', this.ast.disposalRemarks)
        cy.wait(2000)

        disposalRequestPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000) 
    })

    //Approved Disposal Result (Any member of that committee can permit)
    it('Store Admin: Approved Disposal Result for Asset Request Returned items. TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('নিষ্পত্তিকরণ').click()
        cy.wait(1000)
        leftNavMenu.getDisposalResultSubMenu().should('include.text', 'নিষ্পত্তিকরণের ফলাফল').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণের জন্য সম্পদ তালিকা')
        cy.inspection(this.ast.disposalJustificat)  // ন্যায্যতা
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণের ফলাফল')

        disposalResultPage.getDisposalTypeTab().contains('Auction').click()
        cy.wait(2000)
        disposalResultPage.getAuctionAddButton().click()
        cy.wait(2000)

        disposalResultPage.getDisposalTypeTab().contains('Disposed').click()
        cy.wait(2000)
        disposalResultPage.getDisposedAddButton().click()
        cy.wait(2000)

        disposalResultPage.getDisposalTypeTab().contains('Other').click()
        cy.wait(2000)
        disposalResultPage.getOtherAddButton().click()
        cy.wait(2000)

        disposalResultPage.getAcquiredValueField1().should('have.attr', 'type', 'number').click().type(this.ast.disposalCost).should('have.value', this.ast.disposalCost)
        cy.wait(2000)
        disposalResultPage.getDecidedRemark1().click().type(this.ast.disposalDecisionRemarks).should('have.value', this.ast.disposalDecisionRemarks)
        cy.wait(2000)

        disposalResultPage.getDecidedRemark2().click().type(this.ast.disposalDecisionRemarks).should('have.value', this.ast.disposalDecisionRemarks)
        cy.wait(2000)

        disposalResultPage.getAcquiredValueField3().should('have.attr', 'type', 'number').click().type(this.ast.disposalCost).should('have.value', this.ast.disposalCost)
        cy.wait(2000)
        disposalResultPage.getDecidedRemark3().click().type(this.ast.disposalDecisionRemarks).should('have.value', this.ast.disposalDecisionRemarks)
        cy.wait(2000)

        disposalResultPage.getSendButton().should('include.text', 'প্রেরণ').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()

        cy.wait(6000) 
    })

    //Verify the approved Disposal Result on report (নিষ্পত্তিযোগ্য সম্পদ)
    it('Store Admin: Verify the Disposed Asset on the Report for Asset Request Returned items. TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রিপোর্টস').click()
        cy.wait(1000)
        leftNavMenu.getDisposedAssetSubMenu().should('include.text', 'নিস্পত্তিকৃত সম্পদ').click()
        cy.wait(3000)

        reportsPage.getPageHeaderText().should('include.text', 'নিস্পত্তিকৃত সম্পদ')

        reportsPage.getItemCategoryField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemCategory).click()
        cy.wait(2000)

        reportsPage.getItemGroupField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemGroup).click()
        cy.wait(2000)

        reportsPage.getStoreField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.storeName).click()
        cy.wait(2000)

        reportsPage.getSearchButton().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(4000)

        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired Tag No
        {
            const textAssetTagNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textAssetTagNo.includes(this.ast.DIassetTagNo))                    
            {
                const tagText = $el.find('td.e-rowcell[aria-label]').text()
                expect(tagText.includes(this.ast.DIassetTagNo)).to.be.true
            }
        })
        cy.wait(3000) 
    })

    //Disposal (From Asset Self Returned items) Flow Start ***************************************************
    //Add tag and then add items, click on Send for Inspection 
    it('Store Keeper: Enter Assined Item Tag and Send for Disposal (From Asset Self Returned items). TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ফেরৎ গ্রহণ').click()
        cy.wait(1000)
        leftNavMenu.ReceiveTaggedItemsSubMenu().should('include.text', 'ট্যাগকৃত পণ্যসমূহ গ্রহণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()     //Select Store
        cy.wait(2000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'ট্যাগ')

        //receiveTaggedItemsPage.getTagInputFieldForFirstStore().should('have.attr', 'placeholder', 'ট্যাগ দিন').click().type(this.ast.assetTagNo2).should('have.value', this.ast.assetTagNo2)
        receiveTaggedItemsPage.getTagInputFieldForSecondStore().should('have.attr', 'placeholder', 'ট্যাগ দিন').click().type(this.ast.assetTagNo6).should('have.value', this.ast.assetTagNo6)    //For Second store
        cy.wait(2000)

        //Tag Search pop-up code will added here

        //receiveTaggedItemsPage.getCardFooterThirdButton().should('include.text', 'পণ্য যোগ করুন').click()
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'পণ্য যোগ করুন').click()      //for second store
        cy.wait(2000)
        
        //receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'পরিদর্শনের জন্য প্রেরণ করুন').click()    //Send for Inspection button
        receiveGoodsPage.getCardFooterFifthButton().should('include.text', 'পরিদর্শনের জন্য প্রেরণ করুন').click()    //for second store
        cy.wait(1500)
        
        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Inspector Assign for Asset Self Return
    it('Store Admin: Inspector Assign for Disposal (From Asset Self Returned items). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionUnassignedSubMenu().should('include.text', 'পরিদর্শক নির্ধারণ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শক নির্ধারণ')
        cy.inspection(this.ast.ARPost)  // Post পদবি
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'সম্পদ ফেরৎ')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'সম্পদ ফেরৎ')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')
        //receiveGoodsPage.getFourthCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')     //When Store is seconde index(SQA)
        
        inspectionUnassignedPage.getInspectorTypeField().should('have.attr', 'aria-label', 'পরিদর্শকের ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.InspectorType).click()
        cy.wait(2000)

        inspectionUnassignedPage.getOfficeUnitField().should('have.attr', 'aria-label', 'শাখা').click()
        cy.wait(1000)
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(2000)

        inspectionUnassignedPage.getInspectorField().should('have.attr', 'aria-label', 'পরিদর্শক').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.Inspector).click()
        cy.wait(2000)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রেরণ').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Inspector rejection Asset Maintenance (Inspection)
    it('Inspector: Inspect Rejection for Disposal (From Asset Self Returned items). TC',function() 
    {
        cy.login(this.ast.inspectorID, this.ast.inspectorPassword)
        /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.ast.inspectorOffice).click()
        cy.wait(3000)
        */
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ইন্সপেকশন').click()
        cy.wait(1000)
        leftNavMenu.getInspectionAssignedSubMenu().should('include.text', 'নির্ধারিত পরিদর্শন').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নির্ধারিত পরিদর্শন')
        cy.inspection(this.ast.ARPost)  //Post / পদবি
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ইন্সপেকশনের ফলাফল সেট করুন')

        inspectionAssignedPage.getAssetCheckBox().click({ force: true })
        cy.wait(2000)

        inspectionAssignedPage.getRemarksFieldFirstStore().click().type(this.ast.InspectorRemarks).should('have.value', this.ast.InspectorRemarks)
        cy.wait(2000)
        
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'প্রত্যাখ্যান করুন').click() //Reuse from ReceiveGoods Page 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Store Admin Approved the Inspection for the Maintenance (Inspection)
    it('Store Admin: Reject at the inspected result for Disposal (From Asset Self Returned items). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getInspectedSubMenu().should('include.text', 'পরিদর্শনকৃত').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'পরিদর্শনকৃত')
        cy.inspection(this.ast.ARPost)  // Post / পদবি
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')   //When Store is seconde index (SQA)
      
        inspectedPage.getCardFooterFourthButton().should('include.text', 'প্রত্যাখ্যান করুন').click() 
        cy.wait(3000)

        inspectedPage.getMaintenanceCost().type(this.ast.MaintenanceCost).should('have.value', this.ast.MaintenanceCost)
        cy.wait(2000)

        inspectedPage.getDisposalButton().should('include.text', 'নিষ্পত্তি').click()
        cy.wait(6000)
    })

    //Disposal Request (From Asset Self Returned items)
    it('Store Keeper: Make Disposal Request (From Asset Self Returned items). TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('নিষ্পত্তিকরণ').click()
        cy.wait(1000)
        leftNavMenu.getDisposalRequestSubMenu().should('include.text', 'নিষ্পত্তিকরণের জন্য অনুরোধ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণের জন্য অনুরোধ')

        disposalRequestPage.getJustificationField().should('have.attr', 'placeholder', 'ন্যায্যতা').click().type(this.ast.disposalJustificat).should('have.value', this.ast.disposalJustificat)
        cy.wait(2000)

        disposalRequestPage.getDisposalCommitteeNameField().should('have.attr', 'aria-label', 'কমিটির নাম').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.disposalCommitteeName).click()
        cy.wait(2000)

        disposalRequestPage.getUncheckAllItems().click({ multiple: true })    //Uncheck all items
        cy.wait(2000)

        //Selects Items
        cy.selectItems(this.ast.assetTagNo6)
        cy.wait(2000)

        disposalRequestPage.getSendButton().should('include.text', 'প্রেরণ').click() 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Disposal Committee head (Any member of that committee can permit)
    it('Disposal Committee Member: Decision on Disposal with Disposal Type and Cost for (From Asset Self Returned items). TC',function() 
    {
        cy.login(this.ast.DisCommitteeMemberID, this.ast.DisCommitteeMemberPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getDecisionOnDisposalSubMenu().should('include.text', 'নিষ্পত্তিকরণ সংক্রান্ত সিদ্ধান্ত').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'অনুরোধকৃত নিষ্পত্তিকরণের তালিকা')
        cy.inspection(this.ast.disposalJustificat)  // ন্যায্যতা
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণ সংক্রান্ত সিদ্ধান্ত')
        
        disposalRequestPage.getDisposalTypeField1().click({ force: true })
        disposalRequestPage.getDropDownItem().contains(this.ast.disposalRequestType2).click()
        cy.wait(1000)
        disposalRequestPage.getDisposalCost1().clear().type(this.ast.disposalCost).should('have.value', this.ast.disposalCost)
        cy.wait(1000)
        disposalRequestPage.getDisposalRemark1().click().type(this.ast.disposalRemarks).should('have.value', this.ast.disposalRemarks)
        cy.wait(1000)

        disposalRequestPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000) 
    })

    //Approved Disposal Result (Any member of that committee can permit)
    it('Store Admin: Approved Disposal Result (From Asset Self Returned items). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('নিষ্পত্তিকরণ').click()
        cy.wait(1000)
        leftNavMenu.getDisposalResultSubMenu().should('include.text', 'নিষ্পত্তিকরণের ফলাফল').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণের জন্য সম্পদ তালিকা')
        cy.inspection(this.ast.disposalJustificat)  // ন্যায্যতা
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণের ফলাফল')
        
        disposalResultPage.getDisposalTypeTab().contains('Disposed').click()
        cy.wait(2000)
        disposalResultPage.getDisposedAddButton().click()
        cy.wait(2000)
      
        disposalResultPage.getDecidedRemark1().click().type(this.ast.disposalDecisionRemarks).should('have.value', this.ast.disposalDecisionRemarks)
        cy.wait(2000)
        
        disposalResultPage.getSixthSendButton().should('include.text', 'প্রেরণ').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000) 
    })
    //Verify the approved Disposal Result on report (ডিসপোজড অ্যাসেট)
    it('Store Admin: Verify the Disposed Asset on the Report for (From Asset Self Returned items). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রিপোর্টস').click()
        cy.wait(1000)
        leftNavMenu.getDisposedAssetSubMenu().should('include.text', 'নিস্পত্তিকৃত সম্পদ').click()
        cy.wait(3000)

        reportsPage.getPageHeaderText().should('include.text', 'নিস্পত্তিকৃত সম্পদ')

        reportsPage.getItemCategoryField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemCategory).click()
        cy.wait(2000)

        reportsPage.getItemGroupField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemGroup).click()
        cy.wait(2000)

        reportsPage.getStoreField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.storeName).click()
        cy.wait(2000)

        reportsPage.getSearchButton().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(4000)

        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired Tag No
        {
            const textAssetTagNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textAssetTagNo.includes(this.ast.assetTagNo6))                    
            {
                const tagText = $el.find('td.e-rowcell[aria-label]').text()
                expect(tagText.includes(this.ast.assetTagNo6)).to.be.true
            }
        })
        cy.wait(3000) 
    })

    //Disposal (From আমার অধিকৃত সম্পদসমূহ) Flow Start ***************************
    //Create maintenance request from আমার অধিকৃত সম্পদসমূহ 
    it('AST User: Create Maintenance Request from My Assets for Disposal. TC',function() 
    {
        cy.login(this.ast.officeAdminID, this.ast.officeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getMyAssetMenu().should('include.text', 'আমার অধিকৃত সম্পদসমূহ').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'আমার অধিকৃত সম্পদসমূহ')

        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired Asset Tag
        {
            const textReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textReferenceNo.includes(this.ast.assetTagNo7))                    
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)  
    })

    //Disposal Committee Head Enter Remarks and Put it for Disposal
    it('Maintence Disposal Committee Head: Enter Remarks and Put it for Disposal from User Side. TC',function() 
    {
        cy.login(this.ast.committeeHeadID, this.ast.committeeHeadPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রক্ষণাবেক্ষণ').click()
        cy.wait(1000)
        leftNavMenu.getItemsSubMenuOfMaintenance().should('include.text', 'পণ্য সমূহ').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'তালিকা')
        cy.inspection(this.ast.assetTagNo7)  // Item Tag
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ফলাফল')

        itemsMaintenancePage.getMaintenanceRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.ast.disposalRemarks).should('have.value', this.ast.disposalRemarks)
        cy.wait(2000)

        inspectedPage.getCardFooterFourthButton().should('include.text', 'Decommission').click()
        cy.wait(2000)

        itemsMaintenancePage.getDisposalModalHeader().should('include.text', 'নিষ্পত্তি করার জন্য খরচের ধারণা দিন')
        itemsMaintenancePage.getMaintenanceCostFieldOnModal().should('have.attr', 'placeholder', 'রক্ষণাবেক্ষণ খরচ').click().type(this.ast.MaintenanceCost).should('have.value', this.ast.MaintenanceCost)
        cy.wait(2000)

        itemsMaintenancePage.getDisposalModalSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000) 
    })

    //Disposal Request (From My Asset items)
    it('Store Keeper: Make Disposal Request (From My Asset items). TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('নিষ্পত্তিকরণ').click()
        cy.wait(1000)
        leftNavMenu.getDisposalRequestSubMenu().should('include.text', 'নিষ্পত্তিকরণের জন্য অনুরোধ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণের জন্য অনুরোধ')

        disposalRequestPage.getJustificationField().should('have.attr', 'placeholder', 'ন্যায্যতা').click().type(this.ast.disposalJustificat).should('have.value', this.ast.disposalJustificat)
        cy.wait(2000)

        disposalRequestPage.getDisposalCommitteeNameField().should('have.attr', 'aria-label', 'কমিটির নাম').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.disposalCommitteeName).click()
        cy.wait(2000)

        disposalRequestPage.getUncheckAllItems().click({ multiple: true })    //Uncheck all items
        cy.wait(2000)

        //Selects Items
        cy.selectItems(this.ast.assetTagNo7)
        cy.wait(1000)

        disposalRequestPage.getSendButton().should('include.text', 'প্রেরণ').click() 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Disposal Committee head (Any member of that committee can permit)
    it('Disposal Committee Member: Decision on Disposal with Disposal Type and Cost for (From My Asset items). TC',function() 
    {
        cy.login(this.ast.DisCommitteeMemberID, this.ast.DisCommitteeMemberPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getDecisionOnDisposalSubMenu().should('include.text', 'নিষ্পত্তিকরণ সংক্রান্ত সিদ্ধান্ত').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'অনুরোধকৃত নিষ্পত্তিকরণের তালিকা')
        cy.inspection(this.ast.disposalJustificat)  // ন্যায্যতা
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণ সংক্রান্ত সিদ্ধান্ত')
        
        disposalRequestPage.getDisposalTypeField1().click({ force: true })
        disposalRequestPage.getDropDownItem().contains(this.ast.disposalRequestType2).click()
        cy.wait(1000)
        disposalRequestPage.getDisposalCost1().clear().type(this.ast.disposalCost).should('have.value', this.ast.disposalCost)
        cy.wait(1000)
        disposalRequestPage.getDisposalRemark1().click().type(this.ast.disposalRemarks).should('have.value', this.ast.disposalRemarks)
        cy.wait(1000)

        disposalRequestPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        
        cy.wait(6000) 
    })

    //Approved Disposal Result 
    it('Store Admin: Approved Disposal Result (From My Asset items). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('নিষ্পত্তিকরণ').click()
        cy.wait(1000)
        leftNavMenu.getDisposalResultSubMenu().should('include.text', 'নিষ্পত্তিকরণের ফলাফল').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণের জন্য সম্পদ তালিকা')
        cy.inspection(this.ast.disposalJustificat)  // ন্যায্যতা
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'ডিসপোজালের ফলাফল')
        
        disposalResultPage.getDisposalTypeTab().contains('Disposed').click()
        cy.wait(2000)
        disposalResultPage.getDisposedAddButton().click()
        cy.wait(2000)
      
        disposalResultPage.getDecidedRemark1().click().type(this.ast.disposalDecisionRemarks).should('have.value', this.ast.disposalDecisionRemarks)
        cy.wait(2000)
        
        disposalResultPage.getSixthSendButton().should('include.text', 'প্রেরণ').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000) 
    })
    //Verify the approved Disposal Result on report (ডিসপোজড অ্যাসেট)
    it('Store Admin: Verify the Disposed Asset on the Report (From My Asset items). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রিপোর্টস').click()
        cy.wait(1000)
        leftNavMenu.getDisposedAssetSubMenu().should('include.text', 'নিস্পত্তিকৃত সম্পদ').click()
        cy.wait(3000)

        reportsPage.getPageHeaderText().should('include.text', 'নিস্পত্তিকৃত সম্পদ')

        reportsPage.getItemCategoryField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemCategory).click()
        cy.wait(2000)

        reportsPage.getItemGroupField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemGroup).click()
        cy.wait(2000)

        reportsPage.getStoreField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.storeName).click()
        cy.wait(2000)

        reportsPage.getSearchButton().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(4000)

        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired Tag No
        {
            const textAssetTagNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textAssetTagNo.includes(this.ast.assetTagNo7))                    
            {
                const tagText = $el.find('td.e-rowcell[aria-label]').text()
                expect(tagText.includes(this.ast.assetTagNo7)).to.be.true
            }
        })
        cy.wait(3000) 
    })

    //Disposal (For Existing store items) Flow Start *****************************************************
    //Create maintenance request from store's existing item for Disposal
    it('Store Keeper: Create Maintenance Request from Store Existing Item for Disposal. TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রক্ষণাবেক্ষণ').click()
        cy.wait(1000)
        leftNavMenu.getRequestSubMenuOfMaintenance().should('include.text', 'অনুরোধ করুন').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()     //Select Store
        cy.wait(4000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'পণ্য সমূহ')

        cy.visibleItems(this.ast.assetTagNo8)     //Select the Tag no
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click({force: true})
        
        cy.wait(6000)
    })
    
    //Committee Head Enter Remarks and Put it for Disposal
    it('Maintence Committee Head: Enter Remarks and Put it for Disposal from Stores Existing Item. TC',function() 
    {
        cy.login(this.ast.committeeHeadID, this.ast.committeeHeadPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রক্ষণাবেক্ষণ').click()
        cy.wait(1000)
        leftNavMenu.getItemsSubMenuOfMaintenance().should('include.text', 'পণ্য সমূহ').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'তালিকা')
        cy.inspection(this.ast.assetTagNo8)  // Item Tag
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ফলাফল')

        itemsMaintenancePage.getMaintenanceRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.ast.disposalRemarks).should('have.value', this.ast.disposalRemarks)
        cy.wait(2000)

        inspectedPage.getCardFooterFourthButton().should('include.text', 'Decommission').click()
        cy.wait(2000)

        itemsMaintenancePage.getDisposalModalHeader().should('include.text', 'নিষ্পত্তি করার জন্য খরচের ধারণা দিন')
        itemsMaintenancePage.getMaintenanceCostFieldOnModal().should('have.attr', 'placeholder', 'রক্ষণাবেক্ষণ খরচ').click().type(this.ast.MaintenanceCost).should('have.value', this.ast.MaintenanceCost)
        cy.wait(2000)

        itemsMaintenancePage.getDisposalModalSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Disposal Request (From stores existing item)
    it('Store Keeper: Make Disposal Request (From Stores Existing Item). TC',function() 
    {
        cy.login(this.ast.storeKeeperID, this.ast.storeKeeperPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('নিষ্পত্তিকরণ').click()
        cy.wait(1000)
        leftNavMenu.getDisposalRequestSubMenu().should('include.text', 'নিষ্পত্তিকরণের জন্য অনুরোধ').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণের জন্য অনুরোধ')

        disposalRequestPage.getJustificationField().should('have.attr', 'placeholder', 'ন্যায্যতা').click().type(this.ast.disposalJustificat).should('have.value', this.ast.disposalJustificat)
        cy.wait(2000)

        disposalRequestPage.getDisposalCommitteeNameField().should('have.attr', 'aria-label', 'কমিটির নাম').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.disposalCommitteeName).click()
        cy.wait(2000)

        disposalRequestPage.getUncheckAllItems().click({ multiple: true })    //Uncheck all items
        cy.wait(2000)

        //Selects Items
        cy.selectItems(this.ast.assetTagNo8)
        cy.wait(1000)

        disposalRequestPage.getSendButton().should('include.text', 'প্রেরণ').click() 
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click() 
        cy.wait(6000)  
    })

    //Disposal Committee head (Any member of that committee can permit)
    it('Disposal Committee Member: Decision on Disposal with Disposal Type and Cost for (From Stores Existing Item). TC',function() 
    {
        cy.login(this.ast.DisCommitteeMemberID, this.ast.DisCommitteeMemberPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click()
        cy.wait(1000)
        leftNavMenu.getDecisionOnDisposalSubMenu().should('include.text', 'নিষ্পত্তিকরণ সংক্রান্ত সিদ্ধান্ত').click()
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'অনুরোধকৃত নিষ্পত্তিকরণের তালিকা')
        cy.inspection(this.ast.disposalJustificat)  // ন্যায্যতা
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণ সংক্রান্ত সিদ্ধান্ত')
        
        disposalRequestPage.getDisposalTypeField1().click({ force: true })
        disposalRequestPage.getDropDownItem().contains(this.ast.disposalRequestType2).click()
        cy.wait(1000)
        disposalRequestPage.getDisposalCost1().clear().type(this.ast.disposalCost).should('have.value', this.ast.disposalCost)
        cy.wait(1000)
        disposalRequestPage.getDisposalRemark1().click().type(this.ast.disposalRemarks).should('have.value', this.ast.disposalRemarks)
        cy.wait(1000)

        disposalRequestPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        
        cy.wait(6000) 
    })

    //Approved Disposal Result 
    it('Store Admin: Approved Disposal Result (From Stores Existing Item). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('নিষ্পত্তিকরণ').click()
        cy.wait(1000)
        leftNavMenu.getDisposalResultSubMenu().should('include.text', 'নিষ্পত্তিকরণের ফলাফল').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        cy.wait(2000)

        receiveGoodsPage.getCardHeader().should('include.text', 'নিষ্পত্তিকরণের জন্য সম্পদ তালিকা')
        cy.inspection(this.ast.disposalJustificat)  // ন্যায্যতা
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'ডিসপোজালের ফলাফল')
        
        disposalResultPage.getDisposalTypeTab().contains('Disposed').click()
        cy.wait(2000)
        disposalResultPage.getDisposedAddButton().click()
        cy.wait(2000)
      
        disposalResultPage.getDecidedRemark1().click().type(this.ast.disposalDecisionRemarks).should('have.value', this.ast.disposalDecisionRemarks)
        cy.wait(2000)
        
        disposalResultPage.getSixthSendButton().should('include.text', 'প্রেরণ').click()
        cy.wait(2000)

        receiveGoodsPage.getConfirmPopUpHeader().should('include.text', 'নিশ্চিত করুন')
        receiveGoodsPage.getConfirmPopUpYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000) 
    })
    //Verify the approved Disposal Result on report (ডিসপোজড অ্যাসেট)
    it.only('Store Admin: Verify the Disposed Asset on the Report (From Stores Existing Item). TC',function() 
    {
        cy.login(this.ast.storeAdminID, this.ast.storeAdminPassword)

        //Select office code here if the user have multiple office 
        
        dashboardPage.getASTAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('রিপোর্টস').click()
        cy.wait(1000)
        leftNavMenu.getDisposedAssetSubMenu().should('include.text', 'নিস্পত্তিকৃত সম্পদ').click()
        cy.wait(3000)

        reportsPage.getPageHeaderText().should('include.text', 'নিস্পত্তিকৃত সম্পদ')

        reportsPage.getItemCategoryField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemCategory).click()
        cy.wait(2000)

        reportsPage.getItemGroupField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.ItemGroup).click()
        cy.wait(2000)

        reportsPage.getStoreField().click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.storeName).click()
        cy.wait(2000)

        reportsPage.getSearchButton().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(4000)

        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired Tag No
        {
            const textAssetTagNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textAssetTagNo.includes(this.ast.assetTagNo8))                    
            {
                const tagText = $el.find('td.e-rowcell[aria-label]').text()
                expect(tagText.includes(this.ast.assetTagNo8)).to.be.true
            }
        })
        cy.wait(3000) 
    })
})