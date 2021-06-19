/// <reference types="cypress" />

import CommonPageActions from '../../../support/HRM/pageobjects/pageactions/common/CommonPageActions'
import ConfigurationPageActions from '../../../support/HRM/pageobjects/pageactions/training/ConfigurationPageActions'
import OtherTraineesInformationPageActions from '../../../support/HRM/pageobjects/pageactions/training/OtherTraineesInformationPageActions'
import OfficeTrainingPageActions from '../../../support/HRM/pageobjects/pageactions/training/OfficeTrainingPageActions'
import InvitationAndNominationPageActions from '../../../support/HRM/pageobjects/pageactions/training/InvitationAndNominationPageActions'
import MyTrainingPageActions from '../../../support/HRM/pageobjects/pageactions/training/MyTrainingPageActions'
const or = require('../../../support/HRM/locators/training_locators.json');
const common = require('../../../support/HRM/locators/common_locators.json');

const commonPage = new CommonPageActions()
const configurationPage = new ConfigurationPageActions()
const otherTraineesInformationPage = new OtherTraineesInformationPageActions()
const officeTrainingPage = new OfficeTrainingPageActions()
const invitationAndNominationPage = new InvitationAndNominationPageActions()
const myTrainingPage = new MyTrainingPageActions()
before(()=>{

    cy.fixture('TrainingTestDataSQA').then((data)=>{

        globalThis.data = data

    })
})

beforeEach(()=>{

    cy.visit(Cypress.env('url'))
    //loginPage.navigateToURL()

})
describe("Working training module",()=>{


    //কোন কোন এমপ্লয়ী কে অনুমোদনের জন্য পাঠাবো
    it("TC_1. PE: I will send some employees for approval",()=>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)

        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.training)
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.configuration,data.leftNavMenu.trainingSubMenu.configuration)
  
        /// training configuration
        commonPage.addBtn(common.GlobalLocator.addBtn)

        ///প্রতিষ্ঠান
        configurationPage.organizationDetails(
            data.configuration.organization.organizationNameBn,
            data.configuration.organization.organizationNameEn,
            data.configuration.organization.country,
            data.configuration.organization.address,
            data.configuration.organization.phone,
            data.configuration.organization.email,
            data.configuration.organization.sessionType,
            data.configuration.organization.description,
            common.GlobalLocator.saveBtn,
            common.GlobalLocator.completeBtn
            )
       
        ///প্রশিক্ষণের ধরন
        commonPage.getTabBtn(common.GlobalLocator.tabBtn, data.configuration.trainingTab)
        commonPage.addBtn(common.GlobalLocator.addBtn)
        configurationPage.trainingTypeDetails(
                        data.configuration.trainingType.trainingTypeBn,
                        data.configuration.trainingType.trainingTypeEn,
                        common.GlobalLocator.saveBtn,
                        common.GlobalLocator.completeBtn
                        ) 


   ///দক্ষতা সমূহ
   commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.configuration.skillTab)
   commonPage.addBtn(common.GlobalLocator.addBtn)
   configurationPage.skillDetails(
                data.configuration.Skills.skillBn,
                data.configuration.Skills.skillEn,
                common.GlobalLocator.saveBtn,
                common.GlobalLocator.completeBtn
                ) 
   
    ///প্রশিক্ষণের ধরন(Tab)
    //প্রশিক্ষণের ধরনে অন্তর্গত দক্ষতা সমূহ
   commonPage.getTabBtn(common.GlobalLocator.tabBtn, data.configuration.trainingTab)
   
   configurationPage.skillsInherentTrainingTypeDetails(
                 data.configuration.trainingType.skillsInherentTrainingType.trainingType,
                 data.configuration.trainingType.skillsInherentTrainingType.skillSearch,
                 or.configuration.trainingType.skillsInherentTrainingType.editBtn,
                 or.configuration.trainingType.skillsInherentTrainingType.saveBtn
                 )

    
    //অন্যান্য প্রশিক্ষণার্থী ব্যবস্থাপনা             
    commonPage.getLeftNavSubMenu(or.leftNavmenuItems.otherTraineesInformation,data.leftNavMenu.trainingSubMenu.otherTraineeManagement)

    commonPage.addBtn(common.GlobalLocator.addBtn)

    //If Email / mobile number already registered, please chanage
    otherTraineesInformationPage.otherTraineesInformationDetails(
                data.otherTraineesInformation.nameBn,
                data.otherTraineesInformation.nameEn,
                data.otherTraineesInformation.office,
                data.otherTraineesInformation.branch,
                data.otherTraineesInformation.title,
                data.otherTraineesInformation.phone,
                data.otherTraineesInformation.email,
                common.GlobalLocator.saveBtn2
                )


    //অফিসের প্রশিক্ষণসমূহ
    commonPage.getLeftNavSubMenu(or.leftNavmenuItems.officeTraining,data.leftNavMenu.trainingSubMenu.officeTraining)
 
    commonPage.addBtn(common.GlobalLocator.addBtn)
     
   
    //প্রশিক্ষণ তথ্য
    officeTrainingPage.trainingInformation(
               data.officeTrainings.trainingInformation.training,
               data.officeTrainings.trainingInformation.trainingTitle,
               data.officeTrainings.trainingInformation.trainingType,
               data.officeTrainings.trainingInformation.trainingInstitute,
               data.officeTrainings.trainingInformation.courseType,
               data.officeTrainings.trainingInformation.sessionType,
               data.officeTrainings.trainingInformation.batchNo,
               data.officeTrainings.trainingInformation.countryTraining,
               data.officeTrainings.trainingInformation.address,
               data.officeTrainings.trainingInformation.desc,
               data.officeTrainings.trainingInformation.tag,
               data.officeTrainings.trainingInformation.skill,
               data.officeTrainings.trainingInformation.trainingEndDate,
               or.officeTrainings.trainingInformation.tabBtn
               )
   
    commonPage.addBtn(common.GlobalLocator.addBtn)
    officeTrainingPage.scheduleDetails(
            data.officeTrainings.schedule.startHH,
            data.officeTrainings.schedule.startMM,
            data.officeTrainings.schedule.startPeriod,
            data.officeTrainings.schedule.endHH,
            data.officeTrainings.schedule.endMM,
            data.officeTrainings.schedule.endPeriod,
            common.GlobalLocator.saveBtn2
            )

    
    //প্রশিক্ষণ সংযুক্তি 
    commonPage.getTabBtn(common.GlobalLocator.tabBtn, data.officeTrainings.trainingAttachmentTab)
    commonPage.addBtn(common.GlobalLocator.addBtn)
    officeTrainingPage.attachmentUploadDetails(
       data.officeTrainings.attachmentUpload.file,
       data.officeTrainings.attachmentUpload.desc,
       common.GlobalLocator.saveBtn2
       )

    
  


    //প্রশিক্ষণ তথ্য
    commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.officeTrainings.trainingInformationTab)
    commonpageelement.getScroll('bottom')
    commonPage.getsaveBtn(common.GlobalLocator.saveBtn)
    
    commonPage.getSearchListWithSelectorByName(common.GlobalLocator.searchByName,data.officeTrainings.trainingInformation.trainingTitle)
    
    commonPage.getEditBtn(common.GlobalLocator.editBtn)
 
  
   //মনোনয়নের জন্য আহ্বান
    commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.officeTrainings.callforNominationsTab)


    commonPage.addBtn(common.GlobalLocator.addBtn)

    officeTrainingPage.callforNominationsDetails(
        data.officeTrainings.callforNominations.office,
        data.officeTrainings.callforNominations.participantCount,
        data.officeTrainings.callforNominations.comment,
        common.GlobalLocator.saveBtn2,
        common.GlobalLocator.completeBtn
        )

     
    //চূড়ান্ত নির্বাচন 
    commonPage.getTabBtn(common.GlobalLocator.tabBtn,data.officeTrainings.finalSelectionTab)
    //মনোনীত অংশগ্রহণকারী Panel
    commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.officeTrainings.nominatedParticipantsPanel)

    commonPage.addBtn(common.GlobalLocator.addBtn)
    
    // paginator click 100
    commonPage.getPaginator()

    // ADD 5 Participant
    officeTrainingPage.addParticipantDetails(
            data.officeTrainings.finalParticipantAdd.firstPerson
    )
    officeTrainingPage.addParticipantDetails(
            data.officeTrainings.finalParticipantAdd.secondPerson
    )
    officeTrainingPage.addParticipantDetails(
            data.officeTrainings.finalParticipantAdd.thirdPerson
    )
    officeTrainingPage.addParticipantDetails(
            data.officeTrainings.finalParticipantAdd.fourthPerson
    )
    officeTrainingPage.addParticipantDetails(
            data.officeTrainings.finalParticipantAdd.fivthPerson
    )

    //যোগ করুন
    commonPage.getsaveBtn(common.GlobalLocator.saveBtn)

    //আমন্ত্রণ ও মনোনয়ন
    commonPage.getLeftNavSubMenu(or.leftNavmenuItems.invitationAndNomination,data.leftNavMenu.trainingSubMenu.invitationAndNomination)
    commonPage.getSearchListWithSelectorByName(common.GlobalLocator.searchByName,data.invitationAndNomination.searchByName)
    commonPage.getEditBtn(common.GlobalLocator.editBtn)
  
    commonPage.addBtn(common.GlobalLocator.addBtn)

     //অংশগ্রহণকারী বাছাই 
      invitationAndNominationPage.participantSelectionDetails(
        data.invitationAndNomination.participantSelection.branch,
        data.invitationAndNomination.participantSelection.position,
        data.invitationAndNomination.participantSelection.grade,
        or.officeTrainings.finalSelection.searchBtn
        )

    ///paginator click 100    
    commonPage.getPaginator()

    //Participant selection
    officeTrainingPage.ParticipantSelectionDetails(
        data.invitationAndNomination.participantSelection.nominationFirstPerson
    )
    
    //যোগ করুন
    commonPage.getsaveBtn(common.GlobalLocator.saveBtn2)


    //পরবর্তী পদক্ষেপ
    commonPage.getsaveBtn(common.GlobalLocator.saveBtn)
    

    //অনুমোদনের জন্য প্রেরণ
    invitationAndNominationPage.SentForApproval(
        data.sentforApproval.employee,
        common.GlobalLocator.send,
        common.GlobalLocator.completeBtn,
        data.sentforApproval.completebtnName
        )

    //প্রশিক্ষণ শেষে তথ্য প্রদান    
    commonPage.getLeftNavSubMenu(or.leftNavmenuItems.myTraining,data.leftNavMenu.trainingSubMenu.myTraining)
    
    //অপেক্ষমাণ তালিকা
    commonPage.getLeftNavSubMenu(or.leftNavmenuItems.pendingList,data.leftNavMenu.trainingSubMenu.pendingList)

    //মনোনয়ন চুড়ান্তকরণ panel
    commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.pendingList.nominationFinalizationPanel)

    commonPage.getSearchListWithSelectorByName(or.pendingList.nominationFinalizationSearchBox,data.officeTrainings.trainingInformation.trainingTitle)
    commonPage.getEditBtn(common.GlobalLocator.editBtn)

    //পরবর্তী পদক্ষেপ
    commonPage.getsaveBtn(common.GlobalLocator.saveBtn)

   ///অনুমোদন 
   commonPage.getApprovalBtn(common.pendingList.approvalBtn)
   commonPage.getCommentField(data.pendingList.comment)
   commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn)
   commonPage.getCompleteBtn(common.pendingList.completeBtn)

    })
    
    

    //কর্মচারী নিজ প্রশিক্ষণ হালনাগাদ অনুমোদনের জন্য প্রেরণ
    it("TC_2. PE: Employees send their training updates for approval",() =>{
        cy.login(data.validLoginCredentials.arafat.username,data.validLoginCredentials.arafat.password)
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.training)
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.myTraining,data.leftNavMenu.trainingSubMenu.myTraining)

        ///প্রশিক্ষণ শেষে তথ্য প্রদান
        commonPage.getSearchListWithSelectorByName(or.pendingList.ProvideInformationEndOfTrainingSearchBox,data.myTraining.searchByName)
        commonPage.getEditBtn(common.GlobalLocator.editBtn)
        
        myTrainingPage.updateInfoDetails(
            data.myTraining.updateInfo.expirationDate,
            data.myTraining.updateInfo.duration,
            data.myTraining.updateInfo.durationUnit,
            data.myTraining.updateInfo.divisionGrade,
            data.myTraining.updateInfo.acheivedNumber,
            data.myTraining.updateInfo.acheivedPosition
            )

        //সংযুক্তি আপলোডকরণ
        commonPage.addBtn(common.GlobalLocator.addBtn)

        officeTrainingPage.attachmentUploadDetails(
            data.myTraining.attachmentUpload.file,
            data.myTraining.attachmentUpload.desc,
            common.GlobalLocator.saveBtn2
       )

       // পরবর্তী পদক্ষেপ
       commonPage.getsaveBtn(common.GlobalLocator.saveBtn)

       //অনুমোদনের জন্য প্রেরণ
    invitationAndNominationPage.SentForApproval(
        data.sentforApproval.employee,
        common.GlobalLocator.send,
        common.GlobalLocator.completeBtn,
        data.sentforApproval.completebtnName
        )
 
    })

     //কর্মচারী নিজ প্রশিক্ষণ হালনাগাদ অনুমোদন 
     it("TC_3. PE:  training updates for approval approved",() =>{
        cy.login(data.validLoginCredentials.sujit.username,data.validLoginCredentials.sujit.password)
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.training)

        //অপেক্ষমাণ তালিকা
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.pendingList,data.leftNavMenu.trainingSubMenu.pendingList)
        
        //প্রশিক্ষণ শেষে তথ্য প্রদান panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.pendingList.ProvideInformationEndOfTraining)

        commonPage.getSearchListWithSelectorByName(or.pendingList.ProvideInformationEndOfTrainingSearchBox,data.myTraining.searchByName)
        commonPage.getEditBtn(common.GlobalLocator.editBtn)
        
        // পরবর্তী পদক্ষেপ
        commonPage.getsaveBtn(common.GlobalLocator.saveBtn)

        ///অনুমোদন 
        commonPage.getApprovalBtn(common.pendingList.approvalBtn)
        commonPage.getCommentField(data.pendingList.comment)
        commonPage.getApprovalBtn(common.GlobalLocator.approvalBtn)
        commonPage.getCompleteBtn(common.pendingList.completeBtn)

    })

    //PMIS এর প্রশিক্ষনে সেই কর্মচারী অ্যাড হইসে কিনা দেখা 
    it("TC_4. PE:  See if that approved training  added to PMIS training",() =>{
        cy.login(data.validLoginCredentials.arafat.username,data.validLoginCredentials.arafat.password)
        commonPage.getDashboardAvatar(common.dashboardPage.hrmAvatar)
        commonPage.getLeftNavMenu(or.leftNavmenuItems.disciplineInvestigation, data.leftNavMenu.pmis)
        
        //পিএমআইএস
        commonPage.getLeftNavSubMenu(or.leftNavmenuItems.pmisHome,data.leftNavMenu.trainingSubMenu.home)

        //যোগ্যতা panel
        commonPage.getTabBtn(common.GlobalLocator.matExpandPanel, data.pmis.home.qualification)

        //scroll bottom
        commonPage.getScroll('bottom')

        //প্রশিক্ষণ tab
        commonPage.getTabBtn(common.GlobalLocator.tabBtn, data.pmis.home.trainingTabBtn)

        //প্রশিক্ষণসমূহের তালিকা
        commonPage.getSearchListWithSelectorByName(or.Pmis.home.trainingSearchBox,data.myTraining.searchByName)

    })
     
    afterEach(() => {
        cy.logout(common.logoutPage.logoutDropdownBtn2,common.logoutPage.logoutBtn2)
    })
})