class APPPackagePage
{
    getAddRequirementButton()  //  চাহিদা যোগ করুন  button 
    {
        return cy.get('.card-header button')
    }
    

    //package details card locators
    getPackageDescriptionField()  // প্যাকেজের বর্ণনা field 
    {
        return cy.get('.card-body textarea:eq(0)')
    }
    getPackageNoField()  // প্যাকেজ নং field 
    {
        return cy.get('.card-body input:eq(0)')
    }
    getPackageTypeField()  // প্যাকেজের ধরণ  field 
    {
        return cy.get('.card-body mat-select:eq(1)')
    }
    getPackageQuantityField()  //প্যাকেজ পরিমাণ field 
    {
        return cy.get('.card-body input:eq(1)')
    }
    getPackageUnitField()  //প্যাকেজ ইউনিট field 
    {
        return cy.get('.card-body mat-select:eq(2)')
    }
    getPackageEstimatedCostField()  //প্যাকেজের আনুমানিক খরচ field 
    {
        return cy.get('.card-body input:eq(2)')
    }
    getApprovingAuthorityField()  //অনুমোদন কর্তৃপক্ষ field 
    {
        return cy.get('.card-body mat-select:eq(3)')
    }
    getProcurementTypeField()  //প্রকিউরমেন্ট টাইপ field 
    {
        return cy.get('.card-body mat-select:eq(4)')
    }
    getProcurementMethodField()  //প্রকিউরমেন্ট মেথড field 
    {
        return cy.get('.card-body mat-select:eq(5)')
    }
    getExpectedDateOfTenderAdvertisementField()  //দরপত্র বিজ্ঞাপনের প্রত্যাশিত তারিখ field 
    {
        return cy.get('button svg.mat-datepicker-toggle-default-icon:eq(0)')
    }
    getDaysOfTenderSubmissionField()  //দরপত্র জমা দেওয়ার দিন field 
    {
        return cy.get('.card-body input:eq(4)')
    }
    getDaysOfTenderOpeningField()  //দরপত্র খোলার দিন field 
    {
        return cy.get('.card-body input:eq(6)')
    }
    getDaysOfTenderEvaluationField()  //দরপত্র মূল্যায়নের দিন field 
    {
        return cy.get('.card-body input:eq(8)')
    }
    getDaysOfApprovalForAwardOfContractField()  //চুক্তির পুরষ্কারের অনুমোদনের দিন field 
    {
        return cy.get('.card-body input:eq(10)')
    }
    getDaysOfTenderNOAField()  //পুরস্কার ঘোষণার প্রত্যাশিত দিন field 
    {
        return cy.get('.card-body input:eq(12)')
    }
    getDaysOfSigningOfContractField()  //চুক্তি স্বাক্ষরের দিন field 
    {
        return cy.get('.card-body input:eq(14)')
    }
    getDaysOfCompletionOfContractField()  //চুক্তি সমাপ্তির দিন field 
    {
        return cy.get('.card-body input:eq(16)')
    }
    
    getRemarksField()  // মন্তব্য field 
    {
        return cy.get('.card-body textarea:eq(1)')
    }

    //বার্ষিক ক্রয় পরিকল্পনার (এপিপি) বিস্তারিত page locators 
    getSearchHereButton()  //   এখানে অনুসন্ধান করুন button 
    {
        return cy.get('app-app-package-search button:eq(0)')
    }
    getDownloadButton()  //   ডাউনলোড করুন button
    {
        return cy.get('app-app-package-search button:eq(1)')
    }
    getClearAllButton()  //  মুছে ফেলুন button
    {
        return cy.get('app-app-package-search button:eq(2)')
    }
    getSearchPackagesButton()  // প্যাকেজ খুঁজুন button
    {
        return cy.get('app-app-package-search button:eq(3)')
    }
    //Assign HOPE pop-up locators
    getOfficeField()  // অফিস field 
    {
        return cy.get('mat-dialog-container mat-form-field mat-select')
    }
    getHopeNameField()  // নাম field
    {
        return cy.get('mat-dialog-container mat-form-field input')
    }
    getHopeSearchField()  //   অনুসন্ধান করুন button
    {
        return cy.get('mat-dialog-content .card-header button.btn-cus-success')
    }
    getHopePopUpRows()  // Hope assign pop-up row
    {
        return cy.get('mat-dialog-content .card-body tr')
    }
}
export default APPPackagePage;