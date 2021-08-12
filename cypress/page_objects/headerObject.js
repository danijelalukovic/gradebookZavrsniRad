class Header {
    get loginButton() {
        return cy.get("a[href='/login']")
    }
    get registerButton() {
        return cy.get("a[href='/register']")
    }
    get gradebooks() {
        return cy.get("a[href='/gradebooks']")
    }
    get allProfesors() {
        return cy.get("a[href='/professors']")
    }
    get addGradebook() {
        return cy.get("a[href='/gradebook/create']")
    }
    get addProfesor() {
        return cy.get(":nth-child(6) > .nav-link")
    }
    get myGradebook() {
        return cy.get("a[href='/my-gradebook']")
    }
}

export const header = new Header()