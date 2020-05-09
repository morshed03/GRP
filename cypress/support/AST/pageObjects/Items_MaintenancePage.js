class Items_MaintenancePage
{
    //
    getMaintenanceRemarksField()  // মন্তব্য Field
    {
        return cy.get('.card-body mat-form-field input:eq(4)')
    }

    getCalendarIcon()  //Calendar Icon পরবর্তী রক্ষণাবেক্ষণের তারিখ
    {
        return cy.get('svg.mat-datepicker-toggle-default-icon:eq(1)')
    }

    getMaintenanceCostField()  //রক্ষণাবেক্ষণ খরচ
    {
        return cy.get('.card-body mat-form-field input:eq(6)')
    }
    //রক্ষণাবেক্ষণ নিষ্পত্তি Pop-up page locators
    getDisposalModalHeader()  //Pop-up header text 
    {
        return cy.get('.modal-content mat-label')
    }
    getMaintenanceCostFieldOnModal()  //রক্ষণাবেক্ষণ খরচ field on Modal 
    {
        return cy.get('.modal-content mat-form-field input')
    }
    getDisposalModalSaveButton()  //সংরক্ষণ করুন button 
    {
        return cy.get('.modal-content .card-footer button:eq(1)')
    }
}
export default Items_MaintenancePage;