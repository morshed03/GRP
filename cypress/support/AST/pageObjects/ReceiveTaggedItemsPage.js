class ReceiveTaggedItemsPage
{
    //ট্যাগ দিন page locators
    getTagInputField()  // ট্যাগ
    {
        return cy.get('mat-form-field input')
    }
    getCardFooterThirdButton()  //Card Footer icon 03
    {
        return cy.get('.card-footer button:eq(2)')
    }
    
}
export default ReceiveTaggedItemsPage;