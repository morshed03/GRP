class AmendmentAPPPage
{
    //এপিপি package ammendpage  page
    getAmendmentPageHeader()  // card header
    {
        return cy.get('mat-dialog-container .card-header mat-label')
    }
    getAllocatedAmountField()  // বরাদ্দকৃত পরিমাণ
    {
        return cy.get('mat-dialog-container .card-body input[placeholder="বরাদ্দকৃত পরিমাণ"]')
    }
    getAddEconomicCodeButton()  // economic code button
    {
        return cy.get('mat-dialog-container .card-body button')
    }
    getAdSaveButton()  // card header
    {
        return cy.get('mat-dialog-actions button:eq(0)')
    }
    getAddCloseButton()  // card header
    {
        return cy.get('mat-dialog-actions button:(1)')
    }
    
    
}
export default AmendmentAPPPage;