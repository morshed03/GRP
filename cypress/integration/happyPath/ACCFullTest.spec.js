/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'
import LeftNavMenu from '../../support/ACC/pageObjects/LeftNavMenu'
import BillPage from '../../support/ACC/pageObjects/BillPage'
import InvoicePage from '../../support/ACC/pageObjects/InvoicePage'


describe('Accounts Module Regression Test Suite', function()
{
    beforeEach(function() 
    {
      cy.fixture('ACCTestDataSQA').then(function(acc)
      {
        this.acc = acc
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
    const billPage = new BillPage()
    const invoicePage = new InvoicePage()

    //নতুন বিল যোগ করুন
    it('TC_01. Account Officer: Create Bill',function() 
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ব্যয়').click({force: true})
        cy.wait(1000)
        leftNavMenu.getBillSubMenu().should('include.text', 'বিল').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'বিলের তালিকা')
        billPage.getCreateBillButton().click()
        cy.wait(2000)
        
        billPage.getToField().click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.BillTo).click()
        cy.wait(1000)

        billPage.getInstitutionField().click()
        cy.wait(1000)
        billPage.getDropDownItemSearch().click().type(this.acc.InstitutionName)
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.InstitutionName).click()
        cy.wait(1000)

        billPage.getBillTitleField().should('have.attr', 'placeholder', 'শিরোনাম').click().type(this.acc.BillTitle)
        cy.wait(1000)

        billPage.getBillFiscalYearField().click()
        billPage.getDropDownItem().contains(this.acc.FiscalYear).click()
        cy.wait(1000)

        billPage.getBillTypeField().click()
        billPage.getDropDownItem().contains(this.acc.BillType).click()
        cy.wait(1000)

        billPage.getBillReferenceField().clear().type(this.acc.BillReferenceNo)
        cy.wait(1000)

        billPage.getBillSaveButton().click()
        cy.wait(1500)

        billPage.getYesButton().click()
        cy.wait(6000)
        
    })
    it('TC_02. Account Officer: Add Bill Details & Vat Tax',function() 
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ব্যয়').click({force: true})
        cy.wait(1000)
        leftNavMenu.getBillSubMenu().should('include.text', 'বিল').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'বিলের তালিকা')
        billPage.getSearchField().click().type(this.acc.BillTitle).type('{enter}')
        cy.wait(1000)

        billPage.getAddBillDetails().click()
        cy.wait(2500)

        billPage.getPageHeader().should('include.text', 'বিস্তারিত বিল তৈরি')
        billPage.getAddBillDescriptionPlusButton().click()
        cy.wait(2500)

        billPage.getOperationCodeField().click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.OperationCode).click()
        cy.wait(1000)

        billPage.getFundCodeField().click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.FundCode).click()
        cy.wait(1000)

        billPage.getEconomicCodeField().click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.EconomicCode).click()
        cy.wait(1000)

        billPage.getNatureOfFundField().click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.NatureOfFund).click()
        cy.wait(1000)

        billPage.getSubCoAField().click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.SubCoA).click()
        cy.wait(1000)

        billPage.getBillDescriptionField().click().type(this.acc.BillDescription)
        cy.wait(1000)

        billPage.getBillAmountField().click().type(this.acc.BillAmount)
        cy.wait(1000)

        billPage.getBillDetailsSaveButton().click()
        cy.wait(5000)

        //ভ্যাট-ট্যাক্স 
        billPage.getAddBillVatTaxButton().click()
        cy.wait(3000)

        billPage.getEconomicCodeField().click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.VatEconomicCode).click()
        cy.wait(1000)

        billPage.getBillDetailsSaveButton().click()
        cy.wait(6000)
    })
    it('TC_03. Account Officer: Send Bill to DDO for approval',function() 
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ব্যয়').click({force: true})
        cy.wait(1000)
        leftNavMenu.getBillSubMenu().should('include.text', 'বিল').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'বিলের তালিকা')
        billPage.getSearchField().click().type(this.acc.BillTitle)
        cy.wait(1000)

        billPage.getBillDetailsButton().click()
        cy.wait(1000)

        billPage.getBillSendButton().click()
        cy.wait(1000)

        billPage.getUserNameField().click().type(this.acc.DDOName)
        cy.wait(1000)

        billPage.getUserSearchButton().click()
        cy.wait(2000)

        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired DDO
        {
            const DDOName=$el.find('td.e-rowcell[aria-label]').text()
            if(DDOName.includes(this.acc.DDOName))                
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)
        billPage.getYesButton().click()       
        cy.wait(6000)
    })
    it('TC_04. DDO: Approved the Bill',function() 
    {
        cy.login(this.acc.DDOID, this.acc.DDOPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPendingBillSubMenu().should('include.text', 'অপেক্ষমান বিল').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'অপেক্ষমান বিলের তালিকা')
        

        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired Bill Reference No
        {
            const BillReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(BillReferenceNo.includes(this.acc.BillReferenceNo))                
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)

        billPage.getApprovalRow().each(($el, index, $list) =>     //Select the desired অপেক্ষমান
        {
            const DDONameText=$el.find('td.e-rowcell[aria-label]').text()
            if(DDONameText.includes(this.acc.DDOName))                
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)
        billPage.getApprovedCommentField().click().type(this.acc.ApprovedComment)
        cy.wait(1000)
        billPage.getApprovedbutton().contains('অনুমোদন করুন').click()
        cy.wait(2000)
        billPage.getYesButton().click()       
        cy.wait(6000)
    })
    it('TC_05. Account Officer: Create an Invoice',function()
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ব্যয়').click({force: true})
        cy.wait(1000)
        leftNavMenu.getApprovedBillSubMenu().should('include.text', 'অনুমোদিত বিল').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'অনুমোদিত বিলের তালিকা')
        invoicePage.getFiscalYearField().should('have.attr', 'aria-label', 'অর্থবছর').click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.FiscalYear).click()
        cy.wait(1000)

        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired DDO
        {
            const BillReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(BillReferenceNo.includes(this.acc.BillReferenceNo))                
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(3000)
        invoicePage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(1000)

        billPage.getYesButton().click()       
        cy.wait(6000)
    })
    it('TC_06. Account Officer: Send an Invoice to DDO for approval',function()
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ব্যয়').click({force: true})
        cy.wait(1000)
        leftNavMenu.getInvoiceSubMenu().should('include.text', 'ইনভয়েস').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'ইনভয়েস তালিকা')
        invoicePage.getFiscalYearField().should('have.attr', 'aria-label', 'অর্থবছর').click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.FiscalYear).click()
        cy.wait(1000)

        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired Invoice Ref No
        {
            const InvoiceferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(InvoiceferenceNo.includes(this.acc.InvoiceReferenceNo))                
            {
                $el.find('td button mat-icon:eq(1)').click()
            }
        })
        cy.wait(3000)
        invoicePage.getSendButton().should('include.text', 'সংরক্ষণ এবং প্রেরণ করুণ').click()
        cy.wait(1000)
        billPage.getYesButton().click()
        cy.wait(2000)

        billPage.getUserNameField().click().type(this.acc.DDOName)
        cy.wait(1000)

        billPage.getUserSearchButton().click()
        cy.wait(2000)

        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired DDO
        {
            const DDOName=$el.find('td.e-rowcell[aria-label]').text()
            if(DDOName.includes(this.acc.DDOName))                
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)
        billPage.getYesButton().click()       
        cy.wait(6000)
    })
    it('TC_07. DDO: Approved the pending Invoice',function() 
    {
        cy.login(this.acc.DDOID, this.acc.DDOPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('অনুমোদন অপেক্ষমান').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPendingInvoiceSubMenu().should('include.text', 'অপেক্ষমান ইনভয়েস').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'অপেক্ষমান ইনভয়েসের তালিকা')
        
        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired Bill Reference No
        {
            const InvoiceReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(InvoiceReferenceNo.includes(this.acc.InvoiceReferenceNo))                
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)

        billPage.getApprovalRow().each(($el, index, $list) =>     //Select the desired অপেক্ষমান
        {
            const DDONameText=$el.find('td.e-rowcell[aria-label]').text()
            if(DDONameText.includes(this.acc.DDOName))                
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)
        billPage.getApprovedCommentField().click().type(this.acc.ApprovedComment)
        cy.wait(1000)
        billPage.getApprovedbutton().contains('অনুমোদন করুন').click()
        cy.wait(2000)
        invoicePage.getSkipButton().contains('এড়িয়ে যান').click()
        cy.wait(2000)
        billPage.getYesButton().click() 
        cy.wait(6000)
    })
    it.only('TC_08. Account Officer: Add approval information of an Invoice',function()
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ব্যয়').click({force: true})
        cy.wait(1000)
        leftNavMenu.getApprovedInvoiceSubMenu().should('include.text', 'অনুমোদিত ইনভয়েস').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'অনুমোদিত ইনভয়েস সমূহ')
        invoicePage.getFiscalYearField().should('have.attr', 'aria-label', 'অর্থবছর').click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.FiscalYear).click()
        cy.wait(1000)

        

        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired Invoice Ref No
        {
            const InvoiceferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(InvoiceferenceNo.includes(this.acc.InvoiceReferenceNo))                
            {
                $el.find('td button mat-icon:eq(1)').click()
            }
        })
        cy.wait(3000)
        invoicePage.getSendButton().should('include.text', 'সংরক্ষণ এবং প্রেরণ করুণ').click()
        cy.wait(1000)
        billPage.getYesButton().click()
        cy.wait(2000)

        billPage.getUserNameField().click().type(this.acc.DDOName)
        cy.wait(1000)

        billPage.getUserSearchButton().click()
        cy.wait(2000)

        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired DDO
        {
            const DDOName=$el.find('td.e-rowcell[aria-label]').text()
            if(DDOName.includes(this.acc.DDOName))                
            {
                $el.find('td button mat-icon').click()
            }
        })
        cy.wait(3000)
        billPage.getYesButton().click()       
        cy.wait(6000)
    })
})