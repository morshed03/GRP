class DamageRequisitionPage
{
    getPageTitle()  //Page title
    {
        return cy.get('.row h4')
    }
    getDamageDeclarationButton()  //ক্ষয়ক্ষতির ঘোষণা
    {
        return cy.get('.card-header button.btn-pill.btn-sm.btn-success.ng-star-inserted')
    }
    getReferenceNoField()  //রেফারেন্স নং:
    {
        return cy.get('.card:visible .card-body form input[id="requisitionRefNo"]')
    }

    //আইটেম নির্বাচন করুন pop-up locators
    getPopUpCardHeader()  //রেফারেন্স নং:
    {
        return cy.get('.modal-content:visible .card-header strong')
    }
    
}
export default DamageRequisitionPage;