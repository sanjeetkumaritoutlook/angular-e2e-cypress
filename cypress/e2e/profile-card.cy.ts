describe('Profile Card Grid', () => {
  it('should display 12 profile cards', () => {
    // Visit Angular app
    cy.visit('http://localhost:4200/profile');

    // ✅ Check if heading is visible
    cy.contains('User Profiles').should('be.visible');

    // ✅ Check total number of profile cards (12)
    cy.get('.profile-card').should('have.length', 10);

    // ✅ Verify content inside first card
    cy.get('.profile-card').first().should('contain', 'Leanne Graham');
  });
});
