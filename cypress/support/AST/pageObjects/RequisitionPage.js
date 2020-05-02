class RequisitionPage
{
    getReferenceNoField()  //রেফারেন্স নং
    {
        return cy.get('.card-body form input:eq(0)')
    }
    getJustificationField()  //ন্যায্যতা
    {
        return cy.get('.card-body form input:eq(1)')
    }
    getPurposeField()  //উদ্দেশ্য
    {
        return cy.get('.card-body form mat-select')
    }

    getEntitlementButton()  // প্রাধিকার   
    {
        return cy.get('.card-body button:eq(0)')
    }
    getItemsButton()  // পণ্য সমূহ 
    {
        return cy.get('.card-body button:eq(1)')
    }

    getItemsCategoryField()  // ক্যাটাগরি field 
    {
        return cy.get('.card-body mat-form-field mat-select:eq(4)')
    }

    getItemsCategoryField()  // ক্যাটাগরি field 
    {
        return cy.get('.card-body mat-form-field mat-select:eq(4)')
    }

    //চাহিদা পত্র -> অনুমোদন অপেক্ষমান page locators
    getUncheckDefaultItem()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span:eq(2)')
    }

    getAddAssetButton()  //সম্পদ যোগ করুন button
    {
        return cy.get('.card-footer button:eq(3)')
    }
    getRemarkField()  //মন্তব্য
    {
        return cy.get('td input:eq(0)')
    }

    getCardFooterSixthButton()  //Card Footer Button 06
    {
        return cy.get('.card-footer button:eq(5)')
    }
    getConfirmPopupHeader()  // Confirm pop-up Header
    {
        return cy.get('.modal-content mat-label')
    }
    getCardFooterYesButton()  // Yes Button
    {
        return cy.get('.modal-content .card-footer button:eq(1)')
    }

    getRemarksFieldOnConfirmCard()  //  মন্তব্য: 
    {
        return cy.get('.modal-content textarea')
    }

}
export default RequisitionPage;