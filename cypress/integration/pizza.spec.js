describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const nameInput = () => cy.get("input[name=name]");
  const sauceCheckbox = () => cy.get("input[name=sauce]");
  const cheeseCheckbox = () => cy.get("input[name=cheese]");
  const meatCheckbox = () => cy.get("input[name=meat]");
  const veggieCheckbox = () => cy.get("input[name=veggie]");
  const submitBtn = () => cy.get("#submit");
  const formNav = () => cy.get("#pizzaLink");
  const dropdown = () => cy.get("select[name=size]");

  it("the proper elements exist", () => {
    formNav().click();
    nameInput().should("exist");
    sauceCheckbox().should("exist");
    cheeseCheckbox().should("exist");
    meatCheckbox().should("exist");
    veggieCheckbox().should("exist");
    submitBtn().should("exist");
    dropdown().should("exist");
  });

  it("can type in name", () => {
    formNav().click();
    nameInput().should("have.value", "");
    nameInput().type("Name");
    nameInput().should("have.value", "Name");
  });

  it("can click checkboxes", () => {
    formNav().click();
    sauceCheckbox().should("not.be.checked");
    sauceCheckbox().check();
    sauceCheckbox().should("be.checked");

    cheeseCheckbox().should("not.be.checked");
    cheeseCheckbox().check();
    cheeseCheckbox().should("be.checked");

    meatCheckbox().should("not.be.checked");
    meatCheckbox().check();
    meatCheckbox().should("be.checked");

    veggieCheckbox().should("not.be.checked");
    veggieCheckbox().check();
    veggieCheckbox().should("be.checked");
  });

  it("can submit form", () => {
    formNav().click();
    nameInput().type("Name");
    dropdown().select("Small");
    submitBtn().click();
  });
});
