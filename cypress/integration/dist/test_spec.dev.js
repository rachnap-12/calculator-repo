"use strict";

// example from the docs
describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true);
  });
}); // my actual first test - does the page load

describe('The main page loads', function () {
  it('successfully loads', function () {
    cy.visit('http://127.0.0.1:5501/calculator.html');
  });
}); // testing basic operations

describe('Basic Calculator Operations', function () {
  it('checks 7 + 2 equals 9', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5501/calculator.html'); // Act

    cy.get("[data-cy=seven]").click();
    cy.get("[data-cy=add]").click();
    cy.get("[data-cy=two]").click();
    cy.get("#equal").click(); // Assert

    cy.get(".input").should("have.text", "9");
  });
}); //subtraction

describe('Subtraction Operation', function () {
  it('checks 7 - 2 equals 5', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5501/calculator.html'); // Act

    cy.get("[data-cy=seven]").click();
    cy.get("[data-cy=sub]").click();
    cy.get("[data-cy=two]").click();
    cy.get("#equal").click(); // Assert

    cy.get(".input").should("have.text", "5");
  });
}); //multipication

describe('Multipication Operation', function () {
  it('checks 7 * 2 equals 14', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5501/calculator.html'); // Act

    cy.get("[data-cy=seven]").click();
    cy.get("[data-cy=mul]").click();
    cy.get("[data-cy=two]").click();
    cy.get("#equal").click(); // Assert

    cy.get(".input").should("have.text", "14");
  });
}); //division

describe('Division Operation', function () {
  it('checks 7 / 2 equals 3.5', function () {
    // Arrange
    cy.visit('http://127.0.0.1:5501/calculator.html'); // Act

    cy.get("[data-cy=seven]").click();
    cy.get("[data-cy=div]").click();
    cy.get("[data-cy=two]").click();
    cy.get("#equal").click(); // Assert

    cy.get(".input").should("have.text", "3.5");
  });
});