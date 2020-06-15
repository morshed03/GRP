class VehicleAddPage
{
    getAddVehicleButton()  //Add Vehicle Plus Button
    {
        return cy.get('.card-header button')
    }
    getVehicleReferenceNoField()  //রেফারেন্স নং
    {
        return cy.get('.card-body mat-form-field input[placeholder="রেফারেন্স নং"]')
    }
    getVehicleItemButton()  // Plus button on যানবাহনসমূহ
    {
        return cy.get('.card-header button mat-icon')
    }
    getVehicleCategoryField()  // ক্যাটাগরি
    {
        return cy.get('.card-body mat-form-field mat-select[aria-label="ক্যাটাগরি"]')
    }
    getSearchField()  // অনুসন্ধান করুন
    {
        return cy.get('.card-body mat-form-field input[placeholder="অনুসন্ধান করুন"]')
    }

    //Item modal locators (প্রাইভেট কার ব্র্যান্ড)
    getVehicleLicenseNumberField()  // লাইসেন্স নম্বর *
    {
        return cy.get('.modal-content td input[type="text"]:eq(0)')
    }
    getVehicleRentField()  // ভাড়া *
    {
        return cy.get('.modal-content td input[type="text"]:eq(1)')
    }
    getVehicleRegistrationNoField()  // REGISTRATION_NUMBER
    {
        return cy.get('.modal-content td input[type="text"]:eq(2)')
    }
    getVehicleSaveButton()  //সংরক্ষণ করুন
    {
        return cy.get('.modal-content .card-footer button.btn-success')
    }
    getReceiveButton()  // গ্রহণ   
    {
        return cy.get('.card-footer button.btn-success')
    }
}
export default VehicleAddPage;