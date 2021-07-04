const or = require("./commonGRPLocators.json")

class DashboardPageElements
{   
    //অফিস/পদ নির্বাচন করুন pop-up locators -----------------------
    getOfficePopUpHeader()  // Pop-up title
    {
        return cy.get('mat-dialog-container div>p')
    }
    getOfficeName()  //Office name
    {
        return cy.get('mat-dialog-container div>button')
    }

    //Dashboard page locators --------------------------------------
    getACCAvatar()  //ACC avatar
    {
        return cy.get(or.GRPDashboardPage.ACCAvatar)
    }
    getHRMAvatar()  //HRM avatar
    {
        return cy.get(or.GRPDashboardPage.HRMAvatar)
    }
    getASTAvatar()  //AST avatar
    {
        return cy.get(or.GRPDashboardPage.ASTAvatar)
    }
    getPRCAvatar()  //PRC avatar
    {
        return cy.get(or.GRPDashboardPage.PRCAvatar)
    }
    getINVAvatar()  //INV avatar
    {
        return cy.get(or.GRPDashboardPage.INVAvatar)
    }

    //Log Out Locators ---------------------------------------------
    getUserAvatar() // The user avatar from anypage page 
    {
        return cy.get('img.img-avatar')
    }
    getExitLink() // The বাহির button from dashboard page 
    {
        return cy.xpath('//button[contains(text(),"বাহির") and @type="button"]')
    }
    /*
    getUserCircle()     //User icon from any page
    {
        return cy.get('li[placement="bottom right"] > a > i.fa.fa-user-circle.fa-lg')
    }
    */
    getGRPDashbardIcon() //জিআরপি ড্যাশবোর্ড​ icon from header
    {
        return cy.get('img[src="assets/img/brand/grp_home.svg"]')
    }
}
export default DashboardPageElements;