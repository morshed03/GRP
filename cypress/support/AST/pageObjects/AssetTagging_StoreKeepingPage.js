class AssetTagging_StoreKeepingPage
{
    getSetTagsButton()  //Set tag button
    {
        return cy.get('.card:visible .card-body tbody td button mat-icon')
    }

    getTagInputField()     // প্রথম Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(0)')
    }
    getTagInputField2()     // Second Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(1)')
    }
    getTagInputField3()     // Third Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(2)')
    }
    getTagInputField4()     // Fourth Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(3)')
    }
    getTagInputField5()     // Fifth Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(4)')
    }
    getTagInputField6()     // Sixth Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(5)')
    }
    getTagInputField7()     // Seventh Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(6)')
    }
    getTagInputField8()     // Eighth Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(7)')
    }
    getTagInputField9()     // Ninth Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(8)')
    }
    getTagInputField10()     // Tenth Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(9)')
    }
    getTagInputField11()     // Tenth Tag input field
    {
        return cy.get('td[aria-label*="ট্যাগ"] ejs-textbox input[type="text"][id^="textbox"]:eq(10)')
    }

    getLifeTimeInputField()     // প্রথম Life Time input field 
    {
        return cy.get('td[aria-label*="জীবনকাল (মাস)"] ejs-numerictextbox input[aria-live="assertive"]:eq(0)')
    }
    getSecondLifeTimeInputField()     // Second Life Time input field 
    {
        return cy.get('td[aria-label*="জীবনকাল (মাস)"] ejs-numerictextbox input[aria-live="assertive"]:eq(1)')
    }
    getRoomNumberInputField()     // Second Life Time input field 
    {
        return cy.get('td[aria-label*="কক্ষ নম্বর"] ejs-textbox input[type="text"][id^="textbox"]:eq(0)')
    }

    getTagSaveButton()     //   দাখিল করুন button
    {
        return cy.get('.card-footer button.btn-primary')
    }

    //For Direct In 
    getBookValueInputField()     // প্রথম মোট ক্রয় মূল্য * input field 
    {
        return cy.get('td[aria-label*="ক্রয় মূল্য"] ejs-numerictextbox input[aria-live="assertive"]:eq(0)')
    }
    
}
export default AssetTagging_StoreKeepingPage;