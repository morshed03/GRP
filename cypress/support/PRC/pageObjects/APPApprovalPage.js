class APPApprovalPage
{
    //এপিপি approve page
    getSearchField()  // অনুসন্ধান করুন field
    {
        return cy.get('.card-body mat-form-field input')
    }
    getApproveCardHeader()  // Pop-up title
    {
        return cy.get('mat-dialog-container .card-header mat-label')
    }
    getApproveButton()  //    অনুমোদন দিন button
    {
        return cy.get('mat-dialog-container .card-footer button.pull-right:eq(0)')
    }
    getClosePopUpButton()  // বন্ধ করুন button
    {
        return cy.get('mat-dialog-actions button')
    }
    
}
export default APPApprovalPage;