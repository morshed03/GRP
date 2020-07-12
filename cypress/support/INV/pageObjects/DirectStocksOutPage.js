class DirectStocksOutPage
{
    getIssueToField()  //যাকে ইস্যু করা হয়েছে:
    {
        return cy.get('.card:visible .card-body form ng-select[id="issuedTo"]')
    }
    getAddNewButton()  //নতুন যোগ করুন
    {
        return cy.get('.card-body form button.btn-sm.btn-success:eq(0)')
    }

    //স্টক pop-up locators
    getDOQuantityField()  //পরিমাণ
    {
        return cy.get('.modal-content:visible tbody tr td input[type="number"]')
    }
    getSaveButton()  //দাখিল করুন
    {
        return cy.get('.modal-content:visible .modal-footer button.btn-success')
    }
}
export default DirectStocksOutPage;