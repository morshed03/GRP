class BillPage
{
    getPageHeader()  //Page Header
    {
        return cy.get('.card-header mat-label')
    }
}
export default BillPage;