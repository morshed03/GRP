class LeftNavMenu
{
    //Store Keeper's MENU 
    getOdersMenu()  // অর্ডার সমূহ menu
    {
        return cy.get('ast-sidebar-nav :nth-child(1) > .nav-dropdown-toggle')
    }
    getReceiveGoodsMenu()  // পণ্য গ্রহণ Sub-menu
    {
        return cy.get('a[href="/bcc/web/ast/asset/reception"]')
    }
    getMRRMenu()  // এমআরআর Sub-menu
    {
        return cy.get('a[href="/bcc/web/ast/asset/reception/mrr"]')
    }
}
export default LeftNavMenu;