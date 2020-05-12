class InspectionAssigned_InspectionPage
{
    //পণ্য সমূহ section locators
    getRemarksField()  // মন্তব্য field
    {
        return cy.get('td input[type="text"]:eq(0)')
    }
    getRemarksFieldFirstStore()  // মন্তব্য field for First Store
    {
        return cy.get('td input[type="text"]:eq(0)')
    }
    getQCReportButton()  //কিউসি রিপোর্ট আপলোড করুন
    {
        return cy.get('.card-header button')
    }
    getAssetCheckBox()  // Uncheck the checkbox
    {
        return cy.get('td ejs-checkbox span:eq(0)')
    }
    getAssetSecondCheckBox()  // Uncheck the Second checkbox
    {
        return cy.get('td ejs-checkbox span:eq(1)')
    }
    getAssetThirdCheckBox()  // Uncheck the Third checkbox
    {
        return cy.get('td ejs-checkbox span:eq(2)')
    }

    getRejectButton()  //    প্রত্যাখ্যান করুন 
    {
        return cy.get('.card .card-footer button.btn-danger:eq(0)')
    }
    
}
export default InspectionAssigned_InspectionPage;