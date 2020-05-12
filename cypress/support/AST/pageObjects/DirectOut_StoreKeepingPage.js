class DirectOut_StoreKeepingPage
{
    getPostOfficeTypeField()  //পোস্ট / অফিস ইউনিট
    {
        return cy.get('.card-body mat-select[aria-label="ধরণ"]:eq(0)')
    }
    getOfficeUniteField()  //শাখা
    {
        return cy.get('.card-body mat-select[aria-label="শাখা"]:eq(0)')
    }
    getPostField()  //পদবি
    {
        return cy.get('.card-body mat-select[aria-label="পদবি"]:eq(0)')
    }
    getJustificationField()  //ন্যায্যতা
    {
        return cy.get('mat-form-field input[placeholder="ন্যায্যতা"]:eq(0)')
    }
    getPurposeField()  //উদ্দেশ্য
    {
        return cy.get('.card-body mat-select[aria-label="উদ্দেশ্য"]:eq(0)')
    }
    getTagInputField()  //ট্যাগ দিন
    {
        return cy.get('mat-form-field input[placeholder="ট্যাগ দিন"]:eq(0)')
    }

    getAddEntitlementButton()  // প্রাধিকার যোগ করুন   
    {
        return cy.get('.card-footer button.btn-success:eq(0)')
    }
    getAddItemButton()  // পণ্য যোগ করুন   
    {
        return cy.get('.card-footer button.btn-success:eq(1)')
    }
    getSendForApprovalButton()  //  অনুমোদনের জন্য প্রেরণ  
    {
        return cy.get('.card-footer button.btn-success:eq(2)')
    }

    //************************************************
    //অনুমোদন অপেক্ষমান -> সরাসরি প্রদান page locators

    getDirectOutDetailsPageHeader()  //সরাসরি প্রদান বিস্তারিত page Header
    {
        return cy.get('.card-header h5')
    }
    getDORemarksInputField()  //মন্তব্য
    {
        return cy.get('td input[type="text"]:eq(0)')
    }
}
export default DirectOut_StoreKeepingPage;