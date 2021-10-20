// example from the docs
describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  
  // my actual first test - does the page load
  describe('The main page loads', () => {
    it('successfully loads', () => {
      cy.visit('http://127.0.0.1:5501/calculator.html')
    }) 
  })
  
  
  // testing basic operations
  describe('Basic Calculator Operations', () => {
    it('checks 7 + 2 equals 9', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5501/calculator.html')
  
      // Act
      cy.get("[data-cy=seven]").click();
      cy.get("[data-cy=add]").click();
      cy.get("[data-cy=two]").click();
      cy.get("#equal").click();
  
      // Assert
      cy.get(".input").should("have.text", "9");
    }) 
  })

  //subtraction
  describe('Subtraction Operation', () => {
    it('checks 7 - 2 equals 5', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5501/calculator.html')
  
      // Act
      cy.get("[data-cy=seven]").click();
      cy.get("[data-cy=sub]").click();
      cy.get("[data-cy=two]").click();
      cy.get("#equal").click();
  
      // Assert
      cy.get(".input").should("have.text", "5");
    }) 
  })

  //multipication
  describe('Multipication Operation', () => {
    it('checks 7 * 2 equals 14', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5501/calculator.html')
  
      // Act
      cy.get("[data-cy=seven]").click();
      cy.get("[data-cy=mul]").click();
      cy.get("[data-cy=two]").click();
      cy.get("#equal").click();
  
      // Assert
      cy.get(".input").should("have.text", "14");
    }) 
  })

  //division
  describe('Division Operation', () => {
    it('checks 7 / 2 equals 3.5', () => {
      // Arrange
      cy.visit('http://127.0.0.1:5501/calculator.html')
  
      // Act
      cy.get("[data-cy=seven]").click();
      cy.get("[data-cy=div]").click();
      cy.get("[data-cy=two]").click();
      cy.get("#equal").click();
  
      // Assert
      cy.get(".input").should("have.text", "3.5");
    }) 
  })
