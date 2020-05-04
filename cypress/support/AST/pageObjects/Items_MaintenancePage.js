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
}
export default Items_MaintenancePage;