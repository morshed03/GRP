class DeclarationSubmissionPage
{
    //চাহিদাপত্র page locators
    getDeclarationSubmissionPageHeader()  // Page header
    {
        return cy.get('.card-header mat-label')
    }
    getTableRow()  // All table row
    {
        return cy.get('tbody tr')
    }

    //চাহিদাপত্র প্রেরণের তালিকা page locators
    getAddRequisitionButton()  //  চাহিদা যোগ করুন  button
    {
        return cy.get('.card-header button')
    }

    //চাহিদা পত্রের পরিকল্পনায় যোগ করুন page locators
    getAddRequirementButton()  //  চাহিদা যোগ করুন  button
    {
        return cy.get('form button.custom-add-item')
    }
    

    //নতুন চাহিদা যোগ করুন pop-up page locators
    getAddRequirementPopupHeader()  //  চাহিদা যোগ করুন  button
    {
        return cy.get('mat-dialog-container mat-label')
    }
    getAddRequirementTypeField()  // ধরণ / type field
    {
        return cy.get('mat-dialog-container .mat-form-field-flex mat-select:eq(0)')
    }
    getAddRequirementCategoryField()  // ক্যাটাগরি / Category field
    {
        return cy.get('mat-dialog-container .mat-form-field-flex mat-select:eq(1)')
    }
    getAddRequirementGroupField()  // গ্রুপ / Group field
    {
        return cy.get('mat-dialog-container .mat-form-field-flex mat-select:eq(2)')
    }
    getAddRequirementNameField()  // নাম / Name field
    {
        return cy.get('mat-dialog-container .mat-form-field-flex mat-select:eq(3)')
    }
    getAddRequirementQuantityField()  // পরিমাণ / Quantity field
    {
        return cy.get('mat-dialog-container mat-form-field input:eq(0)')
    }
    getAddRequirementUnitField()  // একক / Unit field
    {
        return cy.get('mat-dialog-container mat-form-field input:eq(1)')
    }
    getAddRequirementRemarksField()  // স্পেসিফিকেশন/মন্তব্য / Specs/Remarks field
    {
        return cy.get('mat-dialog-container mat-form-field textarea')
    }
    getAddRequirementEstimatedCostField()  // আনুমানিক খরচ / Estimated Cost field
    {
        return cy.get('mat-dialog-container mat-form-field input:eq(2)')
    }
    getAddRequirementCloseField()  // বন্ধ করুন button
    {
        return cy.get('mat-dialog-container mat-dialog-actions button:eq(0)')
    }
    getAddRequirementSaveField()  // সংরক্ষণ করুন button
    {
        return cy.get('mat-dialog-container mat-dialog-actions button:eq(1)')
    }
    

}
export default DeclarationSubmissionPage;