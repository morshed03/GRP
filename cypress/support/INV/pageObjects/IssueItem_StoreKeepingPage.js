class IssueItem_StoreKeepingPage
{
    getSearchField()  //Search field
    {
        return cy.get('.card:visible .card-body input[type="text"]')
    }
    getPageTitle()  //ইস্যু আইটেম page title
    {
        return cy.get('.main div h5')
    }
    getIssueItemButton()  //ইস্যু আইটেম button
    {
        return cy.get('.card-body tr td button.btn.btn-primary')
    }

    //দ্রব্য ইস্যু pop-up locatore
    getPopUpTitle()  //Title
    {
        return cy.get('.modal-content .modal-header h3')
    }
    getIssueIButton()  //ইস্যু  button
    {
        return cy.get('.modal-body button.btn-success')
    }
}
export default IssueItem_StoreKeepingPage;