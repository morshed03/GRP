class APPPreparationPage
{
    //Header section's locators 
    getCreateNewAPPButton()  // বার্ষিক প্রকিউরমেন্ট প্ল্যান তৈরি করুন button 
    {
        return cy.get('.card-header mat-icon')
    }
    getProcurementNatureField()  //প্রকিউরমেন্ট নেচার  Field
    {
        return cy.get('.card-body .mat-form-field-flex mat-select:eq(0)')
    }
    getBudgetTypeField()  //বাজেট টাইপ Field
    {
        return cy.get('.card-body .mat-form-field-flex mat-select:eq(1)')
    }
    getFiscalYearField()  //অর্থবছর Field
    {
        return cy.get('.card-body .mat-form-field-flex mat-select:eq(2)')
    }
    getAPPCodeField()  //এপিপি কোড Field
    {
        return cy.get('.card-body .mat-form-field-flex input')
    }

    getSaveButton()  //Save button Field
    {
        return cy.get('.card-footer button.btn:eq(3)')
    }

    //বার্ষিক প্রকিউরমেন্ট প্ল্যানের তালিকা listing locators

    //APP revision pop-up page locators 
    getRevisionCardHeader()  // Revision Card Header
    {
        return cy.get('mat-dialog-container .card-header mat-label')
    }
    getRevisionCardAppCodeField()  //এপিপি কোড field
    {
        return cy.get('mat-dialog-container .card-body input')
    }
    getRevisionCardAppCloseButton()  // বন্ধ করুন button
    {
        return cy.get('mat-dialog-container mat-dialog-actions button:eq(0)')
    }
    getRevisionCardAppSaveButton()  // সংরক্ষণ করুন button
    {
        return cy.get('mat-dialog-container mat-dialog-actions button:eq(1)')
    }
}
export default APPPreparationPage;