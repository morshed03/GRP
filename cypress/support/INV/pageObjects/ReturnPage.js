class ReturnPage
{
    getPageTitle()  //title
    {
        return cy.get('.card-header strong')
    }
    getReceiveIssuedItemsButton()  //ইস্যু করা আইটেম গ্রহণ করুন
    {
        return cy.get('.card-body .row button.btn.btn-success')
    }
    getStoreField()  //স্টোর
    {
        return cy.get('.card-body ng-select[id="store"]')
    }
    getEmployeeNameField()  //কর্মকর্তার নাম
    {
        return cy.get('.card-body ng-select[id="approvedBy"]')
    }
    getSearchButton()  //অনুসন্ধান button
    {
        return cy.get('.card-body .row button.btn-sm.btn-primary')
    }
}
export default ReturnPage;