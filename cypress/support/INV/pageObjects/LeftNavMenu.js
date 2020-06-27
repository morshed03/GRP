class LeftNavMenu
{
    getDropDownMenu()  //All drop-down menu
    {
        return cy.get('app-sidebar-nav .nav-dropdown-toggle')
    }
    getItemRequisition()  //মালামালের চাহিদাপত্র 
    {
        return cy.get('ul li a[href*="inventory/requisition/item-requisition-info"]')
    }
}
export default LeftNavMenu;