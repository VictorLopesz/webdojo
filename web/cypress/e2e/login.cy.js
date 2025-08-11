describe("Login", () => {
  beforeEach(() => {
    cy.acessarPagina();
  });

  it("Logando com sucesso", () => {
    cy.submeterLogin('papito@webdojo.com', 'katana123');

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
      cy.submeterLogin('papito@webdojo.com', '2352');

    cy.wait(1000)

    cy.get('.title')
    .should('be.visible')
    .and('have.text', 'Acesso negado! Tente novamente.')
  });

    it("Não deve logar com email incorreta", () => {
    cy.submeterLogin('papi@webjo.com', 'katana123');

    cy.wait(1000)

    cy.get('.title')
    .should('be.visible')
    .and('have.text', 'Acesso negado! Tente novamente.')
  });
});
