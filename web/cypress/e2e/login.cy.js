describe("Login", () => {
  beforeEach(() => {
    cy.acessarPagina();
  });

  it("Logando com sucesso", () => {
    cy.get("#email").type("papito@webdojo.com");
    cy.get("#password").type("katana123");
    cy.contains("button", "Entrar").click();

    cy.wait(300);

    cy.get('[data-cy="user-name"]')
      .should("be.visible")
      .and("have.text", "Fernando Papito");

    cy.get('[data-cy="welcome-message"]')
      .should("be.visible")
      .and(
        "have.text",
        "Olá QA, esse é o seu Dojo para aprender Automação de Testes."
      );
  });

  it("Não deve logar com senha incorreta", () => {
    cy.get("#email").type("papito@webdojo.com");
    cy.get("#password").type("katana13");
    cy.contains("button", "Entrar").click();

    cy.wait(1000)

    cy.get('.title')
    .should('be.visible')
    .and('have.text', 'Acesso negado! Tente novamente.')
  });

    it("Não deve logar com email incorreta", () => {
    cy.get("#email").type("papito@eeeo.com");
    cy.get("#password").type("katana13");
    cy.contains("button", "Entrar").click();

    cy.wait(1000)

    cy.get('.title')
    .should('be.visible')
    .and('have.text', 'Acesso negado! Tente novamente.')
  });
});
