class RequisitionDeclarationPage
{
    //Header section's locators 
    getRequisitionPageHeader()  // Page header
    {
        return cy.get('.card-header mat-label')
    }
    getAddRequisitionButton()  // নতুন ঘোষণা যোগ করুন button
    {
        return cy.get('.card-header button mat-icon')
    }

    //চাহিদাপত্র ঘোষণা listing table and related sub-pages locators
    getNotifyHeader()  // পুনরায় অবহিত করার জন্য কর্মকর্তাদের তালিকা header
    {
        return cy.get('.card-header mat-label:eq(0)')
    }
    getSubmittedHeader()  // চাহিদা পত্র জমাদানকারী কর্মকর্তাদের তালিকা header
    {
        return cy.get('.card-header mat-label:eq(1)')
    }
    getNotifyAllCheckBox()  // Notify all checkbox
    {
        return cy.get('.card-body th span.e-frame')
    }
    getNotifyButton()  //  অবহিত করুন button
    {
        return cy.get('.card-header button')
    }

    getExtendEndSaveAndPublishButton()   //ঘোষণার সময় বৃদ্ধি করুন Save button
    {
        return cy.get('.card-footer button.btn:eq(3)')
    }

    //নতুন ঘোষণা যোগ করুন page locators
    getFiscalYearField()  // অর্থবছর field
    {
        return cy.get('.card-body .mat-form-field-flex .mat-form-field-infix:eq(0)')
    }
    getDescriptionField()  // বিবরণ field
    {
        return cy.get('.card-body .mat-form-field-flex textarea')
    }
    getStartDateField()  // শুরুর তারিখ field
    {
        return cy.get('svg.mat-datepicker-toggle-default-icon:eq(0)')
    }
    getEndDateField()  // শেষ তারিখ field
    {
        return cy.get('svg.mat-datepicker-toggle-default-icon:eq(1)')
    }

    //Calendar, Pagination  & Few commom locators
    getCalendarYearView()   // Year View on the Calendar
    {
        return cy.get('button > span > div.mat-calendar-arrow')
    }
    getYearMonthDate()   //Pick Year Month and Date on the Calendar
    {
        return cy.get('td > div.mat-calendar-body-cell-content')
    }
    getDropDownItem()   //Pick Drop-down Item
    {
        return cy.get('mat-option.mat-option > span.mat-option-text')
    }
    getPaginationDropDownField()   //Pagination drop-down field
    {
        return cy.get('.card-body .e-pagesizes .e-pagerdropdown > span')
    }
    getPaginationDropDownFieldValue()   //Pagination drop-down value
    {
        return cy.get('div > ul > li')
    }

    //Footer section's locators 
    getBackButton()   //Back button
    {
        return cy.get('.card:visible .card-footer button.btn-secondary:eq(0)')
    }
    getDraftButton()   //Draft button
    {
        return cy.get('.card-footer button.btn:eq(3)')
    }
    getSaveAndPublishButton()   //Save button
    {
        return cy.get('.card-footer button.btn-cus-success:eq(0)')
    }

    //নিশ্চিতকরণ pop-up page locator
    getConfirmationPageHeader()   //Draft button
    {
        return cy.get('mat-dialog-container mat-label')
    }
    getConfirmationPageNoButton()   // না button
    {
        return cy.get('mat-dialog-container mat-dialog-actions button:eq(0)')
    }
    getConfirmationPageYesButton()   // হ্যাঁ button
    {
        //return cy.get('mat-dialog-container mat-dialog-actions button:eq(1)')
        return cy.get('mat-dialog-container mat-dialog-actions button.btn-cus-success')
    }

    //চাহিদাপত্র ঘোষণা details table locators
    getConsolidateRequisitionsButton()   //চাহিদাপত্র একত্র করুন button 
    {
        return cy.get('tr > td button:eq(0)')
    }
    getPreviewSummaryReportButton()   // সংক্ষিপ্ত বিবরণ বিস্তারিত দেখুন  button
    {
        return cy.get('tr > td button:eq(1)')
    }
    getConsolidateRequisitionsIcon()   // চাহিদাপত্র একত্র করুন icon 
    {
        return cy.get('td.e-rowcell button mat-icon')
    }
    getPreviewSummaryReportClose()   // সংক্ষিপ্ত বিবরণ বিস্তারিত দেখুন view close
    {
        return cy.get('.card-header #modalCloseBtn > span')
    }
    getPreviewOfReportButton()   // রিপোর্ট এর বিস্তারিত দেখুন button
    {
        return cy.get('.card-body button[type="button"]')
    }
    getEstimatedCostInputField()   // আনুমানিক খরচ field
    {
        return cy.get('td[aria-label=" column header আনুমানিক খরচ"]')
    }
    getEnterEstimatedCostInInputField()   // Enter আনুমানিক খরচ
    {
        return cy.get('td input.e-numerictextbox:eq(4)')
    }
    getEnterRemarksInInputField()   // Enter Remarks
    {
        return cy.get('td input[type="text"]:eq(0)')
    }
    getDemandSaveIcon()   // Save Icon
    {
        //return cy.get('td button[title="Save"] .e-btn-icon:eq(1)')
        return cy.xpath('(//td/div/button)[1]')
    }
}
export default RequisitionDeclarationPage;