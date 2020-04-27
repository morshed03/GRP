class BillPage
{
    //কাজের অগ্রগতি page locators
    getAttachmentButton()  // এটাচমেন্ট button
    {
        return cy.get('.card-body td button:eq(0)')
    }
    getFinishedButton()  // সমাপ্ত button
    {
        return cy.get('.card-body td button:eq(1)')
    }
    getAttachmentLabel()  // File label
    {
        return cy.get('mat-dialog-container .card-body div > label:eq(0)')
    }
    getAttachmentUploadButton()  // Choose File
    {
        return cy.get('.card-body div input[type="file"]')
    }
    getCloseAttachmentCard()  // বন্ধ করুন button
    {
        return cy.get('mat-dialog-container mat-dialog-actions button')
    }
    // বিল প্রস্তুত করুন page locators
    getCreateBillButton()  // Bill create button
    {
        return cy.get('.card-header button')
    }
    getBillDateField()  // বিলের তারিখ  field 
    {
        return cy.get('svg.mat-datepicker-toggle-default-icon')
    }
    getEconomicCodeField()  // ইকোনমিক কোড field
    {
        return cy.get('mat-dialog-container .card-body mat-select')
    }
    getPSButton()  //   পিএস
    {
        return cy.get('.card-header div>button:eq(1)')
    }
    getCustomButton()  //   কাস্টম
    {
        return cy.get('.card-header div>button:eq(2)')
    }
    getDeductionButton()  //    কর্তন
    {
        return cy.get('.card-header div>button:eq(3)')
    }
    getAdditionButton()  //   সংযোজন
    {
        return cy.get('.card-header div>button:eq(4)')
    }
    getAmountField()  //   পরিমাণ input field
    {
        return cy.get('mat-dialog-container .card-body input')
    }
    getBillAttachmentButton()  //     এটাচমেন্ট
    {
        return cy.get('.card-footer button:eq(3)')
    }
    getBackButton()  //    পূর্বে
    {
        return cy.get('.card-footer button:eq(2)')
    }

}
export default BillPage;