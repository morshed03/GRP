class DisposalRequestPage
{
    getUncheckAllItems()  // Uncheck all items
    {
        return cy.get('td ejs-checkbox span')
    }
    getJustificationField()  // ন্যায্যতা field
    {
        return cy.get('.card-body:visible mat-form-field input[placeholder="ন্যায্যতা"]:eq(0)')
    }
    getDisposalCommitteeNameField()  // কমিটির নাম field
    {
        return cy.get('.card-body:visible mat-form-field mat-select[aria-label="কমিটির নাম"]')
    }
    getSendButton()  // প্রেরণ buttons
    {
        return cy.get('.card:visible .card-footer button.btn-success:eq(0)')
    }
    getSaveButton()  // সংরক্ষণ করুন  buttons
    {
        return cy.get('.card .card-footer button.btn-success:eq(0)')
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
        return cy.get('td ejs-textbox input[type="number"]:eq(0)')
    }
    getDisposalCost2()  // ডিসপোজালের খরচ
    {
        return cy.get('td ejs-textbox input[type="number"]:eq(1)')
    }
    getDisposalCost3()  // ডিসপোজালের খরচ
    {
        return cy.get('td ejs-textbox input[type="number"]:eq(2)')
    }

    getDisposalRemark1()  // বিবরণ 
    {
        return cy.get('td ejs-textbox input[type="text"]:eq(0)')
    }
    getDisposalRemark2()  // বিবরণ 
    {
        return cy.get('td ejs-textbox input[type="text"]:eq(1)')
    }
    getDisposalRemark3()  // বিবরণ 
    {
        return cy.get('td ejs-textbox input[type="text"]:eq(2)')
    }
}
export default DisposalRequestPage;