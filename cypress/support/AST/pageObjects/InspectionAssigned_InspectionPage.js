class InspectionAssigned_InspectionPage
{
    //পণ্য সমূহ section locators
    getRemarksField()  // মন্তব্য field
    {
        return cy.get('td input:eq(2)')
    }
    getRemarksFieldFirstStore()  // মন্তব্য field for First Store
    {
        return cy.get('td input:eq(1)')
    }
    getQCReportButton()  //কিউসি রিপোর্ট আপলোড করুন
    {
        return cy.get('.card-header button')
    }
    getAssetCheckBox()  // Uncheck the checkbox
    {
        return cy.get('td ejs-checkbox span:eq(0)')
    }
    
}
export default InspectionAssigned_InspectionPage;