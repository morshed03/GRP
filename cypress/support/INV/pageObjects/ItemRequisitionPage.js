class ItemRequisitionPage
{
    getItemRequisitionButton()  // মালামালের চাহিদাপত্র 
    {
        return cy.get('.card:visible .card-header button.btn:eq(1)')
    }
    getFrequentlyRequestedItemButton()  // প্রায়শই অনুরোধ করা আইটেম  
    {
        return cy.get('.card:visible .card-header button.btn:eq(2)')
    }
    getItemsButton()  //দ্রব্যাদি  
    {
        return cy.get('.card:visible .card-header button.btn.btn-success')
    }

    //আইটেম অনুসন্ধান pop-up locators
    getPopUpCardHeader()  //দআইটেম অনুসন্ধান 
    {
        return cy.get('.modal-content .modal-header h4')
    }
    getCategoryTypeDropDown()  //ক্যাটাগরি টাইপ
    {
        return cy.get('.modal-content .modal-body ng-select[id="categoryType"]')
    }
    getDropDownItems()  //drop down items 
    {
        return cy.get('.options ul li span')
    }
}
export default ItemRequisitionPage;