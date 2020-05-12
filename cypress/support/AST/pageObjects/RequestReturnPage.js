class RequestReturnPage
{
    getCarrierField()  //Direct in Plus icon
    {
        return cy.get('.card-body mat-select[aria-label="বাহক"]:eq(0)')
    }
    getApproverField()  //Direct in Plus icon
    {
        return cy.get('.card-body mat-select[aria-label="অনুমোদনকারী"]:eq(0)')
    }
    getCardFooterThirdButton()  //Card Footer icon 03
    {
        return cy.get('.card-footer button.btn-success:eq(0)')
    }

    //ফেরত অনুরোধ -> অনুমোদন অপেক্ষমান page locators
    getApproveButton()  //অনুমোদন করুন button
    {
        return cy.get('.card-header button.btn-success:eq(0)')
    }
    getReciveButton()  //গ্রহণ button
    {
        return cy.get('.card-header button.btn-success:eq(0)')
    }

    //ফেরৎ গ্রহণ Locators
    getEnterEyeButton()  //Enter eye icon
    {
        return cy.get('td button mat-icon')
    }
}
export default RequestReturnPage;