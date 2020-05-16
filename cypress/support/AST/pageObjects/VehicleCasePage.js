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
    getThanaField()  //থানা field
    {
        return cy.get('.card-body mat-form-field input[placeholder="থানা"]')
    }
    getJustificationField()  //ন্যায্যতা field
    {
        return cy.get('.card-body mat-form-field input[placeholder="ন্যায্যতা"]')
    }
    getFineField()  //জরিমানা field
    {
        return cy.get('.card-body mat-form-field input[placeholder="জরিমানা"]')
    }

    //যানবাহন মামলা সমাপ্তকরণ page locatora
    getActionField()  //জরিমানা field
    {
        return cy.get('.card-body mat-form-field input[placeholder="কার্যক্রম"]')
    }
}
export default VehicleCasePage;