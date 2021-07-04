class BillPage
{
    getCardRows()  //Card Row
    {
        return cy.get('tbody:visible tr')
    }

    getPageHeader()  //Page Header
    {
        return cy.get('.card:visible .card-header mat-label:eq(0)')
    }
    getCreateBillButton()  //Create plus button
    {
        return cy.get('.card-header button')
    }

    //বিল তৈরি page locators
    getToField()  //প্রাপকের ধরণ
    {
        return cy.get('.card-body mat-select[aria-label="প্রাপকের ধরণ"]')
    }
    getDropDownItem()  //Drop down items
    {
        return cy.get('mat-option .mat-option-text')
    }
    getInstitutionField()  //প্রতিষ্ঠান
    {
        return cy.get('.card-body mat-select[aria-label="প্রতিষ্ঠান"]')
    }
    getDropDownItemSearch()  //Drop down items search input field
    {
        return cy.get('mat-option .mat-option-text input[placeholder="অনুসন্ধান করুন"]')
    }
    getBillTitleField()  //বিল শিরোনাম
    {
        return cy.get('form[id="formGroup"] mat-form-field input[placeholder="শিরোনাম"]')
    }
    getBillFiscalYearField()  //বিল অর্থবছর
    {
        return cy.get('form[id="formGroup"] mat-form-field mat-select[aria-label="অর্থবছর"]')
    }
    getBillTypeField()  //বিলের ধরণ
    {
        return cy.get('form[id="formGroup"] mat-form-field mat-select[aria-label="বিলের ধরণ"]')
    }
    getBillReferenceField()  //বিলের রেফারেন্স নাম্বার
    {
        return cy.get('form[id="formGroup"] mat-form-field input[placeholder="বিলের রেফারেন্স নাম্বার"]')
    }
    getBillSaveButton()  // দাখিল করুন  
    {
        return cy.get('.card-footer button.btn-success')
    }
    getYesButton()  //  হ্যাঁ 
    {
        return cy.get('.modal-content .card-footer button.btn-cus-success')
    }

    //Bill listing page locator
    getSearchField()  // অনুসন্ধান 
    {
        return cy.get('mat-form-field input[placeholder="অনুসন্ধান করুন"]')
    }
    getAddBillDetails()  //Add bill details plus button
    {
        return cy.get('tbody tr td button mat-icon:eq(1)')
    }
    getBillDetailsButton()  //Bill details button
    {
        return cy.get('tbody tr td button mat-icon:eq(0)')
    }
    getBillSendButton()  //Bill   প্রেরণ করুন 
    {
        return cy.get('.card-footer button.btn-cus-success')
    }

    //Bill Details page locators
    getAddBillDescriptionPlusButton()  //Add bill details plus button
    {
        return cy.get('.card-header button .mat-button-wrapper mat-icon')
    }
    getAddBillVatTaxButton()  //কর্তন ও পরিশোধ /  ভ্যাট-ট্যাক্স 
    {
        return cy.get('.card-header button.btn-cus-primary:eq(1)')
    }

    //বিলের বিবরণ যোগ করুন pop-up locators
    getOperationCodeField()  //অপারেশন কোড
    {
        return cy.get('.card:visible .card-body mat-form-field mat-select[aria-label="অপারেশন কোড"]')
    }
    getFundCodeField()  //তহবিল কোড
    {
        return cy.get('.card:visible .card-body mat-form-field mat-select[aria-label="তহবিল কোড"]')
    }
    getEconomicCodeField()  //ইকোনোমিক কোড
    {
        return cy.get('.card:visible .card-body mat-form-field mat-select[aria-label="ইকোনোমিক কোড"]')
    }
    getNatureOfFundField()  //অর্থায়নের প্রকৃতি
    {
        return cy.get('.card:visible .card-body mat-form-field mat-select[aria-label="অর্থায়নের প্রকৃতি"]')
    }
    getSubCoAField()  //উপ হিসাবরক্ষণের তালিকা
    {
        return cy.get('.card:visible .card-body mat-form-field mat-select[aria-label="উপ হিসাবরক্ষণের তালিকা"]')
    }
    getBillDescriptionField()  //বিবরণ
    {
        return cy.get('.card:visible .card-body mat-form-field textarea[placeholder="বিবরণ"]')
    }
    getBillAmountField()  //পরিমাণ
    {
        return cy.get('.card:visible .card-body mat-form-field input[placeholder="পরিমাণ"]')
    }
    getBillDetailsSaveButton()  // সংরক্ষণ করুন 
    {
        return cy.get('.card:visible .card-footer button.btn-cus-success:eq(1)')
    }

    //ভ্যাট ও ট্যক্সের অর্থ যোগ করুন pop-up page locator
    getVatEconomicField()  //ইকোনোমিক কোড
    {
        return cy.get('.card:visible .card-body mat-form-field mat-select[aria-label="ইকোনোমিক কোড"]')
    }

    //কর্মকর্তা/কর্মচারী নির্বাচন করুন pop-up locators
    getUserNameField()  //DDO ব্যবহারকারীর নাম
    {
        return cy.get('.card:visible .card-body mat-form-field input[placeholder="ব্যবহারকারীর নাম"]')
    }
    getUserSearchButton()  //  অনুসন্ধান করুন
    {
        return cy.get('.card:visible .card-body button.btn-cus-success')
    }
    getSendButton()  // send icon
    {
        return cy.get('.card:visible .card-body tr td button mat-icon.notranslate')
    }

    //অপেক্ষমান বিল page locator
    getApprovalRow()  // অপেক্ষমান row
    {
        return cy.get('table.e-table tr')
    }
    getApprovedCommentField()  // মন্তব্য
    {
        return cy.get('.card:visible mat-form-field textarea[placeholder="মন্তব্য"]')
    }
    getApprovedbutton()  //অনুমোদন করুন
    {
        return cy.get('.card:visible .card-footer button')
    }
    
}
export default BillPage;