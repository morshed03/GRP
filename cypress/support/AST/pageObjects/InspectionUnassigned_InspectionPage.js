class InspectionUnassigned_InspectionPage
{
    getInspectorTypeField()  // পরিদর্শকের ধরণ field
    {
        return cy.get('.card-body mat-select[aria-label="পরিদর্শকের ধরণ"]:eq(0)')
    }
    getOfficeUnitField()  // শাখা field
    {
        return cy.get('.card-body mat-select[aria-label="শাখা"]:eq(0)')
    }
    getInspectorField()  // পরিদর্শক field
    {
        return cy.get('.card-body mat-select[aria-label="পরিদর্শক"]:eq(0)')
    }
    getDropDownItem()   //Select Drop-down item
    {
        return  cy.get('mat-option > span.mat-option-text')
    }
    
}
export default InspectionUnassigned_InspectionPage;