class Inspected_PendingApprovalPage
{
    getCardFooterFifthButton()  //Card Footer Button 05
    {
        return cy.get('.card-footer button:eq(4)')
    } 
    getMaintenanceCost()  //রক্ষণাবেক্ষণ খরচ Field
    {
        return cy.get('.modal-content tbody input')
    }
    getMaintenanceButton()  //  রক্ষণাবেক্ষণ button
    {
        return cy.get('.modal-content .card-footer button:eq(1)')
    }
}
export default Inspected_PendingApprovalPage;