class OPMAPPDCPPage
{
    // DCP page selectors
    getEntryOrderItemsPlusButton()  // অর্ডার প্রসেস ম্যানেজমেন্ট plus button
    {
        return cy.get('button.mat-mini-fab > .mat-button-wrapper > mat-icon')
    }
    getFiscalYearField()  // অর্থবছর field
    {
        return cy.get('mat-form-field .mat-form-field-infix mat-select:eq(0)')
    }
    
    getCurrencyField()  // মুদ্রা field
    {
        return cy.get('mat-form-field .mat-form-field-infix mat-select:eq(1)')
    }
    getVendorNameField()  // সরবরাহকারীর নাম field
    {
        return cy.get('mat-form-field mat-select .mat-select-placeholder')
    }
    getDateCalendar()   // তারিখ​ Calendar
    {
        return cy.get('svg.mat-datepicker-toggle-default-icon')
    }
    getCalendarYearView()   // Year on the Calendar
    {
        return cy.get('button > span > div.mat-calendar-arrow')
    }
    getYear()   // Click year on the Calendar
    {
        return cy.get('td > div.mat-calendar-body-cell-content')
    }
    getMonth()  // Click Month on the Calendar
    {
        return cy.get('td > div.mat-calendar-body-cell-content')
    }
    getDate()   // Click Date on the Calendar
    {
        return cy.get('td > div.mat-calendar-body-cell-content')
    }
    getReferenceNoField()   // রেফারেন্স নং field
    {
        return cy.get('mat-form-field input:eq(1)')
    }
    getDescriptionField()   // বিবরণ field
    {
        return cy.get('mat-form-field textarea:eq(0)')
    }
    getRemarksField()   // মন্তব্য field
    {
        return cy.get('mat-form-field textarea:eq(1)')
    }
    //Buttons locators  
    getPackageAPPButton()   //     প্যাকেজ   button
    {
        return cy.get('.card-header button .fa-shopping-cart')
    }
    getItemButton()   //   দ্রব্যাদি  button
    {
        return cy.get('.card-header button .fa-plus')
    }

    //প্যাকেজ pop-up page locators
    getPackageHeader()   // প্যাকেজ header
    {
        return cy.get('mat-dialog-container .card-header mat-label')
    }
    getPackageAPPCodeField()   // এপিপি কোড 
    {
        return cy.get('mat-dialog-container .card-body mat-form-field mat-select:eq(0)')
    }
    getPackageProcurementMethodField()   // প্রকিউরমেন্ট মেথড 
    {
        return cy.get('mat-dialog-container .card-body mat-form-field mat-select:eq(1)')
    }
    getPackageRow()   // প্যাকেজ row
    {
        return cy.get('mat-dialog-container .card-body tbody tr')
    }
    getPackageSaveButton()   // প্যাকেজ Save Button
    {
        return cy.get('mat-dialog-container mat-dialog-actions button:eq(1)')
    }

    //আইটেম অনুসন্ধান pop-up locators
    getItemCategoryField()   // পণ্যের ধরণ field
    {
        return cy.get('mat-dialog-container .card-body mat-form-field mat-select')
    }
    getItemNameField()   // পণ্যের নাম field
    {
        return cy.get('mat-dialog-container .card-body input:eq(0)')
    }
    getSearchHereButton()   //   এখানে অনুসন্ধান করুন  button
    {
        return cy.get('mat-dialog-container button[aria-label="add icon button"]')
    }
    getQuantityInputField()   // পরিমাণ input field
    {
        return cy.get('td input[id="requestedQuantity"]')
    }
    getUnitField()   // একক input field
    {
        return cy.get('td mat-select')
    }
    getUnitRateField()   // প্রতি একক মূল্য input field
    {
        return cy.get('td input[id="unitRate"]')
    }
    getSearchItemRemarksField()   // মন্তব্য input field
    {
        return cy.get('td input[id="remarks"]')
    }
    getAddToListPlusIcon()   // Add to list plus icon 
    {
        return cy.get('td button mat-icon[role="img"]')
    }
    getCloseButton()   // বন্ধ করুন button
    {
        return cy.get('mat-dialog-actions button.mat-button-base')
    }

    //সর্বমোট/Grand Total section locators
    getDiscountField()   // ছাড় field
    {
        return cy.get('mat-form-field input[formcontrolname="discount"]')
    }
    getVatField()   // ভ্যাট field
    {
        return cy.get('mat-form-field input[formcontrolname="vat"]')
    }
    getAitField()   // এআইটি field
    {
        return cy.get('mat-form-field input[formcontrolname="ait"]')
    }
    getSaveButton()   // সংরক্ষণ করুন button
    {
        return cy.get('.card-footer div > button.btn-cus-success')
    }
    getPopupTitle()   // নিশ্চিতকরণ title
    {
        return cy.get('mat-dialog-container mat-label')
    }
    getYesButton()   //  হ্যাঁ button
    {
        return cy.get('.mat-dialog-actions > .btn-cus-success')
    }

    //পেমেন্ট শিডিউল তালিকা page locators
    getNewPaymentScheduleButton()   //  New পেমেন্ট শিডিউল  button
    {
        return cy.get('.card-header button')
    }
    getCompletionPercentageField()   //  সমাপ্তির শতাংশ field
    {
        return cy.get('.card-body mat-form-field input:eq(0)')
    }
    getPaymentPercentageField()   //  পরিশোধ শতাংশ field
    {
        return cy.get('.card-body mat-form-field input:eq(1)')
    }

}
export default OPMAPPDCPPage;