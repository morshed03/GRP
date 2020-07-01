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

    //স্টোর কিপিং and sub-menus
    getIssueItem_StoreKeeping()  // ইস্যু আইটেম <- স্টোর কিপিং
    {
        return cy.get('ul li a[href*="inventory/requisition/item-issue-tabset"]')
    }
}
export default LeftNavMenu;