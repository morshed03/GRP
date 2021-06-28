
/// <reference types="cypress" />
const or = require('../../../locators/common_locators.json');
export default class CommonPageElements{
     
    pageWait(time){
       return cy.wait(time);
    }
    getValidationMessage(selector,text) //Validation message
    {
        return cy.get(selector)
    }

    getDashboardAvatar(selector)
    {
        return cy.get(selector)
    }

    getLeftNavMenu(selector){
        return cy.get(selector)
    }

    

    //////////////////
     //নিশ্চিতকরণ Modal
     ConfirmModalTitle()  //Modal title নিশ্চিতকরণ
     {
         return cy.get(or.ConfirmModal.ModalTitle)
     }
     YesButton()  //হ্যাঁ
     {
         return cy.get(or.ConfirmModal.YesButton)
     }
     NoButton()  //  না
     {
         return cy.get(or.ConfirmModal.NoButton)
     }
 
     //Common drop-down items
     DropdownItem()  //Drop-down
     {
         return cy.get(or.GlobalLocator.DropDownItems)
     }
 
     //Page main header
     PageHeader()  //Page Header (Main)
     {
         return cy.get(or.GlobalLocator.PageHeader)
     }

     ///button

     addBtn(selector){
        return cy.get(selector)
    }

    deleteBtn(selector){
      return cy.get(selector)
    }

     getnextStepBtn(selector){
        return cy.get(selector)
     }

     getsaveBtn(selector){
        return cy.get(selector)
     }

     getviewBtn(selector){
        return cy.get(selector)
     }
     
     getCancelBtn(selector){
         return cy.get(selector)
     }
     
     getEditBtn(selector){
        return cy.get(selector)
     }
     
     getCompleteBtn(selector){
        return cy.get(selector)
     }

     getApprovalBtn(selector){
        return cy.get(selector)
     }

     getUnauthorizedBtn(selector){
      return cy.get(selector)
     }

     getTabBtn(selector){
         return cy.get(selector)
     }
     
     getCurrentDate(){
        return cy.get(or.GlobalLocator.currentDate)
     }

     getSendBtn(selector){
        return cy.get(selector)
     }

     getCheckboxCheckUncheck(selector){
      return cy.get(selector)
    }

     getSearchBtn(selector){
        return cy.get(selector)
     }
     getSearchListByName(){
        return cy.get(or.GlobalLocator.searchByName)
     }
     getSearchListByName(selector){
      return cy.get(selector)
     }
     AMorPMDropDown(){
        return cy.get("ul li button[type='button']")
     }

     checkboxSelectByName(name){
        
        cy.wait(1000)
     }

     getCommentField(){
        return cy.get(or.pendingList.comment)
     }

      ///attachement

    attachementTypeField(){
        return cy.get(or.attachment.attchmentType)
    }

    attachementType2Field(){
      return cy.get(or.attachment.attchmentType2)
    }

    attachementDescField(){
        return cy.get(or.attachment.desc)
    }
    attachementUploadField(){
        return cy.get(or.attachment.fileUpload)
    }

    //scroll
    getScroll(selector){
       return cy.scrollTo(selector)
    }

    ///paginator 
    getPaginatorArrow(){
       return cy.get(or.GlobalLocator.PaginatorArrow)
    }

   getPaginatorValue(){
      return cy.get(or.GlobalLocator.PaginatorValue)
   }
     

   /// mat table name Colunm

   getMatTableNameColumn(){
      return cy.get(or.GlobalLocator.matTableNameColumn)
   }
   
   getMatTableCheckbox(){
      return cy.get(or.GlobalLocator.matTableCheckbox)
   }


       //Log Out Locators ---------------------------------------------
    getUserAvatar(selector) // The user avatar from anypage page 
    {
           return cy.get(selector)
    }
    getExitLink(selector) // The বাহির button from dashboard page 
    {
           return cy.get(selector)
    }


    ////file download
    ///cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')


   ////DateField  YY MM DD Select
   getCalendarArrowField(){
      return cy.get(or.DateField.calendarArrow)
   }

  getYYMMDDField(){
   return cy.get(or.DateField.YYMMDD)
  }

  //////অনুমোদনের জন্য প্রেরণ ->Employee field
  sendForApprovalEmployeeField(){
    return cy.get(or.GlobalLocator.sendForApprovalEmployeeField)
}

///NotificationIcon
  checkNotificationIcon(){
   return cy.get(or.GlobalLocator.notificationIcon)
  }

  ///Branch Field
  branchField(){
   return cy.get(common.GlobalLocator.branchField)
   }
}