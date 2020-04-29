class InspectionAssigned_InspectionPage
{
    //পণ্য সমূহ section locators
    getRemarksField()  // মন্তব্য field
    {
        return cy.get('td input:eq(2)')
    }
    getQCReportButton()  // মন্তব্য field
    {
        return cy.get('.card-header button')
    }
    
}
export default InspectionAssigned_InspectionPage;