class AssetTagging_StoreKeepingPage
{
    getSetTagsButton()  //Set tag button
    {
        return cy.get('td button mat-icon')
    }

    getTagInputField()     // প্রথম Tag input field
    {
        return cy.get('td input:eq(1)')
    }
    getTagInputField2()     // Second Tag input field
    {
        return cy.get('td input:eq(4)')
    }
    getTagInputField3()     // Third Tag input field
    {
        return cy.get('td input:eq(7)')
    }
    getTagInputField4()     // Fourth Tag input field
    {
        return cy.get('td input:eq(10)')
    }
    getTagInputField5()     // Fifth Tag input field
    {
        return cy.get('td input:eq(13)')
    }
    getTagInputField6()     // Sixth Tag input field
    {
        return cy.get('td input:eq(16)')
    }
    getTagInputField7()     // Seventh Tag input field
    {
        return cy.get('td input:eq(19)')
    }
    getTagInputField8()     // Eighth Tag input field
    {
        return cy.get('td input:eq(22)')
    }
    getTagInputField9()     // Ninth Tag input field
    {
        return cy.get('td input:eq(25)')
    }
    getTagInputField10()     // Tenth Tag input field
    {
        return cy.get('td input:eq(28)')
    }

    getLifeTimeInputField()     // প্রথম Life Time input field 
    {
        return cy.get('td input:eq(2)')
    }
    getSecondLifeTimeInputField()     // Second Life Time input field 
    {
        return cy.get('td input:eq(5)')
    }

    //For Direct In 
    getBookValueInputField()     // প্রথম লিখিত মূল্য input field 
    {
        return cy.get('td input:eq(2)')
    }
    getLifeTimeInputFieldDI()     // প্রথম Life Time input field 
    {
        return cy.get('td input:eq(3)')
    }
    
}
export default AssetTagging_StoreKeepingPage;