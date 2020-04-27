class LoginPage
{
    getUserNameInputBox()   //ব্যবহারকারীর নাম field
    {
        return cy.get('input[name="username"]')
    }
    getPasswordInputBox()   //পাসওয়ার্ড field
    {
        return cy.get('input[name="password"]')
    }
    getEnterButton() //প্রবেশ করুন button
    {
        return cy.get('button.btn.btn-primary[type="button"]')
    }
    getValidationMessage() //Validation message
    {
        return cy.get('.mat-simple-snackbar > :nth-child(1)')
    }
}
export default LoginPage;