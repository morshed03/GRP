class ReceiveTaggedItemsPage
{
    //ট্যাগ দিন page locators
    getTagInputFieldForFirstStore()  // ট্যাগ
    {
        return cy.get('mat-form-field input:eq(0)')
    }
    getTagInputFieldForSecondStore()  // ট্যাগ
    {
        return cy.get('mat-form-field input:eq(1)')
    }
    getCardFooterThirdButton()  //Card Footer icon 03
    {
        return cy.get('.card-footer button:eq(2)')
    }
    
}
export default ReceiveTaggedItemsPage;