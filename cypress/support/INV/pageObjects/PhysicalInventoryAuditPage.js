class PhysicalInventoryAuditPage
{
    getAddNewButton()  //নতুন যোগ করুন
    {
        return cy.get('.card .card-body button.btn.btn-success')
    }
    getStoreField()  //স্টোর
    {
        return cy.get('.card-body ng-select[id="storeName"]')
    }
    getInvestigatingOfficerNameField()  //তদন্ত কর্মকর্তা নাম
    {
        return cy.get('.card-body ng-select[id="investigatorId"]')
    }
    getReferenceNoField()  //রেফারেন্স নং
    {
        return cy.get('.card-body input[id="referenceNo"]')
    }
    getRemarksField()  //মন্তব্য
    {
        return cy.get('.card-body textarea[id="remarks"]')
    }
    getLoadCurrentStockButton()  //বর্তমান স্টক লোড করুন
    {
        return cy.get('.card-body button.btn-sm.btn-primary')
    }
    getSaveButton()  //সংরক্ষন করুন
    {
        return cy.get('.card-footer button.fa-save.btn-success')
    }

    //ইনভেন্টরি অডিট অনুমোদন page
    getApproveButton()  //সংরক্ষন করুন
    {
        return cy.get('.card:visible .card-footer button.btn-primary')
    }
    getTabs()  //tab
    {
        return cy.get('tabset ul li')
    }
}
export default PhysicalInventoryAuditPage;