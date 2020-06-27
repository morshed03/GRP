class VehicleRequisitionPage
{
    getPurposeField()  //উদ্দেশ্য
    {
        return cy.get('.card-body mat-form-field mat-select[aria-label="উদ্দেশ্য"]')
    }
    getDistanceField()  //আনুমানিক কত কিলোমিটার চলবে
    {
        return cy.get('.card-body mat-form-field input[placeholder="আনুমানিক কত কিলোমিটার চলবে "]')
    }
    getVehicleJustificationField()  //ভ্রমণের বিবরণ ও কারণ
    {
        return cy.get('.card-body mat-form-field input[placeholder="ভ্রমণের বিবরণ ও কারণ "]')
    }
    getReportingPlaceField()  //রিপোর্টিং স্থান
    {
        return cy.get('.card-body mat-form-field input[placeholder="রিপোর্টিং স্থান"]')
    }

    getReportingTimeCalendarIcon()  //Calendar icon
    {
        return cy.get('.e-float-input > .e-date-icon:eq(0)')
    }
    getStartTimeCalendarIcon()  //Calendar icon
    {
        return cy.get('.e-float-input > .e-date-icon:eq(1)')
    }
    getEndTimeCalendarIcon()  //Calendar icon
    {
        return cy.get('.e-float-input > .e-date-icon:eq(2)')
    }
    getArrivalTimeCalendarIcon()  //Calendar icon
    {
        return cy.get('.e-float-input > .e-date-icon:eq(3)')
    }

    getReportingTimeIcon()  //Calendar icon
    {
        return cy.get('.e-float-input > .e-time-icon:eq(0)')
    }
    getStartTimeIcon()  //Calendar icon
    {
        return cy.get('.e-float-input > .e-time-icon:eq(1)')
    }
    getTimeTimeIcon()  //Calendar icon
    {
        return cy.get('.e-float-input > .e-time-icon:eq(2)')
    }
    getArrivalTimeIcon()  //Calendar icon
    {
        return cy.get('.e-float-input > .e-time-icon:eq(3)')
    }

    getCalendarYearView()  //Calendar Year View
    {
        return cy.get('.e-datepicker .e-header > .e-day')
    }
    getCalendarDayView()  //Calendar Day View
    {
        return cy.get('.e-datepicker .e-content table tbody tr td')
    }

    //যানবাহনের চাহিদাপত্র - অনুমোদন অপেক্ষমান page locators
    getUncheckDefaultItem()  //Un-check the checkbox
    {
        return cy.get('.e-templatecell label span:eq(0)')
    }
    getVehicleSearchField()  //অনুসন্ধান করুন
    {
        return cy.get('.card-body mat-form-field input[placeholder="অনুসন্ধান করুন"]')
    }

    //ফেরৎ গ্রহণ page locators
    getLicenseNumberField()  //রেজিষ্ট্রেশন নম্বর Field
    {
        return cy.get('.card-body mat-form-field mat-select[aria-label="রেজিষ্ট্রেশন নম্বর"]')
    }
    getReciveButton()  // গ্রহণ button
    {
        return cy.get('.card-footer button.btn-success:eq(1)')
    }
}
export default VehicleRequisitionPage;