 

beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })
describe("Should render login page with form", () => {
    it("Visit login page and render input fields", () => {

        cy.fixture('data-driven/users').then(user => {
            cy.get('[name="uname"]').type(user.username)
            cy.get('[name="pass"]').type(user.password) 
        })
          .get('[data-cy="submit-bn"]').click()
    })
})

describe("Should render text indicating invalid credentials provided if no match", () => {
    it("Input invalid credentials to raise error message", () => {
        cy.get('[name="uname"]').type('david')
          .get('[name="pass"]').type('pass61blue')
          .get('[data-cy="submit-bn"]').click()
          .get('[data-cy="error-msg"]').should('have.text', 'invalid username')           
    })
})
   
 
    