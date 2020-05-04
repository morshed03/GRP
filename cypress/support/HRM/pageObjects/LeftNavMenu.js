class LeftNavMenu
{
    //All Menus
    getDropDownMenu()  // All drop-down menu
    {
        return cy.get('.sidebar .nav-expand-header')
    }
    // পিএমআইএস and Sub-Menus
    getHomeSubMenu()  // হোম -> পিএমআইএস Sub-menu
    {
        return cy.get('mat-nav-list a[href*="/hrm/pmis/home"]')
    }
}
export default LeftNavMenu;