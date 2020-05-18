class DirectIn_StoreKeepingPage
{
    getAddButtonFirstStore()  //Direct in Plus icon
    {
        return cy.get('.card:visible .card-header button:eq(0)')
    }
    getAddButtonSecondStore()  // Direct in Plus icon
    {
        return cy.get('.card-header button:eq(1)')
    }

    getReferenceNoField()  //রেফারেন্স নং
    {
        return cy.get('.card-body input[placeholder="রেফারেন্স নং"]:eq(0)')
    }
    getReceptionTypeField()  //গ্রহণের ধরণ
    {
        return cy.get('.card-body input[placeholder="গ্রহণের ধরণ"]:eq(0)')
    }
    getJustificationField()  //ন্যায্যতা
    {
        return cy.get('.card-body input[placeholder="ন্যায্যতা"]:eq(0)')
    }

    getAddItemPlusButtonForFirstStore()  //পণ্য যোগ করুন for First Store
    {
        return cy.get('.card:visible .card-header button mat-icon:eq(0)')
    }
    getAddItemPlusButtonForSecondStore()  //পণ্য যোগ করুন for Second Store
    {
        return cy.get('.card-header button mat-icon:eq(1)')
    }

    getItemCategoryField()  //ক্যাটাগরি drop-down field
    {
        return cy.get('.card-body mat-select[aria-label="ক্যাটাগরি"]:eq(0)')
    }
    getItemFeaturesHeader()  // বৈশিষ্ট্য fop-up Header
    {
        return cy.get('.modal-content .card-header mat-label')
    }
    getItemsDropDownField()  // পণ্য সমূহ drop-down field
    {
        return cy.get('.modal-content mat-form-field mat-select[aria-label="পণ্য সমূহ"]')
    }
    getAddFeaturesButton()  //   বৈশিষ্ট্য যোগ করুন button
    {
        return cy.get('.modal-content .card-footer button.btn-success:eq(0)')
    }
    getAddItemButton()  // কার্যক্রম plus icon
    {
        return cy.get('.card:visible .card-body tbody td button mat-icon:eq(0)')
    }
    
    
}
export default DirectIn_StoreKeepingPage;