class InvoicePage
{
    getFiscalYearField()  //অর্থবছর
    {
        return cy.get('.card-body mat-form-field mat-select[aria-label="অর্থবছর"]')
    }
    getInvoiceSaveButton()  //সংরক্ষণ করুন
    {
        return cy.get('.card-footer button.btn-primary')
    }
    getInvoiceReferenceField()  //রেফারেন্স নং
    {
        return cy.get('.card-body mat-form-field input[placeholder="রেফারেন্স নং"]')
    }
    getSendButton()  //  সংরক্ষণ এবং প্রেরণ করুণ 
    {
        return cy.get('.card-footer button.btn-success')
    }

    getSkipButton()  //   এড়িয়ে যান  
    {
        return cy.get('.card-footer button.btn-success:eq(0)')
    }

    //ইনভয়েস অনুমোদনের তথ্য pop-up locators
    getPaymentMethod()  //মূল্যপরিশোধ পদ্ধত 
    {
        return cy.get('.card:visible .card-body mat-form-field mat-select[aria-label="মূল্যপরিশোধ পদ্ধতি"]')
    }
    getBankAccount()  //ব্যাংক হিসাব
    {
        return cy.get('.card:visible .card-body mat-form-field mat-select[aria-label="ব্যাংক হিসাব"]')
    }
    getSaveButton()  //সংরক্ষণ করুন
    {
        return cy.get('.card:visible .card-footer button.btn-success')
    }
}
export default InvoicePage;