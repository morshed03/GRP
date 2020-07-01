class ItemRequisitionPage
{
    getTabMenus()  //Tab Menus
    {
        return cy.get('tabset ul.nav-tabs li a.nav-link')
    }
    getItemRequisitionButton()  // মালামালের চাহিদাপত্র 
    {
        return cy.get('.card:visible .card-header button.btn:eq(1)')
    }
    getFrequentlyRequestedItemButton()  // প্রায়শই অনুরোধ করা আইটেম  
    {
        return cy.get('.card:visible .card-header button.btn:eq(2)')
    }
    getRequisitionReferenceNoField()  //রিকুইজিশন রেফারেন্স নং 
    {
        return cy.get('.card:visible .card-body form input[id="requisitionRefNo"]')
    }
    getItemsButton()  //দ্রব্যাদি  
    {
        return cy.get('.card:visible .card-header button.btn.btn-success')
    }
    getSaveSendButton()  // সংরক্ষণ ও প্রেরণ করুন 
    {
        return cy.get('.card:visible .card-footer button.btn-success:eq(0)')
    }

    //আইটেম অনুসন্ধান pop-up locators
    getPopUpCardHeader()  //Common Pop-up header text 
    {
        return cy.get('.modal-content:visible .modal-header h4')
    }
    getCategoryTypeDropDown()  //ক্যাটাগরি টাইপ
    {
        return cy.get('.modal-content .modal-body ng-select[id="categoryType"]')
    }
    getDropDownItems()  //drop down items 
    {
        return cy.get('.options ul li span')
    }
    getItemNameSearchField()  //আইটেমের নাম 
    {
        return cy.get('.modal-content .modal-body input[id="itemName"]')
    }
    getItemNameSearchButton()  //অনুসন্ধান 
    {
        return cy.get('.modal-content .modal-body button[tooltip="Modal"]')
    }
    getFeaturesPlusIcon()  //বৈশিষ্ট্য plus icon
    {
        return cy.get('.modal-content tbody tr td div .fa.fa-plus')
    }
    getQuantityField()  //পরিমাণ 
    {
        return cy.get('.modal-content .modal-body tbody td input[id="quantity"]')
    }
    getItemAddPlusButton()  //plus button 
    {
        return cy.get('.modal-content .modal-body tbody td button.btn-success')
    }
    getModalCloseButton()  //বন্ধ করুন button
    {
        return cy.get('.modal-content .modal-footer button.btn.btn-secondary')
    }

    //বৈশিষ্ট্য বাছাই করুন pop-up and locatora
    getFeaturesNameDropDown()  //নাম drop-down
    {
        return cy.get('.modal-content:visible .modal-body form ng-select[id="name"]')
    }
    getFeaturesValueDropDown()  //মান drop-down
    {
        return cy.get('.modal-content:visible .modal-body form button[icon]')
    }
    getFeaturesAddPlusButton()  //Add plus button
    {
        return cy.get('.modal-content:visible .modal-body form button .fa.fa-plus')
    }
    getDropDownItems()  //Drop Down items
    {
        return cy.get('select-dropdown ul li')
    }
    getValueDropDownItems()  //Drop Down items
    {
        return cy.get('div.ui-autocomplete-panel ul li span')
    }
    getSubmitButton()  //দাখিল করুন
    {
        return cy.get('.modal-content:visible .modal-body button.btn-success[tooltip="Modal"]')
    }
}
export default ItemRequisitionPage;