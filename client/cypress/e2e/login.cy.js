/// <reference types="cypress" />

describe("The Login functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("sets LocalStorage with User object containing token when logging in via form submission", function () {
    const user_mock = { email: "mike@test.com", password: "test123" };
    // destructuring assignment of the mock user object
    cy.get("input[name=email]").should("be.visible").type(user_mock.email);

    cy.get("input[name=password]")
      .should("be.visible")
      .type(`${user_mock.password}{enter}`);

    // UI should reflect this user being logged in
    cy.get('[data-cy="current-user"]').should("contain", "mike@test.com");
    cy.getLocalStorage("User").should("exist");
  });
});
