class AssetTagging_StoreKeepingPage
{
    getSetTagsButton()  //Set tag button
    {
        return cy.get('td button mat-icon')
    }
    getTagsInputField()     // প্রথম Tag input field
    {
        return cy.get('td input:eq(1)')
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