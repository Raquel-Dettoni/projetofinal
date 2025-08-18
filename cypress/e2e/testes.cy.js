describe('Teste Automatizado', () => {

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

  it('Deve realizar login com sucesso', () => {
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
  });

});