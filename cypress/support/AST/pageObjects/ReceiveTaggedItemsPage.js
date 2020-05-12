class ReceiveTaggedItemsPage
{
    //ট্যাগ দিন page locators
    getTagInputFieldForFirstStore()  // ট্যাগ
    {
        return cy.get('.card-body:visible mat-form-field input:eq(0)')
    }
    getCardFooterThirdButton()  //Card Footer icon 03
    {
        return cy.get('.card:visible .card-footer button.btn-success:eq(0)')
    }
    getSendApproverButton()  // পরিদর্শনের জন্য প্রেরণ করুন  
    {
        return cy.get('.card:visible .card-footer button.btn-success:eq(1)')
    }
    
}
export default ReceiveTaggedItemsPage;