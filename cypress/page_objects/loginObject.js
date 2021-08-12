class AuthLogin {
    get email() {
        return cy.get('#email')
    }
    get password() {
        return cy.get('#userPassword')
    }
    get submit() {
        return cy.get("button[type='submit']")
    }
    login(email, password) {
        this.email.type(email)
        this.password.type(password)
        this.submit.click()
    }
}

export const authLogin = new AuthLogin()