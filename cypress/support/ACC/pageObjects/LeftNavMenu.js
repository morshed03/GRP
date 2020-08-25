class LeftNavMenu
{
    //All Menus
    getDropDownMenu()  // All drop-down menu
    {
        return cy.get('.sidebar ast-sidebar-nav-dropdown a.nav-dropdown-toggle')
    }

    //ব্যয় Sub-Menus ----------------------------------------------
     getBillSubMenu()  //বিল -> ব্যয় Sub-Menu
     {
         return cy.get('ast-sidebar-nav-items a[href*="acc/account/expenditure/bill"]:eq(0)')
     }
}
export default LeftNavMenu;