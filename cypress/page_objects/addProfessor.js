class AddProfessor {
    get enterName() {
        return cy.get("#input-default")
    }
    get enterLastName() {
        return cy.get("#input-default1")
    }
    get addImageButton() {
        return cy.get(".btn-image")
    }
    get imageField() {
        return cy.get('#__BVID__45')
    }
    get submitButton() {
        return cy.get(".btn-secondary")
    }
    add(enterName, enterLastName, imageField) {
        this.enterName.type(enterName)
        this.enterLastName.type(enterLastName)
        this.addImageButton.click()
        this.imageField.type(imageField)
        this.submitButton.click()
    }
}

export const addProfessor = new AddProfessor()