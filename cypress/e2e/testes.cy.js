describe('Login', () => {

  it('Não deve realizar login com senha incorreta', () => {
    cy.visit('https://qa-recorder.com/auth');

    cy.get('#email')
      .type('RaquelSottoriva@gmail.com')
      .should('have.value', 'RaquelSottoriva@gmail.com');

    cy.get('#password')
      .type('senhaErrada123')
      .should('have.value', 'senhaErrada123');

    cy.get('.text-primary-foreground').click();

    cy.url().should('include', '/auth');

    cy.contains('Invalid login credentials').should('be.visible');
  });


  it('Não deve realizar login com e-mail inválido', () => {
    cy.visit('https://qa-recorder.com/auth');

    cy.get('#email')
      .type('email_invalido@teste')
      .should('have.value', 'email_invalido@teste');

    cy.get('#password')
      .type('W2e3r4t5.')
      .should('have.value', 'W2e3r4t5.');

    cy.get('.text-primary-foreground').click();

    cy.url().should('include', '/auth');

    cy.contains('Invalid login credentials').should('be.visible');
  });

  it('Não deve permitir cadastro com dados inválidos', () => {

    cy.visit('https://qa-recorder.com/auth');

    cy.get('.text-blue-600').click()
    cy.get('#fullName')
      .type('aa1')
      .should('have.value', 'aa1');

    cy.get('#email')
      .type('aa@q')
      .should('have.value', 'aa@q');

    cy.get('#password')
      .type('teste1')
      .should('have.value', 'teste1');

    cy.get('#confirmPassword')
      .type('teste1')
      .should('have.value', 'teste1');

    cy.get('.text-primary-foreground').click()

    cy.contains('Conta criada com sucesso!').should('be.visible');          

    cy.url().should('include', '/auth');
  });

it('Deve realizar login com sucesso e validar o Portal do Usuário', () => {
  cy.visit('https://qa-recorder.com/auth');
  cy.url().should('include', '/auth');

  cy.get('#email')
    .type('RaquelSottoriva@gmail.com')
    .should('have.value', 'RaquelSottoriva@gmail.com');

  cy.get('#password')
    .type('W2e3r4t5.')
    .should('have.value', 'W2e3r4t5.');

  cy.get('.text-primary-foreground').click();

  cy.url().should('eq', 'https://qa-recorder.com/');

  cy.contains('Recorder').should('be.visible');
  cy.contains('Portal do Usuário').should('be.visible');
  cy.contains('Assinatura Premium ativa!').should('be.visible');
  cy.contains('Raquel Sottoriva').should('be.visible');
  cy.contains('Premium').should('be.visible');

  cy.contains('Home').should('be.visible');
  cy.contains('Construtor Visual').should('be.visible');
  cy.contains('Documentação').should('be.visible');

  cy.contains('Verificar Status').should('be.visible');
  cy.contains('Abrir Construtor Visual').should('be.visible');
  cy.contains('Sair').should('be.visible');
});

// it('Deve realizar logout com sucesso e proteger sessão', () => {
//   cy.contains('Sair').click();
//   cy.url().should('include', '/auth');
//   cy.contains('Login').should('be.visible');

//   cy.visit('https://qa-recorder.com/');
//   cy.url().should('include', '/auth');
// });
});