/// <reference types="Cypress" />

//import pages
import DashboardPage from '../../support/commonPage/DashboardPage'
import LeftNavMenu from '../../support/ACC/pageObjects/LeftNavMenu'
import BankAccountPageActions from '../../support/ACC/pageActions/BankAccountPageActions'
import CommonPageActions from '../../support/ACC/pageActions/CommonPageActions'
import BillPage from '../../support/ACC/pageObjects/BillPage'
import InvoicePage from '../../support/ACC/pageObjects/InvoicePage'
import PaymentPage from '../../support/ACC/pageObjects/PaymentPage'
import VatTaxAitPaymentPage from '../../support/ACC/pageObjects/VatTaxAitPaymentPage'
import FundReturnPage from '../../support/ACC/pageObjects/FundReturnPage'
///adddd

////Sahadat add test merge
////Sahadat add test merge

////Sahadat add test again merge
////Sahadat add test again merge 



///morshed bhai addd
///morshed bhai addd

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
    const bankAccountPageActions = new BankAccountPageActions()
    const commonPageActions = new CommonPageActions()
    const billPage = new BillPage()
    const invoicePage = new InvoicePage()
    const paymentPage = new PaymentPage()
    const vatTaxAitPaymentPage = new VatTaxAitPaymentPage()
    const fundReturnPage = new FundReturnPage()

    //ব্যাংক হিসাব তৈরি
    it.only('TC_01. Account Officer: Create a Bank account',function()
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('হিসাব রক্ষন ব্যবস্থাপনা').click({force: true})
        cy.wait(1000)
        leftNavMenu.getBankAccountSubMenu().should('include.text', 'ব্যাংক হিসাব').click()
        cy.wait(3000)

        commonPageActions.PageFirstHeader(this.acc.BankAccountData.BankListingPageTitle) //Verify ব্যাংক হিসাব page header
        bankAccountPageActions.ClickCreatePlusButton()  //Clicks add plus icon
        commonPageActions.PageFirstHeader(this.acc.BankAccountData.CreateBankAccountFormTitle)  //Verify create page header
        bankAccountPageActions.AddBankAccountDetails(this.acc.BankAccountData.accountType, this.acc.BankAccountData.economicCode, this.acc.BankAccountData.bankName, this.acc.BankAccountData.branchName, this.acc.BankAccountData.accountTitle, this.acc.BankAccountData.accountNumber, this.acc.BankAccountData.routingNumber, this.acc.BankAccountData.IBANNumber, this.acc.BankAccountData.SwiftCode, this.acc.BankAccountData.SignatoryNumber)
        //commonPageActions.Confirmed(this.acc.GlobalData.ConfirmModalHeader, this.acc.GlobalData.Yes)
        
    })
    
    //নতুন বিল যোগ করুন
    //নতুন বিল যোগ করুন Test merge Req.
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
        billPage.getSearchField().click().type(this.acc.BillTitle).should('have.value', this.acc.BillTitle).type('{enter}')
        cy.wait(2000)

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
        invoicePage.getInvoiceReferenceField().clear().type(this.acc.InvoiceReferenceNo).should('have.value', this.acc.InvoiceReferenceNo)
        cy.wait(1000)
        invoicePage.getInvoiceSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
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
    it('TC_08. Account Officer: Add approval information of an Invoice',function()
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
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(3000)
        invoicePage.getPaymentMethod().click()
        cy.wait(500)
        billPage.getDropDownItem().contains(this.acc.PaymentMethod).click()
        cy.wait(1000)

        invoicePage.getBankAccount().click()
        cy.wait(500)
        billPage.getDropDownItem().contains(this.acc.BankAccount).click({force: true})
        cy.wait(1000)

        invoicePage.getSaveButton().contains('সংরক্ষণ করুন').click()
        cy.wait(1000)
        billPage.getYesButton().click() 
        cy.wait(6000)
    })
    
    //Payment Flow
    it('TC_09. Account Officer: Make Payment for an unpaid Invoice',function()
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
        leftNavMenu.getDropDownMenu().contains('মূল্যপরিশোধ').click({force: true})
        cy.wait(1000)
        leftNavMenu.getUnpaidInvoiceSubMenu().should('include.text', 'অপরিশোধিত ইনভয়েস').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'মূল্যপরিশোধের জন্য ইনভয়েস এর তালিকা')
        invoicePage.getFiscalYearField().should('have.attr', 'aria-label', 'অর্থবছর').click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.FiscalYear).click()
        cy.wait(1000)
        /*
        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired Invoice Ref No
        {
            const InvoiceferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(InvoiceferenceNo.includes(this.acc.InvoiceReferenceNo))
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(3000)
        */
        billPage.getSearchField().click().type(this.acc.InvoiceReferenceNo).type('{enter}')
        cy.wait(1000)
        
        paymentPage.getMakePaymentIcon().click()
        cy.wait(2000)

        paymentPage.getVoucherField().clear().type(this.acc.VoucherNo).should('have.value', this.acc.VoucherNo)
        cy.wait(1000)

        paymentPage.getChequeField().type(this.acc.Cheque).should('have.value', this.acc.Cheque)
        cy.wait(1000)

        paymentPage.getPaymentDescriptionField().type(this.acc.PaymentDescription).should('have.value', this.acc.PaymentDescription)
        cy.wait(1000)

        paymentPage.getPaymentSaveButton().contains('দাখিল করুন').click()
        cy.wait(1000)
        billPage.getYesButton().click() 
        cy.wait(6000)
    })
    it('TC_10. Account Officer: Verify the Payment is PAID',function()
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
        leftNavMenu.getDropDownMenu().contains('মূল্যপরিশোধ').click({force: true})
        cy.wait(1000)
        leftNavMenu.getPaymentListSubMenu().should('include.text', 'মূল্যপরিশোধের তালিকা').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'মূল্যপরিশোধের তালিকা')
        invoicePage.getFiscalYearField().should('have.attr', 'aria-label', 'অর্থবছর').click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.FiscalYear).click()
        cy.wait(1000)
        
        cy.get('tr td:nth-child(3)').each(($e1, index, $list) => {

          const PaymentDescriptionText=$e1.text()
          if(PaymentDescriptionText.includes(this.acc.PaymentDescription))
          {
              cy.get('tr td:nth-child(3)').eq(index).next().next().next().then(function(caseReference)
              {
                  const caseReferenceText = caseReference.text()
                  expect(caseReferenceText).to.equal('PAID')
              })
          }
        })
        cy.wait(6000)
    })

    //VAT TAX AIT flow **********************************************************
    it('TC_11. Account Officer: Group Creation of VAT TAX',function()
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ভ্যাট ট্যাক্স এআইটি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getGroupCreationSubMenu().should('include.text', 'গ্রুপ তৈরিকরণ').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'গ্রুপ তৈরিকরণ')
        cy.selectItems(this.acc.VatEconomicCode)

        vatTaxAitPaymentPage.getSaveButton().contains('দাখিল করুন').click()
        billPage.getYesButton().click() 
        cy.wait(6000)
    })
    it('TC_12. Account Officer: VAT TAX AIT Payment Challan Prepare',function()
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ভ্যাট ট্যাক্স এআইটি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getVatTaxAitPaymentSubMenu().should('include.text', 'ভ্যাট ট্যাক্স এআইটি প্রদান').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'গ্রুপ তথ্যের তালিকা')
        cy.pagination(this.acc.Pagination)
        cy.wait(3000)

        billPage.getCardRows().last().find('td button').first().click()
        cy.wait(2000)

        vatTaxAitPaymentPage.getChallanNoField().type(this.acc.ChallanNo).should('have.value', this.acc.ChallanNo)
        cy.wait(1000)

        vatTaxAitPaymentPage.getChallanDateField().click()
        cy.wait(500)
        cy.calendar(this.acc.PaymentYear, this.acc.PaymentMonth, this.acc.PaymentDay)

        vatTaxAitPaymentPage.getBankDistrictField().type(this.acc.BankDistrictName).should('have.value', this.acc.BankDistrictName)
        cy.wait(1000)

        vatTaxAitPaymentPage.getBankBranchField().type(this.acc.BankBranchName).should('have.value', this.acc.BankBranchName)
        cy.wait(1000)

        vatTaxAitPaymentPage.getDepositedByField().type(this.acc.DepositedBy).should('have.value', this.acc.DepositedBy)
        cy.wait(1000)

        vatTaxAitPaymentPage.getDepositedForField().type(this.acc.DepositedFor).should('have.value', this.acc.DepositedFor)
        cy.wait(1000)
        
        vatTaxAitPaymentPage.getDepositPurposeField().type(this.acc.DepositPurpose).should('have.value', this.acc.DepositPurpose)
        cy.wait(1000)

        vatTaxAitPaymentPage.getSaveButton().contains('দাখিল করুন').click()
        cy.wait(500)
        billPage.getYesButton().click() 
        cy.wait(6000)
    })
    it('TC_13. Account Officer: VAT TAX AIT make Payment',function()
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ভ্যাট ট্যাক্স এআইটি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getVatTaxAitPaymentSubMenu().should('include.text', 'ভ্যাট ট্যাক্স এআইটি প্রদান').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'গ্রুপ তথ্যের তালিকা')
        cy.pagination(this.acc.Pagination)
        cy.wait(3000)

        billPage.getCardRows().last().find('td button:eq(1)').first().click()
        cy.wait(2000)

        billPage.getPageHeader().should('include.text', 'ট্রেজারি এর মূল্যপরিশোধ')

        vatTaxAitPaymentPage.getTreasuryVoucherNoField().clear().type(this.acc.TreasuryVoucher).should('have.value', this.acc.TreasuryVoucher)
        cy.wait(1000)

        vatTaxAitPaymentPage.getTreasuryDiscriptionField().type(this.acc.PaymentDescription).should('have.value', this.acc.PaymentDescription)
        cy.wait(1000)
        
        vatTaxAitPaymentPage.getSaveButton().contains('দাখিল করুন').click()
        cy.wait(500)
        billPage.getYesButton().click() 
        cy.wait(6000)
    })
    it('TC_14. Account Officer: Verify the paid VAT TAX AIT Status',function()
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('ভ্যাট ট্যাক্স এআইটি').click({force: true})
        cy.wait(1000)
        leftNavMenu.getVatTaxAitPaymentSubMenu().should('include.text', 'ভ্যাট ট্যাক্স এআইটি প্রদান').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'গ্রুপ তথ্যের তালিকা')
        cy.pagination(this.acc.Pagination)
        cy.wait(3000)

        billPage.getCardRows().last().find('td:nth-child(5)').should('have.text', 'DEPOSITED')
        cy.wait(2000)
    })

    //Fund Return Flow *********************************************************
    it('TC_15. Account Officer: Fund Return Request',function()
    {
        cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('কেন্দ্রীয় হিসাবরক্ষণ').click({force: true})
        cy.wait(1000)
        leftNavMenu.getFundReturnSubMenu().should('include.text', 'তহবিল ফেরত').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'ফেরতকৃত তহবিল তালিকা')
        invoicePage.getFiscalYearField().should('have.attr', 'aria-label', 'অর্থবছর').click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.FiscalYear).click()
        cy.wait(1000)

        fundReturnPage.getAddButton().click()
        cy.wait(2000)

        fundReturnPage.getBudgetField().should('have.attr', 'aria-label', 'বাজেট').click()
        cy.wait(500)
        billPage.getDropDownItem().contains(this.acc.Budget).click()
        cy.wait(2000)

        fundReturnPage.getReferenceField().should('have.attr', 'placeholder', 'রেফারেন্স নং').clear().type(this.acc.FundReturnReferenceNo).should('have.value', this.acc.FundReturnReferenceNo)
        cy.wait(1000)

        fundReturnPage.getDescriptionField().should('have.attr', 'placeholder', 'বিবরণ').type(this.acc.FundReturnDescripton).should('have.value', this.acc.FundReturnDescripton)
        cy.wait(1000)
        
        fundReturnPage.getQuentityField().clear().type(this.acc.RefundAmount).should('have.value', this.acc.RefundAmount)
        cy.wait(1000)

        fundReturnPage.getSaveButton().should('include.text', 'সংরক্ষণ করুন').click()
        cy.wait(1000)
        billPage.getYesButton().should('include.text', 'হ্যাঁ').click()
        cy.wait(6000)
    })
    it('TC_16. Account Officer: Send a Fund Request to DDO for approval',function()
    {
      cy.login(this.acc.AccountOfficerID, this.acc.AccountOfficerPassword)
      /*
        //Select office if needed
        dashboardPage.getOfficePopUpHeader().should('include.text', 'অফিস/পদ নির্বাচন করুন')
        dashboardPage.getOfficeName().contains(this.acc.OfficeUnit).click()
      */  cy.wait(4000)
      
        dashboardPage.getACCAvatar().click()
        cy.wait(3000)

        leftNavMenu.getDropDownMenu().contains('কেন্দ্রীয় হিসাবরক্ষণ').click({force: true})
        cy.wait(1000)
        leftNavMenu.getFundReturnSubMenu().should('include.text', 'তহবিল ফেরত').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'ফেরতকৃত তহবিল তালিকা')
        invoicePage.getFiscalYearField().should('have.attr', 'aria-label', 'অর্থবছর').click()
        cy.wait(1000)
        billPage.getDropDownItem().contains(this.acc.FiscalYear).click()
        cy.wait(1000)

        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired Invoice Ref No
        {
            const FRReferenceText=$el.find('td.e-rowcell[aria-label]').text()
            if(FRReferenceText.includes(this.acc.FundReturnReferenceNo))                
            {
                $el.find('td button mat-icon:eq(0)').click()
            }
        })
        cy.wait(3000)
        fundReturnPage.getSendButton().contains('প্রেরণ করুন').click()
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
        billPage.getYesButton().should('include.text', 'হ্যাঁ').click()       
        cy.wait(6000)
    })
    it('TC_17. DDO: Approved the pending fund return',function() 
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
        leftNavMenu.getPendingFundReturnSubMenu().should('include.text', 'তহবিল ফেরত').click()
        cy.wait(3000)
        
        billPage.getPageHeader().should('include.text', 'অনুমোদনের জন্য অপেক্ষারত তালিকা')
        
        billPage.getCardRows().each(($el, index, $list) =>     //Select the desired Bill Reference No
        {
            const FRReferenceNo=$el.find('td.e-rowcell[aria-label]').text()
            if(FRReferenceNo.includes(this.acc.FundReturnReferenceNo))                
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
        billPage.getYesButton().should('include.text', 'হ্যাঁ').click() 
        cy.wait(6000)
    })
})