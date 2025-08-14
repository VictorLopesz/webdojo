describe("Formulário de Consultoria", () => {
  beforeEach(() => {
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana123");
  });

  it("Deve solicitar consultoria individual", () => {
    cy.goTo("Formulários", "Consultoria");

    cy.get('input[placeholder="Digite seu nome completo"]').type(
      "Victor Lopes"
    );
    cy.get('input[placeholder="Digite seu email"]').type("papito@webdojo.com");
    cy.get('input[placeholder="(00) 00000-0000"]')
      .type("21 98888-5555")
      .should("have.value", "(21) 98888-5555");

    cy.contains("label", "Tipo de Consultoria")
      .parent()
      .find("select")
      .select("Individual");

    cy.contains("label", "Pessoa Física").find("input").check();

    cy.contains("label", "Pessoa Jurídica")
      .find("input")
      .should("be.not.checked");

    cy.contains("label", "CPF")
      .parent()
      .find("input")
      .type("65655585500")
      .should("have.value", "656.555.855-00");

    const discoveryChannels = [
      "Instagram",
      "YouTube",
      "LinkedIn",
      "Udemy",
      "Indicação de Amigo",
    ];

    discoveryChannels.forEach((channel) => {
      cy.contains("label", channel)
        .find("input")
        .check()
        .should("be.checked");
    });

    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/teste.pdf', {force: true})
  });
});
