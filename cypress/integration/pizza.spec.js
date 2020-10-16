describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const nameInput = () => cy.get("input[name=sauce]");
  const sauceCheckbox = () => cy.get("input[name=sauce]");
  const cheeseCheckbox = () => cy.get("input[name=cheese]");
  const meatCheckbox = () => cy.get("input[name=meat]");
  const veggieCheckbox = () => cy.get("input[name=veggie]");
  const submitBtn = () => cy.get("#submit");
  const formNav = () => cy.get("#pizzaLink");

  it("the proper elements exist", () => {
    formNav().click();
    nameInput().should("exist");
    sauceCheckbox().should("exist");
    cheeseCheckbox().should("exist");
    meatCheckbox().should("exist");
    veggieCheckbox().should("exist");
    submitBtn().should("exist");
  });
});
