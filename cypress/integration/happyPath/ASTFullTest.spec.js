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

//Import PRC data
beforeEach(function() 
{
    cy.fixture('PRCTestDataSTG').then(function(prc)
    {
        this.prc = prc
    })
}) 

describe('AST Module Regression Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('ASTTestDataSTG').then(function(ast)
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
        leftNavMenu.getReceiveGoodsSubMenu().should('include.text', 'পণ্য গ্রহণ').click()
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
        receiveGoodsPage.getCardHeader().should('include.text', 'ম্যাটেরিয়াল রিসেপশন তৈরি করুন')

        receiveGoodsPage.getThirdCardHeader().should('include.text', 'চালানের তথ্য প্রবেশ করুন')
        receiveGoodsPage.getChalanNoInputField().should('have.attr', 'placeholder', 'চালান নং').click().type(this.ast.chalanNo).should('have.value', this.ast.chalanNo)
        cy.wait(2000)
        receiveGoodsPage.getCalendarIcon().click()  //চালানের তারিখ
        cy.wait(1000)
        cy.calendar(this.ast.chalanYear, this.ast.chalanMonth, this.ast.chalanDay)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'গ্রহণ এবং ইন্সপেকশনের জন্য প্রেরণ করুন').click()
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
        receiveGoodsPage.getSecondCardHeader().should('include.text', 'ম্যাটেরিয়াল রিসেপশন')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')
        receiveGoodsPage.getFourthCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')     //When Store is seconde index(SQA)
        
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

        //No Store Showing here all are combine, So skip the Store selection code
        //receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click()
        //cy.wait(2000)

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
      
        inspectedPage.getCardFooterFifthButton().should('include.text', 'অনুমোদন করুন').click() //Reuse from ReceiveGoods Page 
        
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
        leftNavMenu.getAssetTaggingSubMenu().should('include.text', 'অ্যাসেট ট্যাগিং').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click() //Select Store
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ট্যাগিংয়ের জন্য পরিসম্পদের তালিকা')
        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired চালান নং
        {
            const textChalanNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textChalanNo.includes(this.ast.chalanNo))                    
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)

        //receiveGoodsPage.getCardHeader().should('include.text', 'অ্যাসেট ট্যাগ')
        receiveGoodsPage.getSecondCardHeader().should('include.text', 'অ্যাসেট ট্যাগ')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'পণ্য সমূহ')

        assetTaggingPage.getSetTagsButton().click()
        cy.wait(3000)

        assetTaggingPage.getTagsInputField().clear().type(this.ast.assetTagNo).should('have.value', this.ast.assetTagNo)
        cy.wait(2000)

        assetTaggingPage.getLifeTimeInputField().type(this.ast.assetLifeTime).should('have.value', this.ast.assetLifeTime)
        cy.wait(1000)
        assetTaggingPage.getSecondLifeTimeInputField().click()
        cy.wait(2500)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'দাখিল করুন').click()
        cy.wait(6000)
    })

    //অ্যাসেট ট্যাগিং Status TC will added here
    //End Material Receive ************************************************

    //Direct In Flow Start ************************************************
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

        receiveGoodsPage.getCardHeader().should('include.text', 'বিদ্যমান ডিরেক্ট ইন')

        directInPage.getAddButtonFirstStore().click()     //For First Store
        //directInPage.getAddButtonSecondStore().click()

        receiveGoodsPage.getCardHeader().should('include.text', 'ডিরেক্ট ইন তৈরি করুন')     //For First Store
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'ডিরেক্ট ইন তৈরি করুন')

        directInPage.getReferenceNoField().should('have.attr', 'placeholder', 'রেফারেন্স নং').clear().type(this.ast.DIReferenceNo).should('have.value', this.ast.DIReferenceNo)
        cy.wait(2000)
        directInPage.getReceptionTypeField().should('have.attr', 'placeholder', 'গ্রহণের ধরণ').click().type(this.ast.DIReceptionType).should('have.value', this.ast.DIReceptionType)
        cy.wait(2000)
        directInPage.getJustificationField().should('have.attr', 'placeholder', 'ন্যায্যতা').click().type(this.ast.DIJustification).should('have.value', this.ast.DIJustification)
        cy.wait(2000)

        directInPage.getAddItemPlusButtonForFirstStore().click()     //পণ্য যোগ করুন 
        //directInPage.getAddItemPlusButtonForSecondStore().click()
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

        receiveGoodsPage.getCardHeader().should('include.text', 'সরাসরি গ্রহণ')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'সরাসরি গ্রহণ')   //When Store is seconde index (SQA)

        receiveGoodsPage.getThirdCardHeader().should('include.text', 'ইন্সপেক্টর এসাইন করুন')
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
        cy.wait(6000)
    })

    //Inspector Approved the Direct In
    it('Inspector: Inspect for Direct In. TC',function() 
    {
        cy.login(this.ast.inspectorID, this.ast.inspectorPassword)
        
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.ast.inspectorOffice).click()
        cy.wait(3000)
        
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

        receiveGoodsPage.getCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'প্রাপ্তিযোগ্য পরিমাণগুলি সেট করুন')   //When Store is seconde index (SQA)
      
        inspectedPage.getCardFooterFifthButton().should('include.text', 'অনুমোদন করুন').click() //Reuse from ReceiveGoods Page 
        
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
        leftNavMenu.getAssetTaggingSubMenu().should('include.text', 'অ্যাসেট ট্যাগিং').click()
        cy.wait(3000)

        receiveGoodsPage.getStoreNameTab().contains(this.ast.storeName).click() //Select Store
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'ট্যাগিংয়ের জন্য পরিসম্পদের তালিকা')
        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired রেফারেন্স নং
        {
            const textChalanNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textChalanNo.includes(this.ast.DIReferenceNo))                    
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)

        receiveGoodsPage.getCardHeader().should('include.text', 'অ্যাসেট ট্যাগ')
        //receiveGoodsPage.getSecondCardHeader().should('include.text', 'অ্যাসেট ট্যাগ')   //When Store is seconde index (SQA)

        //receiveGoodsPage.getThirdCardHeader().should('include.text', 'পণ্য সমূহ')

        assetTaggingPage.getSetTagsButton().click()     //Set Tag Button
        cy.wait(3000)

        assetTaggingPage.getTagsInputField().clear().type(this.ast.DIassetTagNo).should('have.value', this.ast.DIassetTagNo)
        cy.wait(2000)

        assetTaggingPage.getBookValueInputField().click().type(this.ast.DIassetBookValue).should('have.value', this.ast.DIassetBookValue)
        cy.wait(2000)
        assetTaggingPage.getLifeTimeInputFieldDI().type(this.ast.assetLifeTime).should('have.value', this.ast.assetLifeTime)
        cy.wait(1000)
        //assetTaggingPage.getSecondLifeTimeInputField().click()
        //cy.wait(2500)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'দাখিল করুন').click()
        cy.wait(6000)
    })

    //Direct Out Flow Start ************************************************
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
        directInPage.getAddButtonFirstStore().click()
        //directInPage.getAddButtonSecondStore().click()      //Re-use from Direct In Page
        cy.wait(3000)

        directOutPage.getPostOfficeTypeField().should('have.attr', 'aria-label', 'ধরণ').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.DOOfficePostType).click()
        cy.wait(2000)

        directOutPage.getOfficeUniteField().should('have.attr', 'aria-label', 'শাখা').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.OfficeUnit).click()
        cy.wait(2000)

        directOutPage.getPostField().should('have.attr', 'aria-label', 'পদবি').click()
        inspectionUnassignedPage.getDropDownItem().contains(this.ast.DOPost).click()
        cy.wait(2000)

        directOutPage.getTagInputField().should('have.attr', 'placeholder', 'ট্যাগ').click().type(this.ast.DIassetTagNo).should('have.value', this.ast.DIassetTagNo)
        cy.wait(2000)

        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'পণ্য যোগ করুন').click()   //Re-use from Receive Goods Page
        cy.wait(3000)
        receiveGoodsPage.getCardFooterFifthButton().should('include.text', 'অনুমোদনের জন্য প্রেরণ').click()   //Re-use from Receive Goods Page
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
        
        cy.wait(6000)  
    })

    //Asset Requisition and Approval Flow Start **********************************
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

        directInPage.getAddItemButton().first().click()
        cy.wait(2000)

        inspectedPage.getCardFooterFifthButton().should('include.text', 'প্রেরণ').click() //Reuse from ReceiveGoods Page 
        
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
        cy.wait(5000)

        requisitionPage.getUncheckDefaultItem().click({ force: true })
        cy.wait(2000)

        receiveGoodsPage.getCardRows().each(($el, index, $list) =>     //Select the desired পণ্যের নাম
        {
            const textAssetTagNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textAssetTagNo.includes(this.ast.assetTagNo))                    
            {
                $el.find('.e-templatecell label .e-icons').click()
            }
        })
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

        receiveGoodsPage.getCardHeader().should('include.text', 'ইস্যু তালিকা')
        cy.inspection(this.ast.DOPostPerson)    //Select গ্রাহক
        cy.wait(3000)
        
        receiveGoodsPage.getCardHeader().should('include.text', 'পণ্য সমূহ')
        
        receiveGoodsPage.getCardFooterFourthButton().should('include.text', 'দাখিল করুন').click() 
         
        cy.wait(6000)
    })

})