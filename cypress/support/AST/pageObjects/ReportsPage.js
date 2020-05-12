class ReportsPage
{
    //ডিসপোজড অ্যাসেট page locators
    getPageHeaderText()  // Page header
    {
        return cy.get('.card-header h5')
    }
    getItemCategoryField()  // আইটেম ক্যাটাগরি 
    {
        return cy.get('.card-body .mat-form-field-wrapper mat-select:eq(0)')
    }
    getItemGroupField()  // আইটেম গ্রুপ  
    {
        return cy.get('.card-body .mat-form-field-wrapper mat-select:eq(1)')
    }
    getItemField()  // পণ্য  
    {
        return cy.get('.card-body .mat-form-field-wrapper mat-select:eq(2)')
    }
    getActionTypeField()  // নিষ্পত্তির ধরণ 
    {
        return cy.get('.card-body .mat-form-field-wrapper mat-select:eq(3)')
    }
    getStoreField()  // স্টোর 
    {
        return cy.get('.card-body .mat-form-field-wrapper mat-select:eq(4)')
    }
    getSearchButton()  //   অনুসন্ধান করুন  
    {
        return cy.get('.row button.btn-success')
    }
}
export default ReportsPage;