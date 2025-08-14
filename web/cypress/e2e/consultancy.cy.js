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

    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
    .type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

    });


});
