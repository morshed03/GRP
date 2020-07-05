class DirectStocksInPage
{
    getAddNewDI()  //DI নতুন যোগ করুন
    {
        return cy.get('.card:visible .card-header button.btn.btn-success')
    }
    
    getStoreField()  //স্টোর
    {
        return cy.get('.card-body form ng-select[id="storeId"]')
    }
    getReferenceNoField()  //রেফারেন্স নং
    {
        return cy.get('.card-body form input[id="refNo"]')
    }
    getMemoNoField()  //মেমো নং
    {
        return cy.get('.card-body form input[id="memoNo"]')
    }
    getRemarkField()  //মন্তব্য
    {
        return cy.get('.card-body form textarea[id="remarks"]')
    }
    getAddNewButton()  //নতুন যোগ করুন
    {
        return cy.get('.card-body form button.btn-sm.btn-success')
    }
    getAttachmentsButton()  // সংযুক্তিসমূহ 
    {
        return cy.get('.card-header button.btn-outline-primary')
    }
    getSaveSendButton()  // সংরক্ষণ ও প্রেরণ করুন 
    {
        return cy.get('.card-footer button.btn-sm.btn-success:eq(0)')
    }

    //Attachment pop-up locators 
    getSelectFileButton()  //ফাইল নির্বাচন করুন 
    {
        return cy.get('.modal-content .card-body input[id="selectfile"]')
    }
    getFileAddButton()  //ফাইল Add button
    {
        return cy.get('.modal-content .card-body button.btn-sm.btn-info')
    }
    //আইটেম নির্বাচন করুন pop-up locators
    getCategoryField()  //ক্যাটাগরি
    {
        return cy.get('.modal-content .modal-body ng-select[id="category"]')
    }
    getItemGroupField()  //আইটেম গ্রুপ
    {
        return cy.get('.modal-content .modal-body ng-select[id="itemId"]')
    }
    getQuantityField()  //পরিমাণ
    {
        return cy.get('.modal-content .modal-body input[id="detailQuantity"]')
    }
    getPriceField()  //একক দাম:
    {
        return cy.get('.modal-content .modal-body input[id="price"]')
    }
    getAddButton()  //যুক্ত করুন
    {
        return cy.get('.modal-content .modal-footer button.btn-success')
    }
    getCloseButton()  //বন্ধ করুন
    {
        return cy.get('.modal-content .modal-footer button.btn-danger')
    }

    //দ্রব্যাদি popup locators
    getSelectItem()  //বিদ্যমান দ্রব্য
    {
        return cy.get('.modal-content:visible .modal-body tbody tr td')
    }
}
export default DirectStocksInPage;