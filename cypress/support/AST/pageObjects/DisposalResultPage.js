class DisposalResultPage
{
    getDisposalTypeTab()  //Disposal type tab
    {
        return cy.get('.card-body div .e-tab-text')
    }
    getAuctionAddButton()  //Auction Add button
    {
        return cy.get('.card-footer .row button mat-icon:eq(0)')
    }
    getDisposedAddButton()  //Disposed Add button
    {
        return cy.get('.card-footer .row button mat-icon:eq(1)')
    }
    getOtherAddButton()  //Other Add button
    {
        return cy.get('.card-footer .row button mat-icon:eq(2)')
    }

    getAcquiredValueField1()  //অর্জিত মূল্য
    {
        return cy.get('.card-body td ejs-textbox input[type="number"]:eq(0)')
    }
    getAcquiredValueField2()  //অর্জিত মূল্য
    {
        return cy.get('.card-body td ejs-textbox input[type="number"]:eq(1)')
    }
    getAcquiredValueField3()  //অর্জিত মূল্য
    {
        return cy.get('.card-body td ejs-textbox input[type="number"]:eq(2)')
    }

    getDecidedRemark1()  //বিবরণ *
    {
        return cy.get('.card-body td ejs-textbox input[type="text"]:eq(0)')
    }
    getDecidedRemark2()  //বিবরণ *
    {
        return cy.get('.card-body td ejs-textbox input[type="text"]:eq(1)')
    }
    getDecidedRemark3()  //বিবরণ *
    {
        return cy.get('.card-body td ejs-textbox input[type="text"]:eq(2)')
    }

    getSendButton()  //প্রেরণ from Other tab
    {
        //return cy.get('.card:visible .card-footer button.btn-success:eq(1)')
        return cy.xpath('//button[contains(text(), "প্রেরণ")]')
    }
    getSendButtonDisposed()  //প্রেরণ From Dispose tab
    {
        return cy.get('.card:visible .card-footer button.btn-success:eq(2)')
    }
    getSendButtonFifth()  //প্রেরণ button 5th
    {
        return cy.get('.card-footer button:eq(4)')
    }
}
export default DisposalResultPage;