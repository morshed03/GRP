/// <reference types="cypress" />

import CommonPageActions from '../../../support/HRM/pageobjects/pageactions/common/CommonPageActions'
import RewardsApplicationPageActions from '../../../support/HRM/pageobjects/pageactions/awardsAndpublications/awards/RewardsApplicationPageActions'
import PublicationsApplicationPageActions from '../../../support/HRM/pageobjects/pageactions/awardsAndpublications/publications/PublicationsApplicationPageActions'
const or = require('../../../support/HRM/locators/awardsAndpublications_locators.json');
const common = require('../../../support/HRM/locators/common_locators.json');
describe("Working Awards And Publications module",()=>{

    const commonPage = new CommonPageActions()
    const rewardsApplication = new RewardsApplicationPageActions()
    const publicationsApplication = new PublicationsApplicationPageActions()
    before(()=>{

        cy.fixture('AwardsAndpublicationsTestDataSQA').then((data)=>{

            globalThis.data = data
        })
    })

    beforeEach(()=>{
        cy.visit(Cypress.env('url'))
        // loginPage.navigateToURL()
    })
   

    ///awards
  
    ///পুরস্কার আবেদন করে জিও অনাবশ্যক করে Approval এর কাছে পাঠানো
    it("TC_1. PE:  Requesting a prize and sending it to Approval unnecessarily",()=>{
        cy.login(data.validLoginCredentials.morshed.username,data.validLoginCredentials.morshed.password);

        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //পুরস্কার এবং প্রকাশনা
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.awardsAndPublications)
        // পুরস্কার  ///need discusss 
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.awards)
        // আবেদন ও অনুমোদন
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.applicationAndApproval,data.leftNavMenu.awardAndPublicationSubMenu.applicationAndApproval)
        
        //পুরস্কার( আবেদন) panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.rewardsApplication.rewardsApplicationPanel)
     
        //ADD Btn
        commonPage.addBtn(common.GlobalLocator.addBtn)
        
        //পুরস্কার( আবেদন)
        rewardsApplication.rewardsApplicationDetails(
            data.rewardsApplication.awardsTitleData,
            data.rewardsApplication.awardsTypeData,
            data.rewardsApplication.awardsGivenByData,
            data.rewardsApplication.awardsTagData,
            data.rewardsApplication.awardsDescData,
            data.rewardsApplication.fileTypeData,
            or.rewardsApplication.awardsfileAdd,
            or.rewardsApplication.awardsdraft
        )
   
        //search by  awards title 
        commonPage.getSearchListWithSelectorByName(or.rewardsApplication.searchByName,data.rewardsApplication.awardsTitleData)
        //Edit Btn
        commonPage.getEditBtn(common.GlobalLocator.editBtn)

        // জিও অনাবশ্যক করতে অনুরোধ করুন 
        commonPage.getsaveBtn(or.rewardsApplication.geoBtn)

    })

    ///approval তথ্য যাচাই করে সংরক্ষণ করবে
    it("TC_2. PE: approval will verify and save the information ",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);

        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
       
        //পুরস্কার এবং প্রকাশনা
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.awardsAndPublications)
       
        // পুরস্কার  ///need discusss 
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.awards)
       
        // আবেদন ও অনুমোদন
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.applicationAndApproval,data.leftNavMenu.awardAndPublicationSubMenu.applicationAndApproval)
        
        //পুরস্কার অনুমোদন( অপেক্ষমাণ, প্রেরিত, অনুমোদিত, অননুমোদিত, তথ্য যাচাই ) panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.approvalAward.approvalAwardPanel)

         //তথ্য যাচাই
        commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.approvalAward.verificationInfoTab)

        //search by awards title 
        commonPage.getSearchListWithSelectorByName(or.approvalAward.searchByName,data.rewardsApplication.awardsTitleData)
     
        //Edit Btn /// need to discuss (eq use)
        commonPage.getEditBtn(or.rewardsApplication.editBtn)

        ///uncheck
        commonPage.getCheckboxCheckUncheck(common.GlobalLocator.matTableCheckbox)

        //সংরক্ষণ
        commonPage.getsaveBtn(common.GlobalLocator.searchBtn)

    })
   /////পুরস্কার আবেদন করে Approval এর কাছে পাঠানো
    it("TC_3. PE: Application for award sent to Approval ",()=>{
        cy.login(data.validLoginCredentials.morshed.username,data.validLoginCredentials.morshed.password);

        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        //পুরস্কার এবং প্রকাশনা
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.awardsAndPublications)
        // পুরস্কার  ///need discusss 
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.awards)
        // আবেদন ও অনুমোদন
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.applicationAndApproval,data.leftNavMenu.awardAndPublicationSubMenu.applicationAndApproval)
        
        //পুরস্কার( আবেদন) panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.rewardsApplication.rewardsApplicationPanel)
     
        //search by  awards title 
        commonPage.getSearchListWithSelectorByName(or.rewardsApplication.searchByName,data.rewardsApplication.awardsTitleData)
        //Edit Btn
        commonPage.getEditBtn(common.GlobalLocator.editBtn)

        //প্রেরণ  
        commonPage.getsaveBtn(common.GlobalLocator.saveBtn2)

        //অনুমোদনের জন্য প্রেরণ
        rewardsApplication.SentForApproval(
            data.sentforApproval.employee,
            common.GlobalLocator.send2,
            common.GlobalLocator.completeBtn,
            data.sentforApproval.completebtnName
        )
    })
 
    //অনুমোদন পুরষ্কারের আবেদন অনুমোদন করবে
    it("TC_4. PE: Approval will approve the awards application ",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password);

        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
       
        //পুরস্কার এবং প্রকাশনা
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.awardsAndPublications)
       
        // পুরস্কার  ///need discusss 
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.awards)
       
        // আবেদন ও অনুমোদন
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.applicationAndApproval,data.leftNavMenu.awardAndPublicationSubMenu.applicationAndApproval)
        
        //পুরস্কার অনুমোদন( অপেক্ষমাণ, প্রেরিত, অনুমোদিত, অননুমোদিত, তথ্য যাচাই ) panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.approvalAward.approvalAwardPanel)

        //search by  awards title 
        commonPage.getSearchListWithSelectorByName(or.approvalAward.searchByName,data.rewardsApplication.awardsTitleData)

        //Edit Btn (need to discuss)
        commonPage.getSendBtn(or.approvalAward.sendBtn)

        ///অনুমোদন 
        commonPage.getApprovalBtn(common.pendingList.approvalBtn)
        commonPage.getCommentField(data.pendingList.comment)
        commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn2)
        commonPage.getCompleteBtn(common.pendingList.completeBtn)

    })
   //PMIS এর প্রশিক্ষনে সেই কর্মচারী অ্যাড হইসে কিনা দেখা 
   it("TC_5. PE:  See if that approved awards  added to PMIS awards",() =>{
        cy.login(data.validLoginCredentials.morshed.username,data.validLoginCredentials.morshed.password)
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.pmis)
        
        //পিএমআইএস
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.pmisHome,data.leftNavMenu.awardAndPublicationSubMenu.home)

        //যোগ্যতা panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.pmis.home.qualification)

        //scroll bottom
        commonPage.getScroll('bottom')

        //পুরস্কার tab
        commonPage.getTabBtn(common.GlobalLocator.tabBtn, data.pmis.home.awardsTabBtn)

        //প্রশিক্ষণসমূহের তালিকা
        //search by  awards title 
        commonPage.getSearchListWithSelectorByName(or.Pmis.home.trainingSearchBox,data.rewardsApplication.awardsTitleData)
    })

/////publication

///প্রকাশনা আবেদন করে Approval এর কাছে পাঠানো
it("TC_6. PE: Publication request sent to Approval ",()=>{
    cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
    
    commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
    //পুরস্কার এবং প্রকাশনা
    commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.awardsAndPublications)
    // প্রকাশনা  ///need discusss 
    commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.publications)
    // আবেদন ও অনুমোদন
    commonPage.getLeftNavSubMenu(or.leftNavmenuItems.publicationApplicationAndApproval,data.leftNavMenu.awardAndPublicationSubMenu.applicationAndApproval)
    
    //প্রকাশনা ( আবেদন) panel
    commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.publicationApplication.publicationApplicationPanel)
 
    //ADD Btn
    commonPage.addBtn(common.GlobalLocator.addBtn)
    
    
    //প্রকাশনা( আবেদন)
    publicationsApplication.publicationsApplicationDetails(
        data.publicationApplication.awardsTitleData,
        data.publicationApplication.awardsTypeData,
        data.publicationApplication.awardsGivenByData,
        data.publicationApplication.awardsTagData,
        data.publicationApplication.awardsDescData,
        or.publicationApplication.publicationfileAdd,
        or.rewardsApplication.awardsdraft
    )
    
    //search by  awards title 
    commonPage.getSearchListWithSelectorByName(or.rewardsApplication.searchByName,data.rewardsApplication.awardsTitleData)
 
    //Edit Btn
    commonPage.getEditBtn(common.GlobalLocator.editBtn)

     //প্রেরণ  
     commonPage.getsaveBtn(common.GlobalLocator.saveBtn2)
      
     //অনুমোদনের জন্য প্রেরণ
     rewardsApplication.SentForApproval(
         data.publicationsentforApproval.employee,
         common.GlobalLocator.send2,
         common.GlobalLocator.completeBtn,
         data.sentforApproval.completebtnName
     )

})

///Approval প্রকাশনার আবেদনটি অনুমোদন করবে [অপেক্ষমাণ, প্রেরিত, অনুমোদিত, অননুমোদিত]
it("TC_7. PE: Approval will approve the publication application ",()=>{
    cy.login(data.validLoginCredentials.morshed.username,data.validLoginCredentials.morshed.password);

    commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
   
    //পুরস্কার এবং প্রকাশনা
    commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.awardsAndPublications)
   
    // প্রকাশনা  ///need discusss 
    commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.publications)
    // আবেদন ও অনুমোদন
    commonPage.getLeftNavSubMenu(or.leftNavmenuItems.publicationApplicationAndApproval,data.leftNavMenu.awardAndPublicationSubMenu.applicationAndApproval)
      
    //প্রকাশনার অনুমোদন ( অপেক্ষমাণ, প্রেরিত, অনুমোদিত, অননুমোদিত ) panel
    commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.approvalPublication.approvalPublicationPanel)


    //search by awards title 
    commonPage.getSearchListWithSelectorByName(or.approvalAward.searchByName,data.rewardsApplication.awardsTitleData)

   //Edit Btn (need to discuss)
   commonPage.getSendBtn(or.approvalPublication.sendBtn)

   ///অনুমোদন 
   commonPage.getApprovalBtn(common.pendingList.approvalBtn)
   commonPage.getCommentField(data.pendingList.comment)
   commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn2)
   commonPage.getCompleteBtn(common.pendingList.completeBtn)

})

//PMIS এর প্রশিক্ষনে সেই কর্মচারী অ্যাড হইসে কিনা দেখা 
it("TC_8. PE:  See if that approved publication  added to PMIS publication",() =>{
    cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
    commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
    commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.pmis)
    
    // প্রকাশনা  ///need discusss 
    commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.publications)
    // আবেদন ও অনুমোদন
    commonPage.getLeftNavSubMenu(or.leftNavmenuItems.publicationApplicationAndApproval,data.leftNavMenu.awardAndPublicationSubMenu.applicationAndApproval)
      
    //প্রকাশনা ( আবেদন) panel
    commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.publicationApplication.publicationApplicationPanel)
 
    //search by awards title 
    commonPage.getSearchListWithSelectorByName(or.rewardsApplication.searchByName,data.rewardsApplication.awardsTitleData)

    //পিএমআইএস
    commonPage.getLeftNavSubMenu(or.leftNavmenuItems.pmisHome,data.leftNavMenu.awardAndPublicationSubMenu.home)

    //যোগ্যতা panel
    commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.pmis.home.qualification)

    //scroll bottom
    commonPage.getScroll('bottom')

    //প্রকাশনা tab
    commonPage.getTabBtn(common.GlobalLocator.tabBtn, data.pmis.home.publicationTabBtn)

    //প্রশিক্ষণসমূহের তালিকা
    //search by  awards title 
    commonPage.getSearchListWithSelectorByName(or.Pmis.home.trainingSearchBox,data.rewardsApplication.awardsTitleData)

    //view btn
    commonPage.getviewBtn(common.GlobalLocator.viewBtn)

    //cancel btn
    commonPage.getCancelBtn(common.GlobalLocator.cancelBtn)

})

    afterEach(() => {
        cy.logout(common.logoutPage.logoutDropdownBtn2,common.logoutPage.logoutBtn2)
    })

})