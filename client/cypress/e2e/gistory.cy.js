describe('Gistory App', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Gistory');
    cy.contains('Your Github Timeline Viewer');
  });
  it('user can search', () => {
    cy.get('#username-input').type('johnmal-dev');
    cy.get('#search-button').click();
    cy.wait(3500)
    cy.contains('johnmal-dev');
  });
  // it('shows error if username does not exist', () => {
  //   cy.get('#username-input').type('adsfdagadgasdfafdsga');
  //   cy.get('#search-button').click();
  //   cy.contains('Error');
  // });
  it('user repos', () => {
    beforeEach(() => {
      cy.get('#username-input').type('johnmal-dev');
      cy.get('#search-button').click();
    });
    it('contains the gistory repo', () => {
      cy.contains('gistory')
    })
  });
});
