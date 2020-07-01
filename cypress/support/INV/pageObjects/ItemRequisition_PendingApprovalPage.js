class ItemRequisition_PendingApprovalPage
{
    getPageTitle()  //Page title
    {
        return cy.get('.main div h4')
    }
    getCardRows()  //TR
    {
        return cy.get('tbody:visible tr')
    }
    getProcessButton()  //প্রক্রিয়া
    {
        return cy.get('.card-body tr td button.btn-outline-success')
    }
    getRequisitionCommentField()  //মন্তব্য
    {
        return cy.get('.modal-content .card-body tr td input[placeholder="মন্তব্য"]')
    }
    getApprovalButton()  //অনুমোদন করুন button
    {
        return cy.get('.modal-content .card-footer button.btn-success:eq(1)')
    }

    //নিশ্চিত করুন pop-up locators
    getYesButton()  //হ্যাঁ button
    {
        return cy.get('.modal-content:visible .modal-footer button.btn-success')
    }

    //অনুরোধ নিশ্চিতকরণ pop-up locators
    getSaveButton()  //সংরক্ষন করুন button
    {
        return cy.get('.modal-content:visible .modal-body form button.btn-success')
    }
}
export default ItemRequisition_PendingApprovalPage;