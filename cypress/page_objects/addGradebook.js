class AddGradebook {
    get name() {
        return cy.get("#name")
    }
    get professor() {
        return cy.get("#__BVID__55")
    }
    add(name, professor) {
        this.name.type(name)
        this.professor.select(professor)
        this.submitButton.click()
    }
}

export const addGradebook = new AddGradebook()