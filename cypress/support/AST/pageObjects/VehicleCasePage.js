class VehicleCasePage
{
    getVehicleField()  //যানবাহন field
    {
        return cy.get('.card-body mat-form-field mat-select[aria-label="যানবাহন"]')
    }
    getDriverField()  //যানবাহন field
    {
        return cy.get('.card-body mat-form-field input[placeholder="ড্রাইভার"]')
    }
    getLocationField()  //স্থান field
    {
        return cy.get('.card-body mat-form-field input[placeholder="স্থান"]')
    }
    getJustificationField()  //ন্যায্যতা field
    {
        return cy.get('.card-body mat-form-field input[placeholder="কারন"]')
    }
    getFineField()  //জরিমানা field
    {
        return cy.get('.card-body mat-form-field input[placeholder="জরিমানার পরিমান"]')
    }

    //যানবাহন মামলা সমাপ্তকরণ page locatora
    getActionField()  //জরিমানা field
    {
        return cy.get('.card-body mat-form-field input[placeholder="কার্যক্রম"]')
    }
}
export default VehicleCasePage;