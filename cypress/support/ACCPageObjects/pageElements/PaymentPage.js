class PaymentPage
{
    getMakePaymentIcon()  //Make payment icon
    {
        return cy.get('tbody tr td button mat-icon:eq(0)')
    }
    getVoucherField()  //ভাউচার নং
    {
        return cy.get('.card-body mat-form-field input[placeholder="ভাউচার নং"]')
    }
    getChequeField()  //চেক নং
    {
        return cy.get('.card-body mat-form-field input[placeholder="চেক নং"]')
    }
    getPaymentDescriptionField()  //বিবরণ
    {
        return cy.get('.card-body mat-form-field input[placeholder="বিবরণ"]')
    }
    getPaymentSaveButton()  //বিবরণ
    {
        return cy.get('.card-footer button.btn-success')
    }
}
export default PaymentPage;