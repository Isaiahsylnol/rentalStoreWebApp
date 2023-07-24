/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

it("click through all links with loop", () => {
  const pages = ["Profile", "Movies", "Home"];

  pages.forEach((page) => {
    cy.contains(page);
  });
});

it("click logo icon button", () => {
  cy.get('[data-cy="btn-logo"]').click();
});
