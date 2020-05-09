class DisposalRequestPage
{
    getUncheckAllItems()  // Uncheck all items
    {
        return cy.get('td ejs-checkbox span')
    }
    getJustificationField()  // ন্যায্যতা field
    {
        return cy.get('.card-body:visible mat-form-field input:eq(2)')
    }
    getDisposalCommitteeNameField()  // কমিটির নাম field
    {
        return cy.get('.card-body:visible mat-form-field mat-select')
    }
    getSendButton()  // প্রেরণ buttons
    {
        return cy.get('.card .card-footer button:eq(3)')
    }
    getSaveButton()  // সংরক্ষণ করুন  buttons
    {
        return cy.get('.card .card-footer button:eq(1)')
    }

    //ডিসপোজাল সংক্রান্ত সিদ্ধান্ত page locators
    getDisposalTypeField1()  // নিষ্পত্তির ধরণ field
    {
        return cy.get('td ejs-dropdownlist .e-input-group:eq(0)')
    }
    getDisposalTypeField2()  // নিষ্পত্তির ধরণ field
    {
        return cy.get('td ejs-dropdownlist .e-input-group:eq(1)')
    }
    getDisposalTypeField3()  // নিষ্পত্তির ধরণ field
    {
        return cy.get('td ejs-dropdownlist .e-input-group:eq(2)')
    }
    getDropDownItem()  // নিষ্পত্তির ধরণ field
    {
        return cy.get('div ul li.e-list-item')
    }

    getDisposalCost1()  // ডিসপোজালের খরচ
    {
        return cy.get('td ejs-textbox input:eq(0)')
    }
    getDisposalCost2()  // ডিসপোজালের খরচ
    {
        return cy.get('td ejs-textbox input:eq(2)')
    }
    getDisposalCost3()  // ডিসপোজালের খরচ
    {
        return cy.get('td ejs-textbox input:eq(4)')
    }

    getDisposalRemark1()  // বিবরণ 
    {
        return cy.get('td ejs-textbox input:eq(1)')
    }
    getDisposalRemark2()  // বিবরণ 
    {
        return cy.get('td ejs-textbox input:eq(3)')
    }
    getDisposalRemark3()  // বিবরণ 
    {
        return cy.get('td ejs-textbox input:eq(5)')
    }
}
export default DisposalRequestPage;