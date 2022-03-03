describe('Testing User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should visit the page', ()=> {
    cy.contains('h1', 'PokeDex For Beginners!')
    cy.get('.poke-trailer')
  })
});