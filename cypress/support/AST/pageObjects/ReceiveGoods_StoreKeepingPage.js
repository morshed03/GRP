class ReceiveGoods_StoreKeepingPage
{
    getStoreNameTab()  // Store tab 
    {
        return cy.get('.e-tab-header .e-tab-wrap .e-tab-text')
    }
    getCardHeader()  // Page/Card Header 1
    {
        return cy.get('.card:visible .card-header mat-label:eq(0)')
    }
    getSecondCardHeader()  // Page/Card Header 2
    {
        return cy.get('.card:visible .card-header mat-label:eq(1)')
    }
    getThirdCardHeader()  // Page/Card Header 3
    {
        return cy.get('.card:visible .card-header mat-label:eq(2)')
    }
    getFourthCardHeader()  // Page/Card Header 4
    {
        return cy.get('.card-header mat-label:eq(3)')
    }

    getCardRows()  // Card/Table rows
    {
        return cy.get('tbody:visible tr')
    }
    getCardRowsvisible()  // Card/Table visible rows
    {
        return cy.get('tbody:visible tr')
    }
    getChalanNoInputField()  // Card/Table rows
    {
        return cy.get('.card-body input[placeholder="চালান নং"]')
    }
    getCalendarIcon()  //Calendar Icon
    {
        return cy.get('svg.mat-datepicker-toggle-default-icon:eq(0)')
    }

    getConfirmPopUpHeader()  //নিশ্চিত করুন
    {
        return cy.get('.modal-content .card-header mat-label')
    }
    getConfirmPopUpYesButton()  //হ্যাঁ Button
    {
        return cy.get('.modal-content .card-footer button:eq(1)')
    }

    getCardFooterFourthButton()  //গ্রহণ এবং ইন্সপেকশনের জন্য প্রেরণ করুন
    {
        return cy.get('.card-footer button.btn-success:eq(0)')
    }
    getCardFooterFifthButton()  //Card Footer icon 05
    {
        return cy.get('.card-footer button:eq(4)')
    }

    //Pagination locators
    getPaginationDropDownField()   //Pagination drop-down field
    {
        return cy.get('.card:visible .card-body .e-pagesizes .e-pagerdropdown > span')
    }
    getPaginationDropDownFieldValue()   //Pagination drop-down value
    {
        return cy.get('div > ul > li')
    }
    
}
export default ReceiveGoods_StoreKeepingPage;