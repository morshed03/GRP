class DirectOut_StoreKeepingPage
{
    getPostOfficeTypeField()  //পোস্ট / অফিস ইউনিট
    {
        return cy.get('.card-body mat-select:eq(0)')
    }
    getOfficeUniteField()  //শাখা
    {
        return cy.get('.card-body mat-select:eq(1)')
    }
    getPostField()  //পদবি
    {
        return cy.get('.card-body mat-select:eq(2)')
    }
    getJustificationField()  //ন্যায্যতা
    {
        return cy.get('mat-form-field input:eq(0)')
    }
    getTagInputField()  //ট্যাগ দিন
    {
        return cy.get('mat-form-field input:eq(1)')
    }

    //************************************************
    //অনুমোদন অপেক্ষমান -> সরাসরি প্রদান page locators

    getDirectOutDetailsPageHeader()  //সরাসরি প্রদান বিস্তারিত page Header
    {
        return cy.get('.card-header h5')
    }
    getDORemarksInputField()  //মন্তব্য
    {
        return cy.get('td input:eq(1)')
    }
}
export default DirectOut_StoreKeepingPage;