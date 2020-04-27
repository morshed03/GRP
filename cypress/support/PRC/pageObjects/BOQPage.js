class BOQPage
{
    getBOQHeader()  // বিওকিউ Card Header 
    {
        return cy.get('mat-dialog-container .card-header mat-label')
    }
    getBOQReferenceNo()  // BOQ রেফারেন্স নং
    {
        return cy.get('mat-dialog-container .card-body input:eq(0)')
    }
    getBOQDescription()  // BOQ বিবরণ
    {
        return cy.get('mat-dialog-container .card-body textarea')
    }
    getBOQCloseButton()  // বন্ধ করুন
    {
        return cy.get('.mat-dialog-actions button:eq(0)')
    }
    getBOQSaveButton()  // সংরক্ষণ করুন button
    {
        return cy.get('.mat-dialog-actions button:eq(1)')
    }
}
export default BOQPage;