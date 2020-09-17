class VatTaxAitPaymentPage
{
    getSaveButton()  //দাখিল করুন
    {
        return cy.get('.card-footer button.btn-success:eq(0)')
    }

    //ভ্যাট ট্যাক্স এআইটি প্রদান
    getCurrencyField()  //কারেন্সি
    {
        return cy.get('.card-body mat-form-field mat-select[aria-label="কারেন্সি"]')
    }
    getChallanNoField()  //চালান নং
    {
        return cy.get('.card-body mat-form-field input[placeholder="চালান নং"]')
    }
    getChallanDateField()  //চালানের তারিখ
    {
        return cy.get('mat-form-field mat-datepicker-toggle svg')
    }
    getBankDistrictField()  //ব্যাংকের জেলা
    {
        return cy.get('.card-body mat-form-field input[placeholder="ব্যাংকের জেলা"]')
    }
    getBankBranchField()  //ব্যাংকের শাখা
    {
        return cy.get('.card-body mat-form-field input[placeholder="ব্যাংকের শাখা"]')
    }
    getDepositedByField()  //যাহার মারফত
    {
        return cy.get('.card-body mat-form-field input[placeholder="যাহার মারফত"]')
    }
    getDepositedForField()  //যাহার পক্ষে
    {
        return cy.get('.card-body mat-form-field input[placeholder="যাহার পক্ষে"]')
    }
    getDepositPurposeField()  //কি বাবদ জমা
    {
        return cy.get('.card-body mat-form-field input[placeholder="কি বাবদ জমা"]')
    }

    //ট্রেজারি এর মূল্যপরিশোধ
    getTreasuryVoucherNoField()  //কি বাবদ জমা
    {
        return cy.get('.card-body mat-form-field input[placeholder="ভাউচার নং"]')
    }
    getTreasuryDiscriptionField()  //বিবরণ
    {
        return cy.get('.card-body mat-form-field input[placeholder="বিবরণ"]')
    }
}
export default VatTaxAitPaymentPage;