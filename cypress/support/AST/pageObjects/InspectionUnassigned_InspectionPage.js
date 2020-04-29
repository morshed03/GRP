class InspectionUnassigned_InspectionPage
{
    getInspectorTypeField()  // পরিদর্শকের ধরণ field
    {
        return cy.get('.card-body mat-select:eq(0)')
    }
    getOfficeUnitField()  // শাখা field
    {
        return cy.get('.card-body mat-select:eq(1)')
    }
    getInspectorField()  // পরিদর্শক field
    {
        return cy.get('.card-body mat-select:eq(2)')
    }
    getDropDownItem()   //Select Drop-down item
    {
        return  cy.get('mat-option > span.mat-option-text')
    }
    
}
export default InspectionUnassigned_InspectionPage;