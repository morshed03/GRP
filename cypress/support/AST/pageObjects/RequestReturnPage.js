class RequestReturnPage
{
    getCarrierField()  //Direct in Plus icon
    {
        return cy.get('.card-body mat-select:eq(3)')
    }
    getApproverField()  //Direct in Plus icon
    {
        return cy.get('.card-body mat-select:eq(4)')
    }
    getCardFooterThirdButton()  //Card Footer icon 03
    {
        return cy.get('.card-footer button:eq(2)')
    }

    //ফেরত অনুরোধ -> অনুমোদন অপেক্ষমান page locators
    getApproveButton()  //অনুমোদন করুন button
    {
        return cy.get('.card-header button:eq(3)')
    }
    getReciveButton()  //গ্রহণ button
    {
        return cy.get('.card-header button:eq(2)')
    }

    //ফেরৎ গ্রহণ Locators
    getEnterEyeButton()  //Enter eye icon
    {
        return cy.get('td button mat-icon')
    }
}
export default RequestReturnPage;