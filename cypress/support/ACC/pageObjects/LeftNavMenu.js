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
    getApprovedBillSubMenu()  //অনুমোদিত বিল -> ব্যয় Sub-Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/expenditure/bill/approved-bill/list"]:eq(0)')
    }
    getInvoiceSubMenu()  //ইনভয়েস -> ব্যয় Sub-Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/expenditure/invoice/list"]:eq(0)')
    }
    getApprovedInvoiceSubMenu()  //অনুমোদিত ইনভয়েস -> ব্যয় Sub-Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/expenditure/invoice/approved-invoice/list"]:eq(0)')
    }

    //অনুমোদন অপেক্ষমান menu
    getPendingBillSubMenu()  // অপেক্ষমান বিল
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/expenditure/bill/pending-bill/list"]')
    }
    getPendingInvoiceSubMenu()  //অপেক্ষমান ইনভয়েস
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/expenditure/invoice/pending-invoice/list"]')
    }
}
export default LeftNavMenu;