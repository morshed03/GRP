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

    //রক্ষণাবেক্ষণ Menu ----------------------------------------------
    getItemsSubMenuOfMaintenance()  //পণ্য সমূহ -> রক্ষণাবেক্ষণ Sub-Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/maintenance/assets"]')
    }
    getRequestSubMenuOfMaintenance()  //অনুরোধ করুন -> রক্ষণাবেক্ষণ Sub-Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/maintenance/request"]')
    }
    //ডিসপোজাল & Sub-Menus
    getDisposalRequestSubMenu()  //নিষ্পত্তিকরণের জন্য অনুরোধ -> ডিসপোজাল Sub-Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/disposal/disposal-request"]')
    }

    //আমার অধিকৃত সম্পদসমূহ Menu
    getMyAssetMenu()  //আমার অধিকৃত সম্পদসমূহ Menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/tracking/my-assets"]')
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
    getRequestApprovalSubMenu()  // ফেরত অনুরোধ -> অনুমোদন অপেক্ষমান sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/return/request-approval-list"]')
    }
    getDecisionOnDisposalSubMenu()  //ডিসপোজাল সংক্রান্ত সিদ্ধান্ত -> অনুমোদন অপেক্ষমান sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/disposal/requested-disposal"]')
    }
    getVehicleRequisitionSubMenu()  //যানবাহনের চাহিদাপত্র -> অনুমোদন অপেক্ষমান sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/vehicle/approve"]')
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

    //নিষ্পত্তিকরণ & Sub-Menus
    getDisposalResultSubMenu()  // ডিসপোজালের ফলাফল -> ডিসপোজাল sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/disposal/decided-disposal"]')
    }

    //ফেরৎ গ্রহণ and Sub-Menus ----------------------------------------------
    ReceiveTaggedItemsSubMenu()  // ট্যাগকৃত পণ্যসমূহ গ্রহণ -> ফেরৎ গ্রহণ sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/return/tag-entry"]')
    }
    getRequestReturnSubMenu()  // ফেরৎ অনুরোধ -> ফেরৎ গ্রহণ sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/return/request-return-list"]')
    }
    getRequestReceiveSubMenu()  // ফেরত গ্রহণ -> ফেরৎ গ্রহণ sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/return/request-receive-list"]')
    }

    //যানবাহন & Sub Menus
    getAddVehicleSubMenu()  // যানবাহন যোগ->  যানবাহন sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/vehicle/vehicle-add"]')
    }
    getCreateVehicleRequisitionSubMenu()  //তৈরি করুন -> যানবাহনের চাহিদাপত্র  -> যানবাহন sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/vehicle/requisition"]')
    }
    getCompletedRequestsSubMenu()  //সমাপ্ত অনুরোধসমূহ -> যানবাহনের চাহিদাপত্র  -> যানবাহন sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/vehicle/previous-requisition"]')
    }
    getVehicleListSubMenu()  //যানবাহন তালিকা -> যানবাহন sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="/asset/vehicle/status"]')
    }
    getReturnVehicleSubMenu()  //ফেরৎ গ্রহণ -> যানবাহন sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/vehicle/return"]')
    }
    getVehicleIssueSubMenu()  //ইস্যু -> যানবাহন sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/vehicle/issue"]')
    }
    getVehicleCaseSubMenu()  //তৈরি করুন -> যানবাহন মামলা -> যানবাহন sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="/asset/vehicle/case"]')
    }
    getCompletedCasesSubMenu()  //সমাপ্ত মামলাগুলো -> যানবাহন মামলা -> যানবাহন sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="/asset/vehicle/previous-case"]')
    }

    //রিপোর্টস & Sub-Menus 
    getDisposedAssetSubMenu()  // নিস্পত্তিকৃত সম্পদ -> রিপোর্টস sub-menu
    {
        return cy.get('ast-sidebar-nav-items a[href*="asset/reports/disposed-asset"]')
    }
}
export default LeftNavMenu;