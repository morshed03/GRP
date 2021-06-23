
/// <reference types="cypress" />
const or = require('../../../../locators/awardsAndpublications_locators.json');
export default class RewardsApplicationPageElements{
    
    //পুরস্কার ( আবেদন)
    
    //পুরস্কারের শিরোনাম
    awardsTitleField(){
       return cy.get(or.rewardsApplication.awardstitle)
    }

    //পুরস্কারের ধরন
    awardsTypeField(){
       return cy.get(or.rewardsApplication.awardstype)
    }

    //পুরস্কারের প্রস্তাবিত ধরন
    awardsProposedTypeField(){
        return cy.get(or.rewardsApplication.awardsProposedTypeField)
    }

    //পুরস্কার গ্রহণের তারিখ
    awardsreceiveDateField(){
       return cy.get(or.rewardsApplication.awardsreceiveDate)
    }

    //পুরস্কার প্রদানকারী সংস্থা
    awardsGivenByField(){
        return cy.get(or.rewardsApplication.awardsGivenBy)
     }

    //দেশীয়
    awardsnationalField(){
        return cy.get(or.rewardsApplication.awardsnational)
     }

    //ট্যাগ
    awardsTagField(){
        return cy.get(or.rewardsApplication.awardsTag)
     }

    //মন্তব্য/ ব্যাখ্যা
    awardsDescField(){
        return cy.get(or.rewardsApplication.awardsDesc)
     }

    //ফাইলের ধরন
    fileTypeField(){
        return cy.get(or.rewardsApplication.awardsfileType)
     }

 
     //
     employeeField(){
      return cy.get(or.sentforApproval.employee)
   }
     


}