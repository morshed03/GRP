class ReceiveGoods_StoreKeepingPage
{
    getStoreNameTab()  // Store tab 
    {
        return cy.get('.e-tab-header .e-tab-wrap .e-tab-text')
    }
    getCardHeader()  // Page/Card Header 1
    {
        return cy.get('.card-header mat-label:eq(0)')
    }
    getSecondCardHeader()  // Page/Card Header 2
    {
        return cy.get('.card-header mat-label:eq(1)')
    }
    getThirdCardHeader()  // Page/Card Header 3
    {
        return cy.get('.card-header mat-label:eq(2)')
    }
    getFourthCardHeader()  // Page/Card Header 4
    {
        return cy.get('.card-header mat-label:eq(3)')
    }

    getCardRows()  // Card/Table rows
    {
        return cy.get('tbody tr')
    }
    getChalanNoInputField()  // Card/Table rows
    {
        return cy.get('.card-body input:eq(5)')
    }
    getCalendarIcon()  //Calendar Icon
    {
        return cy.get('svg.mat-datepicker-toggle-default-icon:eq(0)')
    }
    getCardFooterFourthButton()  //Card Footer icon 04
    {
        return cy.get('.card-footer button:eq(3)')
    }
    
}
export default ReceiveGoods_StoreKeepingPage;