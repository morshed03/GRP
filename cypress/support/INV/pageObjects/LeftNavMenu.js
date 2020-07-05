class LeftNavMenu
{
    getDropDownMenu()  //All drop-down menu
    {
        return cy.get('app-sidebar-nav .nav-dropdown-toggle')
    }

    // ব্যবহারকারী & Sub Menus
    getItemRequisition()  //মালামালের চাহিদাপত্র 
    {
        return cy.get('ul li a[href*="inventory/requisition/item-requisition-info"]')
    }

    // অনুমোদন অপেক্ষমান and sub-menus
    getItemRequisition_PendingApproval()  //মালামালের চাহিদাপত্র <-  অনুমোদন অপেক্ষমান 
    {
        return cy.get('ul li a[href*="inventory/requisition/item-requisition-list"]')
    }
    getDirectStocksIn_PendingApproval()  //মালামালের চাহিদাপত্র <-  অনুমোদন অপেক্ষমান 
    {
        return cy.get('ul li a[href*="inventory/setup/direct-stock-in-list/pending"]')
    }

    //স্টোর কিপিং and sub-menus
    getIssueItem_StoreKeeping()  // ইস্যু আইটেম <- স্টোর কিপিং
    {
        return cy.get('ul li a[href*="inventory/requisition/item-issue-tabset"]')
    }

    //স্টক ব্যবস্থাপনা Menu and Sub-menus
    getDirectStocksInMenu()  // সরাসরি স্টক ইন <- স্টক ব্যবস্থাপনা
    {
        return cy.get('ul li a[href*="inventory/setup/direct-stock-in-info"]')
    }
    getDirectStocksOutMenu()  //সরাসরি স্টক আউট <- স্টক ব্যবস্থাপনা
    {
        return cy.get('ul li a[href*="inventory/setup/direct-stock-out-info"]')
    }
    //ফেরৎ menus
    getReturnMenu()  //ফেরৎ
    {
        return cy.get('ul li a[href*="inventory/return/returned-item-list"]')
    }
}
export default LeftNavMenu;