class InvoicePage
{
    getFiscalYearField()  //অর্থবছর
    {
        return cy.get('.card-body mat-form-field mat-select[aria-label="অর্থবছর"]')
    }
    getSaveButton()  //সংরক্ষণ করুন
    {
        return cy.get('.card-footer button.btn-primary')
    }
    getSendButton()  //  সংরক্ষণ এবং প্রেরণ করুণ 
    {
        return cy.get('.card-footer button.btn-success')
    }

    //ইনভয়েস অনুমোদনের তথ্য pop-up locators
    getSkipButton()  //এড়িয়ে যান 
    {
        return cy.get('.card:visible .card-footer button.btn-success')
    }
}
export default InvoicePage;