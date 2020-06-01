class Inspected_PendingApprovalPage
{
    getCardFooterFifthButton()  //Card Footer Button 05
    {
        return cy.get('.card-footer button:eq(4)')
    } 
    getCardFooterFourthButton()  //Card Footer Button 04
    {
        return cy.get('.card-footer button.btn-success:eq(0)')
    } 
    getMaintenanceCost()  //রক্ষণাবেক্ষণ খরচ Field
    {
        return cy.get('.modal-content tbody td ejs-numerictextbox input[aria-live="assertive"]:eq(0)')
    }
    getActionsFields1()  //কার্যক্রম Field
    {
        return cy.get('.modal-content tbody td ejs-dropdownlist .e-input-group:eq(0)')
    }
    getActionsFields2()  //কার্যক্রম Field
    {
        return cy.get('.modal-content tbody td ejs-dropdownlist .e-input-group:eq(1)')
    }
    getActionsFields3()  //কার্যক্রম Field
    {
        return cy.get('.modal-content tbody td ejs-dropdownlist .e-input-group:eq(2)')
    }
    getDisposalButton()  //  ডিসপোজ button
    {
        return cy.get('.modal-content .card-footer button:eq(0)')
    }
    getMaintenanceButton()  //  রক্ষণাবেক্ষণ button
    {
        return cy.get('.modal-content .card-footer button:eq(1)')
    }
}
export default Inspected_PendingApprovalPage;