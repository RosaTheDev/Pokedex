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
    cy.get('.pokeball').click()
    cy.url().should('include', '/pokemon')
    cy.get('.poke-container')
    cy.get(':nth-child(6) > .pokeball').click()

  })

  it('Should view favorited pokemon', () => {
    cy.get('.pokeball')
    cy.get('.pokeball').click()
    cy.get('.poke-container')
    cy.get(':nth-child(6) > .pokeball').click()
    cy.get('.pokedex').click()
    cy.url().should('include', '/favoritePokemon')
    cy.get('.pokemon-card')
    .contains('p', 'Name: charizard')
  })

  it('Should delete the favorited pokemon', () => {
    cy.get('.pokeball')
    cy.get('.pokeball').click()
    cy.get('.poke-container')
    cy.get(':nth-child(6) > .pokeball').click()
    cy.get('.pokedex').click()
    cy.get('.pokemon-card')
    .contains('p', 'Name: charizard')
    cy.get('.deleteThatPokemon').click()
    cy.contains('h1', 'Theres no pokemon in your pokedex!')
  })

  it('Should visit the error page', () => {
    cy.visit('http://localhost:3000/jkfdjsahf')
    cy.contains('.error-text', 'I\'m sorry but the page you are looking for is not found')
    cy.get('.error-image')
  })

  it('Should visit the error page if in the pokemon page', () => {
    cy.visit('http://localhost:3000/pokemonjkfdjsahf')
    cy.contains('.error-text', 'I\'m sorry but the page you are looking for is not found')
    cy.get('.error-image')
  })
  it('Should visit the error page if in the favorite pokemon page', () => {
    cy.visit('http://localhost:3000//favoritePokemonjkfdjsahf')
    cy.contains('.error-text', 'I\'m sorry but the page you are looking for is not found')
    cy.get('.error-image')
  })
});