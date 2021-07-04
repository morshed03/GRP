const or = require("../commonGRPPages/commonGRPLocators.json")

class LoginPage
{
    getUserNameInputBox()   //ব্যবহারকারীর নাম field
    {
        return cy.get(or.Login.UserNameInputBox)
    }
    getPasswordInputBox()   //পাসওয়ার্ড field
    {
        return cy.get(or.Login.PasswordInputBox)
    }
    getEnterButton() //প্রবেশ করুন button
    {
        return cy.get(or.Login.EnterButton)
    }
    getValidationMessage() //Validation message
    {
        return cy.get(or.Login.ValidationMessage)
    }
}
export default LoginPage;