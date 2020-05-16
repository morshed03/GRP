/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'
import LeftNavMenu from '../../support/PRC/pageObjects/LeftNavMenu'
import RequisitionDeclarationPage from '../../support/PRC/pageObjects/RequisitionDeclarationPage'
import DeclarationSubmissionPage from '../../support/PRC/pageObjects/DeclarationSubmissionPage'
import APPPreparationPage from '../../support/PRC/pageObjects/APPPreparationPage'
import APPPackagePage from '../../support/PRC/pageObjects/APPPackagePage'
import APPApprovalPage from '../../support/PRC/pageObjects/APPApprovalPage'
import AmendmentAPPPage from '../../support/PRC/pageObjects/AmendmentAPPPage'
import OPMAPPDCPPage from '../../support/PRC/pageObjects/OPMAPPDCPPage'
import BOQPage from '../../support/PRC/pageObjects/BOQPage'
import BillPage from '../../support/PRC/pageObjects/BillPage'


describe('PRC Module Regression Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('PRCTestDataSTG').then(function(prc)
      {
        this.prc = prc
      })
      
      cy.visit(Cypress.env('url'))
    })

    // Before all It Logout
    afterEach(function()
    {
      cy.logout()
    })

    //Create page object
    const dashboardPage = new DashboardPage()
    const leftNavMenu = new LeftNavMenu()
    const requisitionDeclarationPage = new RequisitionDeclarationPage()
    const declarationSubmissionPage = new DeclarationSubmissionPage()
    const aPPPreparationPage = new APPPreparationPage()
    const aPPPackagePage = new APPPackagePage()
    const aPPApprovalPage = new APPApprovalPage()
    const amendmentAPPPage = new AmendmentAPPPage()
    const oPMAPPDCPPage = new OPMAPPDCPPage()
    const bOQPage = new BOQPage()
    const billPage = new BillPage()

    //নতুন ঘোষণা যোগ করুন
    it('PE: Create Requisition Declaration. TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getDeclarationAPPSubMenu().should('include.text', 'চাহিদাপত্র ঘোষণা').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র ঘোষণা')
        requisitionDeclarationPage.getAddRequisitionButton().should('include.text', 'add').click()  //Clicks plus button
        cy.wait(3000)
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র ঘোষণা')
        requisitionDeclarationPage.getFiscalYearField().should('include.text', 'অর্থবছর').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requisitionFiscalYear).click()
        cy.wait(2000)
        requisitionDeclarationPage.getStartDateField().click()  //শুরুর তারিখ
        cy.wait(1000)
        cy.calendar(this.prc.requisitionStartYear, this.prc.requisitionStartMonth, this.prc.requisitionStartDay)
        
        cy.wait(1000)
        requisitionDeclarationPage.getEndDateField().click()  //শেষ তারিখ
        cy.wait(1000)
        cy.calendar(this.prc.requisitionEndYear, this.prc.requisitionEndMonth, this.prc.requisitionEndDay)
        
        cy.wait(1000)
        requisitionDeclarationPage.getDescriptionField().should('have.attr', 'placeholder', 'বিবরণ').click().type(this.prc.requisitionDescription).should('have.value', this.prc.requisitionDescription)
        cy.wait(2000)
        requisitionDeclarationPage.getSaveAndPublishButton().should('include.text', 'সংরক্ষণ ও প্রকাশ করুন').click()
        cy.wait(2000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //চাহিদাপত্র প্রেরণ for পণ্য as a DE-1
    it('DE(First): Demand Submission for Goods. TC',function() 
    {
        cy.login(this.prc.userNameDE1, this.prc.passwordDE1)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getRequisitionSubmissionAPPSubMenu().should('include.text', 'চাহিদাপত্র প্রেরণ').click()
        cy.wait(3000)

        declarationSubmissionPage.getDeclarationSubmissionPageHeader().should('include.text', 'চাহিদাপত্র প্রেরণের জন্য ঘোষণার তালিকা')

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Clicks the desired চাহিদাপত্র 
        {
            const textDeclaration=$el.find('td.e-rowcell').text()
            if(textDeclaration.includes(this.prc.requisitionDescription))
            {
                $el.find('td.e-rowcell button mat-icon').click()
            }
        })
        cy.wait(3000)
        declarationSubmissionPage.getDeclarationSubmissionPageHeader().should('include.text', 'চাহিদাপত্র প্রেরণের তালিকা')
        declarationSubmissionPage.getAddRequisitionButton().should('include.text', 'চাহিদা যোগ করুন').click()
        cy.wait(3000)
        declarationSubmissionPage.getDeclarationSubmissionPageHeader().should('include.text', 'চাহিদা পত্রের পরিকল্পনায় যোগ করুন')
        declarationSubmissionPage.getAddRequirementButton().should('include.text', 'চাহিদা যোগ করুন').click()
        cy.wait(3000)

        declarationSubmissionPage.getAddRequirementPopupHeader().should('include.text', 'নতুন চাহিদা যোগ করুন (প্রাধিকারের বাহিরে)')
        declarationSubmissionPage.getAddRequirementTypeField().should('have.attr', 'aria-label', 'ধরণ').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requirementTypeGoods).click()
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementCategoryField().should('have.attr', 'aria-label', 'ক্যাটাগরি').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requirementCategoryGoods).click()
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementGroupField().should('have.attr', 'aria-label', 'গ্রুপ').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requirementGroupGoods).click()
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementNameField().should('have.attr', 'aria-label', 'নাম ').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requirementNameGoods).click()
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementQuantityField().should('have.attr', 'placeholder', 'পরিমাণ').click().type(this.prc.requirementQuantityGoods).should('have.value', this.prc.requirementQuantityGoods)
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementRemarksField().should('have.attr', 'placeholder', 'স্পেসিফিকেশন/মন্তব্য').click().type(this.prc.requirementRemarksGoods).should('have.value', this.prc.requirementRemarksGoods)
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementEstimatedCostField().should('have.attr', 'placeholder', 'আনুমানিক খরচ').click().type(this.prc.requirementEstimatedCostGoods).should('have.value', this.prc.requirementEstimatedCostGoods)
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementSaveField().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)

        //the locator same as চাহিদাপত্র page, So re-use it here
        requisitionDeclarationPage.getSaveAndPublishButton().should('include.text', 'সংরক্ষন ও প্রেরণ করুন').click()
        cy.wait(2000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র প্রেরণের তালিকা')
        requisitionDeclarationPage.getBackButton().should('include.text', 'পূর্বে').click()
        cy.wait(5000)
    })

    //চাহিদাপত্র প্রেরণ for সেবা as a DE-2
    it.skip('Demand Submission as a DE-2 for Service TC',function()
    {
        cy.login(this.prc.userNameDE2, this.prc.passwordDE2)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getRequisitionSubmissionAPPSubMenu().should('include.text', 'চাহিদাপত্র প্রেরণ').click()
        cy.wait(3000)

        declarationSubmissionPage.getDeclarationSubmissionPageHeader().should('include.text', 'চাহিদাপত্র প্রেরণের জন্য ঘোষণার তালিকা')

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Clicks the desired চাহিদাপত্র 
        {
            const textDeclaration=$el.find('td.e-rowcell').text()
            if(textDeclaration.includes(this.prc.requisitionDescription))
            {
                $el.find('td.e-rowcell button mat-icon').click()
            }
        })
        cy.wait(3000)
        declarationSubmissionPage.getDeclarationSubmissionPageHeader().should('include.text', 'চাহিদাপত্র প্রেরণের তালিকা')
        declarationSubmissionPage.getAddRequisitionButton().should('include.text', 'চাহিদা যোগ করুন').click()
        cy.wait(3000)
        declarationSubmissionPage.getDeclarationSubmissionPageHeader().should('include.text', 'চাহিদা পত্রের পরিকল্পনায় যোগ করুন')
        declarationSubmissionPage.getAddRequirementButton().should('include.text', 'চাহিদা যোগ করুন').click()
        cy.wait(3000)

        declarationSubmissionPage.getAddRequirementPopupHeader().should('include.text', 'নতুন চাহিদা যোগ করুন (প্রাধিকারের বাহিরে)')
        declarationSubmissionPage.getAddRequirementTypeField().should('have.attr', 'aria-label', 'ধরণ').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requirementTypeService).click()
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementCategoryField().should('have.attr', 'aria-label', 'ক্যাটাগরি').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requirementCategoryService).click()
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementGroupField().should('have.attr', 'aria-label', 'গ্রুপ').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requirementGroupService).click()
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementNameField().should('have.attr', 'aria-label', 'নাম ').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requirementNameService).click()
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementQuantityField().should('have.attr', 'placeholder', 'পরিমাণ').click().type(this.prc.requirementQuantityService).should('have.value', this.prc.requirementQuantityService)
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementRemarksField().should('have.attr', 'placeholder', 'স্পেসিফিকেশন/মন্তব্য').click().type(this.prc.requirementRemarksService).should('have.value', this.prc.requirementRemarksService)
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementEstimatedCostField().should('have.attr', 'placeholder', 'আনুমানিক খরচ').click().type(this.prc.requirementEstimatedCostService).should('have.value', this.prc.requirementEstimatedCostService)
        cy.wait(2000)
        declarationSubmissionPage.getAddRequirementSaveField().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)

        //the locator same as চাহিদাপত্র page, So re-use it here
        requisitionDeclarationPage.getSaveAndPublishButton().should('include.text', 'সংরক্ষন ও প্রেরণ করুন').click()
        cy.wait(2000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র প্রেরণের তালিকা')
        requisitionDeclarationPage.getBackButton().should('include.text', 'পূর্বে').click()
        cy.wait(6000)
    })

    //পুনরায় অবহিত করার জন্য কর্মকর্তাদের তালিকা
    it('Notifies DEs who have not submitted the requisition by PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getDeclarationAPPSubMenu().should('include.text', 'চাহিদাপত্র ঘোষণা').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র ঘোষণা')
        requisitionDeclarationPage.getFiscalYearField().should('include.text', 'অর্থবছর').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requisitionFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination
        
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Clicks the desired চাহিদাপত্র ঘোষণা
        {
            const textDeclaration=$el.find('td.e-rowcell').text()
            if(textDeclaration.includes(this.prc.requisitionDescription))
            {
                $el.find('td.e-rowcell button mat-icon').click()
            }
        })
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'পুনরায় অবহিত করার জন্য কর্মকর্তাদের তালিকা')
        requisitionDeclarationPage.getSubmittedHeader().should('include.text', 'চাহিদা পত্র জমাদানকারী কর্মকর্তাদের তালিকা')
        requisitionDeclarationPage.getNotifyAllCheckBox().click()
        cy.wait(1500)
        requisitionDeclarationPage.getNotifyButton().should('include.text', 'অবহিত করুন').click()
        cy.wait(7000)
    })

    //ঘোষণার সময় বৃদ্ধি করুন 
    it('Extend Date of Requisition Declaration by PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getDeclarationAPPSubMenu().should('include.text', 'চাহিদাপত্র ঘোষণা').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র ঘোষণা')
        requisitionDeclarationPage.getFiscalYearField().should('include.text', 'অর্থবছর').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requisitionFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination
        
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Clicks the desired চাহিদাপত্র ঘোষণা
        {
            const textDeclaration=$el.find('td.e-rowcell').text()
            if(textDeclaration.includes(this.prc.requisitionDescription))
            {
                $el.find('td.e-rowcell button .fa-expand').click()
            }
        })
        cy.wait(3000)
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র ঘোষণা হালনাগাদ করুন')
        requisitionDeclarationPage.getEndDateField().click()
        cy.wait(1000)
        cy.calendar(this.prc.requisitionEndYear, this.prc.requisitionEndMonth, this.prc.requisitionExtendEndDay)
        
        cy.wait(1000)
        requisitionDeclarationPage.getDescriptionField().type('{del}{selectall}{backspace}').type(this.prc.requisitionExtendDescription).should('have.value', this.prc.requisitionExtendDescription)
        cy.wait(2000)
        requisitionDeclarationPage.getExtendEndSaveAndPublishButton().should('include.text', 'সংরক্ষণ ও প্রকাশ করুন').click()
        cy.wait(2000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //ঘোষণা বন্ধ করুন
    it('Close the Requisition Declaration by PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getDeclarationAPPSubMenu().should('include.text', 'চাহিদাপত্র ঘোষণা').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র ঘোষণা')
        requisitionDeclarationPage.getFiscalYearField().should('include.text', 'অর্থবছর').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requisitionFiscalYear).click()
        cy.wait(3000)
        
        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Clicks the desired চাহিদাপত্র ঘোষণা
        {
            const textDeclaration=$el.find('td.e-rowcell').text()
            if(textDeclaration.includes(this.prc.requisitionExtendDescription))
            {
                $el.find('td.e-rowcell button .fa-lock').click()
            }
        })
        cy.wait(3000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(7000)
    })

    //চাহিদাপত্র একত্র করুন
    it('Consolidate Requisitions by PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getDeclarationAPPSubMenu().should('include.text', 'চাহিদাপত্র ঘোষণা').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র ঘোষণা')
        requisitionDeclarationPage.getFiscalYearField().should('include.text', 'অর্থবছর').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requisitionFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination
        
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Clicks the desired চাহিদাপত্র ঘোষণা
        {
            const textDeclaration=$el.find('td.e-rowcell').text()
            if(textDeclaration.includes(this.prc.requisitionExtendDescription))
            {
                $el.find('td.e-rowcell button mat-icon').click()
            }
        })
        cy.wait(3000)
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র একত্রীকরণ তালিকা')
        requisitionDeclarationPage.getPreviewSummaryReportButton().click()
        cy.wait(7000)
        requisitionDeclarationPage.getPreviewSummaryReportClose().click()
        cy.wait(2000)
        requisitionDeclarationPage.getConsolidateRequisitionsIcon().click()
        cy.wait(3000)

        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র সংকলন তালিকা একীকরণ')
        requisitionDeclarationPage.getPreviewOfReportButton().should('include.text', 'রিপোর্ট এর বিস্তারিত দেখুন').click()
        cy.wait(7000)
        requisitionDeclarationPage.getPreviewSummaryReportClose().click()
        cy.wait(2000)
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Expanded the desired ক্যাটাগরি
        {
            const textDeclaration=$el.find('td.e-rowcell').text()
            if(textDeclaration.includes(this.prc.requirementCategoryGoods))
            {
                $el.find('td.e-detailrowcollapse').click()
            }
        })
        cy.wait(3000)
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Expanded the desired পণ্যের গ্রুপ
        {
            const textDeclaration=$el.find('td.e-rowcell[aria-label]').text()
            if(textDeclaration.includes(this.prc.requirementGroupGoods))
            {
                $el.find('td.e-detailrowcollapse').click()
            }
        })
        cy.wait(3000)
        requisitionDeclarationPage.getEstimatedCostInputField().dblclick()
        cy.wait(3000)
        requisitionDeclarationPage.getEnterEstimatedCostInInputField().click().type(this.prc.requirementEstimatedCostGoods)
        cy.wait(2000)
        requisitionDeclarationPage.getEnterRemarksInInputField().click().type(this.prc.requirementRemarksGoods)
        cy.wait(2000)
        requisitionDeclarationPage.getDemandSaveIcon().click()
        cy.wait(3000)
        requisitionDeclarationPage.getSaveAndPublishButton().should('include.text', 'দাখিল করুন').click()
        cy.wait(2000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(5000)
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'চাহিদাপত্র একত্রীকরণ তালিকা')
        cy.wait(7000)
    })

    //বার্ষিক প্রকিউরমেন্ট প্ল্যান APP (কাজ)
    it('Create APP (Works) as a PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationAPPSubMenu().should('include.text', 'প্রস্তুত করুন').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা')
        aPPPreparationPage.getCreateNewAPPButton().should('include.text', 'add').click()
        cy.wait(3000)
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'নতুন বার্ষিক প্রকিউরমেন্ট প্ল্যান তৈরি করুন')
        aPPPreparationPage.getProcurementNatureField().click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.procurementNatureWorks).click()
        cy.wait(1500)
        aPPPreparationPage.getBudgetTypeField().click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.budgetTypeDevelopment).click()
        cy.wait(1500)
        aPPPreparationPage.getFiscalYearField().click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(1500)
        aPPPreparationPage.getAPPCodeField().should('have.attr', 'placeholder', 'এপিপি কোড').click().type(this.prc.aPPCodeWorks).should('have.value', this.prc.aPPCodeWorks)
        cy.wait(1500)
        aPPPreparationPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        
        cy.wait(7000)
    })
    //বার্ষিক প্রকিউরমেন্ট প্ল্যান APP (পণ্য)
    it.skip('Create APP (Goods) as a PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationAPPSubMenu().should('include.text', 'প্রস্তুত করুন').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা')
        aPPPreparationPage.getCreateNewAPPButton().should('include.text', 'add').click()
        cy.wait(3000)
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'নতুন বার্ষিক প্রকিউরমেন্ট প্ল্যান তৈরি করুন')
        aPPPreparationPage.getProcurementNatureField().click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.procurementNatureGoods).click()
        cy.wait(1500)
        aPPPreparationPage.getBudgetTypeField().click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.budgetTypeRevenue).click()
        cy.wait(1500)
        aPPPreparationPage.getFiscalYearField().click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(1500)
        aPPPreparationPage.getAPPCodeField().should('have.attr', 'placeholder', 'এপিপি কোড').click().type(this.prc.aPPCodeGoods).should('have.value', this.prc.aPPCodeGoods)
        cy.wait(1500)
        aPPPreparationPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        
        cy.wait(6000)
    })

    //প্যাকেজ যোগ করুন (কাজ)
    it('Add packages to an APP (Works) as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationAPPSubMenu().should('include.text', 'প্রস্তুত করুন').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা')
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)
        
        cy.pagination(this.prc.Pagination) //Pagination 

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for package Add
        {
            const textAPPCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAPPCode.includes(this.prc.aPPCodeWorks))
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(3500)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের (এপিপি) তথ্য')
        requisitionDeclarationPage.getSubmittedHeader().should('include.text', 'প্যাকেজ যোগ করুন')
        //aPPPackagePage.getAddRequirementButton().should('include.text', 'চাহিদা যোগ করুন').click()
        //cy.wait(3000)
        aPPPackagePage.getPackageDescriptionField().should('have.attr', 'placeholder', 'প্যাকেজের বর্ণনা').click().type(this.prc.PackageDescription).should('have.value', this.prc.PackageDescription)
        cy.wait(2000)
        aPPPackagePage.getPackageNoField().should('have.attr', 'placeholder', 'প্যাকেজ নং').click().type(this.prc.PackageNoWorks).should('have.value', this.prc.PackageNoWorks)
        cy.wait(2000)
        aPPPackagePage.getPackageTypeField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.PackageType).click()
        cy.wait(2000)
        aPPPackagePage.getPackageQuantityField().should('have.attr', 'placeholder', 'পরিমাণ').click().type(this.prc.PackageQuantity).should('have.value', this.prc.PackageQuantity)
        cy.wait(2000)
        aPPPackagePage.getPackageUnitField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.PackageUnit).click()
        cy.wait(2000)
        aPPPackagePage.getPackageEstimatedCostField().should('have.attr', 'placeholder', 'প্যাকেজের আনুমানিক খরচ').click().type(this.prc.PackageEstimatedCost).should('have.value', this.prc.PackageEstimatedCost)
        cy.wait(2000)
        aPPPackagePage.getApprovingAuthorityField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ApprovingAuthority).click()
        cy.wait(2000)
        aPPPackagePage.getProcurementTypeField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ProcurementType).click()
        cy.wait(2000)
        aPPPackagePage.getProcurementMethodField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ProcurementMethod).click({force: true})
        cy.wait(2000)
        aPPPackagePage.getExpectedDateOfTenderAdvertisementField().click()
        cy.wait(1000)
        cy.calendar(this.prc.ProcurementYear, this.prc.ProcurementMonth, this.prc.ProcurementDay)
        /*
        requisitionDeclarationPage.getCalendarYearView().click()
        requisitionDeclarationPage.getYearMonthDate().contains(this.prc.ProcurementYear).click()
        requisitionDeclarationPage.getYearMonthDate().contains(this.prc.ProcurementMonth).click()
        requisitionDeclarationPage.getYearMonthDate().contains(this.prc.ProcurementDay).click()
        */
        cy.wait(1000)
        aPPPackagePage.getDaysOfTenderSubmissionField().should('have.attr', 'placeholder', 'দরপত্র জমা দেওয়ার দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderSubmission).should('have.value', this.prc.DaysOfTenderSubmission)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderOpeningField().should('have.attr', 'placeholder', 'দরপত্র খোলার দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderOpening).should('have.value', this.prc.DaysOfTenderOpening)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderEvaluationField().should('have.attr', 'placeholder', 'দরপত্র মূল্যায়নের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderEvaluation).should('have.value', this.prc.DaysOfTenderEvaluation)
        cy.wait(2000)
        aPPPackagePage.getDaysOfApprovalForAwardOfContractField().should('have.attr', 'placeholder', 'চুক্তির পুরষ্কারের অনুমোদনের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfApprovalForAwardOfContract).should('have.value', this.prc.DaysOfApprovalForAwardOfContract)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderNOAField().should('have.attr', 'placeholder', 'পুরস্কার ঘোষণার প্রত্যাশিত দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderNOAF).should('have.value', this.prc.DaysOfTenderNOAF)
        cy.wait(2000)
        aPPPackagePage.getDaysOfSigningOfContractField().should('have.attr', 'placeholder', 'চুক্তি স্বাক্ষরের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfSigningOfContract).should('have.value', this.prc.DaysOfSigningOfContract)
        cy.wait(2000)
        aPPPackagePage.getDaysOfCompletionOfContractField().should('have.attr', 'placeholder', 'চুক্তি সমাপ্তির দিন').type('{del}{selectall}{backspace}').type(this.prc.CompletionDayOfContract).should('have.value', this.prc.CompletionDayOfContract)
        cy.wait(3000)
        aPPPackagePage.getRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.prc.PackageRemark).should('have.value', this.prc.PackageRemark)
        cy.wait(2000)
        aPPPreparationPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(7000) 
    })
    //প্যাকেজ যোগ করুন (পণ্য)
    it.skip('Add packages to an APP (Goods) as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationAPPSubMenu().should('include.text', 'প্রস্তুত করুন').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা')
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)
        
        cy.pagination(this.prc.Pagination) //Pagination 

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for package Add
        {
            const textAPPCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAPPCode.includes(this.prc.aPPCodeGoods))
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(3500)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের (এপিপি) তথ্য')
        requisitionDeclarationPage.getSubmittedHeader().should('include.text', 'প্যাকেজ যোগ করুন')
        //aPPPackagePage.getAddRequirementButton().should('include.text', 'চাহিদা যোগ করুন').click()
        //cy.wait(3000)
        aPPPackagePage.getPackageDescriptionField().should('have.attr', 'placeholder', 'প্যাকেজের বর্ণনা').click().type(this.prc.PackageDescription).should('have.value', this.prc.PackageDescription)
        cy.wait(2000)
        aPPPackagePage.getPackageNoField().should('have.attr', 'placeholder', 'প্যাকেজ নং').click().type(this.prc.PackageNoGoods).should('have.value', this.prc.PackageNoGoods)
        cy.wait(2000)
        aPPPackagePage.getPackageTypeField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.PackageType).click()
        cy.wait(2000)
        aPPPackagePage.getPackageQuantityField().should('have.attr', 'placeholder', 'পরিমাণ').click().type(this.prc.PackageQuantity).should('have.value', this.prc.PackageQuantity)
        cy.wait(2000)
        aPPPackagePage.getPackageUnitField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.PackageUnit).click()
        cy.wait(2000)
        aPPPackagePage.getPackageEstimatedCostField().should('have.attr', 'placeholder', 'প্যাকেজের আনুমানিক খরচ').click().type(this.prc.PackageEstimatedCost).should('have.value', this.prc.PackageEstimatedCost)
        cy.wait(2000)
        aPPPackagePage.getApprovingAuthorityField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ApprovingAuthority).click()
        cy.wait(2000)
        aPPPackagePage.getProcurementTypeField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ProcurementType).click()
        cy.wait(2000)
        aPPPackagePage.getProcurementMethodField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ProcurementMethod).click({force: true})
        cy.wait(2000)
        aPPPackagePage.getExpectedDateOfTenderAdvertisementField().click()
        cy.wait(1000)
        cy.calendar(this.prc.ProcurementYear, this.prc.ProcurementMonth, this.prc.ProcurementDay)
        /*
        requisitionDeclarationPage.getCalendarYearView().click()
        requisitionDeclarationPage.getYearMonthDate().contains(this.prc.ProcurementYear).click()
        requisitionDeclarationPage.getYearMonthDate().contains(this.prc.ProcurementMonth).click()
        requisitionDeclarationPage.getYearMonthDate().contains(this.prc.ProcurementDay).click()
        */
        cy.wait(1000)
        aPPPackagePage.getDaysOfTenderSubmissionField().should('have.attr', 'placeholder', 'দরপত্র জমা দেওয়ার দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderSubmission).should('have.value', this.prc.DaysOfTenderSubmission)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderOpeningField().should('have.attr', 'placeholder', 'দরপত্র খোলার দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderOpening).should('have.value', this.prc.DaysOfTenderOpening)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderEvaluationField().should('have.attr', 'placeholder', 'দরপত্র মূল্যায়নের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderEvaluation).should('have.value', this.prc.DaysOfTenderEvaluation)
        cy.wait(2000)
        aPPPackagePage.getDaysOfApprovalForAwardOfContractField().should('have.attr', 'placeholder', 'চুক্তির পুরষ্কারের অনুমোদনের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfApprovalForAwardOfContract).should('have.value', this.prc.DaysOfApprovalForAwardOfContract)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderNOAField().should('have.attr', 'placeholder', 'পুরস্কার ঘোষণার প্রত্যাশিত দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderNOAF).should('have.value', this.prc.DaysOfTenderNOAF)
        cy.wait(2000)
        aPPPackagePage.getDaysOfSigningOfContractField().should('have.attr', 'placeholder', 'চুক্তি স্বাক্ষরের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfSigningOfContract).should('have.value', this.prc.DaysOfSigningOfContract)
        cy.wait(2000)
        aPPPackagePage.getDaysOfCompletionOfContractField().should('have.attr', 'placeholder', 'চুক্তি সমাপ্তির দিন').type('{del}{selectall}{backspace}').type(this.prc.CompletionDayOfContract).should('have.value', this.prc.CompletionDayOfContract)
        cy.wait(3000)
        aPPPackagePage.getRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.prc.PackageRemark).should('have.value', this.prc.PackageRemark)
        cy.wait(2000)
        aPPPreparationPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000) 
    })

    //লট যোগ করুন (কাজ)
    it('Create Lot to a Package for APP (Works) as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationAPPSubMenu().should('include.text', 'প্রস্তুত করুন').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা')
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for package Add
        {
            const textAPPCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAPPCode.includes(this.prc.aPPCodeWorks))
            {
                $el.find('td button mat-icon:eq(1)').click()
            }
        })
        cy.wait(3500)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যান')
        aPPPackagePage.getSearchHereButton().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(3000)
        aPPPackagePage.getSearchHereButton().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(2500)
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired প্যাকেজ নং for package for Add Lot
        {
            const textPackageNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textPackageNo.includes(this.prc.PackageNoWorks))
            {
                $el.find('td button .fa-plus').click()
            }
        })
        cy.wait(4000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের (এপিপি) তথ্য')
        requisitionDeclarationPage.getSubmittedHeader().should('include.text', 'লট যোগ করুন')
        //Locator almost same as Packages page, So re-use it here.
        aPPPackagePage.getPackageDescriptionField().should('have.attr', 'placeholder', 'লটের বিবরন').click().type(this.prc.LotDescription).should('have.value', this.prc.LotDescription)
        cy.wait(2000)
        aPPPackagePage.getPackageNoField().should('have.attr', 'placeholder', 'লট নং').click().type(this.prc.LotNoWorks).should('have.value', this.prc.LotNoWorks)
        cy.wait(2000)
        aPPPackagePage.getPackageTypeField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.PackageType).click()
        cy.wait(2000)
        aPPPackagePage.getPackageQuantityField().should('have.attr', 'placeholder', 'পরিমাণ').click().type(this.prc.PackageQuantity).should('have.value', this.prc.PackageQuantity)
        cy.wait(2000)
        aPPPackagePage.getPackageUnitField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.PackageUnit).click()
        cy.wait(2000)
        aPPPackagePage.getPackageEstimatedCostField().should('have.attr', 'placeholder', 'প্যাকেজের আনুমানিক খরচ').click().type(this.prc.PackageEstimatedCost).should('have.value', this.prc.PackageEstimatedCost)
        cy.wait(2000)
        aPPPackagePage.getApprovingAuthorityField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ApprovingAuthority).click()
        cy.wait(2000)
        aPPPackagePage.getProcurementTypeField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ProcurementType).click()
        cy.wait(2000)
        aPPPackagePage.getProcurementMethodField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ProcurementMethod).click({force: true})
        cy.wait(2000)
        aPPPackagePage.getExpectedDateOfTenderAdvertisementField().click()
        cy.wait(1000)
        cy.calendar(this.prc.ProcurementYear, this.prc.ProcurementMonth, this.prc.ProcurementDay)   //তারিখ
       
        cy.wait(1000)
        aPPPackagePage.getDaysOfTenderSubmissionField().should('have.attr', 'placeholder', 'দরপত্র জমা দেওয়ার দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderSubmission).should('have.value', this.prc.DaysOfTenderSubmission)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderOpeningField().should('have.attr', 'placeholder', 'দরপত্র খোলার দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderOpening).should('have.value', this.prc.DaysOfTenderOpening)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderEvaluationField().should('have.attr', 'placeholder', 'দরপত্র মূল্যায়নের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderEvaluation).should('have.value', this.prc.DaysOfTenderEvaluation)
        cy.wait(2000)
        aPPPackagePage.getDaysOfApprovalForAwardOfContractField().should('have.attr', 'placeholder', 'চুক্তির পুরষ্কারের অনুমোদনের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfApprovalForAwardOfContract).should('have.value', this.prc.DaysOfApprovalForAwardOfContract)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderNOAField().should('have.attr', 'placeholder', 'পুরস্কার ঘোষণার প্রত্যাশিত দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderNOAF).should('have.value', this.prc.DaysOfTenderNOAF)
        cy.wait(2000)
        aPPPackagePage.getDaysOfSigningOfContractField().should('have.attr', 'placeholder', 'চুক্তি স্বাক্ষরের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfSigningOfContract).should('have.value', this.prc.DaysOfSigningOfContract)
        cy.wait(2000)
        aPPPackagePage.getDaysOfCompletionOfContractField().should('have.attr', 'placeholder', 'চুক্তি সমাপ্তির দিন').type('{del}{selectall}{backspace}').type(this.prc.CompletionDayOfContract).should('have.value', this.prc.CompletionDayOfContract)
        cy.wait(3000)
        aPPPackagePage.getRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.prc.LotRemarks).should('have.value', this.prc.LotRemarks)
        cy.wait(2000)
        aPPPreparationPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(7000)
    })
    //লট যোগ করুন (পণ্য)
    it.skip('Create Lot to a Package for APP (Goods) as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationAPPSubMenu().should('include.text', 'প্রস্তুত করুন').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা')
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for package Add
        {
            const textAPPCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAPPCode.includes(this.prc.aPPCodeGoods))
            {
                $el.find('td button mat-icon:eq(1)').click()
            }
        })
        cy.wait(3500)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যান')
        aPPPackagePage.getSearchHereButton().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(3000)
        aPPPackagePage.getSearchHereButton().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(1000)
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired প্যাকেজ নং for package for Add Lot
        {
            const textPackageNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textPackageNo.includes(this.prc.PackageNoGoods))
            {
                $el.find('td button .fa-plus').click()
            }
        })
        cy.wait(4000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের (এপিপি) তথ্য')
        requisitionDeclarationPage.getSubmittedHeader().should('include.text', 'লট যোগ করুন')
        //Locator almost same as Packages page, So re-use it here.
        aPPPackagePage.getPackageDescriptionField().should('have.attr', 'placeholder', 'লটের বিবরন').click().type(this.prc.LotDescription).should('have.value', this.prc.LotDescription)
        cy.wait(2000)
        aPPPackagePage.getPackageNoField().should('have.attr', 'placeholder', 'লট নং').click().type(this.prc.LotNoGoods).should('have.value', this.prc.LotNoGoods)
        cy.wait(2000)
        aPPPackagePage.getPackageTypeField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.PackageType).click()
        cy.wait(2000)
        aPPPackagePage.getPackageQuantityField().should('have.attr', 'placeholder', 'পরিমাণ').click().type(this.prc.PackageQuantity).should('have.value', this.prc.PackageQuantity)
        cy.wait(2000)
        aPPPackagePage.getPackageUnitField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.PackageUnit).click()
        cy.wait(2000)
        aPPPackagePage.getPackageEstimatedCostField().should('have.attr', 'placeholder', 'প্যাকেজের আনুমানিক খরচ').click().type(this.prc.PackageEstimatedCost).should('have.value', this.prc.PackageEstimatedCost)
        cy.wait(2000)
        aPPPackagePage.getApprovingAuthorityField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ApprovingAuthority).click()
        cy.wait(2000)
        aPPPackagePage.getProcurementTypeField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ProcurementType).click()
        cy.wait(2000)
        aPPPackagePage.getProcurementMethodField().should('have.class', 'mat-select').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ProcurementMethod).click({force: true})
        cy.wait(2000)
        aPPPackagePage.getExpectedDateOfTenderAdvertisementField().click()
        cy.wait(1000)
        cy.calendar(this.prc.ProcurementYear, this.prc.ProcurementMonth, this.prc.ProcurementDay) //তারিখ
        
        cy.wait(1000)
        aPPPackagePage.getDaysOfTenderSubmissionField().should('have.attr', 'placeholder', 'দরপত্র জমা দেওয়ার দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderSubmission).should('have.value', this.prc.DaysOfTenderSubmission)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderOpeningField().should('have.attr', 'placeholder', 'দরপত্র খোলার দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderOpening).should('have.value', this.prc.DaysOfTenderOpening)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderEvaluationField().should('have.attr', 'placeholder', 'দরপত্র মূল্যায়নের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderEvaluation).should('have.value', this.prc.DaysOfTenderEvaluation)
        cy.wait(2000)
        aPPPackagePage.getDaysOfApprovalForAwardOfContractField().should('have.attr', 'placeholder', 'চুক্তির পুরষ্কারের অনুমোদনের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfApprovalForAwardOfContract).should('have.value', this.prc.DaysOfApprovalForAwardOfContract)
        cy.wait(2000)
        aPPPackagePage.getDaysOfTenderNOAField().should('have.attr', 'placeholder', 'পুরস্কার ঘোষণার প্রত্যাশিত দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfTenderNOAF).should('have.value', this.prc.DaysOfTenderNOAF)
        cy.wait(2000)
        aPPPackagePage.getDaysOfSigningOfContractField().should('have.attr', 'placeholder', 'চুক্তি স্বাক্ষরের দিন').type('{del}{selectall}{backspace}').type(this.prc.DaysOfSigningOfContract).should('have.value', this.prc.DaysOfSigningOfContract)
        cy.wait(2000)
        aPPPackagePage.getDaysOfCompletionOfContractField().should('have.attr', 'placeholder', 'চুক্তি সমাপ্তির দিন').type('{del}{selectall}{backspace}').type(this.prc.CompletionDayOfContract).should('have.value', this.prc.CompletionDayOfContract)
        cy.wait(3000)
        aPPPackagePage.getRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.prc.LotRemarks).should('have.value', this.prc.LotRemarks)
        cy.wait(2000)
        aPPPreparationPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })

    //Send APP (Works) to Hope for Approver
    it('Send APP (Works) to HOPE for Approval as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationAPPSubMenu().should('include.text', 'প্রস্তুত করুন').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা')
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for View APP Details
        {
            const textAPPCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAPPCode.includes(this.prc.aPPCodeWorks))
            {
                $el.find('td button mat-icon:eq(1)').click()
            }
        })
        cy.wait(5000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যান')
        
        aPPPreparationPage.getSaveButton().should('include.text', 'প্রেরণ করুন').click()
        cy.wait(4000)

        aPPPackagePage.getOfficeField().should('have.attr', 'aria-label', 'অফিস').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.OfficeName).click()
        cy.wait(2000)
        aPPPackagePage.getHopeNameField().should('have.attr', 'placeholder', 'নাম').click().type(this.prc.HopeName).should('have.value', this.prc.HopeName)
        cy.wait(2000)
        aPPPackagePage.getHopeSearchField().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(3000)
        aPPPackagePage.getHopePopUpRows().each(($el, index, $list) =>     //Select the desired Hope name for assign APP
        {
            const textHopeName=$el.find('td.e-rowcell[aria-label]').text()
            if(textHopeName.includes(this.prc.HopeName))
            {
                $el.find('td.e-rowcell[aria-label]').click()
            }
        })
        cy.wait(7000)
    })
    //Send APP (Goods) to Hope for Approver
    it.skip('Send APP (Goods) to HOPE for Approval as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationAPPSubMenu().should('include.text', 'প্রস্তুত করুন').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা')
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for View APP Details
        {
            const textAPPCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAPPCode.includes(this.prc.aPPCodeGoods))
            {
                $el.find('td button mat-icon:eq(1)').click()
            }
        })
        cy.wait(5000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যান')
        
        aPPPreparationPage.getSaveButton().should('include.text', 'প্রেরণ করুন').click()
        cy.wait(4000)

        aPPPackagePage.getOfficeField().should('have.attr', 'aria-label', 'অফিস').click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.OfficeName).click()
        cy.wait(1500)
        aPPPackagePage.getHopeNameField().should('have.attr', 'placeholder', 'নাম').click().type(this.prc.HopeName).should('have.value', this.prc.HopeName)
        cy.wait(1500)
        aPPPackagePage.getHopeSearchField().should('include.text', 'অনুসন্ধান করুন').click()
        cy.wait(3000)
        aPPPackagePage.getHopePopUpRows().each(($el, index, $list) =>     //Select the desired Hope name for assign APP
        {
            const textHopeName=$el.find('td.e-rowcell[aria-label]').text()
            if(textHopeName.includes(this.prc.HopeName))
            {
                $el.find('td.e-rowcell[aria-label]').click()
            }
        })
        cy.wait(7000)
    })

    //HOPE Approve the APP(Works)
    it('Approve APP (Works) as a HOPE TC',function()
    {
        cy.login(this.prc.userNameHope, this.prc.passwordHope)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click({force: true})
        cy.wait(1000)
        leftNavMenu.getAPPSubMenu().should('include.text', 'এপিপি').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'অনুমোদন এর জন্য বার্ষিক ক্রয় পরিকল্পনার (এপিপি) তালিকা')

        cy.pagination(this.prc.Pagination) //Pagination

        //aPPApprovalPage.getSearchField().should('have.attr', 'placeholder', 'অনুসন্ধান করুন').click().type(this.prc.aPPCodeWorks)
        //cy.wait(3000)
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for approval view page
        {
            const textAPPCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAPPCode.includes(this.prc.aPPCodeWorks))
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(4000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যান')
        
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for approval
        {
            const textHopeName=$el.find('td.e-rowcell[aria-label]').text()
            if(textHopeName.includes(this.prc.HopeName))
            {
                //$el.find('td button mat-icon:eq(0)').click()
                $el.find('td button mat-icon').first().click()
            }
        })
        cy.wait(4000)
        aPPApprovalPage.getApproveCardHeader().should('include.text', 'অনুমোদন দিন')
        aPPApprovalPage.getApproveButton().should('include.text', 'অনুমোদন দিন').click({force: true})
        cy.wait(6000)
        //aPPApprovalPage.getClosePopUpButton().should('include.text', 'বন্ধ করুন').click({force: true})
        //cy.wait(5000)
    })
    //HOPE Approve the APP(Goods)
    it.skip('Approve APP (Goods) as a HOPE TC',function()
    {
        cy.login(this.prc.userNameHope, this.prc.passwordHope)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click({force: true})
        cy.wait(1000)
        leftNavMenu.getAPPSubMenu().should('include.text', 'এপিপি').click()
        cy.wait(3000)
        
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'অনুমোদন এর জন্য বার্ষিক ক্রয় পরিকল্পনার (এপিপি) তালিকা')

        cy.pagination(this.prc.Pagination) //Pagination

        aPPApprovalPage.getSearchField().should('have.attr', 'placeholder', 'অনুসন্ধান করুন').click().type(this.prc.aPPCode)
        cy.wait(3000)
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for approval view page
        {
            const textAPPCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAPPCode.includes(this.prc.aPPCodeGoods))
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(4000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যান')
        
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for approval
        {
            const textHopeName=$el.find('td.e-rowcell[aria-label]').text()
            if(textHopeName.includes(this.prc.HopeName))
            {
                //$el.find('td button mat-icon:eq(0)').click()
                $el.find('td button mat-icon').first().click()
            }
        })
        cy.wait(4000)
        aPPApprovalPage.getApproveCardHeader().should('include.text', 'অনুমোদন দিন')
        aPPApprovalPage.getApproveButton().should('include.text', 'অনুমোদন দিন').click({force: true})
        cy.wait(6000)
        //aPPApprovalPage.getClosePopUpButton().should('include.text', 'বন্ধ করুন').click({force: true})
        //cy.wait(5000)
    })

    //Check the status of APP after HOPE approve
    it('Verify the Approve APP Status as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationAPPSubMenu().should('include.text', 'প্রস্তুত করুন').click()
        cy.wait(3000)
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা')     
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for verify status
        {
            const textAppCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAppCode.includes(this.prc.aPPCodeWorks))
            {
                const testStatus = $el.find('td[aria-label="Approved column header স্ট্যাটাস"]').text()
                expect(testStatus.includes('Approved')).to.be.true
            }
        })
        cy.wait(4000)
    })

    //রিভিশন তৈরি করুন 
    it('Revision of the approve APP as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationAPPSubMenu().should('include.text', 'প্রস্তুত করুন').click()
        cy.wait(3000)
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা')     
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for revision
        {
            const textAppCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAppCode.includes(this.prc.aPPCodeWorks))
            {
                $el.find('td button .fa-history').click()
            }
        })
        cy.wait(3000)
        aPPPreparationPage.getRevisionCardHeader().should('include.text', 'এপিপি কোড দিন')
        aPPPreparationPage.getRevisionCardAppCodeField().should('have.attr', 'placeholder', 'এপিপি কোড').click().type(this.prc.aPPCodeWorksRevision).should('have.value', this.prc.aPPCodeWorksRevision)
        cy.wait(2000)
        aPPPreparationPage.getRevisionCardAppSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(6000)
    })
    //সমন্বয় (Amendment) APP (Works) করুন 
    it('Amendment of the approve APP(Works) as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getAmendmentAPPSubMenu().should('include.text', 'সমন্বয়').click()
        cy.wait(3000)
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'অনুমোদিত বার্ষিক ক্রয় পরিকল্পনা (এপিপি)')     
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for Amendment
        {
            const textAppCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAppCode.includes(this.prc.aPPCodeWorks))
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(3000)
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যান')
        
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired package for Amendment
        {
            const textLotNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textLotNo.includes(this.prc.LotNoWorks))                      //it will package not not added Lot no
            {
                //$el.find('td button mat-icon:eq(0)').click()
                $el.find('td button mat-icon').first().click()
            }
        })
        cy.wait(4000)
        amendmentAPPPage.getAmendmentPageHeader().should('include.text', 'প্যাকেজের বর্ণনা')
        amendmentAPPPage.getAddEconomicCodeButton().click()
        cy.wait(2000)
        amendmentAPPPage.getAdSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(6000)
    })
    //সমন্বয় (Amendment) APP (Goods) করুন 
    it.skip('Amendment of the approve APP(Goods) as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('এপিপি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getAmendmentAPPSubMenu().should('include.text', 'সমন্বয়').click()
        cy.wait(3000)
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'অনুমোদিত বার্ষিক ক্রয় পরিকল্পনা (এপিপি)')     
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired APP for Amendment
        {
            const textAppCode=$el.find('td.e-rowcell[aria-label]').text()
            if(textAppCode.includes(this.prc.aPPCodeGoods))
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(3000)
        requisitionDeclarationPage.getRequisitionPageHeader().should('include.text', 'বার্ষিক প্রকিউরমেন্ট প্ল্যান')
        
        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired package for Amendment
        {
            const textLotNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textLotNo.includes(this.prc.LotNoGoods))                      //it will package not not added Lot no
            {
                //$el.find('td button mat-icon:eq(0)').click()
                $el.find('td button mat-icon').first().click()
            }
        })
        cy.wait(4000)
        amendmentAPPPage.getAmendmentPageHeader().should('include.text', 'প্যাকেজের বর্ণনা')
        amendmentAPPPage.getAddEconomicCodeButton().click()
        cy.wait(2000)
        amendmentAPPPage.getAdSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(6000)
    })

    //Create OPM using APP(Works) for Works
    it('Create OPM Through APP (Works) as a PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ওপিএম').click({force: true})
        cy.wait(1000)
        leftNavMenu.getThroughAPPOPMSubMenu().contains('এপিপির মাধ্যমে').click()
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্টের তালিকা')
        oPMAPPDCPPage.getEntryOrderItemsPlusButton().click()    //অর্ডার প্রসেস ম্যানেজমেন্ট button
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্ট')
        oPMAPPDCPPage.getFiscalYearField().click()  //অর্থবছর 
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requisitionFiscalYear).click()

        oPMAPPDCPPage.getCurrencyField().click()    //মুদ্রা 
        cy.wait(1000)
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPCurrency).click({force: true})
        cy.wait(1000)

        oPMAPPDCPPage.getVendorNameField().click()  //সরবরাহকারীর নাম
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPVendorName).click()
        cy.wait(1000)

        oPMAPPDCPPage.getDateCalendar().click()   //তারিখ
        cy.wait(1000)
        cy.calendar(this.prc.DCPYear, this.prc.DCPMonth, this.prc.DCPDate)

        /*
        oPMAPPDCPPage.getCalendarYearView().click()
        oPMAPPDCPPage.getYear().contains(this.prc.DCPYear).click()
        oPMAPPDCPPage.getMonth().contains(this.prc.DCPMonth).click()
        oPMAPPDCPPage.getDate().contains(this.prc.DCPDate).click()
        cy.wait(1000)*/

        oPMAPPDCPPage.getReferenceNoField().click().should('have.attr', 'placeholder', 'রেফারেন্স নং').type(this.prc.OPMAPPReferenceNoWorks).should('have.value', this.prc.OPMAPPReferenceNoWorks)   //রেফারেন্স নং
        cy.wait(1500)
        oPMAPPDCPPage.getDescriptionField().should('have.attr', 'placeholder', 'বিবরণ').click().type(this.prc.DCPDescription).should('have.value', this.prc.DCPDescription)   //বিবরণ 
        cy.wait(1500)
        oPMAPPDCPPage.getRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.prc.DCPRemarks).should('have.value', this.prc.DCPRemarks)   //মন্তব্য 
        cy.wait(1500)

        oPMAPPDCPPage.getPackageAPPButton().click()
        cy.wait(4000)
        oPMAPPDCPPage.getPackageHeader().should('include.text', 'প্যাকেজ')
        oPMAPPDCPPage.getPackageAPPCodeField().click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPCodeWorks).click()
        cy.wait(2000)
        oPMAPPDCPPage.getPackageProcurementMethodField().click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ProcurementMethod).click()
        cy.wait(2000)

        oPMAPPDCPPage.getPackageRow().each(($el, index, $list) =>     //Select the desired package for added OPM
        {
            const textPackageNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textPackageNo.includes(this.prc.PackageNoWorks))                    
            {
                $el.find('td label > .e-icons').click()
                //cy.log(textPackageNo)
            }
        })
        cy.wait(2000)
        oPMAPPDCPPage.getPackageSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000) 
        oPMAPPDCPPage.getItemButton().click()   //  দ্রব্যাদি  button clicks
        cy.wait(4000)

        //আইটেম অনুসন্ধান pop-up
        oPMAPPDCPPage.getPackageHeader().should('include.text', 'আইটেম অনুসন্ধান')
        //oPMAPPDCPPage.getItemCategoryField().should('have.attr', 'aria-label', 'পণ্যের ধরণ').click()  // পণ্যের ধরণ field
        //requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPItemCategoryWorks).click()
        //cy.wait(1500)
        oPMAPPDCPPage.getItemNameField().should('have.attr', 'placeholder', 'পণ্যের নাম').click().type(this.prc.DCPItemNameWorks).should('have.value', this.prc.DCPItemNameWorks)   //পণ্যের নাম
        cy.wait(1000)
        oPMAPPDCPPage.getSearchHereButton().should('include.text', 'অনুসন্ধান করুন').click()   //  এখানে অনুসন্ধান করুন button
        cy.wait(4000)

        oPMAPPDCPPage.getQuantityInputField().first().click().type(this.prc.DCPItemQuantity).should('have.value', this.prc.DCPItemQuantity)  //পরিমাণ
        cy.wait(2000)
        //oPMAPPDCPPage.getUnitField().first().click()  //একক
        //requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPItemUnit).click()
        //cy.wait(1000)
        oPMAPPDCPPage.getUnitRateField().first().click().type(this.prc.DCPItemUnitRate).should('have.value', this.prc.DCPItemUnitRate)   //প্রতি একক মূল্য
        cy.wait(1000)
        oPMAPPDCPPage.getSearchItemRemarksField().first().click().type(this.prc.DCPItemRemarks).should('have.value', this.prc.DCPItemRemarks)   //মন্তব্য
        cy.wait(1000)
        oPMAPPDCPPage.getAddToListPlusIcon().first().should('have.class', 'material-icons').click()  // Add plus icon
        cy.wait(5000)
        oPMAPPDCPPage.getCloseButton().should('have.text', 'বন্ধ করুন').click()
        cy.wait(2000)
        
        oPMAPPDCPPage.getDiscountField().type('{del}{selectall}{backspace}').type(this.prc.DCPDiscount).should('have.value', this.prc.DCPDiscount)   //ছাড়
        cy.wait(2000)
        oPMAPPDCPPage.getVatField().type('{del}{selectall}{backspace}').type(this.prc.DCPVat).should('have.value', this.prc.DCPVat)   //ভ্যাট
        cy.wait(2000)
        oPMAPPDCPPage.getAitField().type('{del}{selectall}{backspace}').type(this.prc.DCPAit).should('have.value', this.prc.DCPAit)   //এআইটি
        cy.wait(2000)

        oPMAPPDCPPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(3000)
        oPMAPPDCPPage.getPopupTitle().should('include.text', 'নিশ্চিতকরণ')
        oPMAPPDCPPage.getYesButton().should('include.text', 'হ্যাঁ').click()   // হ্যাঁ button 
        cy.wait(3000)
        oPMAPPDCPPage.getPopupTitle().should('include.text', 'আপনি কি এই প্যাকেজ সমূহ লক করতে চান?')
        oPMAPPDCPPage.getYesButton().should('include.text', 'হ্যাঁ').click()   // হ্যাঁ button on lock page
        cy.wait(6000)
    })

    //Create a Payment Schedule for Works package 
    it('Create Payment Schedule for OPM Through APP (Works) as a PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ওপিএম').click({force: true})
        cy.wait(1000)
        leftNavMenu.getThroughAPPOPMSubMenu().contains('এপিপির মাধ্যমে').click()
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্টের তালিকা')

        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired reference no
        {
            const textReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textReferenceNo.includes(this.prc.OPMAPPReferenceNoWorks))
            {
                //$el.find('td button mat-icon:eq(0)').click()
                $el.find('td button mat-icon').first().click()
            }
        })
        cy.wait(5000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্ট')

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the DCP Item Name Works
        {
            const textDCPItemName=$el.find('td.e-rowcell[aria-label]').text()
            if(textDCPItemName.includes(this.prc.DCPItemNameWorks))
            {
                $el.find('td button .fa-calendar').click()
            }
        })
        cy.wait(4000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'পেমেন্ট শিডিউল তালিকা')
        oPMAPPDCPPage.getNewPaymentScheduleButton().click()     //New পেমেন্ট শিডিউল  button
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'পেমেন্ট শিডিউল তৈরি করুন')
        oPMAPPDCPPage.getCompletionPercentageField().should('have.attr', 'placeholder', 'সমাপ্তির শতাংশ').click().type(this.prc.CompletionPercentage).should('have.value', this.prc.CompletionPercentage)
        cy.wait(2000)
        oPMAPPDCPPage.getPaymentPercentageField().should('have.attr', 'placeholder', 'পরিশোধ শতাংশ').click().type(this.prc.PaymentPercentage).should('have.value', this.prc.PaymentPercentage)
        cy.wait(2000)
        oPMAPPDCPPage.getDateCalendar().click()   //তারিখ
        cy.wait(1000)
        cy.calendar(this.prc.DCPYear, this.prc.DCPMonth, this.prc.EstimatedCompletionDate)
        /*
        oPMAPPDCPPage.getCalendarYearView().click()
        oPMAPPDCPPage.getYear().contains(this.prc.DCPYear).click()
        oPMAPPDCPPage.getMonth().contains(this.prc.DCPMonth).click()
        oPMAPPDCPPage.getDate().contains(this.prc.EstimatedCompletionDate).click()
        cy.wait(2000)
        */

        requisitionDeclarationPage.getSubmittedHeader().should('include.text', 'ডেলিভারেবলস সিলেক্ট করুন')

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //ডেলিভারেবলস সিলেক্ট Works
        {
            const textDeliverable=$el.find('td.e-rowcell[aria-label]').text()
            if(textDeliverable.includes(this.prc.Deliverable))
            {
                $el.find('td label .e-frame').click()
            }
        })
        cy.wait(4000)

        oPMAPPDCPPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(200)
        oPMAPPDCPPage.getPopupTitle().should('include.text', 'নিশ্চিতকরণ')
        oPMAPPDCPPage.getYesButton().should('include.text', 'হ্যাঁ').click()   // হ্যাঁ button 
        cy.wait(7000) 
    })

    //Create a BOQ
    it('Create BOQ for Approved APP (Works) as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getBOQMenu().contains('বিওকিউ').click()
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বিওকিউ এর জন্য অর্ডার প্রসেস মানাজেমেন্টের তালিকা')
        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired reference no
        {
            const textReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textReferenceNo.includes(this.prc.OPMAPPReferenceNoWorks))
            {
                $el.find('td button .fa-table').click()
            }
        })
        cy.wait(4000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্টের সংক্ষিপ্ত বিবরণ')
        requisitionDeclarationPage.getSubmittedHeader().should('include.text', 'বিওকিউ এর তালিকা')

        oPMAPPDCPPage.getNewPaymentScheduleButton().click()
        cy.wait(3000)

        bOQPage.getBOQHeader().should('include.text', 'বিওকিউ প্রস্তুত করুন')
        bOQPage.getBOQReferenceNo().should('have.attr', 'placeholder', 'রেফারেন্স নং').click().type(this.prc.BOQReferenceNo).should('have.value', this.prc.BOQReferenceNo)
        cy.wait(2000)

        oPMAPPDCPPage.getDateCalendar().click()  //বিওকিউর তারিখ 
        cy.calendar(this.prc.DCPYear, this.prc.DCPMonth, this.prc.EstimatedCompletionDate)

        bOQPage.getBOQDescription().should('have.attr', 'placeholder', 'বিবরণ').click().type(this.prc.BOQDescription).should('have.value', this.prc.BOQDescription)
        cy.wait(2000)
        bOQPage.getBOQSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(6000)
    })

    //কাজের অগ্রগতি for APP Works
    it('Job Progress and Completed payment schedule of each work for OPM Through APP (Works) as a PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('বিল').click({force: true})
        cy.wait(1000)
        leftNavMenu.getJobProgressBillSubMenu().should('include.text', 'কাজের অগ্রগতি').click()
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'কাজের অগ্রগতির জন্য প্রস্তুত অর্ডার প্রসেস ম্যানেজমেন্টের তালিকা')

        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired reference no
        {
            const textReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textReferenceNo.includes(this.prc.OPMAPPReferenceNoWorks))
            {
                $el.find('td button .fa-calendar').click()
            }
        })
        cy.wait(4000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্টের বিস্তারিত তথ্য')

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the DCP Item Name Works
        {
            const textDCPItemName=$el.find('td.e-rowcell[aria-label]').text()
            if(textDCPItemName.includes(this.prc.DCPItemNameWorks))
            {
                $el.find('td button .fa-calendar').click()
            }
        })
        cy.wait(4000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'পেমেন্ট শিডিউল তালিকা')
        billPage.getAttachmentButton().should('include.text', 'এটাচমেন্ট').click()
        cy.wait(2000)
        billPage.getAttachmentLabel().should('include.text', 'ফাইল নির্বাচন করুন')

        const fileName = 'TestFile.pdf';
        billPage.getAttachmentUploadButton().attachFile(fileName);      //File Upload
        cy.wait(4000)

        billPage.getCloseAttachmentCard().should('include.text', 'বন্ধ করুন').click()
        cy.wait(2000)
        billPage.getFinishedButton().should('include.text', 'সমাপ্ত').click()
        cy.wait(2000)
        requisitionDeclarationPage.getConfirmationPageHeader().should('include.text', 'নিশ্চিতকরণ')
        requisitionDeclarationPage.getConfirmationPageYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(7000)
    })

    //বিল প্রস্তুত করুন 
    it('Create Bill of each work for OPM Through APP (Works) as a PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('বিল').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparationBillSubMenu().contains('প্রস্তুত করুন').click()
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বিলের জন্য প্রস্তুত অর্ডার প্রসেস ম্যানেজমেন্টের তালিকা')

        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired reference no
        {
            const textReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textReferenceNo.includes(this.prc.OPMAPPReferenceNoWorks))
            {
                $el.find('td button .fa-money').click()
            }
        })
        cy.wait(5000)
        
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্টের সংক্ষিপ্ত বিবরণ')
        requisitionDeclarationPage.getSubmittedHeader().should('include.text', 'বিলের তালিকা')

        billPage.getCreateBillButton().click()  //Create New Bill plus icon
        cy.wait(3000)

        bOQPage.getBOQHeader().should('include.text', 'বিল প্রস্তুত করুন')
        bOQPage.getBOQReferenceNo().should('have.attr', 'placeholder', 'রেফারেন্স নং').click().type(this.prc.BillReferenceNoWorks).should('have.value', this.prc.BillReferenceNoWorks)
        cy.wait(2000)
        billPage.getBillDateField().click() //বিলের তারিখ
        cy.calendar(this.prc.DCPYear, this.prc.DCPMonth, this.prc.EstimatedCompletionDate)
        cy.wait(1000)

        billPage.getEconomicCodeField().click()
        cy.wait(1500)
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.EconomicCode).click({force: true})
        cy.wait(2000)

        bOQPage.getBOQDescription().should('have.attr', 'placeholder', 'বিবরণ').click().type(this.prc.BillDescription).should('have.value', this.prc.BillDescription)
        cy.wait(2000)
        bOQPage.getBOQSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(5000)
        billPage.getCustomButton().should('include.text', 'কাস্টম').click()   //কাস্টম button
        cy.wait(3000)

        bOQPage.getBOQHeader().should('include.text', 'বিলের বিস্তারিত যোগ করুন')
        billPage.getEconomicCodeField().click()
        cy.wait(1500)
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.EconomicCode).click({force: true})
        cy.wait(2000)
        billPage.getAmountField().should('have.attr', 'placeholder', 'পরিমাণ').click().type(this.prc.CustomAmount).should('have.value', this.prc.CustomAmount)
        cy.wait(2000)
        bOQPage.getBOQDescription().should('have.attr', 'placeholder', 'বিবরণ').click().type(this.prc.BillCustomAmountDescription).should('have.value', this.prc.BillCustomAmountDescription)
        cy.wait(2000)
        bOQPage.getBOQSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(5000)

        billPage.getAdditionButton().should('include.text', 'সংযোজন').click() //সংযোজন button
        cy.wait(3000)

        bOQPage.getBOQHeader().should('include.text', 'সংযোজন যোগ করুন')
        billPage.getEconomicCodeField().click()
        cy.wait(1500)
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.EconomicCode).click({force: true})
        cy.wait(2000)
        billPage.getAmountField().should('have.attr', 'placeholder', 'পরিমাণ').click().type(this.prc.NetAmount).should('have.value', this.prc.NetAmount)
        cy.wait(2000)
        bOQPage.getBOQDescription().should('have.attr', 'placeholder', 'বিবরণ').click().type(this.prc.BillAdditionAmountDescription).should('have.value', this.prc.BillAdditionAmountDescription)
        cy.wait(2000)
        bOQPage.getBOQSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(5000)

        billPage.getBillAttachmentButton().should('include.text', 'এটাচমেন্ট').click()
        cy.wait(3000)

        billPage.getAttachmentLabel().should('include.text', 'ফাইল নির্বাচন করুন')
        const fileName = 'TestFile.pdf';
        billPage.getAttachmentUploadButton().attachFile(fileName);      //File Upload
        cy.wait(5000)
        billPage.getCloseAttachmentCard().should('include.text', 'বন্ধ করুন').click()
        cy.wait(2000)

        billPage.getBackButton().should('include.text', 'পূর্বে').click()
        cy.wait(3000)
        billPage.getBackButton().should('include.text', 'পূর্বে').click()
        cy.wait(4000)
    })

    //প্রস্তুতকৃত বিল দেখুন 
    it('View Prepared Bill of each work for OPM Through APP (Works) as a PE TC',function() 
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('বিল').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPreparedBillSubMenu().should('include.text', 'প্রস্তুতকৃত বিল').click()
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'বিলকৃত অর্ডার প্রসেস ম্যানেজমেন্টের তালিকা')

        requisitionDeclarationPage.getFiscalYearField().click()     //অর্থবছর
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPFiscalYear).click()
        cy.wait(3000)

        cy.pagination(this.prc.Pagination) //Pagination

        declarationSubmissionPage.getTableRow().each(($el, index, $list) =>     //Select the desired reference no
        {
            const textReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textReferenceNo.includes(this.prc.OPMAPPReferenceNoWorks))
            {
                const testStatus = $el.find('td[aria-label="COMPLETE column header অবস্থা"]').text()
                expect(testStatus.includes('COMPLETE')).to.be.true
            }
        })
        cy.wait(4000)
    })

    //Create OPM using APP for (Goods)
    it.skip('Create OPM Through APP (Goods) as a PE TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ওপিএম').click({force: true})
        cy.wait(1000)
        leftNavMenu.getThroughAPPOPMSubMenu().contains('এপিপির মাধ্যমে').click()
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্টের তালিকা')
        oPMAPPDCPPage.getEntryOrderItemsPlusButton().click()    //অর্ডার প্রসেস ম্যানেজমেন্ট button
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্ট')
        oPMAPPDCPPage.getFiscalYearField().click()  //অর্থবছর 
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requisitionFiscalYear).click()

        oPMAPPDCPPage.getCurrencyField().click()    //মুদ্রা 
        cy.wait(1000)
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPCurrency).click({force: true})
        cy.wait(1000)

        oPMAPPDCPPage.getVendorNameField().click()  //সরবরাহকারীর নাম
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPVendorName).click()
        cy.wait(1000)

        oPMAPPDCPPage.getDateCalendar().click()   //তারিখ
        oPMAPPDCPPage.getCalendarYearView().click()
        oPMAPPDCPPage.getYear().contains(this.prc.DCPYear).click()
        oPMAPPDCPPage.getMonth().contains(this.prc.DCPMonth).click()
        oPMAPPDCPPage.getDate().contains(this.prc.DCPDate).click()
        cy.wait(1000)

        oPMAPPDCPPage.getReferenceNoField().click().should('have.attr', 'placeholder', 'রেফারেন্স নং').type(this.prc.OPMAPPReferenceNo).should('have.value', this.prc.OPMAPPReferenceNo)   //রেফারেন্স নং
        cy.wait(1500)
        oPMAPPDCPPage.getDescriptionField().should('have.attr', 'placeholder', 'বিবরণ').click().type(this.prc.DCPDescription).should('have.value', this.prc.DCPDescription)   //বিবরণ 
        cy.wait(1500)
        oPMAPPDCPPage.getRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.prc.DCPRemarks).should('have.value', this.prc.DCPRemarks)   //মন্তব্য 
        cy.wait(1500)

        oPMAPPDCPPage.getPackageAPPButton().click()
        cy.wait(4000)
        oPMAPPDCPPage.getPackageHeader().should('include.text', 'প্যাকেজ')
        oPMAPPDCPPage.getPackageAPPCodeField().click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.aPPCode).click()
        cy.wait(2000)
        oPMAPPDCPPage.getPackageProcurementMethodField().click()
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.ProcurementMethod).click()
        cy.wait(2000)

        oPMAPPDCPPage.getPackageRow().each(($el, index, $list) =>     //Select the desired package for added OPM
        {
            const textPackageNo=$el.find('td.e-rowcell[aria-label]').text()
            if(textPackageNo.includes(this.prc.PackageNo))                    
            {
                $el.find('td label > .e-icons').click()
                //cy.log(textPackageNo)
            }
        })
        cy.wait(2000)
        oPMAPPDCPPage.getPackageSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(2000) 
        oPMAPPDCPPage.getItemButton().click()   //  দ্রব্যাদি  button clicks
        cy.wait(4000)

        //আইটেম অনুসন্ধান pop-up
        oPMAPPDCPPage.getPackageHeader().should('include.text', 'আইটেম অনুসন্ধান')
        oPMAPPDCPPage.getItemCategoryField().should('have.attr', 'aria-label', 'পণ্যের ধরণ').click()  // পণ্যের ধরণ field
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPItemCategory).click()
        cy.wait(1500)
        oPMAPPDCPPage.getItemNameField().should('have.attr', 'placeholder', 'পণ্যের নাম').click().type(this.prc.DCPItemName).should('have.value', this.prc.DCPItemName)   //পণ্যের নাম
        cy.wait(1000)
        oPMAPPDCPPage.getSearchHereButton().should('include.text', 'অনুসন্ধান করুন').click()   //  এখানে অনুসন্ধান করুন button
        cy.wait(4000)

        oPMAPPDCPPage.getQuantityInputField().first().click().type(this.prc.DCPItemQuantity).should('have.value', this.prc.DCPItemQuantity)  //পরিমাণ
        cy.wait(1000)
        oPMAPPDCPPage.getUnitField().first().click()  //একক
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPItemUnit).click()
        cy.wait(1000)
        oPMAPPDCPPage.getUnitRateField().first().click().type(this.prc.DCPItemUnitRate).should('have.value', this.prc.DCPItemUnitRate)   //প্রতি একক মূল্য
        cy.wait(1000)
        oPMAPPDCPPage.getSearchItemRemarksField().first().click().type(this.prc.DCPItemRemarks).should('have.value', this.prc.DCPItemRemarks)   //মন্তব্য
        cy.wait(1000)
        oPMAPPDCPPage.getAddToListPlusIcon().first().should('have.class', 'material-icons').click()  // Add plus icon
        cy.wait(5000)
        oPMAPPDCPPage.getCloseButton().should('have.text', 'বন্ধ করুন').click()
        cy.wait(2000)
        
        oPMAPPDCPPage.getDiscountField().type('{del}{selectall}{backspace}').type(this.prc.DCPDiscount).should('have.value', this.prc.DCPDiscount)   //ছাড়
        cy.wait(2000)
        oPMAPPDCPPage.getVatField().type('{del}{selectall}{backspace}').type(this.prc.DCPVat).should('have.value', this.prc.DCPVat)   //ভ্যাট
        cy.wait(2000)
        oPMAPPDCPPage.getAitField().type('{del}{selectall}{backspace}').type(this.prc.DCPAit).should('have.value', this.prc.DCPAit)   //এআইটি
        cy.wait(2000)

        oPMAPPDCPPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(3000)
        oPMAPPDCPPage.getPopupTitle().should('include.text', 'নিশ্চিতকরণ')
        oPMAPPDCPPage.getYesButton().should('include.text', 'হ্যাঁ').click()   // হ্যাঁ button 
        cy.wait(3000)
        oPMAPPDCPPage.getPopupTitle().should('include.text', 'আপনি কি এই প্যাকেজ সমূহ লক করতে চান?')
        oPMAPPDCPPage.getYesButton().should('include.text', 'হ্যাঁ').click()   // হ্যাঁ button on lock page
        cy.wait(6000)  
    })

    //Material Receive as Store Keeper on AST module
    //Create OPM using APP
    it.only('PE: Create OPM Through DCP. TC',function()
    {
        cy.login(this.prc.userNamePE, this.prc.passwordPE)

        dashboardPage.getPRCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ওপিএম').click({force: true})
        cy.wait(1000)
        leftNavMenu.getDCPOPMSubMenu().contains('ডিসিপি').click()
        cy.wait(3000) 
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্টের তালিকা')
        oPMAPPDCPPage.getEntryOrderItemsPlusButton().click()    //অর্ডার প্রসেস ম্যানেজমেন্ট button
        cy.wait(3000)
        requisitionDeclarationPage.getNotifyHeader().should('include.text', 'অর্ডার প্রসেস ম্যানেজমেন্ট')
        oPMAPPDCPPage.getFiscalYearField().click()  //অর্থবছর 
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.requisitionFiscalYear).click()

        oPMAPPDCPPage.getCurrencyField().click()    //মুদ্রা 
        cy.wait(1000)
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPCurrency).click({force: true})
        cy.wait(1000)

        oPMAPPDCPPage.getVendorNameField().click()  //সরবরাহকারীর নাম
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPVendorName).click()
        cy.wait(1000)

        oPMAPPDCPPage.getDateCalendar().click()   //তারিখ
        cy.wait(1000)
        cy.calendar(this.prc.DCPYear, this.prc.DCPMonth, this.prc.DCPDate)

        oPMAPPDCPPage.getReferenceNoField().click().should('have.attr', 'placeholder', 'রেফারেন্স নং').type(this.prc.DCPReferenceNo).should('have.value', this.prc.DCPReferenceNo)   //রেফারেন্স নং
        cy.wait(1500)
        oPMAPPDCPPage.getDescriptionField().should('have.attr', 'placeholder', 'বিবরণ').click().type(this.prc.DCPDescription).should('have.value', this.prc.DCPDescription)   //বিবরণ 
        cy.wait(1500)
        oPMAPPDCPPage.getRemarksField().should('have.attr', 'placeholder', 'মন্তব্য').click().type(this.prc.DCPRemarks).should('have.value', this.prc.DCPRemarks)   //মন্তব্য 
        cy.wait(1500)

        oPMAPPDCPPage.getItemButton().click()   //  দ্রব্যাদি  button clicks
        cy.wait(4000)

        //আইটেম অনুসন্ধান pop-up
        oPMAPPDCPPage.getPackageHeader().should('include.text', 'আইটেম অনুসন্ধান')
        oPMAPPDCPPage.getItemCategoryField().should('have.attr', 'aria-label', 'পণ্যের ধরণ').click()  // পণ্যের ধরণ field
        requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPItemCategoryGoods).click()
        cy.wait(1500)
        oPMAPPDCPPage.getItemNameField().should('have.attr', 'placeholder', 'পণ্যের নাম').click().type(this.prc.DCPItemNameGoods).should('have.value', this.prc.DCPItemNameGoods)   //পণ্যের নাম
        cy.wait(1000)
        oPMAPPDCPPage.getSearchHereButton().should('include.text', 'অনুসন্ধান করুন').click()   //  এখানে অনুসন্ধান করুন button
        cy.wait(2000)

        oPMAPPDCPPage.getQuantityInputField().first().click().type(this.prc.DCPItemQuantity).should('have.value', this.prc.DCPItemQuantity)  //পরিমাণ
        cy.wait(2000)
        //oPMAPPDCPPage.getUnitField().first().click()  //একক
        //requisitionDeclarationPage.getDropDownItem().contains(this.prc.DCPItemUnit).click()
        //cy.wait(1000)
        oPMAPPDCPPage.getUnitRateField().first().click().type(this.prc.DCPItemUnitRate).should('have.value', this.prc.DCPItemUnitRate)   //প্রতি একক মূল্য
        cy.wait(1000)
        oPMAPPDCPPage.getSearchItemRemarksField().first().click().type(this.prc.DCPItemRemarks).should('have.value', this.prc.DCPItemRemarks)   //মন্তব্য
        cy.wait(1000)
        oPMAPPDCPPage.getAddToListPlusIcon().first().should('have.class', 'material-icons').click()  // Add plus icon
        cy.wait(5000)
        oPMAPPDCPPage.getCloseButton().should('have.text', 'বন্ধ করুন').click()
        cy.wait(2000)
        
        oPMAPPDCPPage.getDiscountField().type('{del}{selectall}{backspace}').type(this.prc.DCPDiscount).should('have.value', this.prc.DCPDiscount)   //ছাড়
        cy.wait(2000)
        oPMAPPDCPPage.getVatField().type('{del}{selectall}{backspace}').type(this.prc.DCPVat).should('have.value', this.prc.DCPVat)   //ভ্যাট
        cy.wait(2000)
        oPMAPPDCPPage.getAitField().type('{del}{selectall}{backspace}').type(this.prc.DCPAit).should('have.value', this.prc.DCPAit)   //এআইটি
        cy.wait(2000)

        oPMAPPDCPPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(3000)
        oPMAPPDCPPage.getPopupTitle().should('include.text', 'নিশ্চিতকরণ')
        oPMAPPDCPPage.getYesButton().should('include.text', 'হ্যাঁ').click()   // হ্যাঁ button 
        
        /* 
        cy.wait(3000)
        oPMAPPDCPPage.getPopupTitle().should('include.text', 'আপনি কি এই প্যাকেজ সমূহ লক করতে চান?')
        oPMAPPDCPPage.getYesButton().should('include.text', 'হ্যাঁ').click()   // হ্যাঁ button on lock page
        */
        cy.wait(6000)  
    })
})
