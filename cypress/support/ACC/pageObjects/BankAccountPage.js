/// <reference types="Cypress" />

const or = require("../AccLocators.json")

class BankAccountPage
{
    PageTitle()  //Page Title
    {
        return cy.get(or.BankAccountPage.PageTitle)
    }
    CreatePlusButton()  //Create plus button
    {
        return cy.get(or.BankAccountPage.CreatePlusButton)
    }

    //ব্যাংক হিসাব তৈরি করুন page locators
    BankAccountTypeField()  //অ্যাকাউন্টের ধরণ
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.AccountType)
    }
    EconomicCodeField()  //ইকোনোমিক কোড
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.EconomicCode)
    }
    BankNameField()  //ব্যাংকের নাম
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.BankName)
    }
    BranchNameField()  //শাখা
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.Branch)
    }
    CurrencyField()  //কারেন্সি
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.Currency)
    }
    AccountTitleField()  //হিসাবের নাম
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.AccountTitle)
    }
    AccountNumberField()  //হিসাব নং
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.AccountNumber)
    }
    RoutingNumberField()  //রাউটিং নং
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.RoutingNumber)
    }
    IBANNumberField()  //আই.বি.এ.এন. নং
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.IBANNumber)
    }
    SwiftCodeField()  //সুইফট কোড
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.SwiftCode)
    }
    FundCodeField()  //তহবিল কোডসমূহ
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.FundCodeField)
    }
    SignatoryNumberField()  //সাক্ষরকারীর সংখ্যা
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.SignatoryNumber)
    }
    SubmitButton()  // দাখিল করুন
    {
        return cy.get(or.BankAccountPage.CreateBankAccount.SubmitButton)
    }
    
}
export default BankAccountPage;