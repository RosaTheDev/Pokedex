describe('Testing User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should visit the home page', () => {
    cy.contains('h1', 'PokeDex For Beginners!')
    cy.get('.poke-trailer')
    cy.get('.pokeball')
    cy.get('.pokeball-button > button')
    cy.get('.pokedex')
    cy.get('.pokedex-button > button')
  })

  it('Should view the pokemon list', () => {
    cy.get('.pokeball')
    cy.get('.pokeball-button > button').click()
    cy.get('.poke-container')
    cy.get(':nth-child(6) > .pokeball').click()
  })
});