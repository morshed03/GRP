class LeftNavMenu
{
    //All Menus
    getDropDownMenu()  // All drop-down menu
    {
        return cy.get('.sidebar ast-sidebar-nav-dropdown a.nav-dropdown-toggle')
    }

    //সেটিংস and Sub-Menus ----------------------------------------------
    getAPPSubMenu()  //  -> সেটিংস sub-menu
    {
        return cy.get('')
    }

    //চাহিদা পত্র Menu ----------------------------------------------
    getAPPSubMenu()  //  -> সেটিংস sub-menu
    {
        return cy.get('')
    }

    //স্টোর কিপিং and Sub-Menus ----------------------------------------------
    getOpeningStockForStoreSubMenu()  //  স্টোরের পণ্যসমূহ -> ওপেনিং স্টক -> স্টোর কিপিং sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/opening-stock/opening-stock-for-store"]')
    }
    getOpeningStockExistingIssueSubMenu()  //  ইস্যুকৃত পণ্যসমূহ -> ওপেনিং স্টক -> স্টোর কিপিং sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/opening-stock/opening-stock-existing-issue"]')
    }
    getReceiveGoodsSubMenu()  //  পণ্য গ্রহণ -> অর্ডার সমূহ -> স্টোর কিপিং sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/reception"]')
    }
}
export default LeftNavMenu;