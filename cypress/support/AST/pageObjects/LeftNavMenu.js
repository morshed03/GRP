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
    getRequisitionMenu()  //  চাহিদা পত্র
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/requisition"]')
    }

    //অনুমোদন অপেক্ষমান and Sun-Menus ----------------------------------------------
    getRequisitionSubMenuOfPendingApproval()  // চাহিদা পত্র -> অনুমোদন অপেক্ষমান sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/requisition/approve"]')
    }
    getInspectedSubMenu()  // পরিদর্শনকৃত -> অনুমোদন অপেক্ষমান sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/inspection/inspected"]')
    }
    getDirectOutSubMenuOfPendingApproval()  // সরাসরি প্রদান -> অনুমোদন অপেক্ষমান sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/direct-out/direct-out-approve-list"]')
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
    getAssetTaggingSubMenu()  //অ্যাসেট ট্যাগিং -> স্টোর কিপিং sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/asset-tagging"]')
    }
    getIssueLisrSubMenu()  //ইস্যু -> স্টোর কিপিং sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/requisition/issue-list"]')
    }
    getDirectInSubMenu()  //সরাসরি গ্রহণ -> স্টোর কিপিং sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/direct-in"]')
    }
    getDirectOutSubMenu()  //সরাসরি প্রদান -> স্টোর কিপিং sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/direct-out"]')
    }

    //ইন্সপেকশন and Sub-Menus ----------------------------------------------
    getInspectionUnassignedSubMenu()  //  পরিদর্শক নির্ধারণ -> ইন্সপেকশন sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/inspection/unassigned"]')
    }
    getInspectionAssignedSubMenu()  // নির্ধারিত পরিদর্শন -> ইন্সপেকশন sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/inspection/assigned"]')
    }
    
}
export default LeftNavMenu;