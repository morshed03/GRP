class LeftNavMenu
{
    //All Menus
    getDropDownMenu()  // All drop-down menu
    {
        return cy.get('.sidebar ast-sidebar-nav-dropdown a.nav-dropdown-toggle')
    }

    //কেন্দ্রীয় হিসাবরক্ষণ Menus ----------------------------------------------
    getFundReturnSubMenu()  //তহবিল ফেরত -> কেন্দ্রীয় হিসাবরক্ষণ Sub-Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/budget/fund-return/list"]:eq(0)')
    }

    //হিসাব রক্ষন ব্যবস্থাপনা
    getBankAccountSubMenu()  //হিসাব রক্ষন ব্যবস্থাপনা -> ব্যাংক হিসাব Sub-Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/chart-of-accounts/bank-account/list"]')
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
    getUnpaidInvoiceSubMenu()  //অপরিশোধিত ইনভয়েস -> ব্যয় Sub-Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/expenditure/payment/invoice-list-for-payment"]:eq(0)')
    }
    getPaymentListSubMenu()  //মূল্যপরিশোধের তালিকা -> ব্যয় Sub-Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/expenditure/payment/payment-info-list"]:eq(0)')
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
    getPendingFundReturnSubMenu()  //তহবিল ফেরত
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/budget/fund-return/pending-list"]')
    }

    //ভ্যাট ট্যাক্স এআইটি menu
    getGroupCreationSubMenu()  //গ্রুপ তৈরিকরণ
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/vat-tax-ait/vat-tax-ait-payment/create-group"]')
    }
    getVatTaxAitPaymentSubMenu()  //ভ্যাট ট্যাক্স এআইটি প্রদান
    {
        return cy.get('ast-sidebar-nav-items a[href*="acc/account/vat-tax-ait/vat-tax-ait-payment/group-information"]')
    }
}
export default LeftNavMenu;