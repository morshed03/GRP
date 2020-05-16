class RequisitionPage
{
    getReferenceNoField()  //রেফারেন্স নং
    {
        return cy.get('.card-body form input[placeholder="রেফারেন্স নং"]:eq(0)')
    }
    getJustificationField()  //ন্যায্যতা
    {
        return cy.get('.card-body form input[placeholder="ন্যায্যতা"]:eq(0)')
    }
    getPurposeField()  //উদ্দেশ্য
    {
        return cy.get('.card-body form mat-select[aria-label="উদ্দেশ্য"]')
    }

    getEntitlementButton()  // প্রাধিকার   
    {
        return cy.get('.card-body button.btn-primary:eq(0)')
    }
    getItemsButton()  // পণ্য সমূহ 
    {
        return cy.get('.card-body button.btn-primary:eq(1)')
    }

    getItemsCategoryField()  // ক্যাটাগরি field 
    {
        return cy.get('.card-body mat-form-field mat-select[aria-label="ক্যাটাগরি"]:eq(0)')
    }

    getItemsSearchField()  // অনুসন্ধান করুন field 
    {
        return cy.get('.card-body mat-form-field input[placeholder="অনুসন্ধান করুন"]')
    }

    getQuantityInputBox()  // পরিমাণ *
    {
        return cy.get('td ejs-textbox input[type="number"]:eq(0)')
    }

    //চাহিদা পত্র -> অনুমোদন অপেক্ষমান page locators
    getUncheckDefaultItem()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span:eq(2)')
    }
    getUncheckDefaultItem2()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span:eq(3)')
    }
    getUncheckDefaultItem3()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span:eq(4)')
    }
    getUncheckDefaultItem4()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span:eq(5)')
    }
    getUncheckDefaultItem5()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span:eq(6)')
    }
    getUncheckDefaultItem6()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span:eq(7)')
    }
    getUncheckDefaultItem7()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span:eq(8)')
    }
    getUncheckDefaultItem8()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span:eq(9)')
    }
    getUncheckDefaultItem9()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span:eq(10)')
    }
    getUncheckDefaultItem10()  // Uncheck the default item
    {
        return cy.get('.e-templatecell label span.:eq(11)')
    }

    getAddAssetButton()  //সম্পদ যোগ করুন button
    {
        return cy.get('.card-footer button.btn-success:eq(0)')
    }
    getRemarkField()  //মন্তব্য
    {
        return cy.get('td input[type="text"]:eq(0)')
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
        return cy.get('.modal-content .card-footer button.btn-primary:eq(0)')
    }

    getRemarksFieldOnConfirmCard()  //  মন্তব্য: 
    {
        return cy.get('.modal-content textarea[id="remarks"]')
    }

}
export default RequisitionPage;