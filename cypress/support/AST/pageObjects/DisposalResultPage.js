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
        return cy.get('.card-body td ejs-textbox input:eq(0)')
    }
    getAcquiredValueField2()  //অর্জিত মূল্য
    {
        return cy.get('.card-body td ejs-textbox input:eq(2)')
    }
    getAcquiredValueField3()  //অর্জিত মূল্য
    {
        return cy.get('.card-body td ejs-textbox input:eq(4)')
    }

    getDecidedRemark1()  //বিবরণ *
    {
        return cy.get('.card-body td ejs-textbox input:eq(1)')
    }
    getDecidedRemark2()  //বিবরণ *
    {
        return cy.get('.card-body td ejs-textbox input:eq(3)')
    }
    getDecidedRemark3()  //বিবরণ *
    {
        return cy.get('.card-body td ejs-textbox input:eq(5)')
    }

    getSixthSendButton()  //প্রেরণ button 6th
    {
        return cy.get('.card-footer button:eq(5)')
    }
    getSendButton()  //প্রেরণ button  7th
    {
        return cy.get('.card-footer button:eq(6)')
    }
    getSendButtonFifth()  //প্রেরণ button 5th
    {
        return cy.get('.card-footer button:eq(4)')
    }
}
export default DisposalResultPage;