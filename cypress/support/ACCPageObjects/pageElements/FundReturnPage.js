class FundReturnPage
{
    getAddButton()  //Create plus button
    {
        return cy.get('.card-header button.mat-button-base')
    }
    getBudgetField()  //বাজেট
    {
        return cy.get('.card-body mat-form-field mat-select[aria-label="বাজেট"]')
    }
    getReferenceField()  //রেফারেন্স নং
    {
        return cy.get('.card-body mat-form-field input[placeholder="রেফারেন্স নং"]')
    }
    getDescriptionField()  //বিবরণ
    {
        return cy.get('.card-body mat-form-field input[placeholder="বিবরণ"]')
    }
    getQuentityField()  //পরিমাণ  
    {
        return cy.get('.card-body tr td.e-rowcell input.e-numerictextbox')
    }
    getSaveButton()  //  সংরক্ষণ করুন 
    {
        return cy.get('.card-footer button.btn-cus-success')
    }
    getSendButton()  //প্রেরণ করুন
    {
        return cy.get('.card-footer button.btn-primary')
    }
}
export default FundReturnPage;