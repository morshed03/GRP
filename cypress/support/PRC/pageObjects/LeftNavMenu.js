class LeftNavMenu
{
    //All Menus
    getAllMenu()  // All left menu of PRC module
    {
        return cy.get('app-sidebar-nav-dropdown app-sidebar-nav-link .nav-link')
    }
    getDropDownMenu()  // All drop-down menu
    {
        return cy.get('app-sidebar-nav-dropdown a.nav-dropdown-toggle')
    }

    //অনুমোদন অপেক্ষমান and Sub-Menus ----------------------------------------------
    getAPPSubMenu()  // এপিপি -> অনুমোদন অপেক্ষমান sub-menu
    {
        return cy.get('app-sidebar-nav-items a[href*="procurement/app/approval"]:eq(1)')  //For SQA
        //return cy.get('app-sidebar-nav-items a[href*="procurement/app/approval"]')
    }

    //এপিপি and sub-menu -------------------------------------------------------------
    getDeclarationAPPSubMenu()  // চাহিদাপত্র ঘোষণা -> এপিপি sub-menu
    {
        return cy.get('app-sidebar-nav-items a[href*="procurement/app/requisition/declaration"]')
    }
    getRequisitionSubmissionAPPSubMenu()  // চাহিদাপত্র প্রেরণ -> এপিপি sub-menu
    {
        return cy.get('app-sidebar-nav-items a[href*="procurement/app/requisition/published-declaration"]')
    } 
    getPreparationAPPSubMenu()  // প্রস্তুত করুন -> এপিপি sub-menu
    {
        return cy.get('app-sidebar-nav-items a[href*="procurement/app/preparation/app-list"]')
    }
    getAmendmentAPPSubMenu()  // এপিপি -> সমন্বয় sub-menu
    {
        return cy.get('app-sidebar-nav-items a[href*="procurement/app/amendment/app-list"]')
    }

    //ওপিএম and Sub-Menus -------------------------------------------------------
    getThroughAPPOPMSubMenu()  // ওপিএম -> এপিপির মাধ্যমে sub-menu
    {
        return cy.get('app-sidebar-nav-items a[href*="procurement/opm/list"]')
    }
    getDCPOPMSubMenu()  // ওপিএম -> ডিসিপি Sub-menu
    {
        return cy.get('app-sidebar-nav-items a[href*="procurement/opm/list/DCP"]')
    }

    //বিওকিউ Menu ---------------------------------------------------------------
    getBOQMenu()
    {
        return cy.get('app-sidebar-nav a[href*="procurement/boq"]')
    }

    //বিল and Sub-Menus ---------------------------------------------------------
    getJobProgressBillSubMenu()    //কাজের অগ্রগতি
    {
        return cy.get('app-sidebar-nav a[href*="procurement/bill/payment-schedule"]')
    }
    getPreparationBillSubMenu()    //প্রস্তুত করুন
    {
        return cy.get('app-sidebar-nav a[href*="procurement/bill"]')
    }
    getPreparedBillSubMenu()    //প্রস্তুতকৃত বিল
    {
        return cy.get('app-sidebar-nav a[href*="procurement/bill/billed-opm-list"]')
    }
}
export default LeftNavMenu;