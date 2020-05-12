class AssetTagging_StoreKeepingPage
{
    getSetTagsButton()  //Set tag button
    {
        return cy.get('td button mat-icon')
    }

    getTagInputField()     // প্রথম Tag input field
    {
        return cy.get('td input[type="text"]:eq(0)')
    }
    getTagInputField2()     // Second Tag input field
    {
        return cy.get('td input[type="text"]:eq(2)')
    }
    getTagInputField3()     // Third Tag input field
    {
        return cy.get('td input[type="text"]:eq(4)')
    }
    getTagInputField4()     // Fourth Tag input field
    {
        return cy.get('td input[type="text"]:eq(6)')
    }
    getTagInputField5()     // Fifth Tag input field
    {
        return cy.get('td input[type="text"]:eq(8)')
    }
    getTagInputField6()     // Sixth Tag input field
    {
        return cy.get('td input[type="text"]:eq(10)')
    }
    getTagInputField7()     // Seventh Tag input field
    {
        return cy.get('td input[type="text"]:eq(12)')
    }
    getTagInputField8()     // Eighth Tag input field
    {
        return cy.get('td input[type="text"]:eq(14)')
    }
    getTagInputField9()     // Ninth Tag input field
    {
        return cy.get('td input[type="text"]:eq(16)')
    }
    getTagInputField10()     // Tenth Tag input field
    {
        return cy.get('td input[type="text"]:eq(18)')
    }
    getTagInputField11()     // Tenth Tag input field
    {
        return cy.get('td input[type="text"]:eq(20)')
    }

    getLifeTimeInputField()     // প্রথম Life Time input field 
    {
        return cy.get('td input[type="text"]:eq(1)')
    }
    getSecondLifeTimeInputField()     // Second Life Time input field 
    {
        return cy.get('td input[type="text"]:eq(3)')
    }

    getTagSaveButton()     //   দাখিল করুন button
    {
        return cy.get('.card-footer button.btn-primary')
    }

    //For Direct In 
    getBookValueInputField()     // প্রথম লিখিত মূল্য input field 
    {
        return cy.get('td input[type="text"]:eq(1)')
    }
    getLifeTimeInputFieldDI()     // প্রথম Life Time input field 
    {
        return cy.get('td input[type="text"]:eq(2)')
    }
    
}
export default AssetTagging_StoreKeepingPage;